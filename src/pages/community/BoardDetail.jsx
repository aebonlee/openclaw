import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import SEOHead from '../../components/SEOHead';
import { supabase } from '../../utils/supabase';

const CATEGORY_LABELS = {
  notice: { ko: '공지', en: 'Notice' },
  resource: { ko: '자료', en: 'Resource' },
  question: { ko: '질문', en: 'Question' },
  free: { ko: '자유', en: 'Free' },
};

export default function BoardDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const { user, isLoggedIn } = useAuth();
  const isKo = language === 'ko';

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [prevPost, setPrevPost] = useState(null);
  const [nextPost, setNextPost] = useState(null);

  useEffect(() => {
    fetchPost();
    fetchComments();
    incrementViews();
  }, [id]);

  async function fetchPost() {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('teaching_board_posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setPost(data);

      // Fetch prev/next posts
      const [prevRes, nextRes] = await Promise.all([
        supabase.from('teaching_board_posts').select('id, title').lt('created_at', data.created_at).order('created_at', { ascending: false }).limit(1),
        supabase.from('teaching_board_posts').select('id, title').gt('created_at', data.created_at).order('created_at', { ascending: true }).limit(1),
      ]);
      setPrevPost(prevRes.data?.[0] || null);
      setNextPost(nextRes.data?.[0] || null);
    } catch (err) {
      console.error('Failed to fetch post:', err);
      navigate('/community/board');
    } finally {
      setLoading(false);
    }
  }

  async function fetchComments() {
    try {
      const { data } = await supabase
        .from('teaching_board_comments')
        .select('*')
        .eq('post_id', id)
        .order('created_at', { ascending: true });
      setComments(data || []);
    } catch {
      setComments([]);
    }
  }

  async function incrementViews() {
    await supabase.rpc('increment_view_count', { post_id: id }).catch(() => {});
  }

  async function handleAddComment(e) {
    e.preventDefault();
    if (!commentText.trim() || !user) return;

    try {
      const { error } = await supabase.from('teaching_board_comments').insert({
        post_id: id,
        author_id: user.id,
        author_name: user.user_metadata?.display_name || user.email?.split('@')[0] || 'User',
        content: commentText.trim(),
      });
      if (error) throw error;
      setCommentText('');
      fetchComments();
      // Increment comment count
      await supabase.from('teaching_board_posts')
        .update({ comment_count: (post?.comment_count || 0) + 1 })
        .eq('id', id);
    } catch (err) {
      console.error('Failed to add comment:', err);
    }
  }

  async function handleDeleteComment(commentId) {
    try {
      await supabase.from('teaching_board_comments').delete().eq('id', commentId);
      fetchComments();
    } catch (err) {
      console.error('Failed to delete comment:', err);
    }
  }

  async function handleDeletePost() {
    try {
      await supabase.from('teaching_board_posts').delete().eq('id', id);
      navigate('/community/board');
    } catch (err) {
      console.error('Failed to delete post:', err);
    }
  }

  if (loading) {
    return (
      <div className="board-detail-page">
        <div className="container">
          <div style={{ textAlign: 'center', padding: 60 }}>
            <div className="loading-spinner" />
          </div>
        </div>
      </div>
    );
  }

  if (!post) return null;

  const isOwner = user?.id === post.author_id;
  const catLabel = CATEGORY_LABELS[post.category];

  return (
    <div className="board-detail-page">
      <SEOHead
        title={post.title}
        description={post.content?.substring(0, 160)}
        path={`/community/board/${id}`}
      />

      <div className="container">
        <Link to="/community/board" style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontSize: 14, color: 'var(--text-light)', textDecoration: 'none', marginBottom: 16
        }}>
          <i className="fa-solid fa-arrow-left" />
          {t('common.back')}
        </Link>

        <div className="board-detail">
          {/* Header */}
          <div className="board-detail-header">
            <span className={`board-category-badge board-category-${post.category}`}>
              {isKo ? catLabel?.ko : catLabel?.en}
            </span>
            <h1 className="board-detail-title">{post.title}</h1>
            <div className="board-detail-meta">
              <span>{post.author_name || (isKo ? '익명' : 'Anonymous')}</span>
              <span>{new Date(post.created_at).toLocaleDateString(isKo ? 'ko-KR' : 'en-US', {
                year: 'numeric', month: 'long', day: 'numeric'
              })}</span>
              <span><i className="fa-regular fa-eye" style={{ marginRight: 4 }} />{post.view_count || 0}</span>
            </div>
          </div>

          {/* Body */}
          <div className="board-detail-body">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content || ''}
            </ReactMarkdown>
          </div>

          {/* Actions */}
          {isOwner && (
            <div className="board-actions">
              <Link to={`/community/board/write?edit=${id}`} className="btn-edit">
                <i className="fa-solid fa-pen" />
                {t('community.edit')}
              </Link>
              <button className="btn-delete" onClick={() => setShowDeleteModal(true)}>
                <i className="fa-solid fa-trash" />
                {t('community.delete')}
              </button>
            </div>
          )}

          {/* Prev/Next Navigation */}
          <div className="board-nav-posts">
            {nextPost ? (
              <Link to={`/community/board/${nextPost.id}`} className="board-nav-item">
                <span className="board-nav-label">{isKo ? '다음 글' : 'Next'} <i className="fa-solid fa-chevron-up" /></span>
                <span className="board-nav-title">{nextPost.title}</span>
              </Link>
            ) : (
              <div className="board-nav-item board-nav-empty">
                <span className="board-nav-label">{isKo ? '다음 글' : 'Next'}</span>
                <span className="board-nav-title-empty">{isKo ? '다음 글이 없습니다' : 'No next post'}</span>
              </div>
            )}
            {prevPost ? (
              <Link to={`/community/board/${prevPost.id}`} className="board-nav-item">
                <span className="board-nav-label">{isKo ? '이전 글' : 'Prev'} <i className="fa-solid fa-chevron-down" /></span>
                <span className="board-nav-title">{prevPost.title}</span>
              </Link>
            ) : (
              <div className="board-nav-item board-nav-empty">
                <span className="board-nav-label">{isKo ? '이전 글' : 'Prev'}</span>
                <span className="board-nav-title-empty">{isKo ? '이전 글이 없습니다' : 'No previous post'}</span>
              </div>
            )}
          </div>

          {/* Comments */}
          <div className="comments-section">
            <h3>
              {t('community.comments')} ({comments.length})
            </h3>

            {comments.map(comment => (
              <div key={comment.id} className="comment-item">
                <div className="comment-avatar">
                  {(comment.author_name || 'U').charAt(0).toUpperCase()}
                </div>
                <div className="comment-content">
                  <span className="comment-author">{comment.author_name || 'User'}</span>
                  <span className="comment-date">
                    {new Date(comment.created_at).toLocaleDateString(isKo ? 'ko-KR' : 'en-US', {
                      month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                    })}
                  </span>
                  {user?.id === comment.author_id && (
                    <button
                      className="comment-delete-btn"
                      onClick={() => handleDeleteComment(comment.id)}
                    >
                      {t('community.delete')}
                    </button>
                  )}
                  <div className="comment-text">{comment.content}</div>
                </div>
              </div>
            ))}

            {isLoggedIn ? (
              <form className="comment-form" onSubmit={handleAddComment}>
                <textarea
                  value={commentText}
                  onChange={e => setCommentText(e.target.value)}
                  placeholder={t('community.addComment')}
                />
                <button type="submit" className="board-write-btn" disabled={!commentText.trim()}>
                  {t('community.submit')}
                </button>
              </form>
            ) : (
              <p style={{ fontSize: 14, color: 'var(--text-light)', textAlign: 'center', padding: 16 }}>
                <Link to="/login" style={{ color: 'var(--primary-blue)' }}>
                  {isKo ? '로그인 후 댓글을 작성할 수 있습니다.' : 'Login to write comments.'}
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="board-confirm-overlay" onClick={() => setShowDeleteModal(false)}>
          <div className="board-confirm-modal" onClick={e => e.stopPropagation()}>
            <p>{t('community.confirmDelete')}</p>
            <div className="board-confirm-actions">
              <button className="board-confirm-cancel" onClick={() => setShowDeleteModal(false)}>
                {t('community.cancel')}
              </button>
              <button className="board-confirm-delete" onClick={handleDeletePost}>
                {t('community.delete')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
