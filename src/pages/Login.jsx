import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useToast } from '../contexts/ToastContext';
import { signInWithGoogle, signInWithKakao, signInWithEmail } from '../utils/auth';
import SEOHead from '../components/SEOHead';

export default function Login() {
  const { isLoggedIn } = useAuth();
  const { t } = useLanguage();
  const toast = useToast();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Redirect if already logged in
  if (isLoggedIn) {
    navigate('/', { replace: true });
    return null;
  }

  async function handleEmailLogin(e) {
    e.preventDefault();
    if (!email || !password) return;
    setLoading(true);
    try {
      const { error } = await signInWithEmail(email, password);
      if (error) {
        toast.error(error.message);
      } else {
        toast.success(t('auth.loginTitle') + ' OK');
        navigate('/');
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogle() {
    const { error } = await signInWithGoogle();
    if (error) toast.error(error.message);
  }

  async function handleKakao() {
    const { error } = await signInWithKakao();
    if (error) toast.error(error.message);
  }

  return (
    <div className="auth-page">
      <SEOHead title={t('auth.loginTitle')} path="/login" />
      <div className="container">
        <div className="auth-container">
          <div className="auth-card">
            <h1>{t('auth.loginTitle')}</h1>

            {/* Social Login */}
            <div className="social-login">
              <button className="social-btn social-btn-google" onClick={handleGoogle}>
                <i className="fa-brands fa-google" /> {t('auth.googleLogin')}
              </button>
              <button className="social-btn social-btn-kakao" onClick={handleKakao}>
                <i className="fa-solid fa-comment" /> {t('auth.kakaoLogin')}
              </button>
            </div>

            <div className="auth-divider">
              <span>{t('auth.or')}</span>
            </div>

            {/* Email Login Form */}
            <form onSubmit={handleEmailLogin} className="auth-form">
              <div className="form-group">
                <label htmlFor="email">{t('auth.email')}</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder={t('auth.email')}
                  required
                  autoComplete="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">{t('auth.password')}</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder={t('auth.password')}
                  required
                  autoComplete="current-password"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                {loading ? t('common.loading') : t('auth.loginBtn')}
              </button>
            </form>

            {/* Links */}
            <div className="auth-links">
              <Link to="/forgot-password">{t('auth.forgotPassword')}</Link>
            </div>
            <div className="auth-footer">
              <span>{t('auth.noAccount')}</span>{' '}
              <Link to="/register">{t('auth.registerTitle')}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
