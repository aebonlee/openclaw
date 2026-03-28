import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useToast } from '../contexts/ToastContext';
import { signUpWithEmail, signInWithGoogle, signInWithKakao } from '../utils/auth';
import SEOHead from '../components/SEOHead';

export default function Register() {
  const { t } = useLanguage();
  const toast = useToast();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleRegister(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error(t('auth.confirmPassword') + ' - mismatch');
      return;
    }
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }
    setLoading(true);
    try {
      const { error } = await signUpWithEmail(email, password, { full_name: name, display_name: name });
      if (error) {
        toast.error(error.message);
      } else {
        toast.success(t('auth.registerTitle') + ' OK');
        navigate('/login');
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
      <SEOHead title={t('auth.registerTitle')} path="/register" />
      <div className="container">
        <div className="auth-container">
          <div className="auth-card">
            <h1>{t('auth.registerTitle')}</h1>

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

            {/* Registration Form */}
            <form onSubmit={handleRegister} className="auth-form">
              <div className="form-group">
                <label htmlFor="name">{t('auth.name')}</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder={t('auth.name')}
                  required
                  autoComplete="name"
                />
              </div>
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
                  minLength={6}
                  autoComplete="new-password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">{t('auth.confirmPassword')}</label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  placeholder={t('auth.confirmPassword')}
                  required
                  autoComplete="new-password"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                {loading ? t('common.loading') : t('auth.registerBtn')}
              </button>
            </form>

            {/* Links */}
            <div className="auth-footer">
              <span>{t('auth.hasAccount')}</span>{' '}
              <Link to="/login">{t('auth.loginTitle')}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
