import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useToast } from '../contexts/ToastContext';
import { resetPassword } from '../utils/auth';
import SEOHead from '../components/SEOHead';

export default function ForgotPassword() {
  const { t } = useLanguage();
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const { error } = await resetPassword(email);
    setLoading(false);
    if (error) { toast.error(error.message); return; }
    setSent(true);
    toast.success(t('auth.resetSent'));
  }

  return (
    <div className="auth-page">
      <SEOHead title={t('auth.forgotTitle')} path="/forgot-password" />
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-logo"><span style={{ color: 'var(--primary-blue)' }}>Open</span>Claw</div>
            <h1 className="auth-title">{t('auth.forgotTitle')}</h1>
          </div>

          {sent ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <i className="fa-solid fa-envelope-circle-check" style={{ fontSize: 48, color: 'var(--primary-blue)', marginBottom: 16, display: 'block' }} />
              <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>
                {t('auth.resetSent')}
              </p>
              <Link to="/login" className="btn btn-primary" style={{ width: '100%' }}>
                {t('auth.loginBtn')}
              </Link>
            </div>
          ) : (
            <form className="auth-form" onSubmit={handleSubmit}>
              <input className="form-input" type="email" placeholder={t('auth.email')} value={email} onChange={e => setEmail(e.target.value)} required />
              <button type="submit" className="auth-submit-btn" disabled={loading}>
                {loading ? '...' : t('auth.forgotBtn')}
              </button>
            </form>
          )}

          <div className="auth-footer">
            <Link to="/login">{t('auth.loginBtn')}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
