import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const CATEGORIES = [
  { id: 'all', ko: '전체', en: 'All', icon: 'fa-border-all' },
  { id: 'ai', ko: 'AI/ML', en: 'AI/ML', icon: 'fa-brain' },
  { id: 'web', ko: '웹개발', en: 'Web Dev', icon: 'fa-code' },
  { id: 'python', ko: 'Python', en: 'Python', icon: 'fa-python' },
  { id: 'data', ko: '데이터사이언스', en: 'Data Science', icon: 'fa-chart-line' },
  { id: 'prompt', ko: '프롬프트 엔지니어링', en: 'Prompt Engineering', icon: 'fa-wand-magic-sparkles' },
  { id: 'cert', ko: '자격증', en: 'Certifications', icon: 'fa-certificate' },
  { id: 'career', ko: '커리어', en: 'Career', icon: 'fa-briefcase' },
];

const DIFFICULTY = {
  beginner: { ko: '입문', en: 'Beginner', color: '#10B981', bg: '#D1FAE5' },
  elementary: { ko: '초급', en: 'Elementary', color: '#3B82F6', bg: '#DBEAFE' },
  intermediate: { ko: '중급', en: 'Intermediate', color: '#F59E0B', bg: '#FEF3C7' },
  advanced: { ko: '고급', en: 'Advanced', color: '#EF4444', bg: '#FEE2E2' },
};

const COURSES = [
  // AI/ML (8)
  { id: 1, cat: 'ai', diff: 'beginner', featured: true, tags: ['AI', '기초'],
    ko: { title: '인공지능 개론', desc: 'AI의 역사, 분류, 핵심 개념을 체계적으로 학습합니다. 머신러닝과 딥러닝의 차이를 이해하고 실제 활용 사례를 살펴봅니다.' },
    en: { title: 'Introduction to AI', desc: 'Systematically learn the history, classification, and core concepts of AI. Understand the difference between ML and DL with real-world use cases.' } },
  { id: 2, cat: 'ai', diff: 'elementary', tags: ['머신러닝', 'Scikit-learn'],
    ko: { title: '머신러닝 기초', desc: '지도학습, 비지도학습, 강화학습의 핵심 알고리즘을 이해하고 Scikit-learn으로 실습합니다.' },
    en: { title: 'Machine Learning Basics', desc: 'Understand core algorithms of supervised, unsupervised, and reinforcement learning. Practice with Scikit-learn.' } },
  { id: 3, cat: 'ai', diff: 'intermediate', tags: ['딥러닝', 'PyTorch'],
    ko: { title: '딥러닝 입문', desc: '신경망의 구조와 원리를 학습하고 PyTorch로 CNN, RNN 모델을 구현합니다.' },
    en: { title: 'Introduction to Deep Learning', desc: 'Learn neural network architecture and principles. Implement CNN and RNN models with PyTorch.' } },
  { id: 4, cat: 'ai', diff: 'intermediate', tags: ['NLP', 'Transformer'],
    ko: { title: '자연어처리(NLP) 기초', desc: 'Tokenization부터 Transformer, BERT, GPT까지 NLP의 핵심 기술을 학습합니다.' },
    en: { title: 'NLP Fundamentals', desc: 'Learn core NLP technologies from Tokenization to Transformer, BERT, and GPT architectures.' } },
  { id: 5, cat: 'ai', diff: 'elementary', tags: ['컴퓨터비전', 'OpenCV'],
    ko: { title: '컴퓨터 비전 기초', desc: '이미지 처리, 객체 인식, 이미지 분류 등 컴퓨터 비전의 기본 개념을 학습합니다.' },
    en: { title: 'Computer Vision Basics', desc: 'Learn fundamentals of computer vision including image processing, object detection, and image classification.' } },
  { id: 6, cat: 'ai', diff: 'advanced', tags: ['LLM', 'Fine-tuning'],
    ko: { title: 'LLM 파인튜닝 실전', desc: 'LoRA, QLoRA 기법으로 대형 언어 모델을 파인튜닝하고 커스텀 챗봇을 만듭니다.' },
    en: { title: 'LLM Fine-tuning in Practice', desc: 'Fine-tune large language models using LoRA, QLoRA techniques and build custom chatbots.' } },
  { id: 7, cat: 'ai', diff: 'intermediate', tags: ['생성AI', 'Diffusion'],
    ko: { title: '생성형 AI 이해하기', desc: 'Stable Diffusion, DALL-E, Midjourney 등 이미지 생성 AI의 원리와 활용법을 배웁니다.' },
    en: { title: 'Understanding Generative AI', desc: 'Learn principles and usage of image generation AI like Stable Diffusion, DALL-E, and Midjourney.' } },
  { id: 8, cat: 'ai', diff: 'advanced', tags: ['MLOps', '배포'],
    ko: { title: 'MLOps와 모델 배포', desc: 'ML 파이프라인 구축, 모델 버전 관리, Docker/Kubernetes를 활용한 배포를 학습합니다.' },
    en: { title: 'MLOps & Model Deployment', desc: 'Learn ML pipeline construction, model versioning, and deployment with Docker/Kubernetes.' } },

  // 웹개발 (8)
  { id: 9, cat: 'web', diff: 'beginner', tags: ['HTML', 'CSS'],
    ko: { title: 'HTML & CSS 기초', desc: '웹 페이지의 구조를 만드는 HTML과 스타일을 적용하는 CSS의 기본을 학습합니다.' },
    en: { title: 'HTML & CSS Basics', desc: 'Learn the basics of HTML for page structure and CSS for styling.' } },
  { id: 10, cat: 'web', diff: 'elementary', tags: ['JavaScript', 'ES6+'],
    ko: { title: 'JavaScript 핵심 문법', desc: 'ES6+ 문법, DOM 조작, 비동기 처리 등 JavaScript의 핵심을 학습합니다.' },
    en: { title: 'JavaScript Core', desc: 'Learn JavaScript essentials including ES6+ syntax, DOM manipulation, and async programming.' } },
  { id: 11, cat: 'web', diff: 'intermediate', featured: true, tags: ['React', 'Hooks'],
    ko: { title: 'React 완벽 가이드', desc: '컴포넌트, Hooks, 상태관리, 라우팅까지 React의 모든 것을 배웁니다.' },
    en: { title: 'Complete React Guide', desc: 'Learn everything about React: components, Hooks, state management, and routing.' } },
  { id: 12, cat: 'web', diff: 'intermediate', tags: ['Node.js', 'Express'],
    ko: { title: 'Node.js 백엔드 개발', desc: 'Express.js로 RESTful API를 설계하고 MongoDB/PostgreSQL과 연동합니다.' },
    en: { title: 'Node.js Backend Development', desc: 'Design RESTful APIs with Express.js and connect with MongoDB/PostgreSQL.' } },
  { id: 13, cat: 'web', diff: 'elementary', tags: ['TypeScript', '타입시스템'],
    ko: { title: 'TypeScript 입문', desc: '타입 시스템으로 안전한 JavaScript 코드를 작성하는 방법을 배웁니다.' },
    en: { title: 'TypeScript Introduction', desc: 'Learn to write safe JavaScript code with the type system.' } },
  { id: 14, cat: 'web', diff: 'intermediate', tags: ['Next.js', 'SSR'],
    ko: { title: 'Next.js로 풀스택 개발', desc: 'SSR, SSG, API Routes를 활용한 풀스택 웹 애플리케이션 개발을 학습합니다.' },
    en: { title: 'Full-stack with Next.js', desc: 'Learn full-stack web app development with SSR, SSG, and API Routes.' } },
  { id: 15, cat: 'web', diff: 'advanced', tags: ['성능최적화', 'Lighthouse'],
    ko: { title: '웹 성능 최적화', desc: 'Core Web Vitals, 코드 스플리팅, 이미지 최적화 등 웹 성능 개선 기법을 학습합니다.' },
    en: { title: 'Web Performance Optimization', desc: 'Learn performance techniques: Core Web Vitals, code splitting, image optimization, and more.' } },
  { id: 16, cat: 'web', diff: 'elementary', tags: ['Tailwind', 'CSS'],
    ko: { title: 'Tailwind CSS 마스터', desc: 'Utility-first CSS 프레임워크인 Tailwind CSS로 빠르게 반응형 UI를 구축합니다.' },
    en: { title: 'Tailwind CSS Master', desc: 'Quickly build responsive UIs with the utility-first CSS framework Tailwind CSS.' } },

  // Python (6)
  { id: 17, cat: 'python', diff: 'beginner', featured: true, tags: ['Python', '기초'],
    ko: { title: 'Python 기초 완성', desc: '변수, 자료형, 제어문, 함수, 클래스까지 Python 프로그래밍의 기본을 완벽히 익힙니다.' },
    en: { title: 'Python Fundamentals Complete', desc: 'Master Python basics: variables, data types, control flow, functions, and classes.' } },
  { id: 18, cat: 'python', diff: 'elementary', tags: ['Python', '고급문법'],
    ko: { title: 'Python 중급: 고급 문법', desc: '데코레이터, 제너레이터, 컨텍스트 매니저, 메타클래스 등 Python 고급 기능을 학습합니다.' },
    en: { title: 'Intermediate Python', desc: 'Learn advanced Python features: decorators, generators, context managers, and metaclasses.' } },
  { id: 19, cat: 'python', diff: 'intermediate', tags: ['자동화', 'Selenium'],
    ko: { title: 'Python 업무 자동화', desc: 'Selenium, BeautifulSoup, OpenPyXL 등으로 반복 업무를 자동화합니다.' },
    en: { title: 'Python Automation', desc: 'Automate repetitive tasks with Selenium, BeautifulSoup, OpenPyXL, and more.' } },
  { id: 20, cat: 'python', diff: 'elementary', tags: ['Flask', 'API'],
    ko: { title: 'Flask 웹 개발', desc: 'Flask로 가볍고 유연한 웹 애플리케이션과 REST API를 구축합니다.' },
    en: { title: 'Flask Web Development', desc: 'Build lightweight, flexible web applications and REST APIs with Flask.' } },
  { id: 21, cat: 'python', diff: 'intermediate', tags: ['FastAPI', '비동기'],
    ko: { title: 'FastAPI 완벽 가이드', desc: '비동기 처리, 자동 문서화, Pydantic 검증까지 FastAPI의 모든 것을 학습합니다.' },
    en: { title: 'FastAPI Complete Guide', desc: 'Learn everything about FastAPI: async processing, auto documentation, and Pydantic validation.' } },
  { id: 22, cat: 'python', diff: 'advanced', tags: ['알고리즘', '자료구조'],
    ko: { title: 'Python 알고리즘 & 자료구조', desc: '코딩 테스트 대비 필수 알고리즘과 자료구조를 Python으로 구현합니다.' },
    en: { title: 'Python Algorithms & Data Structures', desc: 'Implement essential algorithms and data structures in Python for coding interviews.' } },

  // 데이터사이언스 (6)
  { id: 23, cat: 'data', diff: 'beginner', tags: ['데이터분석', '판다스'],
    ko: { title: 'Pandas 데이터 분석', desc: 'Pandas 라이브러리로 데이터 로딩, 정제, 변환, 집계 등 데이터 분석의 기본을 학습합니다.' },
    en: { title: 'Data Analysis with Pandas', desc: 'Learn data analysis basics: loading, cleaning, transforming, and aggregating data with Pandas.' } },
  { id: 24, cat: 'data', diff: 'elementary', tags: ['시각화', 'Matplotlib'],
    ko: { title: '데이터 시각화 마스터', desc: 'Matplotlib, Seaborn, Plotly로 효과적인 데이터 시각화를 학습합니다.' },
    en: { title: 'Data Visualization Master', desc: 'Learn effective data visualization with Matplotlib, Seaborn, and Plotly.' } },
  { id: 25, cat: 'data', diff: 'intermediate', featured: true, tags: ['통계', '분석'],
    ko: { title: '통계학 기초와 실습', desc: '기술통계, 추론통계, 가설검정, 회귀분석 등 데이터 사이언스를 위한 통계학을 학습합니다.' },
    en: { title: 'Statistics Fundamentals & Practice', desc: 'Learn statistics for data science: descriptive stats, inferential stats, hypothesis testing, and regression.' } },
  { id: 26, cat: 'data', diff: 'elementary', tags: ['SQL', '데이터베이스'],
    ko: { title: 'SQL 데이터베이스 완벽 입문', desc: 'SELECT, JOIN, GROUP BY부터 서브쿼리, 윈도우 함수까지 SQL을 마스터합니다.' },
    en: { title: 'SQL Database Complete Guide', desc: 'Master SQL from SELECT, JOIN, GROUP BY to subqueries and window functions.' } },
  { id: 27, cat: 'data', diff: 'intermediate', tags: ['빅데이터', 'Spark'],
    ko: { title: '빅데이터 처리와 분석', desc: 'Apache Spark, Hadoop 에코시스템으로 대용량 데이터를 처리하고 분석합니다.' },
    en: { title: 'Big Data Processing & Analysis', desc: 'Process and analyze large-scale data with Apache Spark and Hadoop ecosystem.' } },
  { id: 28, cat: 'data', diff: 'advanced', tags: ['Feature', 'Engineering'],
    ko: { title: '피처 엔지니어링 실전', desc: '데이터 전처리, 피처 선택, 피처 생성 등 모델 성능을 높이는 피처 엔지니어링 기법을 학습합니다.' },
    en: { title: 'Feature Engineering in Practice', desc: 'Learn feature engineering techniques to improve model performance: preprocessing, selection, and creation.' } },

  // 프롬프트 엔지니어링 (5)
  { id: 29, cat: 'prompt', diff: 'beginner', tags: ['프롬프트', '기초'],
    ko: { title: '프롬프트 엔지니어링 입문', desc: 'AI에게 효과적으로 지시하는 프롬프트 작성의 기본 원칙과 구조를 학습합니다.' },
    en: { title: 'Prompt Engineering Introduction', desc: 'Learn the basic principles and structure of writing effective prompts for AI.' } },
  { id: 30, cat: 'prompt', diff: 'elementary', tags: ['ChatGPT', '활용'],
    ko: { title: 'ChatGPT 200% 활용하기', desc: 'ChatGPT의 다양한 활용법, 플러그인, GPTs 활용, 업무 자동화 팁을 배웁니다.' },
    en: { title: 'Mastering ChatGPT', desc: 'Learn various ways to use ChatGPT, plugins, GPTs, and work automation tips.' } },
  { id: 31, cat: 'prompt', diff: 'intermediate', tags: ['고급기법', 'CoT'],
    ko: { title: '고급 프롬프트 기법', desc: 'Chain of Thought, Tree of Thought, Few-shot Learning 등 고급 프롬프트 전략을 학습합니다.' },
    en: { title: 'Advanced Prompt Techniques', desc: 'Learn advanced prompting strategies: Chain of Thought, Tree of Thought, and Few-shot Learning.' } },
  { id: 32, cat: 'prompt', diff: 'intermediate', tags: ['Claude', 'Gemini'],
    ko: { title: 'Claude & Gemini 실전 활용', desc: 'Anthropic Claude와 Google Gemini의 특성을 이해하고 효과적으로 활용합니다.' },
    en: { title: 'Claude & Gemini in Practice', desc: 'Understand the characteristics of Claude and Gemini and use them effectively.' } },
  { id: 33, cat: 'prompt', diff: 'advanced', tags: ['API', '자동화'],
    ko: { title: 'AI API 통합 자동화', desc: 'OpenAI, Claude, Gemini API를 코드로 활용하여 워크플로우를 자동화합니다.' },
    en: { title: 'AI API Integration & Automation', desc: 'Automate workflows using OpenAI, Claude, and Gemini APIs programmatically.' } },

  // 자격증 (5)
  { id: 34, cat: 'cert', diff: 'intermediate', tags: ['AWS', '클라우드'],
    ko: { title: 'AWS 클라우드 자격증 준비', desc: 'AWS Certified Cloud Practitioner, Solutions Architect Associate 시험을 준비합니다.' },
    en: { title: 'AWS Cloud Certification Prep', desc: 'Prepare for AWS Certified Cloud Practitioner and Solutions Architect Associate exams.' } },
  { id: 35, cat: 'cert', diff: 'intermediate', tags: ['정보처리기사', '자격증'],
    ko: { title: '정보처리기사 필기/실기', desc: '정보처리기사 필기와 실기 시험 대비 핵심 요약 및 기출문제 풀이를 학습합니다.' },
    en: { title: 'Information Processing Engineer', desc: 'Study key summaries and past exam problems for the Information Processing Engineer certification.' } },
  { id: 36, cat: 'cert', diff: 'elementary', tags: ['SQLD', '데이터베이스'],
    ko: { title: 'SQLD 자격증 대비', desc: 'SQL 개발자 자격증(SQLD) 시험 대비 핵심 이론과 실전 문제를 학습합니다.' },
    en: { title: 'SQLD Certification Prep', desc: 'Study core theory and practice problems for the SQL Developer (SQLD) certification.' } },
  { id: 37, cat: 'cert', diff: 'advanced', tags: ['TensorFlow', '인증'],
    ko: { title: 'TensorFlow Developer 인증', desc: 'Google TensorFlow Developer Certificate 시험을 위한 집중 학습 과정입니다.' },
    en: { title: 'TensorFlow Developer Cert', desc: 'Intensive study course for the Google TensorFlow Developer Certificate exam.' } },
  { id: 38, cat: 'cert', diff: 'elementary', tags: ['ADsP', '데이터분석'],
    ko: { title: 'ADsP 데이터분석 준전문가', desc: '데이터분석 준전문가(ADsP) 시험의 통계, 데이터 마이닝, R 프로그래밍을 학습합니다.' },
    en: { title: 'ADsP Data Analysis Semi-Pro', desc: 'Study statistics, data mining, and R programming for the ADsP certification exam.' } },

  // 커리어 (4)
  { id: 39, cat: 'career', diff: 'beginner', tags: ['포트폴리오', '취업'],
    ko: { title: '개발자 포트폴리오 만들기', desc: 'GitHub, 개인 블로그, 프로젝트 포트폴리오를 체계적으로 구축하는 방법을 배웁니다.' },
    en: { title: 'Building a Developer Portfolio', desc: 'Learn how to systematically build your GitHub, blog, and project portfolio.' } },
  { id: 40, cat: 'career', diff: 'elementary', tags: ['면접', '기술면접'],
    ko: { title: '기술 면접 완벽 대비', desc: '자료구조, 알고리즘, 시스템 설계 등 기술 면접의 핵심 주제를 학습합니다.' },
    en: { title: 'Technical Interview Prep', desc: 'Study key technical interview topics: data structures, algorithms, and system design.' } },
  { id: 41, cat: 'career', diff: 'intermediate', tags: ['이력서', '자기소개서'],
    ko: { title: 'IT 이력서 & 자기소개서 작성', desc: 'AI를 활용하여 효과적인 이력서와 자기소개서를 작성하는 방법을 안내합니다.' },
    en: { title: 'IT Resume & Cover Letter Writing', desc: 'Guide to writing effective resumes and cover letters using AI assistance.' } },
  { id: 42, cat: 'career', diff: 'beginner', tags: ['개발문화', '협업'],
    ko: { title: '개발자 협업 문화와 도구', desc: 'Git, Jira, Slack, 코드 리뷰 등 현업 개발팀의 협업 문화와 도구를 소개합니다.' },
    en: { title: 'Developer Collaboration Culture & Tools', desc: 'Introduction to real-world development team collaboration culture and tools like Git, Jira, Slack, and code review.' } },
];

export default function EduHubPage() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const isKo = language === 'ko';

  const filteredCourses = activeCategory === 'all'
    ? COURSES
    : COURSES.filter(c => c.cat === activeCategory);

  const featuredCourses = COURSES.filter(c => c.featured);

  const stats = [
    { icon: 'fa-book', value: COURSES.length, ko: '총 강좌', en: 'Total Courses' },
    { icon: 'fa-layer-group', value: CATEGORIES.length - 1, ko: '학습 분야', en: 'Categories' },
    { icon: 'fa-signal', value: 4, ko: '난이도 단계', en: 'Difficulty Levels' },
    { icon: 'fa-tags', value: new Set(COURSES.flatMap(c => c.tags)).size, ko: '태그', en: 'Tags' },
  ];

  return (
    <div className="edu-hub-page">
      <SEOHead
        title={t('eduhub.title')}
        description={isKo ? 'AI, 웹개발, Python, 데이터사이언스 등 다양한 분야의 학습 콘텐츠' : 'Learning content across AI, web development, Python, data science, and more'}
        path="/edu-hub"
      />

      {/* Hero */}
      <div className="edu-hub-hero">
        <div className="container">
          <h1>{t('eduhub.title')}</h1>
          <p>{t('eduhub.subtitle')}</p>
          <div className="edu-hub-stats">
            {stats.map((s, i) => (
              <div key={i} className="edu-hub-stat">
                <i className={`fa-solid ${s.icon}`} />
                <span className="edu-hub-stat-value">{s.value}</span>
                <span className="edu-hub-stat-label">{isKo ? s.ko : s.en}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: 60 }}>
        {/* Featured Courses */}
        <section style={{ marginBottom: 40 }}>
          <h2 className="section-header" style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, color: 'var(--text-primary)' }}>
            <i className="fa-solid fa-fire" style={{ color: '#EF4444', marginRight: 8 }} />
            {isKo ? '추천 강좌' : 'Featured Courses'}
          </h2>
          <div className="edu-course-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
            {featuredCourses.map(course => {
              const diff = DIFFICULTY[course.diff];
              return (
                <div key={course.id} className="edu-course-card edu-course-featured">
                  <div className="edu-course-card-header">
                    <span className="edu-course-badge" style={{ background: diff.bg, color: diff.color }}>
                      {isKo ? diff.ko : diff.en}
                    </span>
                    <span className="edu-course-cat">
                      {isKo ? CATEGORIES.find(c => c.id === course.cat)?.ko : CATEGORIES.find(c => c.id === course.cat)?.en}
                    </span>
                  </div>
                  <h3>{isKo ? course.ko.title : course.en.title}</h3>
                  <p>{isKo ? course.ko.desc : course.en.desc}</p>
                  <div className="edu-course-tags">
                    {course.tags.map((tag, i) => (
                      <span key={i} className="resource-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Category Tabs */}
        <div className="edu-category-tabs">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`board-category-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <i className={`fa-solid ${cat.icon}`} style={{ marginRight: 6 }} />
              {isKo ? cat.ko : cat.en}
              {cat.id !== 'all' && (
                <span style={{ marginLeft: 4, fontSize: 11, opacity: 0.7 }}>
                  ({COURSES.filter(c => c.cat === cat.id).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="edu-course-grid">
          {filteredCourses.map(course => {
            const diff = DIFFICULTY[course.diff];
            return (
              <div key={course.id} className="edu-course-card">
                <div className="edu-course-card-header">
                  <span className="edu-course-badge" style={{ background: diff.bg, color: diff.color }}>
                    {isKo ? diff.ko : diff.en}
                  </span>
                  <span className="edu-course-cat">
                    {isKo ? CATEGORIES.find(c => c.id === course.cat)?.ko : CATEGORIES.find(c => c.id === course.cat)?.en}
                  </span>
                </div>
                <h3>{isKo ? course.ko.title : course.en.title}</h3>
                <p>{isKo ? course.ko.desc : course.en.desc}</p>
                <div className="edu-course-tags">
                  {course.tags.map((tag, i) => (
                    <span key={i} className="resource-tag">{tag}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {filteredCourses.length === 0 && (
          <div style={{ textAlign: 'center', padding: 60, color: 'var(--text-light)' }}>
            <i className="fa-solid fa-search" style={{ fontSize: 32, marginBottom: 12 }} />
            <p>{isKo ? '해당 카테고리에 강좌가 없습니다.' : 'No courses found in this category.'}</p>
          </div>
        )}
      </div>
    </div>
  );
}
