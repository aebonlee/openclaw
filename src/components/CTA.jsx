import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="home-cta-section">
      <div className="container">
        <h2>{t('cta.title')}</h2>
        <p>{t('cta.description')}</p>
        <Link to="/register" className="btn btn-primary btn-lg">{t('cta.button')}</Link>
      </div>
    </section>
  );
}
