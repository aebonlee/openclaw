import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import SEOHead from '../../components/SEOHead';
import Pagination from '../../components/Pagination';
import { supabase } from '../../utils/supabase';

const CATEGORIES = [
  { id: 'all', ko: '전체', en: 'All' },
  { id: 'notice', ko: '공지', en: 'Notice' },
  { id: 'resource', ko: '자료', en: 'Resource' },
  { id: 'question', ko: '질문', en: 'Question' },
  { id: 'free', ko: '자유', en: 'Free' },
];

const PER_PAGE = 15;

export default function Board() {
  const { language, t } = useLanguage();
  const { isLoggedIn } = useAuth();
  const isKo = language === 'ko';
  const [searchParams, setSearchParams] = useSearchParams();

  const [posts, setPosts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [searchInput, setSearchInput] = useState(searchParams.get('search') || '');
  const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get('page') || '1'));

  useEffect(() => {
    fetchPosts();
  }, [category, search, currentPage]);

  async function fetchPosts() {
    setLoading(true);
    try {
      let query = supabase
        .from('teaching_board_posts')
        .select('id, title, category, author_name, created_at, view_count, comment_count', { count: 'exact' })
        .order('created_at', { ascending: false });

      if (category !== 'all') {
        query = query.eq('category', category);
      }
      if (search) {
        query = query.ilike('title', `%${search}%`);
      }

      const from = (currentPage - 1) * PER_PAGE;
      query = query.range(from, from + PER_PAGE - 1);

      const { data, count, error } = await query;
      if (error) throw error;

      setPosts(data || []);
      setTotalCount(count || 0);
    } catch (err) {
      console.error('Failed to fetch posts:', err);
      setPosts([]);
      setTotalCount(0);
    } finally {
      setLoading(false);
    }
  }

  const handleCategoryChange = (catId) => {
    setCategory(catId);
    setCurrentPage(1);
    const params = {};
    if (catId !== 'all') params.category = catId;
    if (search) params.search = search;
    setSearchParams(params);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchInput);
    setCurrentPage(1);
    const params = {};
    if (category !== 'all') params.category = category;
    if (searchInput) params.search = searchInput;
    setSearchParams(params);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const params = {};
    if (category !== 'all') params.category = category;
    if (search) params.search = search;
    if (page > 1) params.page = page.toString();
    setSearchParams(params);
    window.scrollTo(0, 0);
  };

  const totalPages = Math.ceil(totalCount / PER_PAGE);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diff = now - date;
    if (diff < 86400000) {
      const hours = Math.floor(diff / 3600000);
      if (hours < 1) return isKo ? '방금 전' : 'Just now';
      return isKo ? `${hours}시간 전` : `${hours}h ago`;
    }
    return date.toLocaleDateString(isKo ? 'ko-KR' : 'en-US', { month: 'short', day: 'numeric' });
  };

  const getCategoryBadge = (cat) => {
    const cls = `board-category-badge board-category-${cat}`;
    const label = CATEGORIES.find(c => c.id === cat);
    return <span className={cls}>{isKo ? label?.ko : label?.en}</span>;
  };

  return (
    <div className="edu-hub-page">
      <SEOHead
        title={t('community.title')}
        description={isKo ? 'OpenClaw 커뮤니티 게시판' : 'OpenClaw Community Board'}
        path="/community/board"
      />

      <div className="edu-hub-hero">
        <div className="container">
          <h1>
            <i className="fa-solid fa-users" style={{ marginRight: 12 }} />
            {t('community.title')}
          </h1>
          <p>{isKo ? '함께 배우고 성장하는 OpenClaw 학습 커뮤니티' : 'OpenClaw learning community - learn and grow together'}</p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: 60 }}>

        {/* Category Filters */}
        <div className="board-category-filters" style={{ marginTop: 20 }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`board-category-filter-btn ${category === cat.id ? 'active' : ''}`}
              onClick={() => handleCategoryChange(cat.id)}
            >
              {isKo ? cat.ko : cat.en}
            </button>
          ))}
        </div>

        {/* Search & Write */}
        <div className="board-filters">
          <form className="board-search" onSubmit={handleSearch}>
            <span className="search-icon"><i className="fa-solid fa-search" /></span>
            <input
              type="text"
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
              placeholder={t('community.search')}
            />
          </form>
          {isLoggedIn && (
            <Link to="/community/board/write" className="board-write-btn">
              <i className="fa-solid fa-pen" />
              {t('community.writePost')}
            </Link>
          )}
        </div>

        {/* Board List */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: 60 }}>
            <div className="loading-spinner" />
          </div>
        ) : posts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 60, color: 'var(--text-light)' }}>
            <i className="fa-solid fa-inbox" style={{ fontSize: 32, marginBottom: 12 }} />
            <p>{t('community.noResults')}</p>
          </div>
        ) : (
          <div className="board-list">
            {posts.map(post => (
              <Link
                key={post.id}
                to={`/community/board/${post.id}`}
                className="board-card"
              >
                <div>
                  <div className="board-card-title">
                    {getCategoryBadge(post.category)}
                    {post.title}
                  </div>
                  <div className="board-card-meta">
                    <span>{post.author_name || (isKo ? '익명' : 'Anonymous')}</span>
                    <span>{formatDate(post.created_at)}</span>
                  </div>
                </div>
                <div className="board-card-stats">
                  <span>
                    <i className="fa-regular fa-eye" style={{ marginRight: 4 }} />
                    {post.view_count || 0}
                  </span>
                  <span>
                    <i className="fa-regular fa-comment" style={{ marginRight: 4 }} />
                    {post.comment_count || 0}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div style={{ marginTop: 24 }}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}
