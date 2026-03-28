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
    if (!email) return;
    setLoading(true);
    try {
      const { error } = await resetPassword(email);
      if (error) {
        toast.error(error.message);
      } else {
        setSent(true);
        toast.success(t('auth.resetSent'));
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-page">
      <SEOHead title={t('auth.forgotTitle')} path="/forgot-password" />
      <div className="container">
        <div className="auth-container">
          <div className="auth-card">
            <h1>{t('auth.forgotTitle')}</h1>

            {sent ? (
              <div className="auth-success">
                <i className="fa-solid fa-envelope-circle-check" />
                <p>{t('auth.resetSent')}</p>
                <Link to="/login" className="btn btn-primary btn-block">
                  {t('auth.loginTitle')}
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="auth-form">
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
                <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                  {loading ? t('common.loading') : t('auth.forgotBtn')}
                </button>
              </form>
            )}

            <div className="auth-footer">
              <Link to="/login">{t('auth.loginTitle')}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
