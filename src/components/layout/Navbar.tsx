import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';

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
  const [openDropdown, setOpenDropdown] = useState(null);
  const colorPickerRef = useRef(null);
  const userMenuRef = useRef(null);

  const isKo = language === 'ko';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
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

  async function handleSignOut() {
    await signOut();
    navigate('/');
  }

  const NAV_ITEMS = [
    { path: '/intro', ko: 'About', en: 'About' },
    {
      path: '/openclaw-guide', ko: 'OpenClaw', en: 'OpenClaw',
      children: [
        { path: '/openclaw-guide#overview', ko: '학습 개요', en: 'Overview', icon: 'fa-clipboard-list' },
        { path: '/openclaw-guide#slides', ko: '학습 자료 : PT', en: 'Slides : PT', icon: 'fa-file-pdf' },
        { path: '/openclaw-guide#architecture', ko: '시스템 구조', en: 'Architecture', icon: 'fa-sitemap' },
        { path: '/openclaw-guide#install', ko: '설치와 실행', en: 'Installation', icon: 'fa-download' },
        { path: '/openclaw-guide#onboarding', ko: '온보딩', en: 'Onboarding', icon: 'fa-play-circle' },
        { path: '/openclaw-guide#channels', ko: '채널 연결', en: 'Channels', icon: 'fa-comments' },
        { path: '/openclaw-guide#models', ko: '모델과 도구', en: 'Models & Tools', icon: 'fa-brain' },
        { path: '/openclaw-guide#security', ko: '보안과 권한', en: 'Security', icon: 'fa-shield-halved' },
        { path: '/openclaw-guide#operations', ko: '운영과 점검', en: 'Operations', icon: 'fa-wrench' },
      ],
    },
    { path: '/resources', ko: 'AI 학습자료', en: 'AI Resources' },
    { path: '/glossary', ko: 'AI 용어사전', en: 'AI Glossary' },
    { path: '/roadmap', ko: '학습 로드맵', en: 'Roadmap' },
    { path: '/ai-news', ko: 'AI 트렌드', en: 'AI Trends' },
    { path: '/community/board', ko: '커뮤니티', en: 'Community' },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            <span className="logo-teaching">Open</span>
            <span className="logo-ai">Claw</span>
          </Link>

          <ul className="nav-links">
            {NAV_ITEMS.map(item => {
              const showDesktopDropdown = item.children && item.path !== '/openclaw-guide';
              return (
                <li key={item.path} className="nav-item">
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname.startsWith(item.path.split('?')[0]) ? 'active' : ''}`}
                  >
                    {isKo ? item.ko : item.en}
                    {showDesktopDropdown && <i className="fa-solid fa-chevron-down arrow" />}
                  </Link>
                  {showDesktopDropdown && (
                    <ul className="dropdown-menu">
                      {item.children.map(child => (
                        <li key={child.path}>
                          <Link to={child.path} className="dropdown-item">
                            <i className={`fa-solid ${child.icon} icon`} />
                            {isKo ? child.ko : child.en}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
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
                  {t('nav.login')}
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
          {NAV_ITEMS.map(item => (
            <li key={item.path}>
              {item.children ? (
                <>
                  <button
                    className="mobile-nav-link mobile-dropdown-toggle"
                    onClick={() => setOpenDropdown(openDropdown === item.path ? null : item.path)}
                  >
                    {isKo ? item.ko : item.en}
                    <i className={`fa-solid fa-chevron-down mobile-arrow ${openDropdown === item.path ? 'rotated' : ''}`} />
                  </button>
                  {openDropdown === item.path && (
                    <ul className="mobile-dropdown-items">
                      {item.children.map(child => (
                        <li key={child.path}>
                          <Link to={child.path} className="mobile-dropdown-item">
                            <i className={`fa-solid ${child.icon}`} style={{ width: 18, fontSize: 12, opacity: 0.6 }} />
                            {isKo ? child.ko : child.en}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link to={item.path} className="mobile-nav-link">
                  {isKo ? item.ko : item.en}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="mobile-menu-actions">
          {isLoggedIn ? (
            <button className="btn btn-primary btn-sm" onClick={handleSignOut}>{t('nav.logout')}</button>
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
