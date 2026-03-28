import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const CATEGORIES = [
  {
    id: 'ai-theory', icon: 'fa-brain', color: '#4285F4',
    ko: 'AI 기초 이론', en: 'AI Fundamentals',
    topics: [
      { id: 'ml', icon: 'fa-gears', ko: '머신러닝', en: 'Machine Learning' },
      { id: 'dl', icon: 'fa-network-wired', ko: '딥러닝', en: 'Deep Learning' },
      { id: 'nlp', icon: 'fa-language', ko: 'NLP (자연어처리)', en: 'NLP' },
      { id: 'cv', icon: 'fa-eye', ko: '컴퓨터 비전', en: 'Computer Vision' },
    ],
  },
  {
    id: 'programming', icon: 'fa-code', color: '#E34F26',
    ko: '프로그래밍 기초', en: 'Programming Basics',
    topics: [
      { id: 'python', icon: 'fa-python', ko: 'Python', en: 'Python' },
      { id: 'javascript', icon: 'fa-js', ko: 'JavaScript', en: 'JavaScript' },
      { id: 'html-css', icon: 'fa-html5', ko: 'HTML/CSS', en: 'HTML/CSS' },
      { id: 'git', icon: 'fa-code-branch', ko: 'Git & GitHub', en: 'Git & GitHub' },
    ],
  },
  {
    id: 'data-analysis', icon: 'fa-chart-bar', color: '#FF6F00',
    ko: '데이터 분석', en: 'Data Analysis',
    topics: [
      { id: 'pandas', icon: 'fa-table', ko: 'Pandas', en: 'Pandas' },
      { id: 'visualization', icon: 'fa-chart-pie', ko: '데이터 시각화', en: 'Data Visualization' },
      { id: 'statistics', icon: 'fa-square-root-variable', ko: '통계학 기초', en: 'Statistics Basics' },
      { id: 'sql', icon: 'fa-database', ko: 'SQL', en: 'SQL' },
    ],
  },
  {
    id: 'ai-guide', icon: 'fa-wand-magic-sparkles', color: '#8B5CF6',
    ko: 'AI 활용 가이드', en: 'AI Application Guide',
    topics: [
      { id: 'prompt-writing', icon: 'fa-pen-fancy', ko: '프롬프트 작성법', en: 'Prompt Writing' },
      { id: 'api-usage', icon: 'fa-plug', ko: 'API 활용', en: 'API Usage' },
      { id: 'automation', icon: 'fa-robot', ko: '자동화', en: 'Automation' },
      { id: 'ethics', icon: 'fa-scale-balanced', ko: 'AI 윤리', en: 'AI Ethics' },
    ],
  },
];

const TOPIC_CONTENT = {
  ml: {
    ko: {
      title: '머신러닝 (Machine Learning)',
      sections: [
        { type: 'h2', text: '머신러닝이란?' },
        { type: 'p', text: '머신러닝(Machine Learning)은 컴퓨터가 명시적으로 프로그래밍되지 않아도 데이터로부터 학습하여 패턴을 인식하고 예측을 수행하는 인공지능의 한 분야입니다. 1959년 Arthur Samuel이 처음 정의한 이후, 빅데이터와 컴퓨팅 파워의 발전으로 현재 AI의 핵심 기술이 되었습니다.' },
        { type: 'h3', text: '머신러닝의 3가지 유형' },
        { type: 'list', items: [
          { bold: '지도학습 (Supervised Learning)', text: '레이블이 있는 데이터로 학습합니다. 분류(Classification)와 회귀(Regression)로 나뉩니다. 예: 스팸 메일 분류, 주택 가격 예측' },
          { bold: '비지도학습 (Unsupervised Learning)', text: '레이블 없이 데이터의 구조를 파악합니다. 군집화(Clustering), 차원 축소(Dimensionality Reduction)가 대표적입니다. 예: 고객 세분화, 이상 탐지' },
          { bold: '강화학습 (Reinforcement Learning)', text: '환경과 상호작용하며 보상을 최대화하는 정책을 학습합니다. 예: 게임 AI, 로봇 제어, 자율주행' },
        ]},
        { type: 'h3', text: '핵심 알고리즘' },
        { type: 'table', headers: ['알고리즘', '유형', '주요 용도'], rows: [
          ['선형 회귀', '지도학습 (회귀)', '수치 예측, 트렌드 분석'],
          ['로지스틱 회귀', '지도학습 (분류)', '이진 분류, 확률 예측'],
          ['결정 트리', '지도학습', '분류/회귀, 해석 가능한 모델'],
          ['랜덤 포레스트', '지도학습 (앙상블)', '높은 정확도의 분류/회귀'],
          ['SVM', '지도학습', '소규모 데이터 분류'],
          ['K-Means', '비지도학습', '군집화, 고객 세분화'],
          ['KNN', '지도학습', '유사도 기반 분류'],
          ['XGBoost', '지도학습 (앙상블)', '대회 우승 모델, 높은 성능'],
        ]},
        { type: 'h3', text: '모델 평가 지표' },
        { type: 'list', items: [
          { bold: '정확도 (Accuracy)', text: '전체 예측 중 맞은 비율' },
          { bold: '정밀도 (Precision)', text: 'Positive로 예측한 것 중 실제 Positive 비율' },
          { bold: '재현율 (Recall)', text: '실제 Positive 중 Positive로 예측한 비율' },
          { bold: 'F1 Score', text: '정밀도와 재현율의 조화 평균' },
          { bold: 'RMSE', text: '회귀 모델의 예측 오차 측정' },
        ]},
        { type: 'blockquote', text: '팁: 머신러닝 모델의 성능은 데이터의 품질에 가장 크게 좌우됩니다. "Garbage In, Garbage Out" 원칙을 기억하세요.' },
      ],
    },
    en: {
      title: 'Machine Learning',
      sections: [
        { type: 'h2', text: 'What is Machine Learning?' },
        { type: 'p', text: 'Machine Learning (ML) is a branch of artificial intelligence where computers learn from data to recognize patterns and make predictions without being explicitly programmed. First defined by Arthur Samuel in 1959, it has become a core AI technology thanks to advances in big data and computing power.' },
        { type: 'h3', text: '3 Types of Machine Learning' },
        { type: 'list', items: [
          { bold: 'Supervised Learning', text: 'Learns from labeled data. Divided into Classification and Regression. Examples: spam detection, house price prediction' },
          { bold: 'Unsupervised Learning', text: 'Finds patterns in unlabeled data. Clustering and Dimensionality Reduction are common. Examples: customer segmentation, anomaly detection' },
          { bold: 'Reinforcement Learning', text: 'Learns policies to maximize rewards through environment interaction. Examples: game AI, robotics, autonomous driving' },
        ]},
        { type: 'h3', text: 'Key Algorithms' },
        { type: 'table', headers: ['Algorithm', 'Type', 'Primary Use'], rows: [
          ['Linear Regression', 'Supervised (Regression)', 'Numeric prediction, trend analysis'],
          ['Logistic Regression', 'Supervised (Classification)', 'Binary classification, probability prediction'],
          ['Decision Tree', 'Supervised', 'Classification/Regression, interpretable models'],
          ['Random Forest', 'Supervised (Ensemble)', 'High accuracy classification/regression'],
          ['SVM', 'Supervised', 'Small dataset classification'],
          ['K-Means', 'Unsupervised', 'Clustering, customer segmentation'],
          ['KNN', 'Supervised', 'Similarity-based classification'],
          ['XGBoost', 'Supervised (Ensemble)', 'Competition-winning, high performance'],
        ]},
        { type: 'h3', text: 'Model Evaluation Metrics' },
        { type: 'list', items: [
          { bold: 'Accuracy', text: 'Ratio of correct predictions to total predictions' },
          { bold: 'Precision', text: 'Ratio of true positives to all positive predictions' },
          { bold: 'Recall', text: 'Ratio of true positives to all actual positives' },
          { bold: 'F1 Score', text: 'Harmonic mean of precision and recall' },
          { bold: 'RMSE', text: 'Measures prediction error in regression models' },
        ]},
        { type: 'blockquote', text: 'Tip: ML model performance depends most on data quality. Remember: "Garbage In, Garbage Out."' },
      ],
    },
  },
  dl: {
    ko: {
      title: '딥러닝 (Deep Learning)',
      sections: [
        { type: 'h2', text: '딥러닝이란?' },
        { type: 'p', text: '딥러닝은 인공 신경망(Artificial Neural Network)을 여러 층으로 쌓아 복잡한 패턴을 학습하는 머신러닝의 하위 분야입니다. "깊은(Deep)" 신경망이라는 의미에서 이름이 유래했으며, 이미지 인식, 자연어 처리, 음성 인식 등에서 혁신적인 성과를 보여주고 있습니다.' },
        { type: 'h3', text: '핵심 신경망 구조' },
        { type: 'list', items: [
          { bold: 'CNN (Convolutional Neural Network)', text: '이미지 인식에 특화된 신경망. 합성곱 레이어로 이미지의 특징을 추출합니다.' },
          { bold: 'RNN (Recurrent Neural Network)', text: '순차 데이터 처리에 적합한 신경망. 이전 상태를 기억하여 시계열 데이터를 처리합니다.' },
          { bold: 'LSTM (Long Short-Term Memory)', text: 'RNN의 장기 의존성 문제를 해결한 구조. 게이트 메커니즘으로 정보를 선택적으로 기억합니다.' },
          { bold: 'Transformer', text: '자기 주의 메커니즘(Self-Attention)을 사용한 구조. GPT, BERT의 기반 아키텍처입니다.' },
          { bold: 'GAN (Generative Adversarial Network)', text: '생성자와 판별자가 경쟁하며 학습하는 구조. 이미지 생성에 활용됩니다.' },
        ]},
        { type: 'h3', text: '주요 프레임워크' },
        { type: 'table', headers: ['프레임워크', '개발사', '특징'], rows: [
          ['TensorFlow', 'Google', '산업용 배포에 강점, Keras API 포함'],
          ['PyTorch', 'Meta', '연구용으로 인기, 직관적인 코드'],
          ['JAX', 'Google', '고성능 수치 연산, 자동 미분'],
          ['Hugging Face', 'Hugging Face', 'NLP 모델 허브, 간편한 모델 활용'],
        ]},
        { type: 'blockquote', text: '2024년 기준 연구 분야에서는 PyTorch가, 프로덕션 환경에서는 TensorFlow가 주로 사용됩니다. 최근에는 Hugging Face가 NLP 분야의 표준으로 자리잡고 있습니다.' },
      ],
    },
    en: {
      title: 'Deep Learning',
      sections: [
        { type: 'h2', text: 'What is Deep Learning?' },
        { type: 'p', text: 'Deep Learning is a subfield of machine learning that uses multi-layered artificial neural networks to learn complex patterns. Named for "deep" neural networks, it has shown revolutionary results in image recognition, NLP, and speech recognition.' },
        { type: 'h3', text: 'Core Neural Network Architectures' },
        { type: 'list', items: [
          { bold: 'CNN', text: 'Specialized for image recognition. Extracts features through convolutional layers.' },
          { bold: 'RNN', text: 'Suited for sequential data. Remembers previous states to process time-series data.' },
          { bold: 'LSTM', text: 'Solves RNN long-term dependency issues using gate mechanisms for selective memory.' },
          { bold: 'Transformer', text: 'Uses self-attention mechanism. Foundation architecture for GPT and BERT.' },
          { bold: 'GAN', text: 'Generator and discriminator compete during training. Used for image generation.' },
        ]},
        { type: 'h3', text: 'Major Frameworks' },
        { type: 'table', headers: ['Framework', 'Developer', 'Characteristics'], rows: [
          ['TensorFlow', 'Google', 'Strong for production deployment, includes Keras API'],
          ['PyTorch', 'Meta', 'Popular for research, intuitive code'],
          ['JAX', 'Google', 'High-performance numerical computing, auto-differentiation'],
          ['Hugging Face', 'Hugging Face', 'NLP model hub, easy model usage'],
        ]},
        { type: 'blockquote', text: 'As of 2024, PyTorch dominates research while TensorFlow leads in production. Hugging Face has become the standard for NLP.' },
      ],
    },
  },
  nlp: {
    ko: {
      title: '자연어처리 (NLP)',
      sections: [
        { type: 'h2', text: '자연어처리란?' },
        { type: 'p', text: '자연어처리(Natural Language Processing, NLP)는 컴퓨터가 인간의 언어를 이해하고 생성하는 AI 분야입니다. ChatGPT, Claude, Gemini 등 대형 언어 모델(LLM)의 등장으로 가장 빠르게 발전하고 있는 분야입니다.' },
        { type: 'h3', text: 'NLP 핵심 태스크' },
        { type: 'list', items: [
          { bold: '텍스트 분류', text: '감성 분석, 스팸 분류, 토픽 분류 등' },
          { bold: '개체명 인식 (NER)', text: '텍스트에서 인명, 지명, 기관명 등을 추출' },
          { bold: '기계 번역', text: '한국어 ↔ 영어 등 언어 간 번역' },
          { bold: '질의응답 (QA)', text: '질문에 대한 답변을 텍스트에서 추출' },
          { bold: '텍스트 생성', text: 'GPT 계열의 자동 텍스트 생성' },
          { bold: '요약', text: '긴 문서를 핵심 내용으로 압축' },
        ]},
        { type: 'h3', text: 'LLM의 발전 과정' },
        { type: 'table', headers: ['모델', '연도', '파라미터', '특징'], rows: [
          ['BERT', '2018', '3.4억', '양방향 인코더, 문맥 이해'],
          ['GPT-2', '2019', '15억', '텍스트 생성 능력 입증'],
          ['GPT-3', '2020', '1,750억', 'Few-shot 학습 가능'],
          ['ChatGPT', '2022', '-', 'RLHF로 대화 최적화'],
          ['GPT-4', '2023', '-', '멀티모달, 향상된 추론'],
          ['Claude 3', '2024', '-', '긴 컨텍스트, 안전성 강화'],
          ['Gemini', '2024', '-', 'Google의 멀티모달 AI'],
        ]},
        { type: 'blockquote', text: 'NLP는 AI에서 가장 빠르게 발전하는 분야입니다. LLM의 발전으로 기계 번역, 문서 요약, 코드 생성 등 다양한 응용이 가능해졌습니다.' },
      ],
    },
    en: {
      title: 'Natural Language Processing (NLP)',
      sections: [
        { type: 'h2', text: 'What is NLP?' },
        { type: 'p', text: 'NLP is the AI field where computers understand and generate human language. It is the fastest-growing area of AI, driven by the emergence of LLMs like ChatGPT, Claude, and Gemini.' },
        { type: 'h3', text: 'Core NLP Tasks' },
        { type: 'list', items: [
          { bold: 'Text Classification', text: 'Sentiment analysis, spam detection, topic classification' },
          { bold: 'Named Entity Recognition (NER)', text: 'Extract names, places, organizations from text' },
          { bold: 'Machine Translation', text: 'Translate between languages like Korean and English' },
          { bold: 'Question Answering (QA)', text: 'Extract answers from text for given questions' },
          { bold: 'Text Generation', text: 'Automatic text generation (GPT family)' },
          { bold: 'Summarization', text: 'Compress long documents into key content' },
        ]},
        { type: 'h3', text: 'LLM Evolution' },
        { type: 'table', headers: ['Model', 'Year', 'Parameters', 'Features'], rows: [
          ['BERT', '2018', '340M', 'Bidirectional encoder, context understanding'],
          ['GPT-2', '2019', '1.5B', 'Proved text generation capability'],
          ['GPT-3', '2020', '175B', 'Few-shot learning capability'],
          ['ChatGPT', '2022', '-', 'RLHF-optimized conversation'],
          ['GPT-4', '2023', '-', 'Multimodal, improved reasoning'],
          ['Claude 3', '2024', '-', 'Long context, enhanced safety'],
          ['Gemini', '2024', '-', 'Google\'s multimodal AI'],
        ]},
        { type: 'blockquote', text: 'NLP is the fastest-growing field in AI. LLM advances have enabled machine translation, document summarization, code generation, and more.' },
      ],
    },
  },
  cv: {
    ko: {
      title: '컴퓨터 비전 (Computer Vision)',
      sections: [
        { type: 'h2', text: '컴퓨터 비전이란?' },
        { type: 'p', text: '컴퓨터 비전은 컴퓨터가 이미지와 비디오를 이해하고 해석하는 AI 분야입니다. 자율주행, 의료 영상 분석, 보안 시스템, AR/VR 등 다양한 분야에서 활용됩니다.' },
        { type: 'h3', text: '주요 태스크' },
        { type: 'list', items: [
          { bold: '이미지 분류', text: '이미지가 어떤 카테고리에 속하는지 판별 (예: 개 vs 고양이)' },
          { bold: '객체 탐지', text: '이미지에서 객체의 위치와 종류를 식별 (YOLO, SSD)' },
          { bold: '시맨틱 분할', text: '이미지의 각 픽셀을 카테고리로 분류' },
          { bold: '이미지 생성', text: 'Stable Diffusion, DALL-E를 사용한 이미지 생성' },
          { bold: '얼굴 인식', text: '얼굴을 탐지하고 신원을 확인' },
        ]},
        { type: 'blockquote', text: 'YOLO(You Only Look Once)는 실시간 객체 탐지의 대표 알고리즘으로, 보안 카메라, 자율주행 등에서 널리 사용됩니다.' },
      ],
    },
    en: {
      title: 'Computer Vision',
      sections: [
        { type: 'h2', text: 'What is Computer Vision?' },
        { type: 'p', text: 'Computer Vision is the AI field where computers understand and interpret images and videos. It is used in autonomous driving, medical imaging, security systems, AR/VR, and more.' },
        { type: 'h3', text: 'Key Tasks' },
        { type: 'list', items: [
          { bold: 'Image Classification', text: 'Determine which category an image belongs to (e.g., dog vs cat)' },
          { bold: 'Object Detection', text: 'Identify location and type of objects in images (YOLO, SSD)' },
          { bold: 'Semantic Segmentation', text: 'Classify each pixel of an image into categories' },
          { bold: 'Image Generation', text: 'Generate images using Stable Diffusion, DALL-E' },
          { bold: 'Face Recognition', text: 'Detect faces and verify identity' },
        ]},
        { type: 'blockquote', text: 'YOLO (You Only Look Once) is the leading real-time object detection algorithm, widely used in security cameras and autonomous driving.' },
      ],
    },
  },
  python: {
    ko: {
      title: 'Python 프로그래밍',
      sections: [
        { type: 'h2', text: 'Python이란?' },
        { type: 'p', text: 'Python은 간결하고 읽기 쉬운 문법으로 인기 있는 프로그래밍 언어입니다. AI, 데이터 사이언스, 웹 개발, 자동화 등 다양한 분야에서 사용됩니다. 2024년 기준 TIOBE 지수 1위의 프로그래밍 언어입니다.' },
        { type: 'h3', text: '기본 문법' },
        { type: 'code', text: '# 변수와 자료형\nname = "OpenClaw"\nage = 2024\npi = 3.14\nis_active = True\n\n# 리스트와 딕셔너리\ncourses = ["AI", "Python", "Web"]\ninfo = {"name": "OpenClaw", "type": "platform"}\n\n# 함수 정의\ndef greet(name):\n    return f"안녕하세요, {name}님!"\n\n# 클래스\nclass Student:\n    def __init__(self, name, grade):\n        self.name = name\n        self.grade = grade\n\n    def introduce(self):\n        return f"{self.name} ({self.grade}학년)"' },
        { type: 'h3', text: '주요 라이브러리' },
        { type: 'table', headers: ['라이브러리', '분야', '설명'], rows: [
          ['NumPy', '수치 계산', '다차원 배열 연산, 선형대수'],
          ['Pandas', '데이터 분석', 'DataFrame 기반 데이터 조작'],
          ['Matplotlib', '시각화', '그래프, 차트 생성'],
          ['Scikit-learn', '머신러닝', 'ML 알고리즘 라이브러리'],
          ['TensorFlow/PyTorch', '딥러닝', '신경망 프레임워크'],
          ['Flask/FastAPI', '웹 개발', '웹 프레임워크'],
          ['BeautifulSoup', '웹 스크래핑', 'HTML 파싱'],
          ['Selenium', '자동화', '브라우저 자동화'],
        ]},
        { type: 'blockquote', text: 'Python은 "배터리 포함(Batteries included)" 철학으로, 표준 라이브러리만으로도 많은 작업을 수행할 수 있습니다.' },
      ],
    },
    en: {
      title: 'Python Programming',
      sections: [
        { type: 'h2', text: 'What is Python?' },
        { type: 'p', text: 'Python is a popular programming language known for its clean, readable syntax. It is used across AI, data science, web development, automation, and more. As of 2024, it ranks #1 on the TIOBE index.' },
        { type: 'h3', text: 'Basic Syntax' },
        { type: 'code', text: '# Variables and data types\nname = "OpenClaw"\nage = 2024\npi = 3.14\nis_active = True\n\n# Lists and dictionaries\ncourses = ["AI", "Python", "Web"]\ninfo = {"name": "OpenClaw", "type": "platform"}\n\n# Function definition\ndef greet(name):\n    return f"Hello, {name}!"\n\n# Class\nclass Student:\n    def __init__(self, name, grade):\n        self.name = name\n        self.grade = grade\n\n    def introduce(self):\n        return f"{self.name} (Grade {self.grade})"' },
        { type: 'h3', text: 'Key Libraries' },
        { type: 'table', headers: ['Library', 'Domain', 'Description'], rows: [
          ['NumPy', 'Numerical Computing', 'Multi-dimensional array operations, linear algebra'],
          ['Pandas', 'Data Analysis', 'DataFrame-based data manipulation'],
          ['Matplotlib', 'Visualization', 'Graph and chart generation'],
          ['Scikit-learn', 'Machine Learning', 'ML algorithm library'],
          ['TensorFlow/PyTorch', 'Deep Learning', 'Neural network frameworks'],
          ['Flask/FastAPI', 'Web Development', 'Web frameworks'],
          ['BeautifulSoup', 'Web Scraping', 'HTML parsing'],
          ['Selenium', 'Automation', 'Browser automation'],
        ]},
        { type: 'blockquote', text: 'Python follows the "Batteries included" philosophy - you can accomplish many tasks with the standard library alone.' },
      ],
    },
  },
  javascript: {
    ko: {
      title: 'JavaScript',
      sections: [
        { type: 'h2', text: 'JavaScript란?' },
        { type: 'p', text: 'JavaScript는 웹 브라우저에서 동작하는 프로그래밍 언어로, 현재는 Node.js를 통해 서버 사이드에서도 사용됩니다. 프론트엔드와 백엔드 모두에서 사용할 수 있는 유일한 언어입니다.' },
        { type: 'h3', text: 'ES6+ 핵심 문법' },
        { type: 'list', items: [
          { bold: '화살표 함수', text: 'const add = (a, b) => a + b;' },
          { bold: '구조 분해 할당', text: 'const { name, age } = user;' },
          { bold: '템플릿 리터럴', text: '`Hello, ${name}!`' },
          { bold: 'Promise/async-await', text: '비동기 처리를 위한 현대적 패턴' },
          { bold: '모듈 시스템', text: 'import/export를 사용한 코드 모듈화' },
          { bold: '옵셔널 체이닝', text: 'user?.address?.city' },
        ]},
        { type: 'h3', text: '주요 프레임워크/라이브러리' },
        { type: 'table', headers: ['이름', '유형', '특징'], rows: [
          ['React', '프론트엔드', '컴포넌트 기반, Virtual DOM, 가장 인기'],
          ['Vue.js', '프론트엔드', '학습 곡선이 낮은 진보적 프레임워크'],
          ['Next.js', '풀스택', 'React 기반 SSR/SSG 프레임워크'],
          ['Express.js', '백엔드', '최소주의 Node.js 웹 프레임워크'],
          ['Svelte', '프론트엔드', '컴파일러 기반, 작은 번들 크기'],
        ]},
      ],
    },
    en: {
      title: 'JavaScript',
      sections: [
        { type: 'h2', text: 'What is JavaScript?' },
        { type: 'p', text: 'JavaScript is a programming language that runs in web browsers, and now also on the server side via Node.js. It is the only language that can be used for both frontend and backend development.' },
        { type: 'h3', text: 'ES6+ Core Syntax' },
        { type: 'list', items: [
          { bold: 'Arrow Functions', text: 'const add = (a, b) => a + b;' },
          { bold: 'Destructuring', text: 'const { name, age } = user;' },
          { bold: 'Template Literals', text: '`Hello, ${name}!`' },
          { bold: 'Promise/async-await', text: 'Modern patterns for async operations' },
          { bold: 'Module System', text: 'Code modularization with import/export' },
          { bold: 'Optional Chaining', text: 'user?.address?.city' },
        ]},
        { type: 'h3', text: 'Major Frameworks/Libraries' },
        { type: 'table', headers: ['Name', 'Type', 'Features'], rows: [
          ['React', 'Frontend', 'Component-based, Virtual DOM, most popular'],
          ['Vue.js', 'Frontend', 'Progressive framework with gentle learning curve'],
          ['Next.js', 'Full-stack', 'React-based SSR/SSG framework'],
          ['Express.js', 'Backend', 'Minimalist Node.js web framework'],
          ['Svelte', 'Frontend', 'Compiler-based, small bundle size'],
        ]},
      ],
    },
  },
  'html-css': {
    ko: {
      title: 'HTML/CSS',
      sections: [
        { type: 'h2', text: 'HTML & CSS 기초' },
        { type: 'p', text: 'HTML(HyperText Markup Language)은 웹 페이지의 구조를 정의하고, CSS(Cascading Style Sheets)는 시각적 스타일을 적용합니다. 모든 웹 개발의 기초가 되는 기술입니다.' },
        { type: 'h3', text: 'HTML 핵심 태그' },
        { type: 'list', items: [
          { bold: '구조 태그', text: '<header>, <nav>, <main>, <section>, <footer>' },
          { bold: '텍스트 태그', text: '<h1>~<h6>, <p>, <span>, <strong>' },
          { bold: '링크/미디어', text: '<a>, <img>, <video>, <audio>' },
          { bold: '폼 태그', text: '<form>, <input>, <select>, <textarea>, <button>' },
          { bold: '시맨틱 태그', text: '<article>, <aside>, <figure>, <time>' },
        ]},
        { type: 'h3', text: 'CSS 핵심 개념' },
        { type: 'list', items: [
          { bold: 'Flexbox', text: '1차원 레이아웃 시스템으로 요소를 유연하게 배치' },
          { bold: 'Grid', text: '2차원 레이아웃 시스템으로 복잡한 레이아웃 구현' },
          { bold: '반응형 디자인', text: 'Media Query로 다양한 디바이스에 대응' },
          { bold: 'CSS 변수', text: '--primary-color와 같은 커스텀 프로퍼티 활용' },
          { bold: '애니메이션', text: 'transition, animation, @keyframes 활용' },
        ]},
      ],
    },
    en: {
      title: 'HTML/CSS',
      sections: [
        { type: 'h2', text: 'HTML & CSS Basics' },
        { type: 'p', text: 'HTML defines web page structure, CSS applies visual styles. These are foundational technologies for all web development.' },
        { type: 'h3', text: 'Core HTML Tags' },
        { type: 'list', items: [
          { bold: 'Structural', text: '<header>, <nav>, <main>, <section>, <footer>' },
          { bold: 'Text', text: '<h1>-<h6>, <p>, <span>, <strong>' },
          { bold: 'Links/Media', text: '<a>, <img>, <video>, <audio>' },
          { bold: 'Forms', text: '<form>, <input>, <select>, <textarea>, <button>' },
          { bold: 'Semantic', text: '<article>, <aside>, <figure>, <time>' },
        ]},
        { type: 'h3', text: 'Core CSS Concepts' },
        { type: 'list', items: [
          { bold: 'Flexbox', text: '1D layout system for flexible element positioning' },
          { bold: 'Grid', text: '2D layout system for complex layouts' },
          { bold: 'Responsive Design', text: 'Adapt to various devices with Media Queries' },
          { bold: 'CSS Variables', text: 'Custom properties like --primary-color' },
          { bold: 'Animations', text: 'Using transition, animation, @keyframes' },
        ]},
      ],
    },
  },
  git: {
    ko: {
      title: 'Git & GitHub',
      sections: [
        { type: 'h2', text: 'Git이란?' },
        { type: 'p', text: 'Git은 소스 코드의 변경 이력을 추적하는 분산 버전 관리 시스템(DVCS)입니다. GitHub는 Git 저장소를 호스팅하고 협업할 수 있는 플랫폼입니다.' },
        { type: 'h3', text: '필수 Git 명령어' },
        { type: 'code', text: '# 저장소 초기화\ngit init\n\n# 파일 추가 및 커밋\ngit add .\ngit commit -m "Initial commit"\n\n# 브랜치\ngit branch feature/login\ngit checkout feature/login\n# 또는\ngit checkout -b feature/login\n\n# 원격 저장소\ngit remote add origin <url>\ngit push -u origin main\ngit pull origin main\n\n# 병합\ngit merge feature/login' },
        { type: 'h3', text: 'Git 워크플로우' },
        { type: 'list', items: [
          { bold: 'Git Flow', text: 'main, develop, feature, release, hotfix 브랜치 전략' },
          { bold: 'GitHub Flow', text: 'main + feature 브랜치의 간단한 전략' },
          { bold: 'Pull Request', text: '코드 리뷰와 병합을 위한 협업 도구' },
        ]},
      ],
    },
    en: {
      title: 'Git & GitHub',
      sections: [
        { type: 'h2', text: 'What is Git?' },
        { type: 'p', text: 'Git is a distributed version control system (DVCS) that tracks changes in source code. GitHub is a platform for hosting Git repositories and collaborating.' },
        { type: 'h3', text: 'Essential Git Commands' },
        { type: 'code', text: '# Initialize repository\ngit init\n\n# Add files and commit\ngit add .\ngit commit -m "Initial commit"\n\n# Branching\ngit branch feature/login\ngit checkout feature/login\n# or\ngit checkout -b feature/login\n\n# Remote repository\ngit remote add origin <url>\ngit push -u origin main\ngit pull origin main\n\n# Merge\ngit merge feature/login' },
        { type: 'h3', text: 'Git Workflows' },
        { type: 'list', items: [
          { bold: 'Git Flow', text: 'Branch strategy with main, develop, feature, release, hotfix' },
          { bold: 'GitHub Flow', text: 'Simple strategy with main + feature branches' },
          { bold: 'Pull Request', text: 'Collaboration tool for code review and merging' },
        ]},
      ],
    },
  },
  pandas: {
    ko: {
      title: 'Pandas 데이터 분석',
      sections: [
        { type: 'h2', text: 'Pandas란?' },
        { type: 'p', text: 'Pandas는 Python에서 데이터를 다루기 위한 핵심 라이브러리입니다. DataFrame이라는 2차원 테이블 구조로 데이터를 로딩, 정제, 변환, 분석할 수 있습니다.' },
        { type: 'h3', text: '핵심 기능' },
        { type: 'code', text: 'import pandas as pd\n\n# 데이터 로딩\ndf = pd.read_csv("data.csv")\n\n# 기본 정보\ndf.head()      # 상위 5행\ndf.info()      # 데이터 타입, 결측치\ndf.describe()  # 통계 요약\n\n# 필터링\ndf[df["age"] > 30]\ndf.query("city == \'Seoul\'")\n\n# 그룹화\ndf.groupby("category").mean()\n\n# 결측치 처리\ndf.fillna(0)\ndf.dropna()' },
        { type: 'h3', text: '주요 메서드' },
        { type: 'table', headers: ['메서드', '설명', '예시'], rows: [
          ['read_csv()', 'CSV 파일 로딩', 'pd.read_csv("file.csv")'],
          ['head()/tail()', '상위/하위 N행', 'df.head(10)'],
          ['groupby()', '그룹별 집계', 'df.groupby("col").sum()'],
          ['merge()', '테이블 병합', 'pd.merge(df1, df2, on="id")'],
          ['pivot_table()', '피벗 테이블', 'df.pivot_table(values="v", index="i")'],
          ['apply()', '함수 적용', 'df["col"].apply(func)'],
        ]},
      ],
    },
    en: {
      title: 'Pandas Data Analysis',
      sections: [
        { type: 'h2', text: 'What is Pandas?' },
        { type: 'p', text: 'Pandas is the essential Python library for data manipulation. It uses DataFrames - 2D table structures - for loading, cleaning, transforming, and analyzing data.' },
        { type: 'h3', text: 'Core Features' },
        { type: 'code', text: 'import pandas as pd\n\n# Load data\ndf = pd.read_csv("data.csv")\n\n# Basic info\ndf.head()      # First 5 rows\ndf.info()      # Data types, missing values\ndf.describe()  # Statistical summary\n\n# Filtering\ndf[df["age"] > 30]\ndf.query("city == \'Seoul\'")\n\n# Grouping\ndf.groupby("category").mean()\n\n# Missing values\ndf.fillna(0)\ndf.dropna()' },
        { type: 'h3', text: 'Key Methods' },
        { type: 'table', headers: ['Method', 'Description', 'Example'], rows: [
          ['read_csv()', 'Load CSV file', 'pd.read_csv("file.csv")'],
          ['head()/tail()', 'First/Last N rows', 'df.head(10)'],
          ['groupby()', 'Group aggregation', 'df.groupby("col").sum()'],
          ['merge()', 'Table merge', 'pd.merge(df1, df2, on="id")'],
          ['pivot_table()', 'Pivot table', 'df.pivot_table(values="v", index="i")'],
          ['apply()', 'Apply function', 'df["col"].apply(func)'],
        ]},
      ],
    },
  },
  visualization: {
    ko: {
      title: '데이터 시각화',
      sections: [
        { type: 'h2', text: '데이터 시각화란?' },
        { type: 'p', text: '데이터 시각화는 데이터를 그래프, 차트 등 시각적 형태로 표현하여 패턴과 인사이트를 발견하는 과정입니다.' },
        { type: 'h3', text: '차트 유형별 용도' },
        { type: 'table', headers: ['차트 유형', '용도', '라이브러리'], rows: [
          ['막대 차트', '카테고리별 비교', 'Matplotlib, Seaborn'],
          ['선 그래프', '시계열 추세', 'Matplotlib, Plotly'],
          ['산점도', '변수 간 관계', 'Seaborn, Plotly'],
          ['히트맵', '상관관계 시각화', 'Seaborn'],
          ['파이 차트', '구성 비율', 'Matplotlib'],
          ['박스 플롯', '분포, 이상치 확인', 'Seaborn'],
          ['히스토그램', '데이터 분포', 'Matplotlib'],
        ]},
        { type: 'blockquote', text: '정적 시각화에는 Matplotlib/Seaborn, 인터랙티브 시각화에는 Plotly/Bokeh를 사용합니다.' },
      ],
    },
    en: {
      title: 'Data Visualization',
      sections: [
        { type: 'h2', text: 'What is Data Visualization?' },
        { type: 'p', text: 'Data visualization represents data in visual forms like graphs and charts to discover patterns and insights.' },
        { type: 'h3', text: 'Chart Types and Uses' },
        { type: 'table', headers: ['Chart Type', 'Purpose', 'Library'], rows: [
          ['Bar Chart', 'Category comparison', 'Matplotlib, Seaborn'],
          ['Line Graph', 'Time-series trends', 'Matplotlib, Plotly'],
          ['Scatter Plot', 'Variable relationships', 'Seaborn, Plotly'],
          ['Heatmap', 'Correlation visualization', 'Seaborn'],
          ['Pie Chart', 'Composition ratio', 'Matplotlib'],
          ['Box Plot', 'Distribution, outliers', 'Seaborn'],
          ['Histogram', 'Data distribution', 'Matplotlib'],
        ]},
        { type: 'blockquote', text: 'Use Matplotlib/Seaborn for static visualizations, Plotly/Bokeh for interactive ones.' },
      ],
    },
  },
  statistics: {
    ko: {
      title: '통계학 기초',
      sections: [
        { type: 'h2', text: '데이터 사이언스를 위한 통계' },
        { type: 'p', text: '통계학은 데이터를 수집, 분석, 해석하는 학문으로, 데이터 사이언스와 머신러닝의 핵심 기반입니다.' },
        { type: 'h3', text: '기술통계' },
        { type: 'list', items: [
          { bold: '평균 (Mean)', text: '데이터의 중심 경향을 나타내는 대표값' },
          { bold: '중앙값 (Median)', text: '데이터를 정렬했을 때 중간에 위치한 값' },
          { bold: '표준편차 (Std Dev)', text: '데이터의 퍼짐 정도를 나타내는 척도' },
          { bold: '분산 (Variance)', text: '표준편차의 제곱, 데이터의 변동성' },
        ]},
        { type: 'h3', text: '추론통계' },
        { type: 'list', items: [
          { bold: '가설검정', text: '귀무가설(H0)과 대립가설(H1)을 설정하고 p-value로 판단' },
          { bold: '신뢰구간', text: '모수가 포함될 것으로 기대되는 구간 (95% 등)' },
          { bold: '회귀분석', text: '변수 간 관계를 모델링하여 예측' },
          { bold: 't-검정', text: '두 그룹 간 평균 차이 검정' },
          { bold: 'ANOVA', text: '세 그룹 이상의 평균 차이 검정' },
        ]},
      ],
    },
    en: {
      title: 'Statistics Basics',
      sections: [
        { type: 'h2', text: 'Statistics for Data Science' },
        { type: 'p', text: 'Statistics is the study of collecting, analyzing, and interpreting data. It is the core foundation of data science and machine learning.' },
        { type: 'h3', text: 'Descriptive Statistics' },
        { type: 'list', items: [
          { bold: 'Mean', text: 'Central tendency of the data' },
          { bold: 'Median', text: 'Middle value when data is sorted' },
          { bold: 'Standard Deviation', text: 'Measure of data spread' },
          { bold: 'Variance', text: 'Square of standard deviation, data variability' },
        ]},
        { type: 'h3', text: 'Inferential Statistics' },
        { type: 'list', items: [
          { bold: 'Hypothesis Testing', text: 'Set H0 and H1, decide based on p-value' },
          { bold: 'Confidence Interval', text: 'Expected interval containing the parameter (e.g., 95%)' },
          { bold: 'Regression Analysis', text: 'Model relationships between variables for prediction' },
          { bold: 't-test', text: 'Test mean difference between two groups' },
          { bold: 'ANOVA', text: 'Test mean differences among three or more groups' },
        ]},
      ],
    },
  },
  sql: {
    ko: {
      title: 'SQL 데이터베이스',
      sections: [
        { type: 'h2', text: 'SQL이란?' },
        { type: 'p', text: 'SQL(Structured Query Language)은 관계형 데이터베이스에서 데이터를 조회, 삽입, 수정, 삭제하는 표준 언어입니다.' },
        { type: 'h3', text: '핵심 문법' },
        { type: 'code', text: '-- 데이터 조회\nSELECT name, age FROM users WHERE age > 20;\n\n-- 정렬과 제한\nSELECT * FROM products ORDER BY price DESC LIMIT 10;\n\n-- 그룹화\nSELECT category, COUNT(*) as cnt\nFROM products\nGROUP BY category\nHAVING cnt > 5;\n\n-- 조인\nSELECT u.name, o.total\nFROM users u\nJOIN orders o ON u.id = o.user_id;\n\n-- 서브쿼리\nSELECT * FROM users\nWHERE id IN (SELECT user_id FROM orders WHERE total > 100);' },
        { type: 'h3', text: '주요 데이터베이스' },
        { type: 'table', headers: ['DB', '유형', '특징'], rows: [
          ['PostgreSQL', 'RDBMS', '고급 기능, JSON 지원, Supabase 기반'],
          ['MySQL', 'RDBMS', '가장 널리 사용, 웹 애플리케이션'],
          ['SQLite', 'RDBMS', '파일 기반, 임베디드 DB'],
          ['MongoDB', 'NoSQL', '문서 기반, 유연한 스키마'],
          ['Redis', 'NoSQL', '인메모리, 캐싱 용도'],
        ]},
      ],
    },
    en: {
      title: 'SQL Database',
      sections: [
        { type: 'h2', text: 'What is SQL?' },
        { type: 'p', text: 'SQL (Structured Query Language) is the standard language for querying, inserting, updating, and deleting data in relational databases.' },
        { type: 'h3', text: 'Core Syntax' },
        { type: 'code', text: '-- Select data\nSELECT name, age FROM users WHERE age > 20;\n\n-- Sort and limit\nSELECT * FROM products ORDER BY price DESC LIMIT 10;\n\n-- Group\nSELECT category, COUNT(*) as cnt\nFROM products\nGROUP BY category\nHAVING cnt > 5;\n\n-- Join\nSELECT u.name, o.total\nFROM users u\nJOIN orders o ON u.id = o.user_id;\n\n-- Subquery\nSELECT * FROM users\nWHERE id IN (SELECT user_id FROM orders WHERE total > 100);' },
        { type: 'h3', text: 'Major Databases' },
        { type: 'table', headers: ['DB', 'Type', 'Features'], rows: [
          ['PostgreSQL', 'RDBMS', 'Advanced features, JSON support, Supabase base'],
          ['MySQL', 'RDBMS', 'Most widely used, web applications'],
          ['SQLite', 'RDBMS', 'File-based, embedded DB'],
          ['MongoDB', 'NoSQL', 'Document-based, flexible schema'],
          ['Redis', 'NoSQL', 'In-memory, caching'],
        ]},
      ],
    },
  },
  'prompt-writing': {
    ko: {
      title: '프롬프트 작성법',
      sections: [
        { type: 'h2', text: '효과적인 프롬프트 작성법' },
        { type: 'p', text: '프롬프트 엔지니어링은 AI에게 원하는 결과를 얻기 위해 입력을 설계하는 기술입니다. 좋은 프롬프트는 AI 응답의 품질을 극적으로 향상시킵니다.' },
        { type: 'h3', text: '프롬프트 작성 5원칙' },
        { type: 'list', items: [
          { bold: '명확성 (Clarity)', text: '모호하지 않고 구체적으로 지시하세요' },
          { bold: '맥락 (Context)', text: '배경 정보와 상황을 충분히 제공하세요' },
          { bold: '구조화 (Structure)', text: '역할, 태스크, 형식을 체계적으로 구성하세요' },
          { bold: '예시 (Examples)', text: '원하는 결과물의 예시를 제공하세요' },
          { bold: '제약 (Constraints)', text: '분량, 형식, 톤 등의 제한 조건을 명시하세요' },
        ]},
        { type: 'h3', text: '프롬프트 템플릿' },
        { type: 'code', text: '[역할] 당신은 {역할}입니다.\n[맥락] {배경 정보}\n[태스크] {수행할 작업을 구체적으로 설명}\n[형식] {원하는 출력 형식}\n[제약] {제한 조건}\n[예시] {원하는 결과의 예시}' },
        { type: 'blockquote', text: '같은 질문이라도 프롬프트를 어떻게 작성하느냐에 따라 AI 응답의 품질이 크게 달라집니다. 실험과 반복 개선이 중요합니다.' },
      ],
    },
    en: {
      title: 'Prompt Writing',
      sections: [
        { type: 'h2', text: 'Effective Prompt Writing' },
        { type: 'p', text: 'Prompt engineering is the skill of designing inputs to get desired results from AI. Good prompts dramatically improve AI response quality.' },
        { type: 'h3', text: '5 Principles of Prompt Writing' },
        { type: 'list', items: [
          { bold: 'Clarity', text: 'Give specific, unambiguous instructions' },
          { bold: 'Context', text: 'Provide sufficient background information' },
          { bold: 'Structure', text: 'Systematically organize role, task, format' },
          { bold: 'Examples', text: 'Provide examples of desired output' },
          { bold: 'Constraints', text: 'Specify limitations on length, format, tone' },
        ]},
        { type: 'h3', text: 'Prompt Template' },
        { type: 'code', text: '[Role] You are a {role}.\n[Context] {background information}\n[Task] {describe the task specifically}\n[Format] {desired output format}\n[Constraints] {limitations}\n[Examples] {examples of desired results}' },
        { type: 'blockquote', text: 'Even with the same question, AI response quality varies greatly depending on how the prompt is written. Experimentation and iterative improvement are key.' },
      ],
    },
  },
  'api-usage': {
    ko: {
      title: 'API 활용',
      sections: [
        { type: 'h2', text: 'AI API 활용하기' },
        { type: 'p', text: 'AI API를 활용하면 프로그래밍으로 AI 기능을 자동화하고 맞춤형 애플리케이션을 구축할 수 있습니다.' },
        { type: 'h3', text: '주요 AI API' },
        { type: 'table', headers: ['API', '제공사', '주요 기능'], rows: [
          ['OpenAI API', 'OpenAI', 'GPT-4o, DALL-E, Whisper'],
          ['Claude API', 'Anthropic', 'Claude Sonnet, Haiku, 긴 컨텍스트'],
          ['Gemini API', 'Google', 'Gemini Pro, Flash, 멀티모달'],
          ['Genspark API', 'Genspark', '통합 검색 AI'],
        ]},
        { type: 'h3', text: 'API 호출 예시 (Python)' },
        { type: 'code', text: 'from openai import OpenAI\n\nclient = OpenAI(api_key="your-api-key")\n\nresponse = client.chat.completions.create(\n    model="gpt-4o",\n    messages=[\n        {"role": "system", "content": "You are a helpful assistant."},\n        {"role": "user", "content": "AI란 무엇인가요?"}\n    ]\n)\n\nprint(response.choices[0].message.content)' },
      ],
    },
    en: {
      title: 'API Usage',
      sections: [
        { type: 'h2', text: 'Using AI APIs' },
        { type: 'p', text: 'AI APIs enable you to automate AI capabilities programmatically and build custom applications.' },
        { type: 'h3', text: 'Major AI APIs' },
        { type: 'table', headers: ['API', 'Provider', 'Key Features'], rows: [
          ['OpenAI API', 'OpenAI', 'GPT-4o, DALL-E, Whisper'],
          ['Claude API', 'Anthropic', 'Claude Sonnet, Haiku, long context'],
          ['Gemini API', 'Google', 'Gemini Pro, Flash, multimodal'],
          ['Genspark API', 'Genspark', 'Integrated search AI'],
        ]},
        { type: 'h3', text: 'API Call Example (Python)' },
        { type: 'code', text: 'from openai import OpenAI\n\nclient = OpenAI(api_key="your-api-key")\n\nresponse = client.chat.completions.create(\n    model="gpt-4o",\n    messages=[\n        {"role": "system", "content": "You are a helpful assistant."},\n        {"role": "user", "content": "What is AI?"}\n    ]\n)\n\nprint(response.choices[0].message.content)' },
      ],
    },
  },
  automation: {
    ko: {
      title: 'AI 자동화',
      sections: [
        { type: 'h2', text: 'AI 자동화란?' },
        { type: 'p', text: 'AI 자동화는 반복적인 업무를 AI와 프로그래밍으로 자동 처리하는 것입니다. 업무 효율성을 높이고 인적 오류를 줄일 수 있습니다.' },
        { type: 'h3', text: '자동화 활용 사례' },
        { type: 'list', items: [
          { bold: '이메일 자동 분류', text: 'AI로 이메일을 분류하고 자동 응답 생성' },
          { bold: '문서 요약', text: '긴 보고서를 자동으로 요약' },
          { bold: '데이터 입력 자동화', text: 'PDF, 이미지에서 데이터 추출 후 자동 입력' },
          { bold: '코드 리뷰', text: 'AI를 활용한 코드 품질 검사 자동화' },
          { bold: '보고서 생성', text: '데이터 분석 후 자동 보고서 작성' },
        ]},
        { type: 'h3', text: '자동화 도구' },
        { type: 'table', headers: ['도구', '용도', '특징'], rows: [
          ['Zapier', '워크플로우 자동화', '3,000+ 앱 연동, 노코드'],
          ['n8n', '워크플로우 자동화', '오픈소스, 셀프 호스팅'],
          ['GitHub Actions', 'CI/CD', '코드 빌드, 테스트, 배포 자동화'],
          ['Python Script', '맞춤 자동화', '유연한 커스터마이징 가능'],
        ]},
      ],
    },
    en: {
      title: 'AI Automation',
      sections: [
        { type: 'h2', text: 'What is AI Automation?' },
        { type: 'p', text: 'AI automation is automatically handling repetitive tasks with AI and programming. It improves efficiency and reduces human error.' },
        { type: 'h3', text: 'Automation Use Cases' },
        { type: 'list', items: [
          { bold: 'Email Auto-classification', text: 'Classify emails and generate auto-responses with AI' },
          { bold: 'Document Summarization', text: 'Automatically summarize long reports' },
          { bold: 'Data Entry Automation', text: 'Extract data from PDFs/images and auto-input' },
          { bold: 'Code Review', text: 'Automated code quality inspection with AI' },
          { bold: 'Report Generation', text: 'Auto-generate reports after data analysis' },
        ]},
        { type: 'h3', text: 'Automation Tools' },
        { type: 'table', headers: ['Tool', 'Purpose', 'Features'], rows: [
          ['Zapier', 'Workflow Automation', '3,000+ app integrations, no-code'],
          ['n8n', 'Workflow Automation', 'Open source, self-hosted'],
          ['GitHub Actions', 'CI/CD', 'Automated code build, test, deploy'],
          ['Python Script', 'Custom Automation', 'Flexible customization'],
        ]},
      ],
    },
  },
  ethics: {
    ko: {
      title: 'AI 윤리',
      sections: [
        { type: 'h2', text: 'AI 윤리란?' },
        { type: 'p', text: 'AI 윤리는 인공지능 개발과 사용에서 발생하는 윤리적 문제를 다루는 분야입니다. AI가 사회에 미치는 영향이 커지면서 그 중요성이 높아지고 있습니다.' },
        { type: 'h3', text: '주요 윤리적 이슈' },
        { type: 'list', items: [
          { bold: '편향성 (Bias)', text: '학습 데이터의 편향이 AI 결과에 반영되는 문제' },
          { bold: '개인정보 보호', text: 'AI 학습에 사용되는 개인 데이터의 보호' },
          { bold: '투명성', text: 'AI 의사결정 과정의 설명 가능성 (Explainable AI)' },
          { bold: '저작권', text: 'AI 생성물의 저작권과 학습 데이터의 저작권 문제' },
          { bold: '일자리 대체', text: 'AI로 인한 직업 구조 변화와 사회적 영향' },
          { bold: '안전성', text: 'AI 시스템의 오작동이나 악용 가능성' },
        ]},
        { type: 'h3', text: 'AI 윤리 가이드라인' },
        { type: 'list', items: [
          { bold: '공정성', text: '모든 사용자에게 차별 없이 공정한 서비스를 제공' },
          { bold: '책임성', text: 'AI 결과에 대한 명확한 책임 소재를 밝힘' },
          { bold: '투명성', text: 'AI 사용 사실을 명시하고 의사결정 과정을 공개' },
          { bold: '개인정보 보호', text: '데이터 최소 수집 원칙과 안전한 보관' },
          { bold: '인간 중심', text: 'AI는 인간의 의사결정을 보조하는 도구로 활용' },
        ]},
        { type: 'blockquote', text: 'AI를 개발하고 사용하는 모든 사람은 윤리적 책임을 인식하고 실천해야 합니다. 기술의 발전과 함께 윤리적 고려도 함께 발전해야 합니다.' },
      ],
    },
    en: {
      title: 'AI Ethics',
      sections: [
        { type: 'h2', text: 'What is AI Ethics?' },
        { type: 'p', text: 'AI Ethics deals with ethical issues in AI development and use. As AI\'s societal impact grows, its importance continues to increase.' },
        { type: 'h3', text: 'Key Ethical Issues' },
        { type: 'list', items: [
          { bold: 'Bias', text: 'Training data bias reflected in AI outputs' },
          { bold: 'Privacy', text: 'Protecting personal data used in AI training' },
          { bold: 'Transparency', text: 'Explainability of AI decision-making (Explainable AI)' },
          { bold: 'Copyright', text: 'Copyright of AI-generated content and training data' },
          { bold: 'Job Displacement', text: 'Changes in job structure due to AI and social impact' },
          { bold: 'Safety', text: 'Potential for AI system malfunction or misuse' },
        ]},
        { type: 'h3', text: 'AI Ethics Guidelines' },
        { type: 'list', items: [
          { bold: 'Fairness', text: 'Provide fair service to all users without discrimination' },
          { bold: 'Accountability', text: 'Clear responsibility for AI outcomes' },
          { bold: 'Transparency', text: 'Disclose AI use and decision-making processes' },
          { bold: 'Privacy Protection', text: 'Minimum data collection and secure storage' },
          { bold: 'Human-centered', text: 'AI as a tool to assist human decision-making' },
        ]},
        { type: 'blockquote', text: 'Everyone who develops and uses AI must recognize and practice ethical responsibility. Ethical considerations must evolve alongside technological advancement.' },
      ],
    },
  },
};

function renderContent(sections) {
  return sections.map((section, idx) => {
    switch (section.type) {
      case 'h2':
        return <h2 key={idx} className="theory-h2">{section.text}</h2>;
      case 'h3':
        return <h3 key={idx} className="theory-h3">{section.text}</h3>;
      case 'p':
        return <p key={idx} className="theory-p">{section.text}</p>;
      case 'list':
        return (
          <ul key={idx} className="theory-list">
            {section.items.map((item, i) => (
              <li key={i}><strong>{item.bold}</strong> - {item.text}</li>
            ))}
          </ul>
        );
      case 'table':
        return (
          <div key={idx} className="theory-table-wrap">
            <table className="theory-table">
              <thead>
                <tr>{section.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {section.rows.map((row, i) => (
                  <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'code':
        return <pre key={idx} className="theory-code">{section.text}</pre>;
      case 'blockquote':
        return <blockquote key={idx} className="theory-blockquote">{section.text}</blockquote>;
      default:
        return null;
    }
  });
}

export default function Resources() {
  const { language, t } = useLanguage();
  const isKo = language === 'ko';
  const [activeCategory, setActiveCategory] = useState('ai-theory');
  const [activeTopic, setActiveTopic] = useState('ml');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const currentCategory = CATEGORIES.find(c => c.id === activeCategory);
  const topicContent = TOPIC_CONTENT[activeTopic];

  const handleTopicChange = (catId, topicId) => {
    setActiveCategory(catId);
    setActiveTopic(topicId);
  };

  return (
    <div className="ck-page">
      <SEOHead
        title={t('resources.title')}
        description={isKo ? 'AI, 프로그래밍, 데이터 분석 학습 자료' : 'Learning resources for AI, programming, and data analysis'}
        path="/resources"
      />

      <button
        className="ck-mobile-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <i className="fa-solid fa-bars" />
        <span>{isKo ? '메뉴' : 'Menu'}</span>
      </button>

      <div className="ck-layout">
        {/* Sidebar */}
        <aside className={`ck-sidebar ${sidebarOpen ? '' : 'hidden'}`}>
          <div className="ck-sb-header">
            <i className="fa-solid fa-book-open" />
            <span>{t('resources.title')}</span>
          </div>
          <nav className="ck-sb-nav">
            {CATEGORIES.map(cat => (
              <div key={cat.id} className={`ck-nav-group ${activeCategory === cat.id ? 'active' : ''}`}>
                <button
                  className={`ck-nav-parent ck-np--${cat.id === 'ai-theory' ? 'blue' : cat.id === 'programming' ? 'green' : cat.id === 'data-analysis' ? 'orange' : 'purple'}`}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setActiveTopic(cat.topics[0].id);
                  }}
                >
                  <span className="ck-np-icon"><i className={`fa-solid ${cat.icon}`} /></span>
                  <span>{isKo ? cat.ko : cat.en}</span>
                  <i className={`fa-solid fa-chevron-down ck-nav-arrow ${activeCategory === cat.id ? 'open' : ''}`} />
                </button>
                {activeCategory === cat.id && (
                  <ul className="ck-nav-children">
                    {cat.topics.map(topic => (
                      <li key={topic.id}>
                        <button
                          className={`ck-nav-child ${activeTopic === topic.id ? 'active' : ''}`}
                          onClick={() => handleTopicChange(cat.id, topic.id)}
                        >
                          <span className="ck-nc-icon"><i className={`fa-solid ${topic.icon}`} /></span>
                          <span>{isKo ? topic.ko : topic.en}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div className="ck-main">
          <div className="ck-breadcrumb">
            <button onClick={() => {}}>{t('resources.title')}</button>
            <span className="ck-bc-sep"><i className="fa-solid fa-chevron-right" /></span>
            <button>{isKo ? currentCategory?.ko : currentCategory?.en}</button>
            <span className="ck-bc-sep"><i className="fa-solid fa-chevron-right" /></span>
            <span className="current">
              {isKo
                ? currentCategory?.topics.find(t => t.id === activeTopic)?.ko
                : currentCategory?.topics.find(t => t.id === activeTopic)?.en}
            </span>
          </div>

          <div className="ck-content-box">
            <div className={`ck-content-header ck-ch--${activeCategory === 'ai-theory' ? 'blue' : activeCategory === 'programming' ? 'green' : activeCategory === 'data-analysis' ? 'orange' : 'purple'}`}>
              <i className={`fa-solid ${currentCategory?.topics.find(t => t.id === activeTopic)?.icon || 'fa-book'}`} />
              <div className="ck-ch-text">
                <h2>{topicContent ? (isKo ? topicContent.ko.title : topicContent.en.title) : ''}</h2>
                <p>{isKo ? currentCategory?.ko : currentCategory?.en}</p>
              </div>
            </div>
            <div className="ck-content-body">
              {topicContent && renderContent(isKo ? topicContent.ko.sections : topicContent.en.sections)}
            </div>
          </div>

          {/* Quick Reference */}
          <div className="ck-content-box" style={{ marginTop: 20 }}>
            <div className="ck-content-header">
              <i className="fa-solid fa-bookmark" />
              <h2>{isKo ? '빠른 참조' : 'Quick Reference'}</h2>
            </div>
            <div className="ck-content-body">
              <div className="ck-og-2col">
                {currentCategory?.topics.map(topic => (
                  <button
                    key={topic.id}
                    className="ck-ov-card"
                    onClick={() => setActiveTopic(topic.id)}
                    style={{ border: activeTopic === topic.id ? '2px solid var(--primary-blue)' : undefined }}
                  >
                    <span className="ck-nc-icon" style={{ fontSize: 18 }}>
                      <i className={`fa-solid ${topic.icon}`} />
                    </span>
                    <span style={{ fontWeight: activeTopic === topic.id ? 700 : 500 }}>
                      {isKo ? topic.ko : topic.en}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
