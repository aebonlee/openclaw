import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const DIFFICULTY_BADGE = {
  beginner: { ko: '입문', en: 'Beginner', color: '#10B981', bg: '#D1FAE5' },
  elementary: { ko: '초급', en: 'Elementary', color: '#3B82F6', bg: '#DBEAFE' },
  intermediate: { ko: '중급', en: 'Intermediate', color: '#F59E0B', bg: '#FEF3C7' },
  advanced: { ko: '고급', en: 'Advanced', color: '#EF4444', bg: '#FEE2E2' },
};

const TRACKS = [
  {
    id: 'ai-ml', icon: 'fa-brain', color: '#8B5CF6',
    ko: { title: 'AI/ML 엔지니어', desc: '인공지능과 머신러닝 모델을 설계, 개발, 배포하는 엔지니어가 되기 위한 학습 경로' },
    en: { title: 'AI/ML Engineer', desc: 'Learning path to become an engineer who designs, develops, and deploys AI and ML models' },
    steps: [
      { diff: 'beginner', time: '4-6주', ko: { title: 'Python 기초', desc: '변수, 자료형, 제어문, 함수, 클래스 등 Python 프로그래밍의 기본을 익힙니다.' }, en: { title: 'Python Basics', desc: 'Learn Python fundamentals including variables, data types, control flow, functions, and classes.' } },
      { diff: 'beginner', time: '4-8주', ko: { title: '수학/통계 기초', desc: '선형대수, 미적분, 확률/통계 등 AI/ML에 필요한 수학적 기초를 학습합니다.' }, en: { title: 'Math/Statistics', desc: 'Study mathematical foundations for AI/ML: linear algebra, calculus, and probability/statistics.' } },
      { diff: 'elementary', time: '6-8주', ko: { title: 'ML 기초', desc: '지도학습, 비지도학습, 모델 평가 등 머신러닝의 핵심 개념을 Scikit-learn으로 실습합니다.' }, en: { title: 'ML Fundamentals', desc: 'Practice core ML concepts with Scikit-learn: supervised/unsupervised learning and model evaluation.' } },
      { diff: 'intermediate', time: '8-12주', ko: { title: '딥러닝', desc: 'PyTorch로 신경망, CNN, RNN 등을 구현합니다. 역전파, 옵티마이저, 정규화 기법을 이해합니다.' }, en: { title: 'Deep Learning', desc: 'Implement neural networks, CNN, RNN with PyTorch. Understand backpropagation and regularization.' } },
      { diff: 'advanced', time: '8-12주', ko: { title: 'NLP/CV 전문', desc: '트랜스포머, BERT, GPT 등 최신 NLP 모델과 객체 탐지 등 CV 기술을 학습합니다.' }, en: { title: 'NLP/CV Specialization', desc: 'Study Transformer, BERT, GPT for NLP and object detection for CV.' } },
      { diff: 'advanced', time: '4-8주', ko: { title: 'MLOps', desc: 'ML 파이프라인 자동화, 모델 모니터링, Docker/K8s 배포까지 프로덕션 ML 시스템을 구축합니다.' }, en: { title: 'MLOps', desc: 'Build production ML systems with pipeline automation, monitoring, and Docker/K8s deployment.' } },
    ],
  },
  {
    id: 'data-science', icon: 'fa-chart-line', color: '#10B981',
    ko: { title: '데이터 사이언스', desc: '데이터에서 인사이트를 도출하고 비즈니스 문제를 해결하는 학습 경로' },
    en: { title: 'Data Science', desc: 'Learning path for deriving insights from data and solving business problems' },
    steps: [
      { diff: 'beginner', time: '4-6주', ko: { title: 'Python 기초', desc: '리스트, 딕셔너리, 파일 I/O, 함수 등 데이터 처리에 필요한 핵심 문법을 학습합니다.' }, en: { title: 'Python Basics', desc: 'Learn core syntax for data processing: lists, dictionaries, file I/O, and functions.' } },
      { diff: 'elementary', time: '4-6주', ko: { title: '판다스/넘파이', desc: 'Pandas와 NumPy로 데이터를 효율적으로 로딩, 정제, 변환, 분석합니다.' }, en: { title: 'Pandas/NumPy', desc: 'Efficiently load, clean, transform, and analyze data with Pandas and NumPy.' } },
      { diff: 'intermediate', time: '6-8주', ko: { title: '통계학', desc: '기술통계, 추론통계, 가설검정, 회귀분석, A/B 테스트 등을 학습합니다.' }, en: { title: 'Statistics', desc: 'Study descriptive/inferential stats, hypothesis testing, regression, and A/B testing.' } },
      { diff: 'intermediate', time: '4-6주', ko: { title: '데이터 시각화', desc: 'Matplotlib, Seaborn, Plotly로 데이터를 효과적으로 시각화합니다.' }, en: { title: 'Data Visualization', desc: 'Visualize data effectively with Matplotlib, Seaborn, and Plotly.' } },
      { diff: 'advanced', time: '8-10주', ko: { title: 'ML 실습', desc: '실제 데이터셋으로 예측 모델을 구축하고 피처 엔지니어링, 모델 선택을 실습합니다.' }, en: { title: 'ML Practice', desc: 'Build prediction models with real datasets. Practice feature engineering and model selection.' } },
      { diff: 'advanced', time: '6-8주', ko: { title: '빅데이터', desc: 'SQL 고급 쿼리, Spark 기초, 대규모 데이터 처리 파이프라인을 학습합니다.' }, en: { title: 'Big Data', desc: 'Learn advanced SQL, Spark basics, and large-scale data processing pipelines.' } },
    ],
  },
  {
    id: 'web-dev', icon: 'fa-code', color: '#3B82F6',
    ko: { title: '웹 개발', desc: '프론트엔드부터 백엔드까지 풀스택 웹 개발자가 되기 위한 학습 경로' },
    en: { title: 'Web Development', desc: 'Learning path to become a full-stack web developer from frontend to backend' },
    steps: [
      { diff: 'beginner', time: '4-6주', ko: { title: 'HTML/CSS', desc: '웹 페이지의 구조(HTML)와 스타일(CSS)을 학습합니다. Flexbox, Grid 레이아웃을 익힙니다.' }, en: { title: 'HTML/CSS', desc: 'Learn web page structure (HTML) and styling (CSS). Master Flexbox and Grid layouts.' } },
      { diff: 'elementary', time: '6-8주', ko: { title: 'JavaScript', desc: 'DOM 조작, 이벤트, 비동기 처리, ES6+ 문법 등 JavaScript 핵심을 학습합니다.' }, en: { title: 'JavaScript', desc: 'Learn JavaScript core: DOM manipulation, events, async, and ES6+ syntax.' } },
      { diff: 'intermediate', time: '8-10주', ko: { title: 'React', desc: '컴포넌트, State, Props, Hooks, Router 등 React 생태계를 학습합니다.' }, en: { title: 'React', desc: 'Study the React ecosystem: components, state, props, hooks, and router.' } },
      { diff: 'intermediate', time: '6-8주', ko: { title: 'Node.js', desc: 'Express로 REST API를 구축하고, 데이터베이스 연동, 인증 시스템을 구현합니다.' }, en: { title: 'Node.js', desc: 'Build REST APIs with Express, integrate databases, and implement auth systems.' } },
      { diff: 'advanced', time: '4-6주', ko: { title: 'DB/SQL', desc: 'PostgreSQL, MongoDB 등을 활용한 데이터 모델링과 쿼리 최적화를 학습합니다.' }, en: { title: 'DB/SQL', desc: 'Learn data modeling and query optimization with PostgreSQL and MongoDB.' } },
      { diff: 'advanced', time: '4-6주', ko: { title: '배포', desc: 'Docker, CI/CD, 클라우드(AWS/Vercel) 배포, 모니터링까지 DevOps 기초를 익힙니다.' }, en: { title: 'Deployment', desc: 'Learn DevOps basics: Docker, CI/CD, cloud deployment (AWS/Vercel), and monitoring.' } },
    ],
  },
  {
    id: 'prompt-eng', icon: 'fa-wand-magic-sparkles', color: '#F59E0B',
    ko: { title: '프롬프트 엔지니어링', desc: 'AI와 효과적으로 소통하고 원하는 결과를 얻는 프롬프트 엔지니어 학습 경로' },
    en: { title: 'Prompt Engineering', desc: 'Learning path to effectively communicate with AI and get desired results' },
    steps: [
      { diff: 'beginner', time: '2-3주', ko: { title: 'AI 이해', desc: 'LLM의 작동 원리, 토큰, 컨텍스트 윈도우 등 기본 개념을 이해합니다.' }, en: { title: 'Understanding AI', desc: 'Understand LLM fundamentals: how they work, tokens, and context windows.' } },
      { diff: 'elementary', time: '3-4주', ko: { title: '기본 프롬프트', desc: '역할 지정, 구조화된 출력, 제약 조건 명시 등 기본 프롬프트 작성법을 배웁니다.' }, en: { title: 'Basic Prompts', desc: 'Learn basic prompt writing: role assignment, structured output, and constraints.' } },
      { diff: 'intermediate', time: '4-6주', ko: { title: '고급 기법', desc: 'Zero-shot, Few-shot, Chain of Thought, Role Playing 등 고급 기법을 익힙니다.' }, en: { title: 'Advanced Techniques', desc: 'Master advanced techniques: Zero-shot, Few-shot, Chain of Thought, and Role Playing.' } },
      { diff: 'intermediate', time: '4-6주', ko: { title: 'API 활용', desc: 'OpenAI, Claude, Gemini API를 프로그래밍으로 호출하고 자동화합니다.' }, en: { title: 'API Usage', desc: 'Call and automate OpenAI, Claude, Gemini APIs programmatically.' } },
      { diff: 'advanced', time: '4-6주', ko: { title: '자동화', desc: 'LangChain, 프롬프트 체이닝으로 복잡한 워크플로우를 자동화합니다.' }, en: { title: 'Automation', desc: 'Automate complex workflows with LangChain and prompt chaining.' } },
      { diff: 'advanced', time: '4-8주', ko: { title: '에이전트', desc: 'AI 에이전트를 설계하고 도구 사용, 멀티스텝 추론을 구현합니다.' }, en: { title: 'Agents', desc: 'Design AI agents and implement tool use and multi-step reasoning.' } },
    ],
  },
];

export default function Roadmap() {
  const { language } = useLanguage();
  const isKo = language === 'ko';
  const [activeTrack, setActiveTrack] = useState('ai-ml');

  const currentTrack = TRACKS.find(t => t.id === activeTrack);

  return (
    <div className="ck-page">
      <SEOHead
        title={isKo ? 'AI 학습 로드맵' : 'AI Learning Roadmap'}
        description={isKo ? 'AI/ML, 데이터 사이언스, 웹 개발, 프롬프트 엔지니어링 학습 로드맵' : 'Learning roadmaps for AI/ML, Data Science, Web Dev, Prompt Engineering'}
        path="/roadmap"
      />

      <div className="ck-layout">
        {/* Sidebar */}
        <aside className="ck-sidebar">
          <div className="ck-sb-header" style={{ marginLeft: 0 }}>
            <i className="fa-solid fa-route" />
            <span>{isKo ? '학습 로드맵' : 'Learning Roadmap'}</span>
          </div>
          <nav className="ck-sb-nav">
            {TRACKS.map(track => (
              <button
                key={track.id}
                className={`ck-nav-child ${activeTrack === track.id ? 'active' : ''}`}
                onClick={() => setActiveTrack(track.id)}
                style={{ marginLeft: 10, paddingLeft: 10 }}
              >
                <span className="ck-nc-icon"><i className={`fa-solid ${track.icon}`} /></span>
                <span>{isKo ? track.ko.title : track.en.title}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div className="ck-main">
          {currentTrack && (
            <>
              {/* Track Header */}
              <div className="ck-content-box" style={{ marginBottom: 20 }}>
                <div className="ck-content-header" style={{ borderLeft: `4px solid ${currentTrack.color}` }}>
                  <i className={`fa-solid ${currentTrack.icon}`} style={{ color: currentTrack.color }} />
                  <div className="ck-ch-text">
                    <h2>{isKo ? currentTrack.ko.title : currentTrack.en.title}</h2>
                    <p>{isKo ? currentTrack.ko.desc : currentTrack.en.desc}</p>
                  </div>
                </div>
                <div className="ck-content-body">
                  <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                    <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
                      <i className="fa-solid fa-stairs" style={{ marginRight: 6, color: currentTrack.color }} />
                      {isKo ? `${currentTrack.steps.length}단계` : `${currentTrack.steps.length} steps`}
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
                      <i className="fa-solid fa-clock" style={{ marginRight: 6, color: currentTrack.color }} />
                      {isKo
                        ? `총 ${currentTrack.steps.reduce((s, st) => s + parseInt(st.time), 0)}주+`
                        : `~${currentTrack.steps.reduce((s, st) => s + parseInt(st.time), 0)} weeks`}
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
                      <i className="fa-solid fa-signal" style={{ marginRight: 6, color: currentTrack.color }} />
                      {isKo ? '입문 → 고급' : 'Beginner → Advanced'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Steps */}
              <div style={{ position: 'relative', paddingLeft: 28 }}>
                {/* Vertical line */}
                <div style={{
                  position: 'absolute', left: 14, top: 0, bottom: 0, width: 2,
                  background: `linear-gradient(to bottom, ${currentTrack.color}, ${currentTrack.color}30)`,
                }} />

                {currentTrack.steps.map((step, idx) => {
                  const badge = DIFFICULTY_BADGE[step.diff];
                  const data = isKo ? step.ko : step.en;
                  return (
                    <div key={idx} style={{ position: 'relative', marginBottom: 20 }}>
                      {/* Step circle */}
                      <div style={{
                        position: 'absolute', left: -22, top: 18, width: 18, height: 18,
                        borderRadius: '50%', background: currentTrack.color, color: '#fff',
                        fontSize: 10, fontWeight: 700, display: 'flex', alignItems: 'center',
                        justifyContent: 'center', zIndex: 1,
                      }}>
                        {idx + 1}
                      </div>

                      {/* Step card */}
                      <div style={{
                        padding: 20, borderRadius: 12, border: '1px solid var(--border-light)',
                        background: 'var(--bg-white)', marginLeft: 8,
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>
                          <span style={{
                            fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 6,
                            background: badge.bg, color: badge.color,
                          }}>
                            {isKo ? badge.ko : badge.en}
                          </span>
                          <span style={{ fontSize: 12, color: 'var(--text-light)' }}>
                            <i className="fa-solid fa-clock" style={{ marginRight: 4 }} />
                            {step.time}
                          </span>
                        </div>
                        <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>
                          {data.title}
                        </h3>
                        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                          {data.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}

                {/* Completion badge */}
                <div style={{
                  position: 'relative', textAlign: 'center', padding: 16,
                  marginLeft: 8, borderRadius: 12,
                  background: `linear-gradient(135deg, ${currentTrack.color}10, ${currentTrack.color}05)`,
                  border: `1px solid ${currentTrack.color}30`,
                }}>
                  <div style={{
                    position: 'absolute', left: -22, top: '50%', transform: 'translateY(-50%)',
                    width: 18, height: 18, borderRadius: '50%', background: currentTrack.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1,
                  }}>
                    <i className="fa-solid fa-check" style={{ color: '#fff', fontSize: 9 }} />
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: currentTrack.color }}>
                    <i className="fa-solid fa-trophy" style={{ marginRight: 6 }} />
                    {isKo
                      ? `${currentTrack.ko.title} 학습 완료!`
                      : `${currentTrack.en.title} Complete!`}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
