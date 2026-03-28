import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import SEOHead from '../../components/SEOHead';
import { supabase } from '../../utils/supabase';

const CATEGORY_OPTIONS = [
  { value: 'free', ko: '자유', en: 'Free' },
  { value: 'question', ko: '질문', en: 'Question' },
  { value: 'resource', ko: '자료', en: 'Resource' },
  { value: 'notice', ko: '공지', en: 'Notice' },
];

export default function BoardWrite() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const editId = searchParams.get('edit');
  const { language, t } = useLanguage();
  const { user, isAdmin } = useAuth();
  const isKo = language === 'ko';

  const [category, setCategory] = useState('free');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(!!editId);

  useEffect(() => {
    if (editId) {
      fetchPost();
    }
  }, [editId]);

  async function fetchPost() {
    try {
      const { data, error } = await supabase
        .from('teaching_board_posts')
        .select('*')
        .eq('id', editId)
        .single();

      if (error) throw error;

      // Only allow editing own posts
      if (data.user_id !== user?.id) {
        navigate('/community/board');
        return;
      }

      setCategory(data.category || 'free');
      setTitle(data.title || '');
      setContent(data.content || '');
    } catch {
      navigate('/community/board');
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !content.trim() || submitting) return;

    setSubmitting(true);
    try {
      if (editId) {
        // Update existing post
        const { error } = await supabase
          .from('teaching_board_posts')
          .update({
            category,
            title: title.trim(),
            content: content.trim(),
            updated_at: new Date().toISOString(),
          })
          .eq('id', editId);

        if (error) throw error;
        navigate(`/community/board/${editId}`);
      } else {
        // Create new post
        const authorName = user?.user_metadata?.display_name || user?.email?.split('@')[0] || 'User';

        const { data, error } = await supabase
          .from('teaching_board_posts')
          .insert({
            category,
            title: title.trim(),
            content: content.trim(),
            user_id: user.id,
            author_name: authorName,
            views: 0,
            comment_count: 0,
          })
          .select('id')
          .single();

        if (error) throw error;
        navigate(`/community/board/${data.id}`);
      }
    } catch (err) {
      console.error('Failed to save post:', err);
      alert(isKo ? '저장에 실패했습니다.' : 'Failed to save.');
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className="board-write-page">
        <div className="container">
          <div style={{ textAlign: 'center', padding: 60 }}>
            <div className="loading-spinner" />
          </div>
        </div>
      </div>
    );
  }

  // Filter notice category to admin-only
  const availableCategories = isAdmin
    ? CATEGORY_OPTIONS
    : CATEGORY_OPTIONS.filter(c => c.value !== 'notice');

  return (
    <div className="board-write-page">
      <SEOHead
        title={editId ? (isKo ? '글 수정' : 'Edit Post') : t('community.writePost')}
        path="/community/board/write"
      />

      <div className="container">
        <form className="board-write-form" onSubmit={handleSubmit}>
          <h1>{editId ? (isKo ? '글 수정' : 'Edit Post') : t('community.writePost')}</h1>

          {/* Category */}
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 6, color: 'var(--text-primary)' }}>
              {isKo ? '카테고리' : 'Category'}
            </label>
            <select
              className="board-category-select"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              {availableCategories.map(cat => (
                <option key={cat.value} value={cat.value}>
                  {isKo ? cat.ko : cat.en}
                </option>
              ))}
            </select>
          </div>

          {/* Title */}
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 6, color: 'var(--text-primary)' }}>
              {isKo ? '제목' : 'Title'}
            </label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder={t('community.writeTitle')}
              style={{
                width: '100%', padding: '10px 14px', fontSize: 15,
                border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)',
                fontFamily: 'inherit', background: 'var(--bg-white)', color: 'var(--text-primary)'
              }}
              required
            />
          </div>

          {/* Content */}
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 6, color: 'var(--text-primary)' }}>
              {isKo ? '내용' : 'Content'}
            </label>
            <textarea
              value={content}
              onChange={e => setContent(e.target.value)}
              placeholder={t('community.writeContent')}
              style={{
                width: '100%', minHeight: 320, padding: '14px 16px', fontSize: 14,
                border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)',
                fontFamily: 'inherit', resize: 'vertical', lineHeight: 1.7,
                background: 'var(--bg-white)', color: 'var(--text-primary)'
              }}
              required
            />
            <p style={{ fontSize: 12, color: 'var(--text-light)', marginTop: 6 }}>
              {isKo ? '마크다운(Markdown) 문법을 지원합니다.' : 'Markdown syntax is supported.'}
            </p>
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
            <button
              type="button"
              onClick={() => navigate(-1)}
              style={{
                padding: '10px 24px', fontSize: 14, fontWeight: 500,
                border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)',
                background: 'var(--bg-white)', color: 'var(--text-secondary)',
                cursor: 'pointer', fontFamily: 'inherit'
              }}
            >
              {t('community.cancel')}
            </button>
            <button
              type="submit"
              className="board-write-btn"
              disabled={submitting || !title.trim() || !content.trim()}
              style={{ padding: '10px 32px', fontSize: 14 }}
            >
              {submitting
                ? (isKo ? '저장 중...' : 'Saving...')
                : (editId ? (isKo ? '수정 완료' : 'Update') : t('community.submit'))}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
