import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';

const NAV_MENUS = [
  {
    id: 'about',
    path: '/intro',
    ko: '플랫폼 소개',
    en: 'About',
    icon: 'fa-circle-info',
  },
  {
    id: 'learn',
    ko: '학습',
    en: 'Learn',
    icon: 'fa-graduation-cap',
    children: [
      { path: '/resources', icon: 'fa-book-open', ko: '학습 자료', en: 'Resources', descKo: 'AI, 프로그래밍, 데이터 분석 이론', descEn: 'AI, programming, data analysis theory' },
      { path: '/prompt-practice', icon: 'fa-terminal', ko: '프롬프트 실습', en: 'Prompt Practice', descKo: '프롬프트 엔지니어링 기법 연습', descEn: 'Practice prompt engineering techniques' },
    ],
  },
  {
    id: 'community',
    ko: '커뮤니티',
    en: 'Community',
    icon: 'fa-users',
    children: [
      { path: '/community/board', icon: 'fa-comments', ko: '게시판', en: 'Board', descKo: '질문, 자료 공유, 자유 토론', descEn: 'Q&A, resource sharing, free discussion' },
      { path: '/community/board?category=notice', icon: 'fa-bullhorn', ko: '공지사항', en: 'Notices', descKo: '플랫폼 소식 및 업데이트', descEn: 'Platform news and updates' },
      { path: '/community/board?category=resource', icon: 'fa-folder-open', ko: '자료실', en: 'Resources', descKo: '학습 자료 및 팁 공유', descEn: 'Learning materials and tips sharing' },
    ],
  },
];

export default function Navbar() {
  const { mode, toggleTheme, colorTheme, setColorTheme, COLOR_OPTIONS } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const { isLoggedIn, isAdmin, user, profile, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const colorPickerRef = useRef(null);
  const userMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (colorPickerRef.current && !colorPickerRef.current.contains(e.target)) setShowColorPicker(false);
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) setShowUserMenu(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const themeIconClass = mode === 'auto' ? 'fa-circle-half-stroke' : mode === 'light' ? 'fa-sun' : 'fa-moon';
  const displayName = profile?.display_name || user?.user_metadata?.full_name || user?.email?.split('@')[0] || '';
  const avatarLetter = displayName.charAt(0).toUpperCase();
  const isKo = language === 'ko';

  async function handleSignOut() {
    await signOut();
    navigate('/');
  }

  function isMenuActive(menu) {
    if (menu.path) return location.pathname === menu.path;
    if (menu.children) return menu.children.some(c => location.pathname.startsWith(c.path.split('?')[0]));
    return false;
  }

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            <span className="logo-teaching">Open</span>
            <span className="logo-ai">Claw</span>
          </Link>

          <ul className="nav-links">
            {NAV_MENUS.map(menu => (
              <li key={menu.id} className="nav-item">
                {menu.children ? (
                  <>
                    <button className={`nav-link ${isMenuActive(menu) ? 'active' : ''}`}>
                      <i className={`fa-solid ${menu.icon}`} style={{ fontSize: 13 }} />
                      {isKo ? menu.ko : menu.en}
                      <i className="fa-solid fa-chevron-down arrow" />
                    </button>
                    <ul className="dropdown-menu">
                      {menu.children.map(child => (
                        <li key={child.path}>
                          <Link to={child.path} className="dropdown-item">
                            <span className="icon"><i className={`fa-solid ${child.icon}`} /></span>
                            <div>
                              <div style={{ fontWeight: 600, marginBottom: 2 }}>
                                {isKo ? child.ko : child.en}
                              </div>
                              <div style={{ fontSize: 12, color: 'var(--text-light)' }}>
                                {isKo ? child.descKo : child.descEn}
                              </div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link to={menu.path} className={`nav-link ${isMenuActive(menu) ? 'active' : ''}`}>
                    <i className={`fa-solid ${menu.icon}`} style={{ fontSize: 13 }} />
                    {isKo ? menu.ko : menu.en}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <div className="color-picker-wrapper" ref={colorPickerRef}>
              <button className="color-picker-btn" onClick={() => setShowColorPicker(!showColorPicker)} title="Color Theme">
                <div className="color-dot-preview" style={{ background: COLOR_OPTIONS.find(c => c.name === colorTheme)?.color }} />
              </button>
              <div className={`color-picker-dropdown ${showColorPicker ? 'show' : ''}`}>
                {COLOR_OPTIONS.map(opt => (
                  <button
                    key={opt.name}
                    className={`color-option ${colorTheme === opt.name ? 'active' : ''}`}
                    style={{ background: opt.color }}
                    onClick={() => { setColorTheme(opt.name); setShowColorPicker(false); }}
                    title={opt.name}
                  />
                ))}
              </div>
            </div>

            <button className="theme-toggle" onClick={toggleTheme} title={mode}>
              <i className={`fa-solid ${themeIconClass}`} />
            </button>

            <button className="lang-toggle" onClick={toggleLanguage}>
              {language === 'ko' ? 'EN' : 'KO'}
            </button>

            {isLoggedIn ? (
              <div className="user-menu-wrapper" ref={userMenuRef}>
                <button className="user-avatar-btn" onClick={() => setShowUserMenu(!showUserMenu)}>
                  {profile?.avatar_url ? <img src={profile.avatar_url} alt="" /> : avatarLetter}
                </button>
                <div className={`user-menu-dropdown ${showUserMenu ? 'show' : ''}`}>
                  <div className="user-menu-header">
                    <div className="user-menu-name">{displayName}</div>
                    <div className="user-menu-email">{user?.email}</div>
                  </div>
                  {isAdmin && (
                    <Link to="/admin" className="user-menu-item" onClick={() => setShowUserMenu(false)}>
                      <i className="fa-solid fa-shield-halved" /> {t('nav.admin')}
                    </Link>
                  )}
                  <button className="user-menu-item danger" onClick={handleSignOut}>
                    <i className="fa-solid fa-right-from-bracket" /> {t('nav.logout')}
                  </button>
                </div>
              </div>
            ) : (
              <div className="nav-auth-group">
                <Link to="/login" className="nav-auth-btn nav-login-btn">
                  <i className="fa-solid fa-right-to-bracket" /> {t('nav.login')}
                </Link>
                <Link to="/register" className="nav-auth-btn nav-register-btn">
                  {t('nav.register')}
                </Link>
              </div>
            )}

            <button
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {NAV_MENUS.map(menu => (
            <li key={menu.id}>
              {menu.children ? (
                <>
                  <button
                    className={`mobile-nav-link mobile-dropdown-toggle ${openMobileDropdown === menu.id ? 'open' : ''}`}
                    onClick={() => setOpenMobileDropdown(openMobileDropdown === menu.id ? null : menu.id)}
                  >
                    <span>
                      <i className={`fa-solid ${menu.icon}`} style={{ marginRight: 8, fontSize: 14 }} />
                      {isKo ? menu.ko : menu.en}
                    </span>
                    <i className={`fa-solid fa-chevron-down mobile-arrow ${openMobileDropdown === menu.id ? 'rotated' : ''}`} />
                  </button>
                  {openMobileDropdown === menu.id && (
                    <ul className="mobile-dropdown-items">
                      {menu.children.map(child => (
                        <li key={child.path}>
                          <Link to={child.path} className="mobile-dropdown-item">
                            <i className={`fa-solid ${child.icon}`} style={{ marginRight: 8, width: 16, textAlign: 'center' }} />
                            {isKo ? child.ko : child.en}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link to={menu.path} className="mobile-nav-link">
                  <i className={`fa-solid ${menu.icon}`} style={{ marginRight: 8, fontSize: 14 }} />
                  {isKo ? menu.ko : menu.en}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="mobile-menu-actions">
          {isLoggedIn ? (
            <button className="btn btn-primary btn-sm" onClick={handleSignOut}>
              <i className="fa-solid fa-right-from-bracket" /> {t('nav.logout')}
            </button>
          ) : (
            <>
              <Link to="/login" className="btn btn-primary btn-sm">{t('nav.login')}</Link>
              <Link to="/register" className="btn btn-secondary btn-sm">{t('nav.register')}</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
