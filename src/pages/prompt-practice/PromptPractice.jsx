import { useState, lazy, Suspense, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const PromptGalleryContent = lazy(() => import('../prompt-gallery/PromptGallery').then(m => ({ default: m.GalleryContent })));

const SIDEBAR_SECTIONS = [
  { id: 'basics', icon: 'fa-pen', color: 'green', ko: '기본 프롬프트', en: 'Basic Prompts' },
  { id: 'advanced', icon: 'fa-wand-magic-sparkles', color: 'blue', ko: '고급 기법', en: 'Advanced Techniques' },
  { id: 'practice', icon: 'fa-laptop-code', color: 'purple', ko: '실습', en: 'Practice' },
  { id: 'quiz', icon: 'fa-question-circle', color: 'orange', ko: '퀴즈', en: 'Quiz' },
];

const GALLERY_CATEGORIES = [
  { id: 'all', ko: '전체', en: 'All', icon: 'fa-border-all' },
  { id: 'education', ko: '교육/학습', en: 'Education', icon: 'fa-graduation-cap' },
  { id: 'coding', ko: '코딩/개발', en: 'Coding', icon: 'fa-code' },
  { id: 'writing', ko: '글쓰기/콘텐츠', en: 'Writing', icon: 'fa-pen-fancy' },
  { id: 'business', ko: '비즈니스', en: 'Business', icon: 'fa-briefcase' },
  { id: 'data', ko: '데이터 분석', en: 'Data Analysis', icon: 'fa-chart-bar' },
  { id: 'creative', ko: '창작/아이디어', en: 'Creative', icon: 'fa-lightbulb' },
  { id: 'research', ko: '연구/분석', en: 'Research', icon: 'fa-flask' },
  { id: 'productivity', ko: '업무 생산성', en: 'Productivity', icon: 'fa-rocket' },
];

const BASIC_EXAMPLES = [
  {
    ko: {
      title: '역할 지정 (Role Assignment)',
      bad: '마케팅 전략을 알려줘',
      good: '당신은 10년 경력의 디지털 마케팅 전문가입니다. 스타트업을 위한 SNS 마케팅 전략을 예산별로 3가지 제안해 주세요. 각 전략에 예상 ROI와 실행 타임라인을 포함해 주세요.',
      explanation: '역할을 부여하면 AI가 해당 전문가의 관점에서 답변합니다. 구체적인 조건을 추가하면 더 실용적인 결과를 얻을 수 있습니다.',
    },
    en: {
      title: 'Role Assignment',
      bad: 'Tell me about marketing strategies',
      good: 'You are a digital marketing expert with 10 years of experience. Suggest 3 SNS marketing strategies for a startup, organized by budget. Include expected ROI and execution timeline for each strategy.',
      explanation: 'Assigning a role makes AI respond from that expert\'s perspective. Adding specific conditions yields more practical results.',
    },
  },
  {
    ko: {
      title: '구조화된 출력 요청',
      bad: 'Python에 대해 알려줘',
      good: 'Python 프로그래밍 언어에 대해 다음 구조로 설명해 주세요:\n1. 개요 (2~3문장)\n2. 주요 특징 (5가지, 각각 한 줄 설명)\n3. 활용 분야 (표 형태: 분야 | 대표 라이브러리 | 설명)\n4. 학습 로드맵 (초급→중급→고급, 각 단계별 추천 학습 내용)\n5. 참고 자료 (공식 문서, 온라인 강좌 등)',
      explanation: '출력 형식을 미리 지정하면 체계적이고 가독성 높은 답변을 받을 수 있습니다. 표, 목록, 단계별 구조를 활용하세요.',
    },
    en: {
      title: 'Structured Output Request',
      bad: 'Tell me about Python',
      good: 'Explain Python programming language in this structure:\n1. Overview (2-3 sentences)\n2. Key Features (5 items, one-line each)\n3. Application Areas (table: Field | Key Library | Description)\n4. Learning Roadmap (Beginner→Intermediate→Advanced with recommendations)\n5. References (official docs, online courses)',
      explanation: 'Specifying the output format in advance gets you systematic, readable answers. Use tables, lists, and step-by-step structures.',
    },
  },
  {
    ko: {
      title: '제약 조건 명시',
      bad: '에세이 써줘',
      good: '다음 조건에 맞는 에세이를 작성해 주세요:\n- 주제: AI가 교육에 미치는 영향\n- 분량: 800~1000자\n- 대상: 대학교 교수\n- 톤: 학술적이면서도 접근하기 쉬운\n- 구조: 서론, 본론(3개 핵심 포인트), 결론\n- 반드시 포함: 구체적 사례 2개, 통계 데이터 인용',
      explanation: '분량, 대상, 톤, 구조 등 제약 조건을 명확히 하면 원하는 결과에 가깝게 출력됩니다.',
    },
    en: {
      title: 'Specifying Constraints',
      bad: 'Write an essay',
      good: 'Write an essay with these requirements:\n- Topic: Impact of AI on education\n- Length: 800-1000 words\n- Audience: University professors\n- Tone: Academic yet accessible\n- Structure: Introduction, body (3 key points), conclusion\n- Must include: 2 specific examples, statistical data citations',
      explanation: 'Clearly defining constraints like length, audience, tone, and structure gets results closer to what you want.',
    },
  },
];

const TECHNIQUE_CARDS = [
  {
    id: 'zero-shot',
    icon: 'fa-bolt',
    color: '#10B981',
    ko: {
      title: 'Zero-shot 프롬프팅',
      desc: '예시 없이 직접 질문하는 가장 기본적인 방식입니다.',
      example: '다음 문장의 감성을 분석해 주세요: "이 영화는 정말 감동적이었어요"\n\n결과: 긍정적 (Positive)',
      when: '간단한 작업, AI가 이미 잘 수행하는 태스크에 적합',
    },
    en: {
      title: 'Zero-shot Prompting',
      desc: 'The most basic approach - asking directly without examples.',
      example: 'Analyze the sentiment of this sentence: "This movie was truly touching"\n\nResult: Positive',
      when: 'Suitable for simple tasks that AI already handles well',
    },
  },
  {
    id: 'few-shot',
    icon: 'fa-list-ol',
    color: '#3B82F6',
    ko: {
      title: 'Few-shot 프롬프팅',
      desc: '몇 가지 예시를 제공하여 AI가 패턴을 학습하도록 합니다.',
      example: '다음 형식으로 감성을 분류해 주세요:\n\n입력: "맛있는 식사였습니다" → 긍정\n입력: "서비스가 형편없었어요" → 부정\n입력: "그냥 보통이었어요" → 중립\n\n입력: "직원이 매우 친절했습니다" → ?',
      when: '특정 형식이나 패턴을 따라야 할 때, AI가 맥락을 이해해야 할 때',
    },
    en: {
      title: 'Few-shot Prompting',
      desc: 'Provide examples so AI learns the pattern to follow.',
      example: 'Classify sentiment in this format:\n\nInput: "The meal was delicious" → Positive\nInput: "The service was terrible" → Negative\nInput: "It was just average" → Neutral\n\nInput: "The staff was very kind" → ?',
      when: 'When specific formats or patterns must be followed, when AI needs context',
    },
  },
  {
    id: 'cot',
    icon: 'fa-brain',
    color: '#8B5CF6',
    ko: {
      title: 'Chain of Thought (CoT)',
      desc: '단계별 사고 과정을 거치도록 유도하여 복잡한 문제를 해결합니다.',
      example: '문제: 상점에 사과가 23개 있었습니다. 8개를 팔고 15개를 추가로 들여왔습니다. 남은 사과는?\n\n단계별로 생각해 봅시다:\n1단계: 초기 사과 = 23개\n2단계: 8개 판매 후 = 23 - 8 = 15개\n3단계: 15개 추가 = 15 + 15 = 30개\n\n답: 30개',
      when: '수학 문제, 논리적 추론, 복잡한 분석이 필요한 경우',
    },
    en: {
      title: 'Chain of Thought (CoT)',
      desc: 'Guide step-by-step reasoning to solve complex problems.',
      example: 'Problem: A store had 23 apples. They sold 8 and received 15 more. How many remain?\n\nLet\'s think step by step:\nStep 1: Initial apples = 23\nStep 2: After selling 8 = 23 - 8 = 15\nStep 3: Adding 15 = 15 + 15 = 30\n\nAnswer: 30',
      when: 'Math problems, logical reasoning, complex analysis',
    },
  },
  {
    id: 'role-play',
    icon: 'fa-masks-theater',
    color: '#F59E0B',
    ko: {
      title: 'Role Playing',
      desc: 'AI에게 특정 역할을 부여하여 전문적인 관점에서 답변을 받습니다.',
      example: '당신은 시니어 소프트웨어 엔지니어입니다. 주니어 개발자가 작성한 다음 코드를 리뷰해 주세요. 개선점을 우선순위별로 정리하고, 모범 사례(Best Practice)를 함께 제시해 주세요.',
      when: '전문가 관점이 필요할 때, 특정 상황을 시뮬레이션할 때',
    },
    en: {
      title: 'Role Playing',
      desc: 'Assign a specific role to AI to get expert-perspective responses.',
      example: 'You are a senior software engineer. Please review the following code written by a junior developer. Organize improvement suggestions by priority and provide best practices.',
      when: 'When expert perspective is needed, when simulating specific situations',
    },
  },
];

const PRACTICE_CHALLENGES = {
  ko: [
    {
      title: '이메일 작성 프롬프트',
      task: '프로젝트 지연을 알리는 비즈니스 이메일을 작성하는 프롬프트를 만드세요',
      hint: '역할, 톤, 수신자, 포함할 내용(원인, 대안, 새 일정)을 명시하세요',
      sample: '당신은 IT 프로젝트 매니저입니다. 클라이언트에게 프로젝트 납기 지연을 알리는 공식 이메일을 작성해 주세요.\n- 톤: 전문적이고 정중한\n- 지연 사유: 예상치 못한 기술적 이슈\n- 포함 내용: 사과, 원인 설명, 대안 제시, 수정된 일정\n- 분량: 200~300자',
    },
    {
      title: '데이터 분석 프롬프트',
      task: 'CSV 데이터에서 인사이트를 추출하는 프롬프트를 설계하세요',
      hint: '데이터 형식, 분석 목적, 원하는 출력 형태를 명확히 하세요',
      sample: '당신은 데이터 분석 전문가입니다. 다음 판매 데이터(CSV)를 분석해 주세요.\n\n분석 요청:\n1. 월별 매출 추이 분석\n2. 상위 5개 인기 상품 도출\n3. 요일별 구매 패턴 분석\n4. 이상치(Outlier) 탐지\n\n결과 형식: 각 항목별 표와 핵심 인사이트 요약',
    },
    {
      title: '코드 리팩토링 프롬프트',
      task: '코드 리팩토링을 요청하는 프롬프트를 작성하세요',
      hint: '언어, 코딩 스타일, 개선 방향, 유지해야 할 기능을 지정하세요',
      sample: '당신은 시니어 Python 개발자입니다. 다음 코드를 리팩토링해 주세요.\n\n요구사항:\n- PEP 8 스타일 가이드 준수\n- 타입 힌트 추가\n- 에러 핸들링 개선\n- 함수 분리 (Single Responsibility)\n- 기존 기능은 100% 유지\n\n변경 사항마다 이유를 설명해 주세요.',
    },
  ],
  en: [
    {
      title: 'Email Writing Prompt',
      task: 'Create a prompt for writing a business email about a project delay',
      hint: 'Specify role, tone, recipient, content to include (cause, alternatives, new schedule)',
      sample: 'You are an IT project manager. Write a formal email to a client notifying them of a project delivery delay.\n- Tone: Professional and courteous\n- Delay reason: Unexpected technical issues\n- Include: Apology, cause explanation, alternatives, revised schedule\n- Length: 200-300 words',
    },
    {
      title: 'Data Analysis Prompt',
      task: 'Design a prompt for extracting insights from CSV data',
      hint: 'Clarify data format, analysis purpose, desired output format',
      sample: 'You are a data analysis expert. Analyze the following sales data (CSV).\n\nAnalysis requests:\n1. Monthly revenue trend analysis\n2. Top 5 popular products\n3. Day-of-week purchase pattern analysis\n4. Outlier detection\n\nResult format: Table and key insight summary for each item',
    },
    {
      title: 'Code Refactoring Prompt',
      task: 'Write a prompt requesting code refactoring',
      hint: 'Specify language, coding style, improvement direction, features to maintain',
      sample: 'You are a senior Python developer. Please refactor the following code.\n\nRequirements:\n- Follow PEP 8 style guide\n- Add type hints\n- Improve error handling\n- Separate functions (Single Responsibility)\n- Maintain 100% of existing functionality\n\nExplain the reason for each change.',
    },
  ],
};

const QUIZ_QUESTIONS = {
  ko: [
    {
      q: '다음 중 Few-shot 프롬프팅의 올바른 설명은?',
      options: [
        '예시 없이 바로 질문하는 방식',
        '몇 가지 예시를 제공하여 AI가 패턴을 학습하도록 하는 방식',
        '단계별 추론을 요구하는 방식',
        'AI에게 역할을 부여하는 방식',
      ],
      answer: 1,
    },
    {
      q: '"단계별로 생각해 보세요(Let\'s think step by step)"와 관련된 기법은?',
      options: ['Zero-shot', 'Few-shot', 'Chain of Thought', 'Role Playing'],
      answer: 2,
    },
    {
      q: '프롬프트 작성 시 가장 먼저 해야 할 것은?',
      options: [
        'AI에게 역할을 부여한다',
        '예시를 3개 이상 제공한다',
        '원하는 결과를 명확하게 정의한다',
        '최대한 긴 프롬프트를 작성한다',
      ],
      answer: 2,
    },
    {
      q: '다음 중 좋은 프롬프트의 특징이 아닌 것은?',
      options: [
        '구체적이고 명확한 지시',
        '적절한 맥락 정보 제공',
        '가능한 한 모호하게 작성',
        '원하는 출력 형식 지정',
      ],
      answer: 2,
    },
    {
      q: '수학 문제나 논리적 추론에 가장 적합한 프롬프트 기법은?',
      options: ['Zero-shot', 'Few-shot', 'Chain of Thought', 'Role Playing'],
      answer: 2,
    },
  ],
  en: [
    {
      q: 'Which correctly describes Few-shot prompting?',
      options: [
        'Asking directly without examples',
        'Providing examples so AI learns the pattern',
        'Requiring step-by-step reasoning',
        'Assigning a role to AI',
      ],
      answer: 1,
    },
    {
      q: 'Which technique is associated with "Let\'s think step by step"?',
      options: ['Zero-shot', 'Few-shot', 'Chain of Thought', 'Role Playing'],
      answer: 2,
    },
    {
      q: 'What should be done first when writing a prompt?',
      options: [
        'Assign a role to AI',
        'Provide at least 3 examples',
        'Clearly define the desired result',
        'Write the longest prompt possible',
      ],
      answer: 2,
    },
    {
      q: 'Which is NOT a characteristic of a good prompt?',
      options: [
        'Specific, clear instructions',
        'Providing appropriate context',
        'Writing as vaguely as possible',
        'Specifying desired output format',
      ],
      answer: 2,
    },
    {
      q: 'Which prompting technique is best for math and logical reasoning?',
      options: ['Zero-shot', 'Few-shot', 'Chain of Thought', 'Role Playing'],
      answer: 2,
    },
  ],
};

export default function PromptPractice() {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const [activeSection, setActiveSection] = useState('basics');
  const [expandedExample, setExpandedExample] = useState(0);
  const [expandedChallenge, setExpandedChallenge] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState(Array(5).fill(-1));
  const [showQuizResults, setShowQuizResults] = useState(false);
  const [promptInput, setPromptInput] = useState('');
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryCategory, setGalleryCategory] = useState('all');

  const quizQuestions = isKo ? QUIZ_QUESTIONS.ko : QUIZ_QUESTIONS.en;
  const quizScore = quizAnswers.reduce((sum, ans, idx) => sum + (ans === quizQuestions[idx].answer ? 1 : 0), 0);

  return (
    <div className="ck-page">
      <SEOHead
        title={isKo ? '프롬프트 실습' : 'Prompt Practice'}
        description={isKo ? 'AI 프롬프트 엔지니어링을 배우고 실습하세요' : 'Learn and practice AI prompt engineering'}
        path="/prompt-practice"
      />

      <button className="ck-mobile-toggle" onClick={() => {}}>
        <i className="fa-solid fa-bars" />
        <span>{isKo ? '메뉴' : 'Menu'}</span>
      </button>

      <div className="ck-layout">
        {/* Sidebar */}
        <aside className="ck-sidebar">
          <div className="ck-sb-header">
            <i className="fa-solid fa-wand-magic-sparkles" />
            <span>{isKo ? '프롬프트 실습' : 'Prompt Practice'}</span>
          </div>
          <nav className="ck-sb-nav">
            {SIDEBAR_SECTIONS.map(sec => (
              <button
                key={sec.id}
                className={`ck-nav-child ${activeSection === sec.id ? 'active' : ''}`}
                onClick={() => setActiveSection(sec.id)}
              >
                <span className="ck-nc-icon"><i className={`fa-solid ${sec.icon}`} /></span>
                <span>{isKo ? sec.ko : sec.en}</span>
              </button>
            ))}

            {/* Gallery section with sub-categories */}
            <div style={{ borderTop: '1px solid var(--border-light)', marginTop: 8, paddingTop: 8 }}>
              <div className={`ck-nav-group ${activeSection === 'gallery' ? 'active' : ''}`}>
                <button
                  className="ck-nav-parent ck-np--blue"
                  onClick={() => {
                    setGalleryOpen(!galleryOpen);
                    setActiveSection('gallery');
                  }}
                >
                  <span className="ck-np-icon"><i className="fa-solid fa-gem" /></span>
                  <span>{isKo ? '프롬프트 갤러리' : 'Prompt Gallery'}</span>
                  <i className={`fa-solid fa-chevron-down ck-nav-arrow ${galleryOpen ? 'open' : ''}`} />
                </button>
                {galleryOpen && (
                  <ul className="ck-nav-children">
                    {GALLERY_CATEGORIES.map(cat => (
                      <li key={cat.id}>
                        <button
                          className={`ck-nav-child ${activeSection === 'gallery' && galleryCategory === cat.id ? 'active' : ''}`}
                          onClick={() => {
                            setGalleryCategory(cat.id);
                            setActiveSection('gallery');
                          }}
                        >
                          <span className="ck-nc-icon"><i className={`fa-solid ${cat.icon}`} /></span>
                          <span>{isKo ? cat.ko : cat.en}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="ck-main">
          {/* Basics */}
          {activeSection === 'basics' && (
            <>
              <div className="ck-content-box">
                <div className="ck-content-header ck-ch--green">
                  <i className="fa-solid fa-pen" />
                  <div className="ck-ch-text">
                    <h2>{isKo ? '기본 프롬프트 작성법' : 'Basic Prompt Writing'}</h2>
                    <p>{isKo ? 'Before & After 예시로 배우는 효과적인 프롬프트' : 'Learn effective prompting with Before & After examples'}</p>
                  </div>
                </div>
                <div className="ck-content-body">
                  {(isKo ? BASIC_EXAMPLES : BASIC_EXAMPLES).map((ex, idx) => {
                    const content = isKo ? ex.ko : ex.en;
                    return (
                      <div key={idx} style={{
                        marginBottom: 24, paddingBottom: 24,
                        borderBottom: idx < BASIC_EXAMPLES.length - 1 ? '1px solid var(--border-light)' : 'none'
                      }}>
                        <button
                          onClick={() => setExpandedExample(expandedExample === idx ? -1 : idx)}
                          style={{
                            width: '100%', textAlign: 'left', background: 'none', border: 'none',
                            cursor: 'pointer', fontFamily: 'inherit', padding: 0,
                            display: 'flex', alignItems: 'center', gap: 8
                          }}
                        >
                          <i className={`fa-solid fa-chevron-${expandedExample === idx ? 'down' : 'right'}`}
                            style={{ color: 'var(--primary-blue)', fontSize: 12, width: 16 }} />
                          <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)' }}>
                            {idx + 1}. {content.title}
                          </span>
                        </button>
                        {expandedExample === idx && (
                          <div style={{ marginTop: 16, marginLeft: 24 }}>
                            {/* Bad Example */}
                            <div className="pp-example pp-example-bad" style={{
                              padding: 16, borderRadius: 8, marginBottom: 12,
                              background: '#FEF2F2', border: '1px solid #FECACA'
                            }}>
                              <div style={{ fontSize: 12, fontWeight: 700, color: '#DC2626', marginBottom: 8 }}>
                                <i className="fa-solid fa-times-circle" style={{ marginRight: 6 }} />
                                {isKo ? '개선 전' : 'Before'}
                              </div>
                              <pre style={{
                                fontSize: 13, color: '#7F1D1D', whiteSpace: 'pre-wrap',
                                fontFamily: 'inherit', margin: 0
                              }}>{content.bad}</pre>
                            </div>
                            {/* Good Example */}
                            <div className="pp-example pp-example-good" style={{
                              padding: 16, borderRadius: 8, marginBottom: 12,
                              background: '#F0FDF4', border: '1px solid #BBF7D0'
                            }}>
                              <div style={{ fontSize: 12, fontWeight: 700, color: '#16A34A', marginBottom: 8 }}>
                                <i className="fa-solid fa-check-circle" style={{ marginRight: 6 }} />
                                {isKo ? '개선 후' : 'After'}
                              </div>
                              <pre style={{
                                fontSize: 13, color: '#14532D', whiteSpace: 'pre-wrap',
                                fontFamily: 'inherit', margin: 0
                              }}>{content.good}</pre>
                            </div>
                            {/* Explanation */}
                            <div style={{
                              padding: 12, borderRadius: 8, background: 'var(--bg-light-gray)',
                              fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6
                            }}>
                              <i className="fa-solid fa-lightbulb" style={{ color: '#F59E0B', marginRight: 6 }} />
                              {content.explanation}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {/* Advanced Techniques */}
          {activeSection === 'advanced' && (
            <div className="ck-content-box">
              <div className="ck-content-header ck-ch--blue">
                <i className="fa-solid fa-wand-magic-sparkles" />
                <div className="ck-ch-text">
                  <h2>{isKo ? '고급 프롬프트 기법' : 'Advanced Prompt Techniques'}</h2>
                  <p>{isKo ? '프롬프트 엔지니어링의 핵심 기법을 마스터하세요' : 'Master core prompt engineering techniques'}</p>
                </div>
              </div>
              <div className="ck-content-body">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
                  {TECHNIQUE_CARDS.map(card => {
                    const content = isKo ? card.ko : card.en;
                    return (
                      <div key={card.id} className="pp-technique-card" style={{
                        padding: 24, borderRadius: 12,
                        border: '1px solid var(--border-light)', background: 'var(--bg-white)'
                      }}>
                        <div style={{
                          width: 44, height: 44, borderRadius: 10,
                          background: `${card.color}15`, display: 'flex',
                          alignItems: 'center', justifyContent: 'center', marginBottom: 16
                        }}>
                          <i className={`fa-solid ${card.icon}`} style={{ fontSize: 18, color: card.color }} />
                        </div>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>
                          {content.title}
                        </h3>
                        <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 12 }}>
                          {content.desc}
                        </p>
                        <pre className="theory-code" style={{ fontSize: 12, marginBottom: 12 }}>
                          {content.example}
                        </pre>
                        <div style={{
                          padding: '8px 12px', borderRadius: 6,
                          background: `${card.color}10`, fontSize: 12, color: card.color
                        }}>
                          <i className="fa-solid fa-clock" style={{ marginRight: 6 }} />
                          {content.when}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Practice */}
          {activeSection === 'practice' && (
            <>
              {/* Prompt Analyzer */}
              <div className="ck-content-box" style={{ marginBottom: 20 }}>
                <div className="ck-content-header ck-ch--purple">
                  <i className="fa-solid fa-microscope" />
                  <div className="ck-ch-text">
                    <h2>{isKo ? '프롬프트 분석기' : 'Prompt Analyzer'}</h2>
                    <p>{isKo ? '프롬프트를 입력하면 구성 요소를 분석합니다' : 'Enter a prompt to analyze its components'}</p>
                  </div>
                </div>
                <div className="ck-content-body">
                  <textarea
                    value={promptInput}
                    onChange={e => setPromptInput(e.target.value)}
                    placeholder={isKo ? '분석할 프롬프트를 입력하세요...' : 'Enter a prompt to analyze...'}
                    style={{
                      width: '100%', minHeight: 120, padding: 16, fontSize: 14,
                      border: '1px solid var(--border-light)', borderRadius: 8,
                      fontFamily: 'inherit', resize: 'vertical', marginBottom: 16
                    }}
                  />
                  {promptInput.length > 0 && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 12 }}>
                      <div className="pp-analysis-item" style={{
                        padding: 16, borderRadius: 8, background: 'var(--bg-light-gray)', textAlign: 'center'
                      }}>
                        <div style={{ fontSize: 24, fontWeight: 800, color: 'var(--primary-blue)' }}>
                          {promptInput.length}
                        </div>
                        <div style={{ fontSize: 12, color: 'var(--text-light)', marginTop: 4 }}>
                          {isKo ? '글자 수' : 'Characters'}
                        </div>
                      </div>
                      <div className="pp-analysis-item" style={{
                        padding: 16, borderRadius: 8, background: 'var(--bg-light-gray)', textAlign: 'center'
                      }}>
                        <div style={{ fontSize: 24, fontWeight: 800, color: '#10B981' }}>
                          {promptInput.split('\n').filter(l => l.trim()).length}
                        </div>
                        <div style={{ fontSize: 12, color: 'var(--text-light)', marginTop: 4 }}>
                          {isKo ? '줄 수' : 'Lines'}
                        </div>
                      </div>
                      <div className="pp-analysis-item" style={{
                        padding: 16, borderRadius: 8, background: 'var(--bg-light-gray)', textAlign: 'center'
                      }}>
                        <div style={{ fontSize: 24, fontWeight: 800, color: '#8B5CF6' }}>
                          {/역할|role|당신은|you are/i.test(promptInput) ? 'O' : 'X'}
                        </div>
                        <div style={{ fontSize: 12, color: 'var(--text-light)', marginTop: 4 }}>
                          {isKo ? '역할 포함' : 'Has Role'}
                        </div>
                      </div>
                      <div className="pp-analysis-item" style={{
                        padding: 16, borderRadius: 8, background: 'var(--bg-light-gray)', textAlign: 'center'
                      }}>
                        <div style={{ fontSize: 24, fontWeight: 800, color: '#F59E0B' }}>
                          {/예시|example|예를 들|for example/i.test(promptInput) ? 'O' : 'X'}
                        </div>
                        <div style={{ fontSize: 12, color: 'var(--text-light)', marginTop: 4 }}>
                          {isKo ? '예시 포함' : 'Has Examples'}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Practice Challenges */}
              <div className="ck-content-box">
                <div className="ck-content-header">
                  <i className="fa-solid fa-laptop-code" />
                  <h2>{isKo ? '실습 과제' : 'Practice Challenges'}</h2>
                </div>
                <div className="ck-content-body">
                  {(isKo ? PRACTICE_CHALLENGES.ko : PRACTICE_CHALLENGES.en).map((challenge, idx) => (
                    <div key={idx} style={{
                      marginBottom: 20, paddingBottom: 20,
                      borderBottom: idx < 2 ? '1px solid var(--border-light)' : 'none'
                    }}>
                      <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>
                        <span style={{ color: 'var(--primary-blue)', marginRight: 6 }}>#{idx + 1}</span>
                        {challenge.title}
                      </h3>
                      <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 8 }}>{challenge.task}</p>
                      <div style={{
                        padding: '8px 12px', borderRadius: 6, marginBottom: 12,
                        background: '#FEF3C7', fontSize: 13, color: '#92400E'
                      }}>
                        <i className="fa-solid fa-lightbulb" style={{ marginRight: 6 }} />
                        {isKo ? '힌트: ' : 'Hint: '}{challenge.hint}
                      </div>
                      <button
                        onClick={() => setExpandedChallenge(expandedChallenge === idx ? null : idx)}
                        style={{
                          padding: '6px 14px', fontSize: 13, fontWeight: 500,
                          border: '1px solid var(--border-light)', borderRadius: 6,
                          background: 'var(--bg-white)', color: 'var(--text-secondary)',
                          cursor: 'pointer', fontFamily: 'inherit'
                        }}
                      >
                        <i className={`fa-solid fa-${expandedChallenge === idx ? 'eye-slash' : 'eye'}`} style={{ marginRight: 6 }} />
                        {isKo ? (expandedChallenge === idx ? '정답 숨기기' : '정답 보기') : (expandedChallenge === idx ? 'Hide Answer' : 'Show Answer')}
                      </button>
                      {expandedChallenge === idx && (
                        <pre className="theory-code" style={{ marginTop: 12, fontSize: 12 }}>
                          {challenge.sample}
                        </pre>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Quiz */}
          {activeSection === 'quiz' && (
            <div className="ck-content-box">
              <div className="ck-content-header ck-ch--orange">
                <i className="fa-solid fa-question-circle" />
                <div className="ck-ch-text">
                  <h2>{isKo ? '프롬프트 퀴즈' : 'Prompt Quiz'}</h2>
                  <p>{isKo ? '학습한 내용을 퀴즈로 확인하세요' : 'Test your knowledge with a quiz'}</p>
                </div>
                <button className="ck-reset-btn" onClick={() => { setQuizAnswers(Array(5).fill(-1)); setShowQuizResults(false); }}>
                  <i className="fa-solid fa-rotate-right" /> {isKo ? '다시 풀기' : 'Retry'}
                </button>
              </div>
              <div className="ck-content-body">
                {quizQuestions.map((q, idx) => (
                  <div key={idx} style={{
                    marginBottom: 24, paddingBottom: 24,
                    borderBottom: idx < 4 ? '1px solid var(--border-light)' : 'none'
                  }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 12 }}>
                      <span style={{ color: 'var(--primary-blue)', marginRight: 6 }}>Q{idx + 1}.</span>
                      {q.q}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {q.options.map((opt, oi) => {
                        const isSelected = quizAnswers[idx] === oi;
                        const isCorrect = oi === q.answer;
                        const showResult = showQuizResults;
                        let bg = 'var(--bg-white)';
                        let borderColor = isSelected ? 'var(--primary-blue)' : 'var(--border-light)';
                        let textColor = isSelected ? 'var(--primary-blue)' : 'var(--text-secondary)';
                        if (showResult && isCorrect) {
                          bg = '#F0FDF4'; borderColor = '#10B981'; textColor = '#16A34A';
                        } else if (showResult && isSelected && !isCorrect) {
                          bg = '#FEF2F2'; borderColor = '#EF4444'; textColor = '#DC2626';
                        }

                        return (
                          <button
                            key={oi}
                            onClick={() => {
                              if (!showQuizResults) {
                                const next = [...quizAnswers];
                                next[idx] = oi;
                                setQuizAnswers(next);
                              }
                            }}
                            style={{
                              padding: '10px 16px', fontSize: 14, textAlign: 'left',
                              border: `1px solid ${borderColor}`, borderRadius: 8,
                              background: bg, color: textColor, cursor: showQuizResults ? 'default' : 'pointer',
                              fontFamily: 'inherit', fontWeight: isSelected ? 600 : 400,
                              display: 'flex', alignItems: 'center', gap: 8
                            }}
                          >
                            <span style={{
                              width: 24, height: 24, borderRadius: '50%', fontSize: 12, fontWeight: 700,
                              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                              background: isSelected ? 'var(--primary-blue)' : 'var(--bg-light-gray)',
                              color: isSelected ? '#fff' : 'var(--text-light)'
                            }}>
                              {String.fromCharCode(65 + oi)}
                            </span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {!showQuizResults && (
                  <button
                    onClick={() => setShowQuizResults(true)}
                    className="board-write-btn"
                    style={{ width: '100%', justifyContent: 'center', padding: 14, fontSize: 15 }}
                    disabled={quizAnswers.includes(-1)}
                  >
                    <i className="fa-solid fa-check" />
                    {isKo ? '결과 확인' : 'Check Results'}
                  </button>
                )}

                {showQuizResults && (
                  <div style={{
                    marginTop: 24, padding: 24, borderRadius: 12,
                    background: 'var(--bg-light-gray)', textAlign: 'center'
                  }}>
                    <div style={{ fontSize: 14, color: 'var(--text-light)', marginBottom: 8 }}>
                      {isKo ? '퀴즈 결과' : 'Quiz Results'}
                    </div>
                    <div style={{
                      fontSize: 42, fontWeight: 800,
                      color: quizScore >= 4 ? '#10B981' : quizScore >= 3 ? '#3B82F6' : '#EF4444'
                    }}>
                      {quizScore}/{quizQuestions.length}
                    </div>
                    <div style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 8 }}>
                      {quizScore === 5
                        ? (isKo ? '완벽합니다! 프롬프트 엔지니어링 마스터!' : 'Perfect! Prompt engineering master!')
                        : quizScore >= 3
                        ? (isKo ? '좋습니다! 조금 더 연습하면 완벽해질 거예요.' : 'Good! A bit more practice and you\'ll be perfect.')
                        : (isKo ? '학습 자료를 다시 복습해 보세요.' : 'Try reviewing the learning materials again.')}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Gallery Section */}
          {activeSection === 'gallery' && (
            <Suspense fallback={<div style={{ textAlign: 'center', padding: 60 }}><div className="loading-spinner" /></div>}>
              <PromptGalleryContent initialCategory={galleryCategory} />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
}
