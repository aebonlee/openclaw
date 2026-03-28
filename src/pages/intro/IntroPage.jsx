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
    icon: 'fa-robot',
    color: '#4285F4',
    ko: { title: 'AI 학습 도구', desc: '강의계획서, 루브릭, 과제, 피드백, 평가까지 AI가 자동으로 생성합니다. OpenAI, Claude, Gemini, Genspark 4대 AI를 모두 활용할 수 있습니다.' },
    en: { title: 'AI Learning Tools', desc: 'AI automatically generates syllabi, rubrics, assignments, feedback, and evaluations. Access all 4 major AI providers: OpenAI, Claude, Gemini, and Genspark.' },
  },
  {
    icon: 'fa-wand-magic-sparkles',
    color: '#10A37F',
    ko: { title: '프롬프트 엔지니어링', desc: 'AI와 효과적으로 소통하는 프롬프트 작성법을 배우고 실습합니다. Zero-shot, Few-shot, Chain of Thought 등 다양한 기법을 익힙니다.' },
    en: { title: 'Prompt Engineering', desc: 'Learn and practice effective prompt writing for AI communication. Master techniques like Zero-shot, Few-shot, and Chain of Thought.' },
  },
  {
    icon: 'fa-road',
    color: '#FF6F00',
    ko: { title: '체계적 학습 경로', desc: 'AI 기초, 프로그래밍, 데이터 사이언스 등 분야별 체계적인 커리큘럼으로 단계적 학습이 가능합니다.' },
    en: { title: 'Structured Learning Paths', desc: 'Step-by-step learning through structured curricula across AI fundamentals, programming, data science, and more.' },
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
    icon: 'fa-key',
    ko: { title: 'API 키 등록', desc: 'AI 도구 사용을 위해 API 키를 설정 페이지에서 등록하세요. 가이드를 참고하여 무료 키를 발급받을 수 있습니다.' },
    en: { title: 'Register API Key', desc: 'Register your API key in Settings for AI tools. Follow the guide to get free keys.' },
  },
  {
    icon: 'fa-route',
    ko: { title: '학습 경로 선택', desc: 'AI 기초, 웹개발, 데이터 사이언스, 프롬프트 엔지니어링 등 관심 분야의 학습 경로를 선택하세요.' },
    en: { title: 'Choose Learning Path', desc: 'Select a learning path in AI fundamentals, web development, data science, prompt engineering, and more.' },
  },
  {
    icon: 'fa-tools',
    ko: { title: 'AI 도구 활용', desc: '강의계획서, 루브릭, 과제, 피드백, 평가 도구를 활용하여 교수학습 자료를 생성하세요.' },
    en: { title: 'Use AI Tools', desc: 'Generate teaching materials using syllabus, rubric, assignment, feedback, and evaluation tools.' },
  },
  {
    icon: 'fa-laptop-code',
    ko: { title: 'AI 실습', desc: '프롬프트 실습, AI 체크리스트, 학습 자료를 통해 실무 역량을 키우세요.' },
    en: { title: 'AI Practice', desc: 'Build practical skills through prompt practice, AI checklists, and learning resources.' },
  },
  {
    icon: 'fa-file-export',
    ko: { title: '결과 활용', desc: '생성된 자료를 PDF, Markdown, JSON, CSV, HTML 등 다양한 형식으로 내보내어 활용하세요.' },
    en: { title: 'Export Results', desc: 'Export generated materials in PDF, Markdown, JSON, CSV, HTML, and other formats.' },
  },
];

const FAQ_ITEMS = [
  {
    ko: { q: 'OpenClaw는 무료인가요?', a: '네, OpenClaw 플랫폼 자체는 완전 무료입니다. 단, AI 도구를 사용하려면 각 AI 서비스 제공자의 API 키가 필요하며, API 사용에 따른 비용은 각 제공자의 요금 정책에 따릅니다. 대부분의 제공자가 무료 크레딧을 제공합니다.' },
    en: { q: 'Is OpenClaw free?', a: 'Yes, the OpenClaw platform itself is completely free. However, to use AI tools, you need API keys from each AI service provider, and API usage costs depend on each provider\'s pricing. Most providers offer free credits.' },
  },
  {
    ko: { q: 'AI 도구를 사용하려면 프로그래밍 지식이 필요한가요?', a: '전혀 필요하지 않습니다! OpenClaw의 AI 도구는 사용자 친화적인 인터페이스로 설계되어 있어, 누구나 쉽게 사용할 수 있습니다. 프롬프트 입력만으로 원하는 결과를 얻을 수 있습니다.' },
    en: { q: 'Do I need programming knowledge to use AI tools?', a: 'Not at all! OpenClaw\'s AI tools are designed with a user-friendly interface so anyone can use them easily. You can get the results you want just by entering prompts.' },
  },
  {
    ko: { q: '어떤 AI를 지원하나요?', a: 'OpenAI (GPT-4o, GPT-4o-mini), Anthropic Claude (Claude Sonnet, Haiku), Google Gemini (Gemini Pro, Flash), Genspark 총 4개 제공자의 다양한 모델을 지원합니다.' },
    en: { q: 'Which AI providers are supported?', a: 'We support multiple models from 4 providers: OpenAI (GPT-4o, GPT-4o-mini), Anthropic Claude (Claude Sonnet, Haiku), Google Gemini (Gemini Pro, Flash), and Genspark.' },
  },
  {
    ko: { q: '누가 사용할 수 있나요?', a: '대학교 교수, 초중고 교사, 교육 관련 전문가, 학생, AI를 배우고 싶은 모든 분이 사용할 수 있습니다. 특히 교수학습 자료 작성에 AI를 활용하고 싶은 교육자에게 유용합니다.' },
    en: { q: 'Who can use this?', a: 'University professors, K-12 teachers, education professionals, students, and anyone who wants to learn AI. It\'s especially useful for educators who want to use AI for creating teaching materials.' },
  },
  {
    ko: { q: '생성된 자료를 어떻게 활용할 수 있나요?', a: 'PDF, Markdown, JSON, CSV, HTML 등 5가지 형식으로 내보내기가 가능합니다. 생성된 강의계획서는 LMS에 업로드하거나, 루브릭은 채점에 활용하는 등 실무에 바로 적용할 수 있습니다.' },
    en: { q: 'How can I use the generated materials?', a: 'You can export in 5 formats: PDF, Markdown, JSON, CSV, and HTML. Generated syllabi can be uploaded to LMS, rubrics can be used for grading, and more - all directly applicable in practice.' },
  },
  {
    ko: { q: '한국어와 영어 모두 지원하나요?', a: '네, OpenClaw는 완전한 한국어/영어 이중 언어를 지원합니다. 상단 네비게이션의 언어 전환 버튼으로 언제든 전환할 수 있으며, AI 생성 결과도 원하는 언어로 출력 가능합니다.' },
    en: { q: 'Does it support both Korean and English?', a: 'Yes, OpenClaw fully supports Korean/English bilingual mode. You can switch anytime using the language toggle in the top navigation, and AI-generated results can be output in your preferred language.' },
  },
  {
    ko: { q: '데이터는 안전하게 보관되나요?', a: 'API 키는 Supabase에 암호화되어 안전하게 저장되며, 생성된 자료는 사용자 본인만 접근할 수 있습니다. 개인정보 보호를 최우선으로 합니다.' },
    en: { q: 'Is my data stored securely?', a: 'API keys are encrypted and stored securely in Supabase, and generated materials are accessible only by the user. Privacy protection is our top priority.' },
  },
];

const TARGET_AUDIENCE = [
  {
    icon: 'fa-graduation-cap',
    ko: { title: '학생', desc: 'AI, 프로그래밍, 데이터 사이언스를 체계적으로 학습하고 싶은 대학생 및 대학원생' },
    en: { title: 'Students', desc: 'University and graduate students who want to systematically learn AI, programming, and data science' },
  },
  {
    icon: 'fa-chalkboard-teacher',
    ko: { title: '교육자', desc: '강의계획서, 루브릭, 과제, 평가 자료를 AI로 효율적으로 작성하고 싶은 교수 및 교사' },
    en: { title: 'Educators', desc: 'Professors and teachers who want to efficiently create syllabi, rubrics, assignments, and evaluations with AI' },
  },
  {
    icon: 'fa-briefcase',
    ko: { title: '직장인/전문가', desc: 'AI 도구 활용 역량을 키우고 싶은 직장인과 업무에 AI를 적용하고 싶은 전문가' },
    en: { title: 'Professionals', desc: 'Working professionals who want to build AI tool proficiency and apply AI in their work' },
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
                ? 'OpenClaw는 AI(인공지능), 프로그래밍, 데이터 사이언스를 체계적으로 학습할 수 있는 종합 교육 플랫폼입니다. 교수자와 학습자 모두를 위한 AI 기반 도구와 풍부한 학습 콘텐츠를 제공하여, 교수학습의 효율성을 극대화합니다.'
                : 'OpenClaw is a comprehensive educational platform for systematically learning AI (Artificial Intelligence), programming, and data science. It provides AI-based tools and rich learning content for both educators and learners, maximizing the efficiency of teaching and learning.'}
            </p>
            <p className="theory-p">
              {isKo
                ? '4대 AI 서비스(OpenAI, Claude, Gemini, Genspark)를 통합 지원하며, 강의계획서, 루브릭, 과제, 피드백, 학생 평가 등 교수학습 자료를 AI로 자동 생성할 수 있습니다. 또한 프롬프트 엔지니어링, AI 역량 체크리스트, 학습 자료 등 다양한 교육 콘텐츠를 제공합니다.'
                : 'It integrates 4 major AI services (OpenAI, Claude, Gemini, Genspark) and can automatically generate teaching materials like syllabi, rubrics, assignments, feedback, and student evaluations using AI. It also provides various educational content including prompt engineering, AI competency checklists, and learning resources.'}
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
              <li><strong>{isKo ? '통합 AI 지원' : 'Integrated AI Support'}</strong> - {isKo ? 'OpenAI, Claude, Gemini, Genspark 4대 AI를 하나의 플랫폼에서' : '4 major AI providers in one platform: OpenAI, Claude, Gemini, Genspark'}</li>
              <li><strong>{isKo ? '5가지 AI 도구' : '5 AI Tools'}</strong> - {isKo ? '강의계획서, 루브릭, 과제, 피드백, 평가 자동 생성' : 'Auto-generate syllabi, rubrics, assignments, feedback, and evaluations'}</li>
              <li><strong>{isKo ? '5종 내보내기' : '5 Export Formats'}</strong> - {isKo ? 'PDF, Markdown, JSON, CSV, HTML 형식 지원' : 'Support for PDF, Markdown, JSON, CSV, HTML formats'}</li>
              <li><strong>{isKo ? '이중 언어' : 'Bilingual'}</strong> - {isKo ? '한국어와 영어 완전 지원' : 'Full Korean and English support'}</li>
              <li><strong>{isKo ? '실시간 스트리밍' : 'Real-time Streaming'}</strong> - {isKo ? 'AI 응답을 실시간으로 확인하며 토큰 사용량과 비용 추적' : 'View AI responses in real-time with token usage and cost tracking'}</li>
              <li><strong>{isKo ? '학습 커뮤니티' : 'Learning Community'}</strong> - {isKo ? '게시판, 자료 공유, Q&A를 통한 협력 학습' : 'Collaborative learning through boards, resource sharing, and Q&A'}</li>
            </ul>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="ck-content-box">
          <div className="ck-content-header ck-ch--green">
            <i className="fa-solid fa-star" />
            <div className="ck-ch-text">
              <h2>{isKo ? '주요 기능' : 'Key Features'}</h2>
              <p>{isKo ? 'OpenClaw의 4가지 핵심 기능을 소개합니다' : 'Introducing 4 key features of OpenClaw'}</p>
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
              <p>{isKo ? '6단계로 시작하는 OpenClaw 활용법' : 'Get started with OpenClaw in 6 steps'}</p>
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
                <Link to="/api-guide" className="board-write-btn" style={{ background: 'var(--text-secondary)' }}>
                  <i className="fa-solid fa-key" />
                  {isKo ? 'API 키 가이드' : 'API Key Guide'}
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
