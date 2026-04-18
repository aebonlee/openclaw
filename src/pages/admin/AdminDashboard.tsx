import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import SEOHead from '../../components/SEOHead';
import { supabase } from '../../utils/supabase';

const MENU_ITEMS = [
  { id: 'overview', icon: 'fa-chart-pie', ko: '대시보드', en: 'Dashboard' },
  { id: 'users', icon: 'fa-users', ko: '사용자 관리', en: 'User Management' },
  { id: 'posts', icon: 'fa-newspaper', ko: '게시물 관리', en: 'Post Management' },
  { id: 'content', icon: 'fa-book', ko: '콘텐츠 관리', en: 'Content Management' },
];

export default function AdminDashboard() {
  const { language } = useLanguage();
  const { user } = useAuth();
  const isKo = language === 'ko';

  const [activeMenu, setActiveMenu] = useState('overview');
  const [stats, setStats] = useState({
    users: 0,
    syllabi: 0,
    rubrics: 0,
    posts: 0,
  });
  const [recentUsers, setRecentUsers] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  async function fetchStats() {
    setLoading(true);
    try {
      const [usersRes, syllabiRes, rubricsRes, postsRes, recentUsersRes, recentPostsRes] = await Promise.all([
        supabase.from('user_profiles').select('id', { count: 'exact', head: true }).contains('visited_sites', [window.location.hostname]),
        supabase.from('generated_syllabi').select('id', { count: 'exact', head: true }),
        supabase.from('generated_rubrics').select('id', { count: 'exact', head: true }),
        supabase.from('openclaw_board_posts').select('id', { count: 'exact', head: true }),
        supabase.from('user_profiles').select('id, display_name, email, created_at, last_sign_in_at').contains('visited_sites', [window.location.hostname]).order('created_at', { ascending: false }).limit(10),
        supabase.from('openclaw_board_posts').select('id, title, category, author_name, created_at, views').order('created_at', { ascending: false }).limit(10),
      ]);

      setStats({
        users: usersRes.count || 0,
        syllabi: syllabiRes.count || 0,
        rubrics: rubricsRes.count || 0,
        posts: postsRes.count || 0,
      });

      setRecentUsers(recentUsersRes.data || []);
      setRecentPosts(recentPostsRes.data || []);
    } catch (err) {
      console.error('Failed to fetch admin stats:', err);
    } finally {
      setLoading(false);
    }
  }

  const statCards = [
    { label: { ko: '전체 사용자', en: 'Total Users' }, value: stats.users, icon: 'fa-users', color: '#4285F4' },
    { label: { ko: '강의계획서', en: 'Syllabi' }, value: stats.syllabi, icon: 'fa-calendar-days', color: '#10B981' },
    { label: { ko: '루브릭', en: 'Rubrics' }, value: stats.rubrics, icon: 'fa-table-cells', color: '#F59E0B' },
    { label: { ko: '게시물', en: 'Posts' }, value: stats.posts, icon: 'fa-newspaper', color: '#8B5CF6' },
  ];

  return (
    <div className="admin-layout">
      <SEOHead
        title={isKo ? '관리자 대시보드' : 'Admin Dashboard'}
        path="/admin"
      />

      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h3>{isKo ? '관리자' : 'ADMIN'}</h3>
        <ul className="admin-nav">
          {MENU_ITEMS.map(item => (
            <li key={item.id}>
              <button
                className={`admin-nav-item ${activeMenu === item.id ? 'active' : ''}`}
                onClick={() => setActiveMenu(item.id)}
                style={{ width: '100%', cursor: 'pointer', border: 'none' }}
              >
                <i className={`fa-solid ${item.icon}`} />
                {isKo ? item.ko : item.en}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <div className="admin-main">
        <div className="admin-header">
          <h1>
            {activeMenu === 'overview' && (isKo ? '대시보드' : 'Dashboard')}
            {activeMenu === 'users' && (isKo ? '사용자 관리' : 'User Management')}
            {activeMenu === 'posts' && (isKo ? '게시물 관리' : 'Post Management')}
            {activeMenu === 'content' && (isKo ? '콘텐츠 관리' : 'Content Management')}
          </h1>
          <span style={{ fontSize: 13, color: 'var(--text-light)' }}>
            {user?.email}
          </span>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: 60 }}>
            <div className="loading-spinner" />
          </div>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="admin-stats">
              {statCards.map((card, idx) => (
                <div key={idx} className="admin-stat-card">
                  <div className="admin-stat-label">
                    <i className={`fa-solid ${card.icon}`} style={{ color: card.color, marginRight: 6 }} />
                    {isKo ? card.label.ko : card.label.en}
                  </div>
                  <div className="admin-stat-value">{card.value.toLocaleString()}</div>
                </div>
              ))}
            </div>

            {/* Overview */}
            {activeMenu === 'overview' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                {/* Recent Users */}
                <div className="admin-table-wrapper">
                  <div style={{
                    padding: '16px 20px', borderBottom: '1px solid var(--border-light)',
                    fontWeight: 600, fontSize: 15, color: 'var(--text-primary)'
                  }}>
                    <i className="fa-solid fa-users" style={{ marginRight: 8, color: '#4285F4' }} />
                    {isKo ? '최근 가입 사용자' : 'Recent Users'}
                  </div>
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>{isKo ? '이름' : 'Name'}</th>
                        <th>{isKo ? '이메일' : 'Email'}</th>
                        <th>{isKo ? '가입일' : 'Joined'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentUsers.length === 0 ? (
                        <tr>
                          <td colSpan={3} style={{ textAlign: 'center', color: 'var(--text-light)', padding: 24 }}>
                            {isKo ? '데이터가 없습니다' : 'No data'}
                          </td>
                        </tr>
                      ) : (
                        recentUsers.map(u => (
                          <tr key={u.id}>
                            <td>{u.display_name || '-'}</td>
                            <td>{u.email || '-'}</td>
                            <td>{u.created_at ? new Date(u.created_at).toLocaleDateString() : '-'}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Recent Posts */}
                <div className="admin-table-wrapper">
                  <div style={{
                    padding: '16px 20px', borderBottom: '1px solid var(--border-light)',
                    fontWeight: 600, fontSize: 15, color: 'var(--text-primary)'
                  }}>
                    <i className="fa-solid fa-newspaper" style={{ marginRight: 8, color: '#8B5CF6' }} />
                    {isKo ? '최근 게시물' : 'Recent Posts'}
                  </div>
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>{isKo ? '제목' : 'Title'}</th>
                        <th>{isKo ? '작성자' : 'Author'}</th>
                        <th>{isKo ? '조회' : 'Views'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentPosts.length === 0 ? (
                        <tr>
                          <td colSpan={3} style={{ textAlign: 'center', color: 'var(--text-light)', padding: 24 }}>
                            {isKo ? '데이터가 없습니다' : 'No data'}
                          </td>
                        </tr>
                      ) : (
                        recentPosts.map(p => (
                          <tr key={p.id}>
                            <td style={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              {p.title}
                            </td>
                            <td>{p.author_name || '-'}</td>
                            <td>{p.view_count || 0}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Users Management */}
            {activeMenu === 'users' && (
              <div className="admin-table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>{isKo ? '이름' : 'Name'}</th>
                      <th>{isKo ? '이메일' : 'Email'}</th>
                      <th>{isKo ? '가입일' : 'Joined'}</th>
                      <th>{isKo ? '마지막 로그인' : 'Last Login'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentUsers.map((u, idx) => (
                      <tr key={u.id}>
                        <td>{idx + 1}</td>
                        <td>{u.display_name || '-'}</td>
                        <td>{u.email || '-'}</td>
                        <td>{u.created_at ? new Date(u.created_at).toLocaleDateString() : '-'}</td>
                        <td>{u.last_sign_in_at ? new Date(u.last_sign_in_at).toLocaleDateString() : '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Posts Management */}
            {activeMenu === 'posts' && (
              <div className="admin-table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>{isKo ? '카테고리' : 'Category'}</th>
                      <th>{isKo ? '제목' : 'Title'}</th>
                      <th>{isKo ? '작성자' : 'Author'}</th>
                      <th>{isKo ? '작성일' : 'Date'}</th>
                      <th>{isKo ? '조회' : 'Views'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentPosts.map((p, idx) => (
                      <tr key={p.id}>
                        <td>{idx + 1}</td>
                        <td>
                          <span className={`board-category-badge board-category-${p.category}`}>
                            {p.category}
                          </span>
                        </td>
                        <td style={{ maxWidth: 240, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {p.title}
                        </td>
                        <td>{p.author_name || '-'}</td>
                        <td>{new Date(p.created_at).toLocaleDateString()}</td>
                        <td>{p.view_count || 0}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Content Management */}
            {activeMenu === 'content' && (
              <div style={{
                padding: 40, textAlign: 'center',
                background: 'var(--bg-white)', borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-light)'
              }}>
                <i className="fa-solid fa-book" style={{ fontSize: 40, color: 'var(--text-light)', marginBottom: 16 }} />
                <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8 }}>
                  {isKo ? '콘텐츠 관리' : 'Content Management'}
                </h3>
                <p style={{ fontSize: 14, color: 'var(--text-light)' }}>
                  {isKo
                    ? '학습 콘텐츠 관리 기능은 향후 업데이트될 예정입니다.'
                    : 'Content management features will be available in a future update.'}
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
