import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const CATEGORIES = [
  { id: 'all', ko: '전체', en: 'All', icon: 'fa-border-all' },
  { id: 'ai-basic', ko: 'AI기초', en: 'AI Basics', icon: 'fa-robot' },
  { id: 'ml', ko: '머신러닝', en: 'Machine Learning', icon: 'fa-brain' },
  { id: 'dl', ko: '딥러닝', en: 'Deep Learning', icon: 'fa-network-wired' },
  { id: 'programming', ko: '프로그래밍', en: 'Programming', icon: 'fa-code' },
  { id: 'data', ko: '데이터', en: 'Data', icon: 'fa-database' },
];

const GLOSSARY_TERMS = [
  // AI기초
  { term: '인공지능', en: 'Artificial Intelligence (AI)', cat: 'ai-basic',
    ko: { def: '인간의 학습, 추론, 인식 능력을 컴퓨터로 구현하는 기술입니다. 약한 AI(특정 작업)와 강한 AI(범용 지능)로 나뉘며, 현재 대부분의 AI는 약한 AI에 해당합니다.', related: '머신러닝, 딥러닝, AGI' },
    en: { def: 'Technology that implements human learning, reasoning, and perception capabilities in computers. Divided into narrow AI (specific tasks) and general AI (universal intelligence), with most current AI being narrow AI.', related: 'Machine Learning, Deep Learning, AGI' } },
  { term: '머신러닝', en: 'Machine Learning (ML)', cat: 'ml',
    ko: { def: '명시적 프로그래밍 없이 데이터에서 패턴을 학습하는 AI의 하위 분야입니다. 지도학습, 비지도학습, 강화학습으로 나뉘며 다양한 산업에서 활용됩니다.', related: '지도학습, 비지도학습, 강화학습' },
    en: { def: 'A subfield of AI that learns patterns from data without explicit programming. Divided into supervised, unsupervised, and reinforcement learning, used across various industries.', related: 'Supervised Learning, Unsupervised Learning, Reinforcement Learning' } },
  { term: '딥러닝', en: 'Deep Learning (DL)', cat: 'dl',
    ko: { def: '다층 신경망을 사용하여 복잡한 패턴을 학습하는 머신러닝의 하위 분야입니다. 이미지 인식, 자연어 처리, 음성 인식 등에서 혁신적인 성과를 달성했습니다.', related: '신경망, CNN, RNN, 트랜스포머' },
    en: { def: 'A subfield of machine learning that uses multi-layer neural networks to learn complex patterns. Has achieved breakthrough results in image recognition, NLP, and speech recognition.', related: 'Neural Network, CNN, RNN, Transformer' } },
  { term: '신경망', en: 'Neural Network', cat: 'dl',
    ko: { def: '생물학적 뉴런의 구조를 모방한 컴퓨팅 시스템입니다. 입력층, 은닉층, 출력층으로 구성되며, 가중치를 조정하여 학습합니다. 딥러닝의 기본 구조입니다.', related: '퍼셉트론, 활성화 함수, 역전파' },
    en: { def: 'A computing system inspired by biological neurons. Composed of input, hidden, and output layers, learning by adjusting weights. The fundamental structure of deep learning.', related: 'Perceptron, Activation Function, Backpropagation' } },
  { term: 'CNN', en: 'Convolutional Neural Network', cat: 'dl',
    ko: { def: '합성곱 연산을 사용하여 이미지의 공간적 특징을 추출하는 신경망입니다. 필터(커널)가 이미지를 스캔하며 특징 맵을 생성합니다. 이미지 분류, 객체 탐지에 널리 사용됩니다.', related: '컴퓨터비전, 합성곱, 풀링, ResNet' },
    en: { def: 'A neural network that uses convolution operations to extract spatial features from images. Filters (kernels) scan images to create feature maps. Widely used in image classification and object detection.', related: 'Computer Vision, Convolution, Pooling, ResNet' } },
  { term: 'RNN', en: 'Recurrent Neural Network', cat: 'dl',
    ko: { def: '순차적 데이터를 처리하기 위해 이전 단계의 출력을 다음 단계의 입력으로 사용하는 신경망입니다. 시계열 데이터, 텍스트 처리에 적합하지만 장기 의존성 문제가 있습니다.', related: 'LSTM, GRU, 시퀀스 모델링' },
    en: { def: 'A neural network that uses output from previous steps as input for the next step to process sequential data. Suitable for time series and text, but has long-term dependency issues.', related: 'LSTM, GRU, Sequence Modeling' } },
  { term: 'LSTM', en: 'Long Short-Term Memory', cat: 'dl',
    ko: { def: 'RNN의 장기 의존성 문제를 해결하기 위해 설계된 신경망 구조입니다. 셀 상태와 게이트 메커니즘(입력, 망각, 출력 게이트)을 통해 장기 기억을 효과적으로 유지합니다.', related: 'RNN, GRU, 시퀀스 모델링' },
    en: { def: 'A neural network architecture designed to solve RNN\'s long-term dependency problem. Effectively maintains long-term memory through cell state and gate mechanisms (input, forget, output gates).', related: 'RNN, GRU, Sequence Modeling' } },
  { term: '트랜스포머', en: 'Transformer', cat: 'dl',
    ko: { def: '어텐션 메커니즘만으로 구성된 혁신적인 신경망 구조입니다. "Attention Is All You Need" 논문(2017)에서 제안되었으며, GPT, BERT 등 현대 AI 모델의 기반이 됩니다.', related: '어텐션, GPT, BERT, Self-Attention' },
    en: { def: 'A revolutionary neural network architecture composed entirely of attention mechanisms. Proposed in the "Attention Is All You Need" paper (2017), it forms the basis of modern AI models like GPT and BERT.', related: 'Attention, GPT, BERT, Self-Attention' } },
  { term: 'GPT', en: 'Generative Pre-trained Transformer', cat: 'ai-basic',
    ko: { def: 'OpenAI가 개발한 대형 언어 모델 시리즈입니다. 대량의 텍스트 데이터로 사전학습 후 다양한 작업에 활용됩니다. GPT-4, GPT-4o 등 지속적으로 발전하고 있습니다.', related: 'LLM, 트랜스포머, ChatGPT, OpenAI' },
    en: { def: 'A series of large language models developed by OpenAI. Pre-trained on massive text data and applicable to various tasks. Continuously evolving with GPT-4, GPT-4o, and beyond.', related: 'LLM, Transformer, ChatGPT, OpenAI' } },
  { term: 'LLM', en: 'Large Language Model', cat: 'ai-basic',
    ko: { def: '수십억 개 이상의 파라미터를 가진 대규모 언어 모델입니다. 텍스트 생성, 번역, 요약, 코드 작성 등 다양한 언어 작업을 수행합니다. GPT, Claude, Gemini 등이 대표적입니다.', related: 'GPT, Claude, Gemini, 파인튜닝' },
    en: { def: 'A large-scale language model with billions of parameters. Performs various language tasks like text generation, translation, summarization, and coding. GPT, Claude, and Gemini are representative examples.', related: 'GPT, Claude, Gemini, Fine-tuning' } },
  { term: '토큰', en: 'Token', cat: 'ai-basic',
    ko: { def: 'LLM이 텍스트를 처리하는 기본 단위입니다. 단어, 서브워드, 또는 문자가 될 수 있으며, 모델의 입력과 출력은 토큰 단위로 처리됩니다. 비용 산정의 기준이기도 합니다.', related: '토크나이저, BPE, 컨텍스트 윈도우' },
    en: { def: 'The basic unit by which LLMs process text. Can be words, subwords, or characters. Model input and output are processed in token units. Also used as a basis for cost calculation.', related: 'Tokenizer, BPE, Context Window' } },
  { term: '프롬프트', en: 'Prompt', cat: 'ai-basic',
    ko: { def: 'AI 모델에게 원하는 작업을 지시하기 위해 입력하는 텍스트입니다. 프롬프트의 품질이 AI 응답의 품질을 크게 좌우합니다. 시스템 프롬프트와 사용자 프롬프트로 구분됩니다.', related: '프롬프트 엔지니어링, Zero-shot, Few-shot' },
    en: { def: 'Text input to instruct an AI model to perform desired tasks. Prompt quality greatly influences AI response quality. Divided into system prompts and user prompts.', related: 'Prompt Engineering, Zero-shot, Few-shot' } },
  { term: '파인튜닝', en: 'Fine-tuning', cat: 'ml',
    ko: { def: '사전학습된 모델을 특정 작업이나 도메인에 맞게 추가 학습시키는 과정입니다. 전체 파라미터 또는 일부만 학습할 수 있으며, LoRA, QLoRA 같은 효율적 기법도 있습니다.', related: 'LoRA, QLoRA, Transfer Learning' },
    en: { def: 'The process of additional training a pre-trained model for specific tasks or domains. Can train all or some parameters, with efficient techniques like LoRA and QLoRA available.', related: 'LoRA, QLoRA, Transfer Learning' } },
  { term: 'RAG', en: 'Retrieval-Augmented Generation', cat: 'ai-basic',
    ko: { def: '외부 지식 베이스에서 관련 정보를 검색하여 LLM의 응답 생성에 활용하는 기술입니다. 환각(Hallucination)을 줄이고 최신 정보를 반영할 수 있어 기업용 AI에서 핵심 기술입니다.', related: '벡터DB, 임베딩, 검색, LLM' },
    en: { def: 'A technique that retrieves relevant information from external knowledge bases to augment LLM response generation. Reduces hallucination and reflects up-to-date information, making it essential for enterprise AI.', related: 'Vector DB, Embedding, Search, LLM' } },
  { term: '에이전트', en: 'AI Agent', cat: 'ai-basic',
    ko: { def: '목표를 달성하기 위해 자율적으로 계획을 세우고 도구를 사용하며 행동하는 AI 시스템입니다. 웹 검색, 코드 실행, API 호출 등의 도구를 활용하여 복잡한 작업을 수행합니다.', related: 'LLM, 도구 사용, 자율 시스템, ReAct' },
    en: { def: 'An AI system that autonomously plans, uses tools, and takes actions to achieve goals. Performs complex tasks using tools like web search, code execution, and API calls.', related: 'LLM, Tool Use, Autonomous Systems, ReAct' } },
  { term: '임베딩', en: 'Embedding', cat: 'ml',
    ko: { def: '텍스트, 이미지 등의 데이터를 고정 크기의 수치 벡터로 변환하는 기술입니다. 의미적으로 유사한 데이터는 벡터 공간에서 가까이 위치합니다. 검색과 추천 시스템에 핵심적입니다.', related: 'Word2Vec, 벡터DB, 유사도 검색' },
    en: { def: 'A technique to convert data like text and images into fixed-size numerical vectors. Semantically similar data is located close together in vector space. Essential for search and recommendation systems.', related: 'Word2Vec, Vector DB, Similarity Search' } },
  { term: '벡터DB', en: 'Vector Database', cat: 'data',
    ko: { def: '고차원 벡터 데이터를 효율적으로 저장하고 유사도 검색을 수행하는 데이터베이스입니다. Pinecone, Weaviate, Chroma 등이 있으며 RAG 시스템의 핵심 구성 요소입니다.', related: '임베딩, RAG, Pinecone, Chroma' },
    en: { def: 'A database that efficiently stores high-dimensional vector data and performs similarity searches. Examples include Pinecone, Weaviate, and Chroma, serving as core components of RAG systems.', related: 'Embedding, RAG, Pinecone, Chroma' } },
  { term: '어텐션', en: 'Attention Mechanism', cat: 'dl',
    ko: { def: '입력 시퀀스의 각 요소가 다른 요소에 대해 얼마나 중요한지를 계산하는 메커니즘입니다. Self-Attention, Cross-Attention 등이 있으며 트랜스포머의 핵심 구성 요소입니다.', related: '트랜스포머, Self-Attention, Multi-Head Attention' },
    en: { def: 'A mechanism that calculates how important each element of an input sequence is relative to other elements. Includes Self-Attention and Cross-Attention, forming the core of Transformers.', related: 'Transformer, Self-Attention, Multi-Head Attention' } },
  { term: '자연어처리', en: 'Natural Language Processing (NLP)', cat: 'ai-basic',
    ko: { def: '컴퓨터가 인간의 언어를 이해하고 생성하는 AI 분야입니다. 텍스트 분류, 감성 분석, 번역, 질의응답 등을 포함합니다. 트랜스포머 기반 모델이 현재 주류입니다.', related: '토크나이저, BERT, GPT, 텍스트 마이닝' },
    en: { def: 'An AI field where computers understand and generate human language. Includes text classification, sentiment analysis, translation, and Q&A. Transformer-based models are currently mainstream.', related: 'Tokenizer, BERT, GPT, Text Mining' } },
  { term: '컴퓨터비전', en: 'Computer Vision (CV)', cat: 'ai-basic',
    ko: { def: '컴퓨터가 디지털 이미지와 비디오를 이해하고 분석하는 AI 분야입니다. 객체 인식, 이미지 분류, 세그멘테이션, OCR 등을 포함합니다. CNN과 Vision Transformer가 주요 모델입니다.', related: 'CNN, YOLO, 객체 탐지, ViT' },
    en: { def: 'An AI field where computers understand and analyze digital images and videos. Includes object recognition, image classification, segmentation, and OCR. CNN and Vision Transformer are key models.', related: 'CNN, YOLO, Object Detection, ViT' } },
  { term: '강화학습', en: 'Reinforcement Learning (RL)', cat: 'ml',
    ko: { def: '에이전트가 환경과 상호작용하며 보상을 최대화하는 방향으로 학습하는 방법입니다. 게임 AI, 로봇 제어, 자율주행 등에 활용됩니다. RLHF는 LLM 학습에도 사용됩니다.', related: '보상, 정책, Q-러닝, RLHF' },
    en: { def: 'A learning method where an agent interacts with an environment and learns to maximize rewards. Used in game AI, robot control, and autonomous driving. RLHF is also used in LLM training.', related: 'Reward, Policy, Q-Learning, RLHF' } },
  { term: 'GAN', en: 'Generative Adversarial Network', cat: 'dl',
    ko: { def: '생성자와 판별자 두 신경망이 경쟁적으로 학습하는 생성 모델입니다. 사실적인 이미지 생성, 스타일 변환, 데이터 증강 등에 활용됩니다. 이미지 생성 AI의 초기 핵심 기술입니다.', related: 'Diffusion, 이미지 생성, StyleGAN' },
    en: { def: 'A generative model where two neural networks (generator and discriminator) learn competitively. Used for realistic image generation, style transfer, and data augmentation. An early core technology for image generation AI.', related: 'Diffusion, Image Generation, StyleGAN' } },
  { term: '오토인코더', en: 'Autoencoder', cat: 'dl',
    ko: { def: '입력 데이터를 저차원으로 압축(인코딩)한 후 다시 복원(디코딩)하는 비지도 학습 신경망입니다. 차원 축소, 이상 탐지, 노이즈 제거 등에 활용됩니다.', related: 'VAE, 차원 축소, 생성 모델' },
    en: { def: 'An unsupervised learning neural network that compresses (encodes) input data to lower dimensions and then reconstructs (decodes) it. Used for dimensionality reduction, anomaly detection, and denoising.', related: 'VAE, Dimensionality Reduction, Generative Models' } },
  { term: '과적합', en: 'Overfitting', cat: 'ml',
    ko: { def: '모델이 훈련 데이터에 지나치게 최적화되어 새로운 데이터에 대한 일반화 성능이 떨어지는 현상입니다. 드롭아웃, 정규화, 데이터 증강, 조기 종료 등으로 방지합니다.', related: '과소적합, 정규화, 드롭아웃, 교차검증' },
    en: { def: 'A phenomenon where a model is over-optimized to training data, resulting in poor generalization to new data. Prevented with dropout, regularization, data augmentation, and early stopping.', related: 'Underfitting, Regularization, Dropout, Cross-validation' } },
  { term: '학습률', en: 'Learning Rate', cat: 'ml',
    ko: { def: '모델의 가중치를 업데이트할 때 한 번에 이동하는 크기를 결정하는 하이퍼파라미터입니다. 너무 크면 발산하고 너무 작으면 수렴이 느립니다. 학습률 스케줄러로 동적 조절합니다.', related: '옵티마이저, 하이퍼파라미터, 스케줄러' },
    en: { def: 'A hyperparameter that determines the step size when updating model weights. Too large causes divergence, too small causes slow convergence. Dynamically adjusted with learning rate schedulers.', related: 'Optimizer, Hyperparameter, Scheduler' } },
  { term: '배치', en: 'Batch', cat: 'ml',
    ko: { def: '모델 학습 시 한 번에 처리하는 데이터 샘플의 묶음입니다. 배치 크기가 클수록 GPU 메모리를 많이 사용하지만 학습이 안정적입니다. 미니배치 학습이 일반적으로 사용됩니다.', related: '배치 크기, 미니배치, 에폭' },
    en: { def: 'A group of data samples processed at once during model training. Larger batch sizes use more GPU memory but provide more stable training. Mini-batch training is commonly used.', related: 'Batch Size, Mini-batch, Epoch' } },
  { term: '에폭', en: 'Epoch', cat: 'ml',
    ko: { def: '전체 훈련 데이터셋을 한 번 완전히 학습하는 것을 의미합니다. 일반적으로 여러 에폭 동안 반복 학습하며, 너무 많으면 과적합이 발생할 수 있습니다.', related: '배치, 반복, 과적합, 조기 종료' },
    en: { def: 'One complete pass through the entire training dataset. Training typically repeats over multiple epochs, and too many can cause overfitting.', related: 'Batch, Iteration, Overfitting, Early Stopping' } },
  { term: '손실함수', en: 'Loss Function', cat: 'ml',
    ko: { def: '모델의 예측값과 실제값 간의 차이를 수치화하는 함수입니다. 이 값을 최소화하는 방향으로 학습이 진행됩니다. MSE, Cross-Entropy, BCE 등이 대표적입니다.', related: '옵티마이저, 역전파, MSE, Cross-Entropy' },
    en: { def: 'A function that quantifies the difference between model predictions and actual values. Training proceeds in the direction of minimizing this value. MSE, Cross-Entropy, and BCE are representative examples.', related: 'Optimizer, Backpropagation, MSE, Cross-Entropy' } },
  { term: '옵티마이저', en: 'Optimizer', cat: 'ml',
    ko: { def: '손실 함수를 최소화하기 위해 모델의 파라미터를 업데이트하는 알고리즘입니다. SGD, Adam, AdamW 등이 있으며, Adam이 가장 널리 사용됩니다.', related: '학습률, 그래디언트, SGD, Adam' },
    en: { def: 'An algorithm that updates model parameters to minimize the loss function. Includes SGD, Adam, and AdamW, with Adam being the most widely used.', related: 'Learning Rate, Gradient, SGD, Adam' } },
  { term: '역전파', en: 'Backpropagation', cat: 'dl',
    ko: { def: '신경망 학습에서 출력의 오차를 역방향으로 전파하여 각 가중치의 그래디언트를 계산하는 알고리즘입니다. 연쇄 법칙(Chain Rule)을 사용하여 효율적으로 계산합니다.', related: '그래디언트, 손실함수, 연쇄 법칙' },
    en: { def: 'An algorithm that propagates output error backwards through the network to calculate gradients for each weight. Efficiently computed using the chain rule.', related: 'Gradient, Loss Function, Chain Rule' } },
  { term: '그래디언트', en: 'Gradient', cat: 'ml',
    ko: { def: '함수의 각 변수에 대한 편미분 값의 벡터로, 함수가 가장 가파르게 증가하는 방향을 나타냅니다. 경사 하강법에서 이 값의 반대 방향으로 파라미터를 업데이트합니다.', related: '역전파, 경사 하강법, 그래디언트 소실' },
    en: { def: 'A vector of partial derivatives indicating the direction of steepest increase. In gradient descent, parameters are updated in the opposite direction of this value.', related: 'Backpropagation, Gradient Descent, Vanishing Gradient' } },
  // 프로그래밍
  { term: 'API', en: 'Application Programming Interface', cat: 'programming',
    ko: { def: '소프트웨어 컴포넌트 간의 상호작용을 정의하는 인터페이스입니다. 서로 다른 시스템이 데이터를 교환하고 기능을 호출할 수 있게 합니다. REST API, GraphQL 등이 대표적입니다.', related: 'REST, GraphQL, HTTP, 엔드포인트' },
    en: { def: 'An interface defining interactions between software components. Enables different systems to exchange data and call functions. REST API and GraphQL are representative examples.', related: 'REST, GraphQL, HTTP, Endpoint' } },
  { term: 'REST', en: 'Representational State Transfer', cat: 'programming',
    ko: { def: '웹 서비스 설계를 위한 아키텍처 스타일입니다. HTTP 메서드(GET, POST, PUT, DELETE)를 사용하여 리소스를 CRUD 조작합니다. 대부분의 웹 API가 REST 방식을 따릅니다.', related: 'API, HTTP, CRUD, JSON' },
    en: { def: 'An architecture style for web service design. Uses HTTP methods (GET, POST, PUT, DELETE) to perform CRUD operations on resources. Most web APIs follow the REST approach.', related: 'API, HTTP, CRUD, JSON' } },
  { term: 'JSON', en: 'JavaScript Object Notation', cat: 'programming',
    ko: { def: '경량 데이터 교환 형식으로, 사람이 읽고 쓰기 쉽고 기계가 파싱하기 쉽습니다. 키-값 쌍으로 데이터를 표현하며, REST API의 표준 데이터 형식으로 널리 사용됩니다.', related: 'API, REST, XML, YAML' },
    en: { def: 'A lightweight data interchange format, easy for humans to read/write and machines to parse. Represents data in key-value pairs and is widely used as the standard data format for REST APIs.', related: 'API, REST, XML, YAML' } },
  { term: 'Python', en: 'Python', cat: 'programming',
    ko: { def: '간결하고 읽기 쉬운 문법으로 인기 있는 프로그래밍 언어입니다. AI/ML, 데이터 사이언스, 웹 개발, 자동화 등 다양한 분야에서 사용됩니다. 풍부한 라이브러리 생태계를 가지고 있습니다.', related: 'PyTorch, TensorFlow, 판다스, Flask' },
    en: { def: 'A popular programming language known for its clean and readable syntax. Used in AI/ML, data science, web development, automation, and more. Has a rich library ecosystem.', related: 'PyTorch, TensorFlow, Pandas, Flask' } },
  { term: 'JavaScript', en: 'JavaScript', cat: 'programming',
    ko: { def: '웹 브라우저에서 실행되는 동적 프로그래밍 언어로, Node.js를 통해 서버 측에서도 사용됩니다. React, Vue, Angular 등의 프레임워크와 함께 현대 웹 개발의 핵심 언어입니다.', related: 'React, Node.js, TypeScript, DOM' },
    en: { def: 'A dynamic programming language that runs in web browsers, also used server-side via Node.js. A core language of modern web development with frameworks like React, Vue, and Angular.', related: 'React, Node.js, TypeScript, DOM' } },
  { term: 'React', en: 'React', cat: 'programming',
    ko: { def: 'Meta(Facebook)가 개발한 사용자 인터페이스 구축을 위한 JavaScript 라이브러리입니다. 컴포넌트 기반 아키텍처와 가상 DOM을 사용하며, Hooks로 상태를 관리합니다.', related: 'JSX, Hooks, 컴포넌트, Virtual DOM' },
    en: { def: 'A JavaScript library for building user interfaces developed by Meta (Facebook). Uses component-based architecture and virtual DOM, managing state with Hooks.', related: 'JSX, Hooks, Components, Virtual DOM' } },
  { term: 'Node.js', en: 'Node.js', cat: 'programming',
    ko: { def: 'Chrome V8 엔진 기반의 서버 측 JavaScript 런타임입니다. 비동기 이벤트 기반 아키텍처로 높은 성능을 제공하며, npm 생태계를 통해 풍부한 패키지를 활용할 수 있습니다.', related: 'Express, npm, 비동기, 서버' },
    en: { def: 'A server-side JavaScript runtime based on Chrome V8 engine. Provides high performance with asynchronous event-driven architecture and rich packages through the npm ecosystem.', related: 'Express, npm, Async, Server' } },
  { term: 'SQL', en: 'Structured Query Language', cat: 'data',
    ko: { def: '관계형 데이터베이스를 관리하고 조작하기 위한 표준 프로그래밍 언어입니다. SELECT, INSERT, UPDATE, DELETE 등의 명령으로 데이터를 CRUD합니다. MySQL, PostgreSQL 등에서 사용됩니다.', related: 'MySQL, PostgreSQL, NoSQL, 데이터베이스' },
    en: { def: 'A standard programming language for managing and manipulating relational databases. Performs CRUD operations with commands like SELECT, INSERT, UPDATE, DELETE. Used in MySQL, PostgreSQL, and more.', related: 'MySQL, PostgreSQL, NoSQL, Database' } },
  { term: 'NoSQL', en: 'NoSQL', cat: 'data',
    ko: { def: '비관계형 데이터베이스의 총칭으로, 유연한 스키마와 수평적 확장성이 특징입니다. 문서형(MongoDB), 키-값(Redis), 컬럼형(Cassandra), 그래프(Neo4j) 등의 유형이 있습니다.', related: 'MongoDB, Redis, SQL, 데이터베이스' },
    en: { def: 'A general term for non-relational databases, characterized by flexible schemas and horizontal scalability. Types include document (MongoDB), key-value (Redis), column (Cassandra), and graph (Neo4j).', related: 'MongoDB, Redis, SQL, Database' } },
  { term: 'Git', en: 'Git', cat: 'programming',
    ko: { def: '소스 코드의 변경 이력을 추적하는 분산 버전 관리 시스템입니다. 브랜치, 머지, 커밋 등의 기능으로 협업 개발을 지원합니다. GitHub, GitLab 등의 플랫폼과 함께 사용됩니다.', related: 'GitHub, 브랜치, 커밋, 풀 리퀘스트' },
    en: { def: 'A distributed version control system that tracks source code changes. Supports collaborative development with features like branching, merging, and committing. Used with platforms like GitHub and GitLab.', related: 'GitHub, Branch, Commit, Pull Request' } },
  { term: 'Docker', en: 'Docker', cat: 'programming',
    ko: { def: '애플리케이션을 컨테이너로 패키징하여 어떤 환경에서든 일관되게 실행할 수 있게 하는 플랫폼입니다. 이미지, 컨테이너, Dockerfile 개념으로 구성되며 배포와 확장에 필수적입니다.', related: 'Kubernetes, 컨테이너, 이미지, DevOps' },
    en: { def: 'A platform that packages applications into containers for consistent execution across environments. Built around images, containers, and Dockerfiles, essential for deployment and scaling.', related: 'Kubernetes, Container, Image, DevOps' } },
  { term: '클라우드', en: 'Cloud Computing', cat: 'programming',
    ko: { def: '인터넷을 통해 서버, 스토리지, 데이터베이스, 네트워킹 등의 컴퓨팅 리소스를 온디맨드로 제공하는 서비스입니다. AWS, Azure, GCP가 3대 클라우드 플랫폼입니다.', related: 'AWS, Azure, GCP, IaaS, PaaS, SaaS' },
    en: { def: 'A service providing computing resources like servers, storage, databases, and networking on-demand via the internet. AWS, Azure, and GCP are the three major cloud platforms.', related: 'AWS, Azure, GCP, IaaS, PaaS, SaaS' } },
  // 데이터
  { term: '데이터프레임', en: 'DataFrame', cat: 'data',
    ko: { def: '행과 열로 구성된 2차원 테이블 형태의 데이터 구조입니다. 판다스(Pandas)의 핵심 자료구조로, 엑셀 스프레드시트와 유사하게 데이터를 다룰 수 있습니다.', related: '판다스, Series, CSV, 데이터 분석' },
    en: { def: 'A 2D tabular data structure organized in rows and columns. The core data structure of Pandas, allowing data manipulation similar to Excel spreadsheets.', related: 'Pandas, Series, CSV, Data Analysis' } },
  { term: '판다스', en: 'Pandas', cat: 'data',
    ko: { def: 'Python의 데이터 분석 및 조작을 위한 핵심 라이브러리입니다. DataFrame과 Series 구조를 제공하며, 데이터 로딩, 정제, 변환, 집계 등 다양한 기능을 제공합니다.', related: '데이터프레임, 넘파이, 데이터 분석' },
    en: { def: 'A core Python library for data analysis and manipulation. Provides DataFrame and Series structures with features for data loading, cleaning, transformation, and aggregation.', related: 'DataFrame, NumPy, Data Analysis' } },
  { term: '넘파이', en: 'NumPy', cat: 'data',
    ko: { def: 'Python의 수치 계산을 위한 기본 라이브러리입니다. 다차원 배열(ndarray)과 행렬 연산, 선형대수, 푸리에 변환 등을 효율적으로 처리합니다. 대부분의 과학 컴퓨팅 라이브러리의 기반입니다.', related: '판다스, 배열, 선형대수, 사이킷런' },
    en: { def: 'A fundamental Python library for numerical computing. Efficiently handles multi-dimensional arrays (ndarray), matrix operations, linear algebra, and Fourier transforms. Forms the basis of most scientific computing libraries.', related: 'Pandas, Array, Linear Algebra, Scikit-learn' } },
  { term: '텐서플로', en: 'TensorFlow', cat: 'data',
    ko: { def: 'Google이 개발한 오픈소스 머신러닝 프레임워크입니다. 데이터 플로우 그래프를 사용하여 수치 계산을 수행하며, Keras API로 쉽게 딥러닝 모델을 구축할 수 있습니다.', related: 'Keras, 파이토치, 딥러닝, Google' },
    en: { def: 'An open-source machine learning framework developed by Google. Performs numerical computation using data flow graphs and allows easy deep learning model building through the Keras API.', related: 'Keras, PyTorch, Deep Learning, Google' } },
  { term: '파이토치', en: 'PyTorch', cat: 'data',
    ko: { def: 'Meta(Facebook)가 개발한 오픈소스 딥러닝 프레임워크입니다. 동적 계산 그래프를 사용하여 직관적인 디버깅이 가능하며, 연구 분야에서 가장 인기 있는 프레임워크입니다.', related: '텐서플로, 딥러닝, 동적 그래프, Meta' },
    en: { def: 'An open-source deep learning framework developed by Meta (Facebook). Uses dynamic computation graphs for intuitive debugging and is the most popular framework in research.', related: 'TensorFlow, Deep Learning, Dynamic Graph, Meta' } },
  { term: '사이킷런', en: 'Scikit-learn', cat: 'data',
    ko: { def: 'Python의 대표적인 머신러닝 라이브러리입니다. 분류, 회귀, 클러스터링, 차원 축소, 모델 평가 등 전통적인 ML 알고리즘을 일관된 API로 제공합니다.', related: '머신러닝, 판다스, 넘파이, 모델 평가' },
    en: { def: 'A representative Python machine learning library. Provides traditional ML algorithms for classification, regression, clustering, dimensionality reduction, and model evaluation through a consistent API.', related: 'Machine Learning, Pandas, NumPy, Model Evaluation' } },
  { term: '주피터', en: 'Jupyter Notebook', cat: 'data',
    ko: { def: '코드, 텍스트, 시각화를 하나의 문서에서 작성할 수 있는 대화형 개발 환경입니다. 데이터 분석, 실험, 교육에 널리 사용되며, Python, R 등 다양한 언어를 지원합니다.', related: 'Colab, IPython, 데이터 분석, 노트북' },
    en: { def: 'An interactive development environment for writing code, text, and visualizations in a single document. Widely used for data analysis, experimentation, and education, supporting Python, R, and more.', related: 'Colab, IPython, Data Analysis, Notebook' } },
  // 추가 용어
  { term: '하이퍼파라미터', en: 'Hyperparameter', cat: 'ml',
    ko: { def: '모델 학습 전에 사람이 직접 설정하는 파라미터입니다. 학습률, 배치 크기, 에폭 수, 은닉층 수 등이 해당합니다. 그리드 서치, 랜덤 서치 등으로 최적값을 탐색합니다.', related: '학습률, 배치, 그리드 서치, 튜닝' },
    en: { def: 'Parameters manually set before model training. Includes learning rate, batch size, number of epochs, and hidden layers. Optimal values are searched using grid search, random search, etc.', related: 'Learning Rate, Batch, Grid Search, Tuning' } },
  { term: '전이학습', en: 'Transfer Learning', cat: 'ml',
    ko: { def: '한 작업에서 학습된 지식을 다른 관련 작업에 적용하는 기법입니다. 사전학습 모델의 가중치를 재사용하여 적은 데이터와 시간으로 높은 성능을 달성할 수 있습니다.', related: '파인튜닝, 사전학습, 도메인 적응' },
    en: { def: 'A technique that applies knowledge learned from one task to another related task. By reusing pre-trained model weights, it achieves high performance with less data and time.', related: 'Fine-tuning, Pre-training, Domain Adaptation' } },
  { term: '데이터 증강', en: 'Data Augmentation', cat: 'ml',
    ko: { def: '기존 데이터를 변형하여 학습 데이터의 양과 다양성을 늘리는 기법입니다. 이미지의 회전, 반전, 크롭이나 텍스트의 동의어 교체, 역번역 등이 있습니다. 과적합 방지에 효과적입니다.', related: '과적합, 정규화, 이미지 처리' },
    en: { def: 'A technique to increase training data volume and diversity by transforming existing data. Includes image rotation, flipping, cropping, and text synonym replacement, back-translation. Effective against overfitting.', related: 'Overfitting, Regularization, Image Processing' } },
  { term: '멀티모달', en: 'Multimodal AI', cat: 'ai-basic',
    ko: { def: '텍스트, 이미지, 오디오, 비디오 등 여러 유형의 데이터를 동시에 처리하고 이해하는 AI입니다. GPT-4o, Gemini 등이 대표적이며, 더 풍부한 상호작용이 가능합니다.', related: 'GPT-4o, Gemini, 비전-언어 모델' },
    en: { def: 'AI that simultaneously processes and understands multiple data types including text, images, audio, and video. GPT-4o and Gemini are representative examples, enabling richer interactions.', related: 'GPT-4o, Gemini, Vision-Language Model' } },
  { term: '환각', en: 'Hallucination', cat: 'ai-basic',
    ko: { def: 'AI 모델이 사실이 아닌 정보를 마치 사실인 것처럼 자신있게 생성하는 현상입니다. LLM의 주요 문제점 중 하나이며, RAG, 팩트 체킹 등의 기법으로 완화합니다.', related: 'RAG, 팩트 체킹, LLM, 신뢰성' },
    en: { def: 'A phenomenon where AI models confidently generate false information as if it were true. A major issue with LLMs, mitigated through techniques like RAG and fact-checking.', related: 'RAG, Fact-checking, LLM, Reliability' } },
];

export default function Glossary() {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSection, setActiveSection] = useState('all');
  const isKo = language === 'ko';

  const filteredTerms = GLOSSARY_TERMS.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.cat === activeCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch = !searchQuery ||
      item.term.toLowerCase().includes(query) ||
      item.en.toLowerCase().includes(query) ||
      (isKo ? item.ko.def : item.en.def).toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const sortedTerms = [...filteredTerms].sort((a, b) =>
    a.term.localeCompare(b.term, isKo ? 'ko' : 'en')
  );

  const sidebarSections = [
    { id: 'all', label: isKo ? '전체' : 'All' },
    ...CATEGORIES.filter(c => c.id !== 'all').map(c => ({
      id: c.id, label: isKo ? c.ko : c.en, icon: c.icon,
    })),
  ];

  const getCategoryBadge = (catId) => {
    const colors = {
      'ai-basic': { bg: '#DBEAFE', color: '#2563EB' },
      'ml': { bg: '#D1FAE5', color: '#059669' },
      'dl': { bg: '#FEE2E2', color: '#DC2626' },
      'programming': { bg: '#FEF3C7', color: '#D97706' },
      'data': { bg: '#E0E7FF', color: '#4F46E5' },
    };
    return colors[catId] || { bg: '#F3F4F6', color: '#6B7280' };
  };

  return (
    <div className="intro-page">
      <SEOHead
        title={isKo ? 'AI 용어사전' : 'AI Glossary'}
        description={isKo ? 'AI, 머신러닝, 딥러닝, 프로그래밍 관련 핵심 용어를 한눈에 정리한 용어사전입니다.' : 'A comprehensive glossary of key terms in AI, machine learning, deep learning, and programming.'}
        path="/glossary"
      />

      {/* Sidebar */}
      <aside className="intro-sidebar">
        <div className="ck-sb-header">
          <i className="fa-solid fa-book" />
          <span>{isKo ? 'AI 용어사전' : 'AI Glossary'}</span>
        </div>
        <nav className="ck-sb-nav">
          {sidebarSections.map(sec => (
            <button
              key={sec.id}
              className={`ck-nav-child ${activeCategory === sec.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(sec.id)}
            >
              <span className="ck-nc-icon">
                <i className={`fa-solid ${sec.icon || 'fa-border-all'}`} />
              </span>
              <span>{sec.label}</span>
              <span style={{ marginLeft: 'auto', fontSize: 11, opacity: 0.6 }}>
                {sec.id === 'all'
                  ? GLOSSARY_TERMS.length
                  : GLOSSARY_TERMS.filter(t => t.cat === sec.id).length}
              </span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="intro-content">
        <section className="ck-content-box">
          <div className="ck-content-header ck-ch--blue">
            <i className="fa-solid fa-book" />
            <div className="ck-ch-text">
              <h2>{isKo ? 'AI 용어사전' : 'AI Glossary'}</h2>
              <p>{isKo ? 'AI, 머신러닝, 딥러닝, 프로그래밍 핵심 용어 모음' : 'Essential terms in AI, ML, Deep Learning, and Programming'}</p>
            </div>
          </div>
          <div className="ck-content-body">
            {/* Search Bar */}
            <div style={{
              marginBottom: 24, position: 'relative',
            }}>
              <i className="fa-solid fa-search" style={{
                position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)',
                color: 'var(--text-light)', fontSize: 14,
              }} />
              <input
                type="text"
                placeholder={isKo ? '용어를 검색하세요... (예: 트랜스포머, GPT, Python)' : 'Search terms... (e.g., Transformer, GPT, Python)'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%', padding: '12px 16px 12px 40px',
                  borderRadius: 10, border: '1px solid var(--border-light)',
                  background: 'var(--bg-light-gray)', fontSize: 14,
                  fontFamily: 'inherit', color: 'var(--text-primary)',
                  outline: 'none', boxSizing: 'border-box',
                }}
              />
            </div>

            {/* Category Quick Filters */}
            <div style={{
              display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24,
            }}>
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  className={`board-category-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{ fontSize: 13 }}
                >
                  <i className={`fa-solid ${cat.icon}`} style={{ marginRight: 4 }} />
                  {isKo ? cat.ko : cat.en}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <p style={{ fontSize: 13, color: 'var(--text-light)', marginBottom: 16 }}>
              {isKo
                ? `총 ${sortedTerms.length}개의 용어`
                : `${sortedTerms.length} terms found`}
            </p>

            {/* Glossary Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {sortedTerms.map((item, idx) => {
                const badge = getCategoryBadge(item.cat);
                const catLabel = CATEGORIES.find(c => c.id === item.cat);
                return (
                  <div key={idx} style={{
                    padding: 20, borderRadius: 12,
                    border: '1px solid var(--border-light)',
                    background: 'var(--bg-white)',
                    transition: 'box-shadow 0.2s ease',
                  }}>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      marginBottom: 10, flexWrap: 'wrap',
                    }}>
                      <h3 style={{
                        fontSize: 16, fontWeight: 700,
                        color: 'var(--text-primary)', margin: 0,
                      }}>
                        {item.term}
                      </h3>
                      <span style={{
                        fontSize: 13, color: 'var(--text-light)', fontStyle: 'italic',
                      }}>
                        {item.en}
                      </span>
                      <span style={{
                        fontSize: 11, padding: '2px 8px', borderRadius: 6,
                        background: badge.bg, color: badge.color, fontWeight: 600,
                        marginLeft: 'auto',
                      }}>
                        {catLabel ? (isKo ? catLabel.ko : catLabel.en) : ''}
                      </span>
                    </div>
                    <p className="theory-p" style={{
                      fontSize: 14, lineHeight: 1.7,
                      color: 'var(--text-secondary)', margin: 0, marginBottom: 10,
                    }}>
                      {isKo ? item.ko.def : item.en.def}
                    </p>
                    <div style={{
                      fontSize: 12, color: 'var(--text-light)',
                      display: 'flex', alignItems: 'center', gap: 6,
                    }}>
                      <i className="fa-solid fa-link" style={{ fontSize: 10 }} />
                      <span style={{ fontWeight: 600 }}>
                        {isKo ? '관련 용어:' : 'Related:'}
                      </span>
                      <span>{isKo ? item.ko.related : item.en.related}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {sortedTerms.length === 0 && (
              <div style={{
                textAlign: 'center', padding: 60,
                color: 'var(--text-light)',
              }}>
                <i className="fa-solid fa-search" style={{ fontSize: 32, marginBottom: 12, display: 'block' }} />
                <p>{isKo ? '검색 결과가 없습니다.' : 'No results found.'}</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
