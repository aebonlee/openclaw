import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const SECTIONS = [
  { id: 'about', icon: 'fa-info-circle', ko: 'OpenClaw 소개', en: 'About OpenClaw' },
  { id: 'features', icon: 'fa-star', ko: '주요 기능', en: 'Key Features' },
  { id: 'guide', icon: 'fa-map-signs', ko: '사용 가이드', en: 'Usage Guide' },
  { id: 'faq', icon: 'fa-circle-question', ko: '자주 묻는 질문', en: 'FAQ' },
];

const FEATURES = [
  {
    icon: 'fa-wand-magic-sparkles',
    color: '#10A37F',
    ko: { title: '프롬프트 엔지니어링', desc: 'AI와 효과적으로 소통하는 프롬프트 작성법을 배우고 실습합니다. Zero-shot, Few-shot, Chain of Thought 등 다양한 기법을 익힙니다.' },
    en: { title: 'Prompt Engineering', desc: 'Learn and practice effective prompt writing for AI communication. Master techniques like Zero-shot, Few-shot, and Chain of Thought.' },
  },
  {
    icon: 'fa-road',
    color: '#FF6F00',
    ko: { title: '체계적 학습 자료', desc: 'AI 기초, 프로그래밍, 데이터 사이언스 등 분야별 체계적인 커리큘럼으로 단계적 학습이 가능합니다.' },
    en: { title: 'Structured Learning Resources', desc: 'Step-by-step learning through structured curricula across AI fundamentals, programming, data science, and more.' },
  },
  {
    icon: 'fa-users',
    color: '#8B5CF6',
    ko: { title: '학습 커뮤니티', desc: '질문, 자료 공유, 자유 게시판에서 함께 배우고 성장하세요. 공지사항으로 최신 정보를 확인하세요.' },
    en: { title: 'Learning Community', desc: 'Learn and grow together through Q&A, resource sharing, and free discussion boards. Stay updated with announcements.' },
  },
];

const GUIDE_STEPS = [
  {
    icon: 'fa-user-plus',
    ko: { title: '회원가입', desc: 'Google 또는 이메일로 간편하게 가입하세요. 30초면 완료됩니다.' },
    en: { title: 'Sign Up', desc: 'Sign up easily with Google or email. It takes just 30 seconds.' },
  },
  {
    icon: 'fa-route',
    ko: { title: '학습경로 선택', desc: 'AI 기초, 웹개발, 데이터 사이언스, 프롬프트 엔지니어링 등 관심 분야의 학습 경로를 선택하세요.' },
    en: { title: 'Choose Learning Path', desc: 'Select a learning path in AI fundamentals, web development, data science, prompt engineering, and more.' },
  },
  {
    icon: 'fa-laptop-code',
    ko: { title: '자료 학습 / 프롬프트 실습', desc: '체계적인 학습 자료로 이론을 익히고, 프롬프트 엔지니어링 실습으로 실무 역량을 키우세요.' },
    en: { title: 'Learn Resources / Prompt Practice', desc: 'Study theory with structured resources and build practical skills through prompt engineering exercises.' },
  },
  {
    icon: 'fa-comments',
    ko: { title: '커뮤니티 참여', desc: '질문 게시판, 자료 공유, 자유 토론에 참여하며 다른 학습자들과 함께 성장하세요.' },
    en: { title: 'Join the Community', desc: 'Participate in Q&A boards, share resources, and engage in discussions to grow with fellow learners.' },
  },
];

const FAQ_ITEMS = [
  {
    ko: { q: 'OpenClaw는 무료인가요?', a: '네, OpenClaw는 완전 무료 플랫폼입니다. 모든 학습 자료, 프롬프트 실습, 커뮤니티 기능을 무료로 이용하실 수 있습니다.' },
    en: { q: 'Is OpenClaw free?', a: 'Yes, OpenClaw is completely free. All learning resources, prompt practice, and community features are available at no cost.' },
  },
  {
    ko: { q: '어떤 내용을 배울 수 있나요?', a: 'AI 기초, 프롬프트 엔지니어링, 웹 개발, 데이터 사이언스, Python, AI 도구 활용 등 6가지 학습 경로를 제공합니다. 각 경로에는 체계적인 커리큘럼과 학습 자료가 준비되어 있습니다.' },
    en: { q: 'What can I learn?', a: 'We offer 6 learning paths: AI Fundamentals, Prompt Engineering, Web Development, Data Science, Python, and AI Tool Usage. Each path includes structured curricula and learning resources.' },
  },
  {
    ko: { q: '프로그래밍 초보도 가능한가요?', a: '물론입니다! AI 기초와 Python 학습 경로는 프로그래밍 경험이 없는 분도 처음부터 단계적으로 학습할 수 있도록 설계되어 있습니다.' },
    en: { q: 'Can beginners use this?', a: 'Absolutely! The AI Fundamentals and Python learning paths are designed for complete beginners to learn step by step from the basics.' },
  },
  {
    ko: { q: '한국어 지원하나요?', a: '네, OpenClaw는 한국어와 영어를 완전히 지원합니다. 상단 네비게이션의 언어 전환 버튼으로 언제든 전환할 수 있습니다.' },
    en: { q: 'Is Korean supported?', a: 'Yes, OpenClaw fully supports both Korean and English. You can switch anytime using the language toggle in the top navigation.' },
  },
  {
    ko: { q: '커뮤니티는 어떻게 참여하나요?', a: '회원가입 후 커뮤니티 게시판에서 질문, 자료 공유, 자유 토론에 참여할 수 있습니다. 다른 학습자들의 경험과 팁을 공유하며 함께 성장하세요.' },
    en: { q: 'How do I join the community?', a: 'After signing up, you can participate in Q&A, resource sharing, and free discussions on the community board. Share experiences and tips with fellow learners.' },
  },
  {
    ko: { q: '모바일에서도 사용 가능한가요?', a: '네, OpenClaw는 반응형 디자인으로 모바일, 태블릿, 데스크톱 등 모든 기기에서 최적화된 학습 환경을 제공합니다.' },
    en: { q: 'Can I use it on mobile?', a: 'Yes, OpenClaw features responsive design and provides an optimized learning experience on mobile, tablet, and desktop devices.' },
  },
];

const TARGET_AUDIENCE = [
  {
    icon: 'fa-graduation-cap',
    ko: { title: 'AI 학습자', desc: 'AI, 프로그래밍, 데이터 사이언스를 체계적으로 학습하고 싶은 학생 및 직장인' },
    en: { title: 'AI Learners', desc: 'Students and professionals who want to systematically learn AI, programming, and data science' },
  },
  {
    icon: 'fa-code',
    ko: { title: '프로그래밍 입문자', desc: 'Python, 웹 개발 등 프로그래밍을 처음 시작하거나 역량을 키우고 싶은 분' },
    en: { title: 'Programming Beginners', desc: 'Anyone starting out or wanting to build skills in Python, web development, and more' },
  },
  {
    icon: 'fa-chalkboard-teacher',
    ko: { title: '교육자', desc: 'AI와 프로그래밍 교육에 활용할 학습 자료와 커리큘럼이 필요한 교수 및 교사' },
    en: { title: 'Educators', desc: 'Professors and teachers who need learning resources and curricula for AI and programming education' },
  },
];

export default function IntroPage() {
  const { language, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('about');
  const [openFaq, setOpenFaq] = useState(null);

  const isKo = language === 'ko';

  const scrollToSection = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="intro-page">
      <SEOHead
        title={t('intro.title')}
        description={isKo ? 'OpenClaw - AI 학습의 새로운 패러다임. AI, 프로그래밍, 데이터 사이언스를 체계적으로 학습하세요.' : 'OpenClaw - A New Paradigm for AI Learning. Systematically learn AI, programming, and data science.'}
        path="/intro"
      />

      {/* Sidebar */}
      <aside className="intro-sidebar">
        <div className="ck-sb-header">
          <i className="fa-solid fa-info-circle" />
          <span>{t('intro.title')}</span>
        </div>
        <nav className="ck-sb-nav">
          {SECTIONS.map(sec => (
            <button
              key={sec.id}
              className={`ck-nav-child ${activeSection === sec.id ? 'active' : ''}`}
              onClick={() => scrollToSection(sec.id)}
            >
              <span className="ck-nc-icon"><i className={`fa-solid ${sec.icon}`} /></span>
              <span>{isKo ? sec.ko : sec.en}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="intro-content">
        {/* About Section */}
        <section id="about" className="ck-content-box">
          <div className="ck-content-header ck-ch--blue">
            <i className="fa-solid fa-info-circle" />
            <div className="ck-ch-text">
              <h2>{isKo ? 'OpenClaw란?' : 'What is OpenClaw?'}</h2>
              <p>{isKo ? 'AI 학습의 새로운 패러다임' : 'A New Paradigm for AI Learning'}</p>
            </div>
          </div>
          <div className="ck-content-body">
            <p className="theory-p">
              {isKo
                ? 'OpenClaw는 AI(인공지능), 프로그래밍, 데이터 사이언스를 체계적으로 학습할 수 있는 무료 학습 플랫폼입니다. 초보자부터 중급자까지 단계별로 학습할 수 있는 체계적인 커리큘럼과 풍부한 학습 자료를 제공합니다.'
                : 'OpenClaw is a free learning platform for systematically studying AI (Artificial Intelligence), programming, and data science. It provides structured curricula and rich learning resources for step-by-step learning from beginner to intermediate level.'}
            </p>
            <p className="theory-p">
              {isKo
                ? '프롬프트 엔지니어링 실습을 통해 AI 활용 역량을 키우고, 커뮤니티 게시판에서 다른 학습자들과 질문과 자료를 공유하며 함께 성장할 수 있습니다. 한국어와 영어를 모두 지원하며, 5가지 컬러 테마와 다크/라이트 모드로 편안한 학습 환경을 제공합니다.'
                : 'Build AI skills through prompt engineering practice, and grow together with other learners by sharing questions and resources on the community board. The platform supports both Korean and English, and offers 5 color themes with dark/light mode for a comfortable learning experience.'}
            </p>

            <h3 className="theory-h3" style={{ marginTop: 28 }}>
              {isKo ? '대상 사용자' : 'Target Audience'}
            </h3>
            <div className="ck-og-2col" style={{ marginTop: 12 }}>
              {TARGET_AUDIENCE.map((item, idx) => (
                <div key={idx} className="ck-ov-card" style={{ cursor: 'default' }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: 'rgba(27,58,107,0.08)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    <i className={`fa-solid ${item.icon}`} style={{ color: 'var(--primary-blue)', fontSize: 16 }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-primary)', marginBottom: 4 }}>
                      {isKo ? item.ko.title : item.en.title}
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {isKo ? item.ko.desc : item.en.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="theory-h3" style={{ marginTop: 28 }}>
              {isKo ? '핵심 특징' : 'Key Highlights'}
            </h3>
            <ul className="theory-list">
              <li><strong>{isKo ? '체계적인 학습 자료' : 'Structured Learning Resources'}</strong> - {isKo ? 'AI, 프로그래밍, 데이터 사이언스 분야의 체계적인 커리큘럼' : 'Structured curricula across AI, programming, and data science'}</li>
              <li><strong>{isKo ? '프롬프트 엔지니어링 실습' : 'Prompt Engineering Practice'}</strong> - {isKo ? '다양한 프롬프트 기법을 직접 실습하며 AI 활용 역량 강화' : 'Hands-on practice with various prompt techniques to build AI skills'}</li>
              <li><strong>{isKo ? '학습 커뮤니티' : 'Learning Community'}</strong> - {isKo ? '게시판, 자료 공유, Q&A를 통한 협력 학습' : 'Collaborative learning through boards, resource sharing, and Q&A'}</li>
              <li><strong>{isKo ? '다크모드 / 컬러 테마' : 'Dark Mode / Color Themes'}</strong> - {isKo ? '5가지 컬러 테마와 다크/라이트 모드로 편안한 학습 환경' : '5 color themes with dark/light mode for comfortable learning'}</li>
              <li><strong>{isKo ? '이중 언어' : 'Bilingual'}</strong> - {isKo ? '한국어와 영어 완전 지원' : 'Full Korean and English support'}</li>
            </ul>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="ck-content-box">
          <div className="ck-content-header ck-ch--green">
            <i className="fa-solid fa-star" />
            <div className="ck-ch-text">
              <h2>{isKo ? '주요 기능' : 'Key Features'}</h2>
              <p>{isKo ? 'OpenClaw의 3가지 핵심 기능을 소개합니다' : 'Introducing 3 key features of OpenClaw'}</p>
            </div>
          </div>
          <div className="ck-content-body">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
              {FEATURES.map((feat, idx) => (
                <div key={idx} className="card" style={{
                  padding: 24, borderRadius: 12,
                  border: '1px solid var(--border-light)', background: 'var(--bg-white)',
                  transition: 'box-shadow 0.2s ease'
                }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: `${feat.color}15`, display: 'flex',
                    alignItems: 'center', justifyContent: 'center', marginBottom: 16
                  }}>
                    <i className={`fa-solid ${feat.icon}`} style={{ fontSize: 20, color: feat.color }} />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>
                    {isKo ? feat.ko.title : feat.en.title}
                  </h3>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {isKo ? feat.ko.desc : feat.en.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Usage Guide Section */}
        <section id="guide" className="ck-content-box">
          <div className="ck-content-header ck-ch--purple">
            <i className="fa-solid fa-map-signs" />
            <div className="ck-ch-text">
              <h2>{isKo ? '사용 가이드' : 'Usage Guide'}</h2>
              <p>{isKo ? '4단계로 시작하는 OpenClaw 활용법' : 'Get started with OpenClaw in 4 steps'}</p>
            </div>
          </div>
          <div className="ck-content-body">
            {GUIDE_STEPS.map((step, idx) => (
              <div key={idx} className="guide-step" style={{ marginBottom: 24 }}>
                <div className="guide-step-number">{idx + 1}</div>
                <div className="guide-step-content">
                  <h3>
                    <i className={`fa-solid ${step.icon}`} style={{ marginRight: 8, color: 'var(--primary-blue)' }} />
                    {isKo ? step.ko.title : step.en.title}
                  </h3>
                  <p>{isKo ? step.ko.desc : step.en.desc}</p>
                </div>
              </div>
            ))}

            <div style={{
              marginTop: 24, padding: 20, borderRadius: 12,
              background: 'linear-gradient(135deg, rgba(27,58,107,0.06), rgba(139,26,200,0.04))',
              border: '1px solid var(--border-light)', textAlign: 'center'
            }}>
              <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 12 }}>
                {isKo ? '지금 바로 시작하세요!' : 'Get started now!'}
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/register" className="board-write-btn">
                  <i className="fa-solid fa-user-plus" />
                  {isKo ? '회원가입' : 'Sign Up'}
                </Link>
                <Link to="/resources" className="board-write-btn" style={{ background: 'var(--text-secondary)' }}>
                  <i className="fa-solid fa-book-open" />
                  {isKo ? '학습 자료 보기' : 'Browse Resources'}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="ck-content-box">
          <div className="ck-content-header ck-ch--orange">
            <i className="fa-solid fa-circle-question" />
            <div className="ck-ch-text">
              <h2>{isKo ? '자주 묻는 질문 (FAQ)' : 'Frequently Asked Questions'}</h2>
              <p>{isKo ? '궁금한 점을 확인하세요' : 'Find answers to common questions'}</p>
            </div>
          </div>
          <div className="ck-content-body">
            {FAQ_ITEMS.map((item, idx) => (
              <div
                key={idx}
                style={{
                  borderBottom: idx < FAQ_ITEMS.length - 1 ? '1px solid var(--border-light)' : 'none',
                  paddingBottom: 16, marginBottom: 16
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{
                    width: '100%', textAlign: 'left', background: 'none', border: 'none',
                    cursor: 'pointer', fontFamily: 'inherit', padding: '8px 0',
                    display: 'flex', alignItems: 'center', gap: 12
                  }}
                >
                  <i
                    className={`fa-solid fa-chevron-${openFaq === idx ? 'down' : 'right'}`}
                    style={{ color: 'var(--primary-blue)', fontSize: 12, width: 16, textAlign: 'center' }}
                  />
                  <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)' }}>
                    {isKo ? item.ko.q : item.en.q}
                  </span>
                </button>
                {openFaq === idx && (
                  <div style={{
                    marginTop: 8, marginLeft: 28, padding: '12px 16px',
                    background: 'var(--bg-light-gray)', borderRadius: 8,
                    fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7
                  }}>
                    {isKo ? item.ko.a : item.en.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
