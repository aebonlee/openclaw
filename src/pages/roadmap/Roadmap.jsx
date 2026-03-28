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
    id: 'ai-ml',
    icon: 'fa-brain',
    color: '#8B5CF6',
    ko: { title: 'AI/ML 엔지니어', desc: '인공지능과 머신러닝 모델을 설계, 개발, 배포하는 엔지니어가 되기 위한 학습 경로' },
    en: { title: 'AI/ML Engineer', desc: 'Learning path to become an engineer who designs, develops, and deploys AI and ML models' },
    steps: [
      { diff: 'beginner', time: '4-6주',
        ko: { title: 'Python 기초', desc: '변수, 자료형, 제어문, 함수, 클래스 등 Python 프로그래밍의 기본을 익힙니다. AI/ML의 모든 실습이 Python으로 진행됩니다.' },
        en: { title: 'Python Basics', desc: 'Learn Python fundamentals including variables, data types, control flow, functions, and classes. All AI/ML practice is done in Python.' } },
      { diff: 'beginner', time: '4-8주',
        ko: { title: '수학/통계 기초', desc: '선형대수, 미적분, 확률/통계 등 AI/ML에 필요한 수학적 기초를 학습합니다. 직관적 이해에 초점을 맞춥니다.' },
        en: { title: 'Math/Statistics Basics', desc: 'Study mathematical foundations for AI/ML: linear algebra, calculus, and probability/statistics. Focus on intuitive understanding.' } },
      { diff: 'elementary', time: '6-8주',
        ko: { title: 'ML 기초', desc: '지도학습(회귀, 분류), 비지도학습(클러스터링), 모델 평가 등 머신러닝의 핵심 개념을 Scikit-learn으로 실습합니다.' },
        en: { title: 'ML Fundamentals', desc: 'Practice core ML concepts with Scikit-learn: supervised learning (regression, classification), unsupervised learning (clustering), and model evaluation.' } },
      { diff: 'intermediate', time: '8-12주',
        ko: { title: '딥러닝', desc: 'PyTorch로 신경망, CNN, RNN 등을 구현합니다. 역전파, 옵티마이저, 정규화 기법을 깊이 이해합니다.' },
        en: { title: 'Deep Learning', desc: 'Implement neural networks, CNN, RNN with PyTorch. Deeply understand backpropagation, optimizers, and regularization techniques.' } },
      { diff: 'advanced', time: '8-12주',
        ko: { title: 'NLP/CV 전문', desc: '트랜스포머, BERT, GPT 등 최신 NLP 모델과 객체 탐지, 세그멘테이션 등 CV 기술을 학습합니다.' },
        en: { title: 'NLP/CV Specialization', desc: 'Study latest NLP models like Transformer, BERT, GPT and CV techniques like object detection and segmentation.' } },
      { diff: 'advanced', time: '4-8주',
        ko: { title: 'MLOps', desc: 'ML 파이프라인 자동화, 모델 모니터링, Docker/Kubernetes 배포, CI/CD까지 프로덕션 ML 시스템을 구축합니다.' },
        en: { title: 'MLOps', desc: 'Build production ML systems with pipeline automation, model monitoring, Docker/Kubernetes deployment, and CI/CD.' } },
    ],
  },
  {
    id: 'data-science',
    icon: 'fa-chart-line',
    color: '#10B981',
    ko: { title: '데이터 사이언스', desc: '데이터에서 인사이트를 도출하고 비즈니스 문제를 해결하는 데이터 사이언티스트 학습 경로' },
    en: { title: 'Data Science', desc: 'Learning path for data scientists who derive insights from data and solve business problems' },
    steps: [
      { diff: 'beginner', time: '4-6주',
        ko: { title: 'Python 기초', desc: 'Python 프로그래밍 기본을 학습합니다. 특히 리스트, 딕셔너리, 파일 I/O, 함수 등 데이터 처리에 필요한 핵심 문법에 집중합니다.' },
        en: { title: 'Python Basics', desc: 'Learn Python basics, focusing on core syntax for data processing: lists, dictionaries, file I/O, and functions.' } },
      { diff: 'elementary', time: '4-6주',
        ko: { title: '판다스/넘파이', desc: 'Pandas와 NumPy로 데이터를 효율적으로 로딩, 정제, 변환, 분석합니다. DataFrame 활용법을 집중적으로 학습합니다.' },
        en: { title: 'Pandas/NumPy', desc: 'Efficiently load, clean, transform, and analyze data with Pandas and NumPy. Focus on DataFrame usage.' } },
      { diff: 'intermediate', time: '6-8주',
        ko: { title: '통계학', desc: '기술통계, 추론통계, 가설검정, 회귀분석, A/B 테스트 등 데이터 분석에 필수적인 통계학을 학습합니다.' },
        en: { title: 'Statistics', desc: 'Study essential statistics for data analysis: descriptive stats, inferential stats, hypothesis testing, regression, and A/B testing.' } },
      { diff: 'intermediate', time: '4-6주',
        ko: { title: '데이터 시각화', desc: 'Matplotlib, Seaborn, Plotly로 데이터를 효과적으로 시각화합니다. 스토리텔링을 위한 차트 디자인도 배웁니다.' },
        en: { title: 'Data Visualization', desc: 'Effectively visualize data with Matplotlib, Seaborn, and Plotly. Also learn chart design for storytelling.' } },
      { diff: 'advanced', time: '8-10주',
        ko: { title: 'ML 실습', desc: '실제 데이터셋으로 예측 모델을 구축합니다. 피처 엔지니어링, 모델 선택, 하이퍼파라미터 튜닝, 교차 검증을 실습합니다.' },
        en: { title: 'ML Practice', desc: 'Build predictive models with real datasets. Practice feature engineering, model selection, hyperparameter tuning, and cross-validation.' } },
      { diff: 'advanced', time: '6-8주',
        ko: { title: '빅데이터', desc: 'Apache Spark, SQL 심화, 데이터 파이프라인 구축 등 대규모 데이터 처리와 분석 기술을 학습합니다.' },
        en: { title: 'Big Data', desc: 'Study large-scale data processing with Apache Spark, advanced SQL, and data pipeline construction.' } },
    ],
  },
  {
    id: 'web-dev',
    icon: 'fa-code',
    color: '#3B82F6',
    ko: { title: '웹 개발', desc: '프론트엔드부터 백엔드까지 풀스택 웹 개발자가 되기 위한 학습 경로' },
    en: { title: 'Web Development', desc: 'Learning path to become a full-stack web developer from frontend to backend' },
    steps: [
      { diff: 'beginner', time: '3-4주',
        ko: { title: 'HTML/CSS', desc: '웹 페이지의 구조(HTML)와 스타일(CSS)을 학습합니다. Flexbox, Grid, 반응형 디자인 등 현대 CSS 레이아웃을 익힙니다.' },
        en: { title: 'HTML/CSS', desc: 'Learn web page structure (HTML) and styling (CSS). Master modern CSS layouts including Flexbox, Grid, and responsive design.' } },
      { diff: 'elementary', time: '6-8주',
        ko: { title: 'JavaScript', desc: 'ES6+ 문법, DOM 조작, 이벤트 핸들링, 비동기 처리(Promise, async/await) 등 JavaScript 핵심을 학습합니다.' },
        en: { title: 'JavaScript', desc: 'Learn JavaScript essentials: ES6+ syntax, DOM manipulation, event handling, and async processing (Promise, async/await).' } },
      { diff: 'intermediate', time: '8-10주',
        ko: { title: 'React', desc: '컴포넌트, JSX, Hooks(useState, useEffect), Context API, React Router 등 React의 핵심 개념을 학습합니다.' },
        en: { title: 'React', desc: 'Study React core concepts: components, JSX, Hooks (useState, useEffect), Context API, and React Router.' } },
      { diff: 'intermediate', time: '6-8주',
        ko: { title: 'Node.js', desc: 'Express.js로 REST API를 구축하고 미들웨어, 인증, 에러 핸들링 등 백엔드 개발의 기본을 배웁니다.' },
        en: { title: 'Node.js', desc: 'Build REST APIs with Express.js and learn backend fundamentals: middleware, authentication, and error handling.' } },
      { diff: 'intermediate', time: '4-6주',
        ko: { title: 'DB/SQL', desc: 'PostgreSQL, MongoDB 등 데이터베이스 설계와 쿼리 작성을 학습합니다. ORM(Sequelize, Prisma) 사용법도 배웁니다.' },
        en: { title: 'DB/SQL', desc: 'Learn database design and query writing with PostgreSQL, MongoDB. Also study ORM usage (Sequelize, Prisma).' } },
      { diff: 'advanced', time: '4-6주',
        ko: { title: '배포', desc: 'Git, CI/CD, Docker, Vercel/AWS 등을 활용하여 웹 애플리케이션을 프로덕션 환경에 배포하는 방법을 학습합니다.' },
        en: { title: 'Deployment', desc: 'Learn to deploy web applications to production using Git, CI/CD, Docker, and Vercel/AWS.' } },
    ],
  },
  {
    id: 'prompt-eng',
    icon: 'fa-wand-magic-sparkles',
    color: '#F59E0B',
    ko: { title: '프롬프트 엔지니어링', desc: 'AI를 효과적으로 활용하여 업무 생산성을 극대화하는 프롬프트 엔지니어 학습 경로' },
    en: { title: 'Prompt Engineering', desc: 'Learning path for prompt engineers who maximize productivity through effective AI usage' },
    steps: [
      { diff: 'beginner', time: '2-3주',
        ko: { title: 'AI 이해', desc: 'LLM의 동작 원리, 토큰, 컨텍스트 윈도우, 온도 등 AI 모델의 기본 개념을 이해합니다. ChatGPT, Claude, Gemini를 비교합니다.' },
        en: { title: 'Understanding AI', desc: 'Understand LLM basics: how they work, tokens, context windows, temperature. Compare ChatGPT, Claude, and Gemini.' } },
      { diff: 'beginner', time: '2-3주',
        ko: { title: '기본 프롬프트', desc: '역할 부여, 명확한 지시, 출력 형식 지정 등 효과적인 프롬프트 작성의 기본 원칙을 학습합니다.' },
        en: { title: 'Basic Prompts', desc: 'Learn basic prompt writing principles: role assignment, clear instructions, and output format specification.' } },
      { diff: 'elementary', time: '3-4주',
        ko: { title: '고급 기법', desc: 'Chain of Thought, Few-shot Learning, Tree of Thought, 메타 프롬프팅 등 고급 프롬프트 전략을 학습합니다.' },
        en: { title: 'Advanced Techniques', desc: 'Study advanced prompting strategies: Chain of Thought, Few-shot Learning, Tree of Thought, and meta-prompting.' } },
      { diff: 'intermediate', time: '4-6주',
        ko: { title: 'API 활용', desc: 'OpenAI, Claude, Gemini API를 코드에서 활용하는 방법을 학습합니다. 시스템 프롬프트 설계와 API 파라미터 최적화를 배웁니다.' },
        en: { title: 'API Usage', desc: 'Learn to use OpenAI, Claude, and Gemini APIs in code. Study system prompt design and API parameter optimization.' } },
      { diff: 'intermediate', time: '4-6주',
        ko: { title: '자동화', desc: 'AI API를 활용하여 문서 요약, 데이터 분석, 코드 생성, 이메일 작성 등의 업무를 자동화하는 워크플로우를 구축합니다.' },
        en: { title: 'Automation', desc: 'Build workflows automating tasks like document summarization, data analysis, code generation, and email writing using AI APIs.' } },
      { diff: 'advanced', time: '6-8주',
        ko: { title: '에이전트', desc: 'LangChain, CrewAI 등을 활용하여 자율적으로 작업을 수행하는 AI 에이전트를 설계하고 구축합니다. RAG 시스템도 구현합니다.' },
        en: { title: 'Agents', desc: 'Design and build autonomous AI agents using LangChain, CrewAI, and more. Also implement RAG systems.' } },
    ],
  },
];

export default function Roadmap() {
  const { language } = useLanguage();
  const [activeTrack, setActiveTrack] = useState('ai-ml');
  const isKo = language === 'ko';

  const currentTrack = TRACKS.find(t => t.id === activeTrack);

  return (
    <div className="edu-hub-page">
      <SEOHead
        title={isKo ? 'AI 학습 로드맵' : 'AI Learning Roadmap'}
        description={isKo ? 'AI/ML 엔지니어, 데이터 사이언스, 웹 개발, 프롬프트 엔지니어링 학습 로드맵을 확인하세요.' : 'Explore learning roadmaps for AI/ML Engineer, Data Science, Web Development, and Prompt Engineering.'}
        path="/roadmap"
      />

      {/* Hero */}
      <div className="edu-hub-hero">
        <div className="container">
          <h1>
            <i className="fa-solid fa-route" style={{ marginRight: 12 }} />
            {isKo ? 'AI 학습 로드맵' : 'AI Learning Roadmap'}
          </h1>
          <p>{isKo
            ? '목표에 맞는 학습 경로를 선택하고, 단계별로 체계적으로 학습하세요.'
            : 'Choose a learning path that matches your goals and study step by step.'}</p>
          <div className="edu-hub-stats">
            <div className="edu-hub-stat">
              <i className="fa-solid fa-road" />
              <span className="edu-hub-stat-value">{TRACKS.length}</span>
              <span className="edu-hub-stat-label">{isKo ? '학습 트랙' : 'Learning Tracks'}</span>
            </div>
            <div className="edu-hub-stat">
              <i className="fa-solid fa-stairs" />
              <span className="edu-hub-stat-value">{TRACKS.reduce((sum, t) => sum + t.steps.length, 0)}</span>
              <span className="edu-hub-stat-label">{isKo ? '총 학습 단계' : 'Total Steps'}</span>
            </div>
            <div className="edu-hub-stat">
              <i className="fa-solid fa-signal" />
              <span className="edu-hub-stat-value">4</span>
              <span className="edu-hub-stat-label">{isKo ? '난이도 단계' : 'Difficulty Levels'}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: 60 }}>
        {/* Track Tabs */}
        <div className="edu-category-tabs" style={{ marginBottom: 32 }}>
          {TRACKS.map(track => (
            <button
              key={track.id}
              className={`board-category-filter-btn ${activeTrack === track.id ? 'active' : ''}`}
              onClick={() => setActiveTrack(track.id)}
            >
              <i className={`fa-solid ${track.icon}`} style={{ marginRight: 6 }} />
              {isKo ? track.ko.title : track.en.title}
            </button>
          ))}
        </div>

        {/* Track Header */}
        {currentTrack && (
          <div style={{
            padding: 24, borderRadius: 16,
            background: `linear-gradient(135deg, ${currentTrack.color}10, ${currentTrack.color}05)`,
            border: `1px solid ${currentTrack.color}30`,
            marginBottom: 32, display: 'flex', alignItems: 'center', gap: 16,
          }}>
            <div style={{
              width: 56, height: 56, borderRadius: 14,
              background: `${currentTrack.color}15`, display: 'flex',
              alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <i className={`fa-solid ${currentTrack.icon}`} style={{ fontSize: 24, color: currentTrack.color }} />
            </div>
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-primary)', margin: 0, marginBottom: 4 }}>
                {isKo ? currentTrack.ko.title : currentTrack.en.title}
              </h2>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                {isKo ? currentTrack.ko.desc : currentTrack.en.desc}
              </p>
            </div>
          </div>
        )}

        {/* Timeline */}
        {currentTrack && (
          <div style={{ position: 'relative', paddingLeft: 40 }}>
            {/* Vertical Line */}
            <div style={{
              position: 'absolute', left: 19, top: 0, bottom: 0,
              width: 2, background: `linear-gradient(to bottom, ${currentTrack.color}, ${currentTrack.color}30)`,
            }} />

            {currentTrack.steps.map((step, idx) => {
              const diff = DIFFICULTY_BADGE[step.diff];
              return (
                <div key={idx} style={{
                  position: 'relative', marginBottom: idx < currentTrack.steps.length - 1 ? 24 : 0,
                }}>
                  {/* Step Number Circle */}
                  <div style={{
                    position: 'absolute', left: -40, top: 20,
                    width: 40, height: 40, borderRadius: '50%',
                    background: currentTrack.color, color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: 16, zIndex: 1,
                    boxShadow: `0 0 0 4px var(--bg-white), 0 0 0 6px ${currentTrack.color}40`,
                  }}>
                    {idx + 1}
                  </div>

                  {/* Step Card */}
                  <div style={{
                    padding: 24, borderRadius: 14,
                    border: '1px solid var(--border-light)',
                    background: 'var(--bg-white)',
                    marginLeft: 16,
                    transition: 'box-shadow 0.2s ease',
                  }}>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      marginBottom: 10, flexWrap: 'wrap',
                    }}>
                      <h3 style={{
                        fontSize: 17, fontWeight: 700,
                        color: 'var(--text-primary)', margin: 0,
                      }}>
                        {isKo ? step.ko.title : step.en.title}
                      </h3>
                      <span style={{
                        fontSize: 11, padding: '3px 10px', borderRadius: 6,
                        background: diff.bg, color: diff.color, fontWeight: 600,
                      }}>
                        {isKo ? diff.ko : diff.en}
                      </span>
                      <span style={{
                        fontSize: 12, color: 'var(--text-light)',
                        display: 'flex', alignItems: 'center', gap: 4,
                        marginLeft: 'auto',
                      }}>
                        <i className="fa-regular fa-clock" style={{ fontSize: 11 }} />
                        {step.time}
                      </span>
                    </div>
                    <p style={{
                      fontSize: 14, lineHeight: 1.7,
                      color: 'var(--text-secondary)', margin: 0,
                    }}>
                      {isKo ? step.ko.desc : step.en.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Completion Badge */}
            <div style={{
              position: 'relative', marginTop: 24, textAlign: 'center',
            }}>
              <div style={{
                position: 'absolute', left: -40, top: 10,
                width: 40, height: 40, borderRadius: '50%',
                background: '#10B981', color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 1,
                boxShadow: '0 0 0 4px var(--bg-white), 0 0 0 6px #10B98140',
              }}>
                <i className="fa-solid fa-flag-checkered" style={{ fontSize: 16 }} />
              </div>
              <div style={{
                marginLeft: 16, padding: '16px 24px', borderRadius: 12,
                background: 'linear-gradient(135deg, #10B98110, #10B98105)',
                border: '1px solid #10B98130',
              }}>
                <p style={{ fontSize: 15, fontWeight: 600, color: '#059669', margin: 0 }}>
                  {isKo
                    ? `${currentTrack.ko.title} 학습 경로 완료!`
                    : `${currentTrack.en.title} Learning Path Complete!`}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
