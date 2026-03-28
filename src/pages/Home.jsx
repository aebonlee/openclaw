import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import HeroCarousel from '../components/HeroCarousel';
import CTA from '../components/CTA';
import { LEARNING_PATHS } from '../config/site';

const WORKFLOW_STEPS = [
  { icon: 'fa-route', key: 'step1', descKey: 'step1desc' },
  { icon: 'fa-book-open', key: 'step2', descKey: 'step2desc' },
  { icon: 'fa-robot', key: 'step3', descKey: 'step3desc' },
  { icon: 'fa-file-export', key: 'step4', descKey: 'step4desc' },
];

const FEATURE_ITEMS = [
  { icon: 'fa-road', key: 'learning' },
  { icon: 'fa-laptop-code', key: 'practice' },
  { icon: 'fa-language', key: 'multilingual' },
  { icon: 'fa-users', key: 'community' },
];

const AI_PROVIDERS = [
  { name: 'ChatGPT', color: '#10A37F', desc: 'OpenAI GPT-4o' },
  { name: 'Claude', color: '#D97706', desc: 'Anthropic Claude 4' },
  { name: 'Gemini', color: '#4285F4', desc: 'Google Gemini 2.5' },
  { name: 'Genspark', color: '#8B5CF6', desc: 'Genspark AI' },
];

export default function Home() {
  const { language, t } = useLanguage();

  return (
    <>
      <SEOHead path="/" />

      <HeroCarousel />

      {/* Learning Paths Section */}
      <section className="home-tools-section">
        <div className="container">
          <h2 className="section-title">{t('nav.learningPaths')}</h2>
          <p className="section-subtitle">
            {language === 'ko'
              ? '관심 분야를 선택하고 체계적으로 학습하세요'
              : 'Choose your area of interest and learn systematically'}
          </p>
          <div className="tools-grid">
            {LEARNING_PATHS.map(path => (
              <Link
                key={path.id}
                to="/edu-hub"
                className="tool-card"
                style={{ '--tool-color': path.color }}
              >
                <div className="tool-icon" style={{ background: path.color }}>
                  <i className={`fa-solid ${path.icon}`} />
                </div>
                <h3>{language === 'ko' ? path.nameKo : path.nameEn}</h3>
                <p>{language === 'ko' ? path.descKo : path.descEn}</p>
                <div className="tool-topics">
                  {path.topics.map((topic, i) => (
                    <span key={i} className="topic-tag">{topic}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="home-workflow-section">
        <div className="container">
          <h2 className="section-title">{t('home.workflowTitle')}</h2>
          <p className="section-subtitle">{t('home.workflowSubtitle')}</p>
          <div className="workflow-steps">
            {WORKFLOW_STEPS.map((step, i) => (
              <div key={i} className="workflow-step">
                <div className="step-number">{i + 1}</div>
                <div className="step-icon">
                  <i className={`fa-solid ${step.icon}`} />
                </div>
                <h3>{t(`home.${step.key}`)}</h3>
                <p>{t(`home.${step.descKey}`)}</p>
                {i < WORKFLOW_STEPS.length - 1 && (
                  <div className="step-arrow">
                    <i className="fa-solid fa-arrow-right" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Providers Section */}
      <section className="home-providers-section">
        <div className="container">
          <h2 className="section-title">{t('home.providersTitle')}</h2>
          <p className="section-subtitle">{t('home.providersSubtitle')}</p>
          <div className="providers-grid">
            {AI_PROVIDERS.map(provider => (
              <div key={provider.name} className="provider-card" style={{ '--provider-color': provider.color }}>
                <div className="provider-icon" style={{ background: provider.color }}>
                  <i className="fa-solid fa-microchip" />
                </div>
                <h3>{provider.name}</h3>
                <span className="model-tag">{provider.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="home-features-section">
        <div className="container">
          <h2 className="section-title">{t('features.title')}</h2>
          <p className="section-subtitle">{t('features.subtitle')}</p>
          <div className="features-grid">
            {FEATURE_ITEMS.map(feat => (
              <div key={feat.key} className="feature-card">
                <div className="feature-icon">
                  <i className={`fa-solid ${feat.icon}`} />
                </div>
                <h3>{t(`features.${feat.key}.title`)}</h3>
                <p>{t(`features.${feat.key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="home-stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">{LEARNING_PATHS.length}</span>
              <span className="stat-label">{t('stats.paths')}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">42+</span>
              <span className="stat-label">{t('stats.courses')}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">{t('stats.providers')}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">{language === 'ko' ? '지원 언어' : 'Languages'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </>
  );
}
