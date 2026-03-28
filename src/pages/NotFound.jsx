import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

export default function NotFound() {
  const { language } = useLanguage();

  return (
    <div className="auth-page">
      <SEOHead title="404" path="/404" />
      <div className="container">
        <div className="auth-container">
          <div className="auth-card" style={{ textAlign: 'center' }}>
            <div className="not-found-icon">
              <i className="fa-solid fa-triangle-exclamation" style={{ fontSize: '4rem', color: 'var(--primary)' }} />
            </div>
            <h1 style={{ fontSize: '5rem', margin: '0.5rem 0', color: 'var(--primary)' }}>404</h1>
            <h2>
              {language === 'ko'
                ? '페이지를 찾을 수 없습니다'
                : 'Page Not Found'}
            </h2>
            <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
              {language === 'ko'
                ? '요청하신 페이지가 존재하지 않거나 이동되었습니다.'
                : 'The page you are looking for does not exist or has been moved.'}
            </p>
            <Link to="/" className="btn btn-primary btn-lg">
              {language === 'ko' ? '홈으로 돌아가기' : 'Back to Home'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
