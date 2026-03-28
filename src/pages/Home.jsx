import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import HeroCarousel from '../components/HeroCarousel';

const MENU_CARDS = [
  {
    path: '/openclaw-guide',
    icon: 'fa-paw',
    color: '#1B3A6B',
    ko: { title: 'OpenClaw', desc: 'OpenClaw의 구조와 설치부터 보안·운영까지 전문 강의 콘텐츠' },
    en: { title: 'OpenClaw', desc: 'Professional lecture content from architecture to security & operations' },
  },
  {
    path: '/resources',
    icon: 'fa-book-open',
    color: '#5B21B6',
    ko: { title: 'AI 학습자료', desc: 'AI 이론, 프로그래밍, 데이터 분석, 프롬프트 학습 자료' },
    en: { title: 'AI Resources', desc: 'AI theory, programming, data analysis, and prompt learning materials' },
  },
  {
    path: '/glossary',
    icon: 'fa-spell-check',
    color: '#065F46',
    ko: { title: 'AI 용어사전', desc: '100개 핵심 용어를 카테고리별로 검색하고 학습' },
    en: { title: 'AI Glossary', desc: '100 key terms organized by category with search' },
  },
  {
    path: '/roadmap',
    icon: 'fa-route',
    color: '#92400E',
    ko: { title: '학습 로드맵', desc: 'AI/ML, 데이터사이언스, 웹개발, 프롬프트 단계별 경로' },
    en: { title: 'Learning Roadmap', desc: 'Step-by-step paths for AI/ML, Data Science, Web Dev, Prompts' },
  },
  {
    path: '/ai-news',
    icon: 'fa-newspaper',
    color: '#1E3A5F',
    ko: { title: 'AI 트렌드', desc: '최신 AI 동향, 모델 업데이트, 개발 도구, 산업 뉴스' },
    en: { title: 'AI Trends', desc: 'Latest AI trends, model updates, dev tools, and industry news' },
  },
  {
    path: '/community/board',
    icon: 'fa-users',
    color: '#7C3AED',
    ko: { title: '커뮤니티', desc: '질문, 자료 공유, 토론을 통해 함께 성장하는 공간' },
    en: { title: 'Community', desc: 'A space to grow together through Q&A, sharing, and discussion' },
  },
];

const STATS = [
  { value: '8', icon: 'fa-layer-group', ko: '학습 섹션', en: 'Sections' },
  { value: '100+', icon: 'fa-spell-check', ko: 'AI 용어', en: 'AI Terms' },
  { value: '40', icon: 'fa-gem', ko: '프롬프트 예제', en: 'Prompt Examples' },
  { value: '4', icon: 'fa-route', ko: '학습 트랙', en: 'Learning Tracks' },
  { value: '16', icon: 'fa-book-open', ko: '학습 주제', en: 'Topics' },
  { value: '2', icon: 'fa-language', ko: '지원 언어', en: 'Languages' },
];

const WORKFLOW_STEPS = [
  { icon: 'fa-play-circle', ko: '학습 시작', en: 'Start Learning', descKo: '관심 분야를 선택하고 학습을 시작하세요.', descEn: 'Choose your area of interest and start learning.' },
  { icon: 'fa-book-open', ko: '자료 학습', en: 'Study Materials', descKo: '체계적인 커리큘럼으로 핵심 개념을 학습합니다.', descEn: 'Study core concepts through structured curriculum.' },
  { icon: 'fa-terminal', ko: '프롬프트 실습', en: 'Prompt Practice', descKo: '프롬프트 엔지니어링 기법을 직접 실습합니다.', descEn: 'Practice prompt engineering techniques hands-on.' },
  { icon: 'fa-users', ko: '커뮤니티 공유', en: 'Community Share', descKo: '학습 경험과 자료를 커뮤니티에서 공유합니다.', descEn: 'Share your learning experience in the community.' },
];

export default function Home() {
  const { language, t } = useLanguage();
  const isKo = language === 'ko';

  return (
    <>
      <SEOHead path="/" />

      <HeroCarousel />

      {/* Quick Navigation Cards */}
      <section style={{ padding: '64px 0', background: 'var(--bg-white)' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: 6, textAlign: 'left', fontSize: 28 }}>
            {isKo ? '무엇을 학습하시겠습니까?' : 'What would you like to learn?'}
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 36, textAlign: 'left', margin: '0 0 36px 0' }}>
            {isKo ? 'OpenClaw의 모든 학습 콘텐츠를 탐색하세요' : 'Explore all learning content on OpenClaw'}
          </p>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20,
          }}>
            {MENU_CARDS.map(card => (
              <Link
                key={card.path}
                to={card.path}
                style={{
                  textDecoration: 'none', color: 'inherit',
                  padding: 28, borderRadius: 16,
                  border: '1px solid var(--border-light)',
                  background: 'var(--bg-white)',
                  display: 'flex', alignItems: 'flex-start', gap: 16,
                  transition: 'all 0.2s ease',
                  position: 'relative', overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.08)';
                  e.currentTarget.style.borderColor = card.color;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                  background: `${card.color}12`, display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                }}>
                  <i className={`fa-solid ${card.icon}`} style={{ fontSize: 20, color: card.color }} />
                </div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>
                    {isKo ? card.ko.title : card.en.title}
                  </h3>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {isKo ? card.ko.desc : card.en.desc}
                  </p>
                </div>
                <i className="fa-solid fa-arrow-right" style={{
                  position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)',
                  fontSize: 14, color: 'var(--text-light)', opacity: 0.4,
                }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '48px 0', background: 'var(--bg-light-gray)' }}>
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16,
          }}>
            {STATS.map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <i className={`fa-solid ${stat.icon}`} style={{
                  fontSize: 20, color: 'var(--primary-blue)', marginBottom: 8, display: 'block',
                }} />
                <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--primary-blue)', lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 6 }}>
                  {isKo ? stat.ko : stat.en}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section style={{ padding: '64px 0', background: 'var(--bg-white)' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: 6, textAlign: 'left' }}>
            {isKo ? '학습 프로세스' : 'Learning Process'}
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 36, textAlign: 'left', margin: '0 0 36px 0' }}>
            {isKo ? '4단계로 완성하는 체계적 학습' : 'Systematic learning in 4 steps'}
          </p>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
            position: 'relative',
          }}>
            {WORKFLOW_STEPS.map((step, i) => (
              <div key={i} style={{ textAlign: 'center', position: 'relative', padding: '0 12px' }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%', margin: '0 auto 16px',
                  background: 'var(--primary-blue)', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22, position: 'relative', zIndex: 1,
                }}>
                  <i className={`fa-solid ${step.icon}`} />
                </div>
                {i < WORKFLOW_STEPS.length - 1 && (
                  <div style={{
                    position: 'absolute', top: 28, left: 'calc(50% + 28px)', right: 'calc(-50% + 28px)',
                    height: 2, background: 'var(--border-light)', zIndex: 0,
                  }} />
                )}
                <div style={{
                  fontSize: 11, fontWeight: 700, color: 'var(--primary-blue)',
                  background: 'rgba(27,58,107,0.06)', display: 'inline-block',
                  padding: '2px 10px', borderRadius: 10, marginBottom: 10,
                }}>
                  STEP {i + 1}
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>
                  {isKo ? step.ko : step.en}
                </h3>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {isKo ? step.descKo : step.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '64px 0', background: 'var(--bg-light-gray)' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: 6, textAlign: 'left' }}>
            {t('features.title')}
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 36, textAlign: 'left', margin: '0 0 36px 0' }}>
            {t('features.subtitle')}
          </p>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20,
          }}>
            {[
              { icon: 'fa-graduation-cap', color: '#1B3A6B', key: 'learning' },
              { icon: 'fa-terminal', color: '#5B21B6', key: 'practice' },
              { icon: 'fa-language', color: '#065F46', key: 'multilingual' },
              { icon: 'fa-comments', color: '#92400E', key: 'community' },
            ].map(feat => (
              <div key={feat.key} style={{
                padding: 28, borderRadius: 16, background: 'var(--bg-white)',
                border: '1px solid var(--border-light)', textAlign: 'center',
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14, margin: '0 auto 16px',
                  background: `${feat.color}10`, display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                }}>
                  <i className={`fa-solid ${feat.icon}`} style={{ fontSize: 22, color: feat.color }} />
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>
                  {t(`features.${feat.key}.title`)}
                </h3>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {t(`features.${feat.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '64px 0',
        background: 'linear-gradient(135deg, var(--primary-blue), #2d5aa0)',
        textAlign: 'center',
      }}>
        <div className="container">
          <h2 style={{ fontSize: 28, fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            {t('cta.title')}
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
            {t('cta.description')}
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/register" style={{
              padding: '14px 36px', borderRadius: 10, fontSize: 15, fontWeight: 700,
              background: '#fff', color: 'var(--primary-blue)', textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}>
              {t('cta.button')}
            </Link>
            <Link to="/intro" style={{
              padding: '14px 36px', borderRadius: 10, fontSize: 15, fontWeight: 700,
              background: 'transparent', color: '#fff', textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.4)', transition: 'all 0.2s ease',
            }}>
              {isKo ? '더 알아보기' : 'Learn More'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
