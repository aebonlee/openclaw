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
  { term: '인공지능', enTerm: 'Artificial Intelligence (AI)', cat: 'ai-basic',
    ko: { def: '인간의 학습, 추론, 인식 능력을 컴퓨터로 구현하는 기술입니다. 약한 AI(특정 작업)와 강한 AI(범용 지능)로 나뉘며, 현재 대부분의 AI는 약한 AI에 해당합니다.', related: '머신러닝, 딥러닝, AGI' },
    en: { def: 'Technology that implements human learning, reasoning, and perception capabilities in computers. Divided into narrow AI (specific tasks) and general AI (universal intelligence), with most current AI being narrow AI.', related: 'Machine Learning, Deep Learning, AGI' } },
  { term: '머신러닝', enTerm: 'Machine Learning (ML)', cat: 'ml',
    ko: { def: '명시적 프로그래밍 없이 데이터에서 패턴을 학습하는 AI의 하위 분야입니다. 지도학습, 비지도학습, 강화학습으로 나뉘며 다양한 산업에서 활용됩니다.', related: '지도학습, 비지도학습, 강화학습' },
    en: { def: 'A subfield of AI that learns patterns from data without explicit programming. Divided into supervised, unsupervised, and reinforcement learning, used across various industries.', related: 'Supervised Learning, Unsupervised Learning, Reinforcement Learning' } },
  { term: '딥러닝', enTerm: 'Deep Learning (DL)', cat: 'dl',
    ko: { def: '다층 신경망을 사용하여 복잡한 패턴을 학습하는 머신러닝의 하위 분야입니다. 이미지 인식, 자연어 처리, 음성 인식 등에서 혁신적인 성과를 달성했습니다.', related: '신경망, CNN, RNN, 트랜스포머' },
    en: { def: 'A subfield of machine learning that uses multi-layer neural networks to learn complex patterns. Has achieved breakthrough results in image recognition, NLP, and speech recognition.', related: 'Neural Network, CNN, RNN, Transformer' } },
  { term: '신경망', enTerm: 'Neural Network', cat: 'dl',
    ko: { def: '생물학적 뉴런의 구조를 모방한 컴퓨팅 시스템입니다. 입력층, 은닉층, 출력층으로 구성되며, 가중치를 조정하여 학습합니다. 딥러닝의 기본 구조입니다.', related: '퍼셉트론, 활성화 함수, 역전파' },
    en: { def: 'A computing system inspired by biological neurons. Composed of input, hidden, and output layers, learning by adjusting weights. The fundamental structure of deep learning.', related: 'Perceptron, Activation Function, Backpropagation' } },
  { term: 'CNN', enTerm: 'Convolutional Neural Network', cat: 'dl',
    ko: { def: '합성곱 연산을 사용하여 이미지의 공간적 특징을 추출하는 신경망입니다. 필터(커널)가 이미지를 스캔하며 특징 맵을 생성합니다. 이미지 분류, 객체 탐지에 널리 사용됩니다.', related: '컴퓨터비전, 합성곱, 풀링, ResNet' },
    en: { def: 'A neural network that uses convolution operations to extract spatial features from images. Filters (kernels) scan images to create feature maps. Widely used in image classification and object detection.', related: 'Computer Vision, Convolution, Pooling, ResNet' } },
  { term: 'RNN', enTerm: 'Recurrent Neural Network', cat: 'dl',
    ko: { def: '순차적 데이터를 처리하기 위해 이전 단계의 출력을 다음 단계의 입력으로 사용하는 신경망입니다. 시계열 데이터, 텍스트 처리에 적합하지만 장기 의존성 문제가 있습니다.', related: 'LSTM, GRU, 시퀀스 모델링' },
    en: { def: 'A neural network that uses output from previous steps as input for the next step to process sequential data. Suitable for time series and text, but has long-term dependency issues.', related: 'LSTM, GRU, Sequence Modeling' } },
  { term: 'LSTM', enTerm: 'Long Short-Term Memory', cat: 'dl',
    ko: { def: 'RNN의 장기 의존성 문제를 해결하기 위해 설계된 신경망 구조입니다. 셀 상태와 게이트 메커니즘(입력, 망각, 출력 게이트)을 통해 장기 기억을 효과적으로 유지합니다.', related: 'RNN, GRU, 시퀀스 모델링' },
    en: { def: 'A neural network architecture designed to solve RNN\'s long-term dependency problem. Effectively maintains long-term memory through cell state and gate mechanisms (input, forget, output gates).', related: 'RNN, GRU, Sequence Modeling' } },
  { term: '트랜스포머', enTerm: 'Transformer', cat: 'dl',
    ko: { def: '어텐션 메커니즘만으로 구성된 혁신적인 신경망 구조입니다. "Attention Is All You Need" 논문(2017)에서 제안되었으며, GPT, BERT 등 현대 AI 모델의 기반이 됩니다.', related: '어텐션, GPT, BERT, Self-Attention' },
    en: { def: 'A revolutionary neural network architecture composed entirely of attention mechanisms. Proposed in the "Attention Is All You Need" paper (2017), it forms the basis of modern AI models like GPT and BERT.', related: 'Attention, GPT, BERT, Self-Attention' } },
  { term: 'GPT', enTerm: 'Generative Pre-trained Transformer', cat: 'ai-basic',
    ko: { def: 'OpenAI가 개발한 대형 언어 모델 시리즈입니다. 대량의 텍스트 데이터로 사전학습 후 다양한 작업에 활용됩니다. GPT-4, GPT-4o 등 지속적으로 발전하고 있습니다.', related: 'LLM, 트랜스포머, ChatGPT, OpenAI' },
    en: { def: 'A series of large language models developed by OpenAI. Pre-trained on massive text data and applicable to various tasks. Continuously evolving with GPT-4, GPT-4o, and beyond.', related: 'LLM, Transformer, ChatGPT, OpenAI' } },
  { term: 'LLM', enTerm: 'Large Language Model', cat: 'ai-basic',
    ko: { def: '수십억 개 이상의 파라미터를 가진 대규모 언어 모델입니다. 텍스트 생성, 번역, 요약, 코드 작성 등 다양한 언어 작업을 수행합니다. GPT, Claude, Gemini 등이 대표적입니다.', related: 'GPT, Claude, Gemini, 파인튜닝' },
    en: { def: 'A large-scale language model with billions of parameters. Performs various language tasks like text generation, translation, summarization, and coding. GPT, Claude, and Gemini are representative examples.', related: 'GPT, Claude, Gemini, Fine-tuning' } },
  { term: '토큰', enTerm: 'Token', cat: 'ai-basic',
    ko: { def: 'LLM이 텍스트를 처리하는 기본 단위입니다. 단어, 서브워드, 또는 문자가 될 수 있으며, 모델의 입력과 출력은 토큰 단위로 처리됩니다. 비용 산정의 기준이기도 합니다.', related: '토크나이저, BPE, 컨텍스트 윈도우' },
    en: { def: 'The basic unit by which LLMs process text. Can be words, subwords, or characters. Model input and output are processed in token units. Also used as a basis for cost calculation.', related: 'Tokenizer, BPE, Context Window' } },
  { term: '프롬프트', enTerm: 'Prompt', cat: 'ai-basic',
    ko: { def: 'AI 모델에게 원하는 작업을 지시하기 위해 입력하는 텍스트입니다. 프롬프트의 품질이 AI 응답의 품질을 크게 좌우합니다. 시스템 프롬프트와 사용자 프롬프트로 구분됩니다.', related: '프롬프트 엔지니어링, Zero-shot, Few-shot' },
    en: { def: 'Text input to instruct an AI model to perform desired tasks. Prompt quality greatly influences AI response quality. Divided into system prompts and user prompts.', related: 'Prompt Engineering, Zero-shot, Few-shot' } },
  { term: '파인튜닝', enTerm: 'Fine-tuning', cat: 'ml',
    ko: { def: '사전학습된 모델을 특정 작업이나 도메인에 맞게 추가 학습시키는 과정입니다. 전체 파라미터 또는 일부만 학습할 수 있으며, LoRA, QLoRA 같은 효율적 기법도 있습니다.', related: 'LoRA, QLoRA, Transfer Learning' },
    en: { def: 'The process of additional training a pre-trained model for specific tasks or domains. Can train all or some parameters, with efficient techniques like LoRA and QLoRA available.', related: 'LoRA, QLoRA, Transfer Learning' } },
  { term: 'RAG', enTerm: 'Retrieval-Augmented Generation', cat: 'ai-basic',
    ko: { def: '외부 지식 베이스에서 관련 정보를 검색하여 LLM의 응답 생성에 활용하는 기술입니다. 환각(Hallucination)을 줄이고 최신 정보를 반영할 수 있어 기업용 AI에서 핵심 기술입니다.', related: '벡터DB, 임베딩, 검색, LLM' },
    en: { def: 'A technique that retrieves relevant information from external knowledge bases to augment LLM response generation. Reduces hallucination and reflects up-to-date information, making it essential for enterprise AI.', related: 'Vector DB, Embedding, Search, LLM' } },
  { term: '에이전트', enTerm: 'AI Agent', cat: 'ai-basic',
    ko: { def: '목표를 달성하기 위해 자율적으로 계획을 세우고 도구를 사용하며 행동하는 AI 시스템입니다. 웹 검색, 코드 실행, API 호출 등의 도구를 활용하여 복잡한 작업을 수행합니다.', related: 'LLM, 도구 사용, 자율 시스템, ReAct' },
    en: { def: 'An AI system that autonomously plans, uses tools, and takes actions to achieve goals. Performs complex tasks using tools like web search, code execution, and API calls.', related: 'LLM, Tool Use, Autonomous Systems, ReAct' } },
  { term: '임베딩', enTerm: 'Embedding', cat: 'ml',
    ko: { def: '텍스트, 이미지 등의 데이터를 고정 크기의 수치 벡터로 변환하는 기술입니다. 의미적으로 유사한 데이터는 벡터 공간에서 가까이 위치합니다. 검색과 추천 시스템에 핵심적입니다.', related: 'Word2Vec, 벡터DB, 유사도 검색' },
    en: { def: 'A technique to convert data like text and images into fixed-size numerical vectors. Semantically similar data is located close together in vector space. Essential for search and recommendation systems.', related: 'Word2Vec, Vector DB, Similarity Search' } },
  { term: '벡터DB', enTerm: 'Vector Database', cat: 'data',
    ko: { def: '고차원 벡터 데이터를 효율적으로 저장하고 유사도 검색을 수행하는 데이터베이스입니다. Pinecone, Weaviate, Chroma 등이 있으며 RAG 시스템의 핵심 구성 요소입니다.', related: '임베딩, RAG, Pinecone, Chroma' },
    en: { def: 'A database that efficiently stores high-dimensional vector data and performs similarity searches. Examples include Pinecone, Weaviate, and Chroma, serving as core components of RAG systems.', related: 'Embedding, RAG, Pinecone, Chroma' } },
  { term: '어텐션', enTerm: 'Attention Mechanism', cat: 'dl',
    ko: { def: '입력 시퀀스의 각 요소가 다른 요소에 대해 얼마나 중요한지를 계산하는 메커니즘입니다. Self-Attention, Cross-Attention 등이 있으며 트랜스포머의 핵심 구성 요소입니다.', related: '트랜스포머, Self-Attention, Multi-Head Attention' },
    en: { def: 'A mechanism that calculates how important each element of an input sequence is relative to other elements. Includes Self-Attention and Cross-Attention, forming the core of Transformers.', related: 'Transformer, Self-Attention, Multi-Head Attention' } },
  { term: '자연어처리', enTerm: 'Natural Language Processing (NLP)', cat: 'ai-basic',
    ko: { def: '컴퓨터가 인간의 언어를 이해하고 생성하는 AI 분야입니다. 텍스트 분류, 감성 분석, 번역, 질의응답 등을 포함합니다. 트랜스포머 기반 모델이 현재 주류입니다.', related: '토크나이저, BERT, GPT, 텍스트 마이닝' },
    en: { def: 'An AI field where computers understand and generate human language. Includes text classification, sentiment analysis, translation, and Q&A. Transformer-based models are currently mainstream.', related: 'Tokenizer, BERT, GPT, Text Mining' } },
  { term: '컴퓨터비전', enTerm: 'Computer Vision (CV)', cat: 'ai-basic',
    ko: { def: '컴퓨터가 디지털 이미지와 비디오를 이해하고 분석하는 AI 분야입니다. 객체 인식, 이미지 분류, 세그멘테이션, OCR 등을 포함합니다. CNN과 Vision Transformer가 주요 모델입니다.', related: 'CNN, YOLO, 객체 탐지, ViT' },
    en: { def: 'An AI field where computers understand and analyze digital images and videos. Includes object recognition, image classification, segmentation, and OCR. CNN and Vision Transformer are key models.', related: 'CNN, YOLO, Object Detection, ViT' } },
  { term: '강화학습', enTerm: 'Reinforcement Learning (RL)', cat: 'ml',
    ko: { def: '에이전트가 환경과 상호작용하며 보상을 최대화하는 방향으로 학습하는 방법입니다. 게임 AI, 로봇 제어, 자율주행 등에 활용됩니다. RLHF는 LLM 학습에도 사용됩니다.', related: '보상, 정책, Q-러닝, RLHF' },
    en: { def: 'A learning method where an agent interacts with an environment and learns to maximize rewards. Used in game AI, robot control, and autonomous driving. RLHF is also used in LLM training.', related: 'Reward, Policy, Q-Learning, RLHF' } },
  { term: 'GAN', enTerm: 'Generative Adversarial Network', cat: 'dl',
    ko: { def: '생성자와 판별자 두 신경망이 경쟁적으로 학습하는 생성 모델입니다. 사실적인 이미지 생성, 스타일 변환, 데이터 증강 등에 활용됩니다. 이미지 생성 AI의 초기 핵심 기술입니다.', related: 'Diffusion, 이미지 생성, StyleGAN' },
    en: { def: 'A generative model where two neural networks (generator and discriminator) learn competitively. Used for realistic image generation, style transfer, and data augmentation. An early core technology for image generation AI.', related: 'Diffusion, Image Generation, StyleGAN' } },
  { term: '오토인코더', enTerm: 'Autoencoder', cat: 'dl',
    ko: { def: '입력 데이터를 저차원으로 압축(인코딩)한 후 다시 복원(디코딩)하는 비지도 학습 신경망입니다. 차원 축소, 이상 탐지, 노이즈 제거 등에 활용됩니다.', related: 'VAE, 차원 축소, 생성 모델' },
    en: { def: 'An unsupervised learning neural network that compresses (encodes) input data to lower dimensions and then reconstructs (decodes) it. Used for dimensionality reduction, anomaly detection, and denoising.', related: 'VAE, Dimensionality Reduction, Generative Models' } },
  { term: '과적합', enTerm: 'Overfitting', cat: 'ml',
    ko: { def: '모델이 훈련 데이터에 지나치게 최적화되어 새로운 데이터에 대한 일반화 성능이 떨어지는 현상입니다. 드롭아웃, 정규화, 데이터 증강, 조기 종료 등으로 방지합니다.', related: '과소적합, 정규화, 드롭아웃, 교차검증' },
    en: { def: 'A phenomenon where a model is over-optimized to training data, resulting in poor generalization to new data. Prevented with dropout, regularization, data augmentation, and early stopping.', related: 'Underfitting, Regularization, Dropout, Cross-validation' } },
  { term: '학습률', enTerm: 'Learning Rate', cat: 'ml',
    ko: { def: '모델의 가중치를 업데이트할 때 한 번에 이동하는 크기를 결정하는 하이퍼파라미터입니다. 너무 크면 발산하고 너무 작으면 수렴이 느립니다. 학습률 스케줄러로 동적 조절합니다.', related: '옵티마이저, 하이퍼파라미터, 스케줄러' },
    en: { def: 'A hyperparameter that determines the step size when updating model weights. Too large causes divergence, too small causes slow convergence. Dynamically adjusted with learning rate schedulers.', related: 'Optimizer, Hyperparameter, Scheduler' } },
  { term: '배치', enTerm: 'Batch', cat: 'ml',
    ko: { def: '모델 학습 시 한 번에 처리하는 데이터 샘플의 묶음입니다. 배치 크기가 클수록 GPU 메모리를 많이 사용하지만 학습이 안정적입니다. 미니배치 학습이 일반적으로 사용됩니다.', related: '배치 크기, 미니배치, 에폭' },
    en: { def: 'A group of data samples processed at once during model training. Larger batch sizes use more GPU memory but provide more stable training. Mini-batch training is commonly used.', related: 'Batch Size, Mini-batch, Epoch' } },
  { term: '에폭', enTerm: 'Epoch', cat: 'ml',
    ko: { def: '전체 훈련 데이터셋을 한 번 완전히 학습하는 것을 의미합니다. 일반적으로 여러 에폭 동안 반복 학습하며, 너무 많으면 과적합이 발생할 수 있습니다.', related: '배치, 반복, 과적합, 조기 종료' },
    en: { def: 'One complete pass through the entire training dataset. Training typically repeats over multiple epochs, and too many can cause overfitting.', related: 'Batch, Iteration, Overfitting, Early Stopping' } },
  { term: '손실함수', enTerm: 'Loss Function', cat: 'ml',
    ko: { def: '모델의 예측값과 실제값 간의 차이를 수치화하는 함수입니다. 이 값을 최소화하는 방향으로 학습이 진행됩니다. MSE, Cross-Entropy, BCE 등이 대표적입니다.', related: '옵티마이저, 역전파, MSE, Cross-Entropy' },
    en: { def: 'A function that quantifies the difference between model predictions and actual values. Training proceeds in the direction of minimizing this value. MSE, Cross-Entropy, and BCE are representative examples.', related: 'Optimizer, Backpropagation, MSE, Cross-Entropy' } },
  { term: '옵티마이저', enTerm: 'Optimizer', cat: 'ml',
    ko: { def: '손실 함수를 최소화하기 위해 모델의 파라미터를 업데이트하는 알고리즘입니다. SGD, Adam, AdamW 등이 있으며, Adam이 가장 널리 사용됩니다.', related: '학습률, 그래디언트, SGD, Adam' },
    en: { def: 'An algorithm that updates model parameters to minimize the loss function. Includes SGD, Adam, and AdamW, with Adam being the most widely used.', related: 'Learning Rate, Gradient, SGD, Adam' } },
  { term: '역전파', enTerm: 'Backpropagation', cat: 'dl',
    ko: { def: '신경망 학습에서 출력의 오차를 역방향으로 전파하여 각 가중치의 그래디언트를 계산하는 알고리즘입니다. 연쇄 법칙(Chain Rule)을 사용하여 효율적으로 계산합니다.', related: '그래디언트, 손실함수, 연쇄 법칙' },
    en: { def: 'An algorithm that propagates output error backwards through the network to calculate gradients for each weight. Efficiently computed using the chain rule.', related: 'Gradient, Loss Function, Chain Rule' } },
  { term: '그래디언트', enTerm: 'Gradient', cat: 'ml',
    ko: { def: '함수의 각 변수에 대한 편미분 값의 벡터로, 함수가 가장 가파르게 증가하는 방향을 나타냅니다. 경사 하강법에서 이 값의 반대 방향으로 파라미터를 업데이트합니다.', related: '역전파, 경사 하강법, 그래디언트 소실' },
    en: { def: 'A vector of partial derivatives indicating the direction of steepest increase. In gradient descent, parameters are updated in the opposite direction of this value.', related: 'Backpropagation, Gradient Descent, Vanishing Gradient' } },
  // 프로그래밍
  { term: 'API', enTerm: 'Application Programming Interface', cat: 'programming',
    ko: { def: '소프트웨어 컴포넌트 간의 상호작용을 정의하는 인터페이스입니다. 서로 다른 시스템이 데이터를 교환하고 기능을 호출할 수 있게 합니다. REST API, GraphQL 등이 대표적입니다.', related: 'REST, GraphQL, HTTP, 엔드포인트' },
    en: { def: 'An interface defining interactions between software components. Enables different systems to exchange data and call functions. REST API and GraphQL are representative examples.', related: 'REST, GraphQL, HTTP, Endpoint' } },
  { term: 'REST', enTerm: 'Representational State Transfer', cat: 'programming',
    ko: { def: '웹 서비스 설계를 위한 아키텍처 스타일입니다. HTTP 메서드(GET, POST, PUT, DELETE)를 사용하여 리소스를 CRUD 조작합니다. 대부분의 웹 API가 REST 방식을 따릅니다.', related: 'API, HTTP, CRUD, JSON' },
    en: { def: 'An architecture style for web service design. Uses HTTP methods (GET, POST, PUT, DELETE) to perform CRUD operations on resources. Most web APIs follow the REST approach.', related: 'API, HTTP, CRUD, JSON' } },
  { term: 'JSON', enTerm: 'JavaScript Object Notation', cat: 'programming',
    ko: { def: '경량 데이터 교환 형식으로, 사람이 읽고 쓰기 쉽고 기계가 파싱하기 쉽습니다. 키-값 쌍으로 데이터를 표현하며, REST API의 표준 데이터 형식으로 널리 사용됩니다.', related: 'API, REST, XML, YAML' },
    en: { def: 'A lightweight data interchange format, easy for humans to read/write and machines to parse. Represents data in key-value pairs and is widely used as the standard data format for REST APIs.', related: 'API, REST, XML, YAML' } },
  { term: 'Python', enTerm: 'Python', cat: 'programming',
    ko: { def: '간결하고 읽기 쉬운 문법으로 인기 있는 프로그래밍 언어입니다. AI/ML, 데이터 사이언스, 웹 개발, 자동화 등 다양한 분야에서 사용됩니다. 풍부한 라이브러리 생태계를 가지고 있습니다.', related: 'PyTorch, TensorFlow, 판다스, Flask' },
    en: { def: 'A popular programming language known for its clean and readable syntax. Used in AI/ML, data science, web development, automation, and more. Has a rich library ecosystem.', related: 'PyTorch, TensorFlow, Pandas, Flask' } },
  { term: 'JavaScript', enTerm: 'JavaScript', cat: 'programming',
    ko: { def: '웹 브라우저에서 실행되는 동적 프로그래밍 언어로, Node.js를 통해 서버 측에서도 사용됩니다. React, Vue, Angular 등의 프레임워크와 함께 현대 웹 개발의 핵심 언어입니다.', related: 'React, Node.js, TypeScript, DOM' },
    en: { def: 'A dynamic programming language that runs in web browsers, also used server-side via Node.js. A core language of modern web development with frameworks like React, Vue, and Angular.', related: 'React, Node.js, TypeScript, DOM' } },
  { term: 'React', enTerm: 'React', cat: 'programming',
    ko: { def: 'Meta(Facebook)가 개발한 사용자 인터페이스 구축을 위한 JavaScript 라이브러리입니다. 컴포넌트 기반 아키텍처와 가상 DOM을 사용하며, Hooks로 상태를 관리합니다.', related: 'JSX, Hooks, 컴포넌트, Virtual DOM' },
    en: { def: 'A JavaScript library for building user interfaces developed by Meta (Facebook). Uses component-based architecture and virtual DOM, managing state with Hooks.', related: 'JSX, Hooks, Components, Virtual DOM' } },
  { term: 'Node.js', enTerm: 'Node.js', cat: 'programming',
    ko: { def: 'Chrome V8 엔진 기반의 서버 측 JavaScript 런타임입니다. 비동기 이벤트 기반 아키텍처로 높은 성능을 제공하며, npm 생태계를 통해 풍부한 패키지를 활용할 수 있습니다.', related: 'Express, npm, 비동기, 서버' },
    en: { def: 'A server-side JavaScript runtime based on Chrome V8 engine. Provides high performance with asynchronous event-driven architecture and rich packages through the npm ecosystem.', related: 'Express, npm, Async, Server' } },
  { term: 'SQL', enTerm: 'Structured Query Language', cat: 'data',
    ko: { def: '관계형 데이터베이스를 관리하고 조작하기 위한 표준 프로그래밍 언어입니다. SELECT, INSERT, UPDATE, DELETE 등의 명령으로 데이터를 CRUD합니다. MySQL, PostgreSQL 등에서 사용됩니다.', related: 'MySQL, PostgreSQL, NoSQL, 데이터베이스' },
    en: { def: 'A standard programming language for managing and manipulating relational databases. Performs CRUD operations with commands like SELECT, INSERT, UPDATE, DELETE. Used in MySQL, PostgreSQL, and more.', related: 'MySQL, PostgreSQL, NoSQL, Database' } },
  { term: 'NoSQL', enTerm: 'NoSQL', cat: 'data',
    ko: { def: '비관계형 데이터베이스의 총칭으로, 유연한 스키마와 수평적 확장성이 특징입니다. 문서형(MongoDB), 키-값(Redis), 컬럼형(Cassandra), 그래프(Neo4j) 등의 유형이 있습니다.', related: 'MongoDB, Redis, SQL, 데이터베이스' },
    en: { def: 'A general term for non-relational databases, characterized by flexible schemas and horizontal scalability. Types include document (MongoDB), key-value (Redis), column (Cassandra), and graph (Neo4j).', related: 'MongoDB, Redis, SQL, Database' } },
  { term: 'Git', enTerm: 'Git', cat: 'programming',
    ko: { def: '소스 코드의 변경 이력을 추적하는 분산 버전 관리 시스템입니다. 브랜치, 머지, 커밋 등의 기능으로 협업 개발을 지원합니다. GitHub, GitLab 등의 플랫폼과 함께 사용됩니다.', related: 'GitHub, 브랜치, 커밋, 풀 리퀘스트' },
    en: { def: 'A distributed version control system that tracks source code changes. Supports collaborative development with features like branching, merging, and committing. Used with platforms like GitHub and GitLab.', related: 'GitHub, Branch, Commit, Pull Request' } },
  { term: 'Docker', enTerm: 'Docker', cat: 'programming',
    ko: { def: '애플리케이션을 컨테이너로 패키징하여 어떤 환경에서든 일관되게 실행할 수 있게 하는 플랫폼입니다. 이미지, 컨테이너, Dockerfile 개념으로 구성되며 배포와 확장에 필수적입니다.', related: 'Kubernetes, 컨테이너, 이미지, DevOps' },
    en: { def: 'A platform that packages applications into containers for consistent execution across environments. Built around images, containers, and Dockerfiles, essential for deployment and scaling.', related: 'Kubernetes, Container, Image, DevOps' } },
  { term: '클라우드', enTerm: 'Cloud Computing', cat: 'programming',
    ko: { def: '인터넷을 통해 서버, 스토리지, 데이터베이스, 네트워킹 등의 컴퓨팅 리소스를 온디맨드로 제공하는 서비스입니다. AWS, Azure, GCP가 3대 클라우드 플랫폼입니다.', related: 'AWS, Azure, GCP, IaaS, PaaS, SaaS' },
    en: { def: 'A service providing computing resources like servers, storage, databases, and networking on-demand via the internet. AWS, Azure, and GCP are the three major cloud platforms.', related: 'AWS, Azure, GCP, IaaS, PaaS, SaaS' } },
  // 데이터
  { term: '데이터프레임', enTerm: 'DataFrame', cat: 'data',
    ko: { def: '행과 열로 구성된 2차원 테이블 형태의 데이터 구조입니다. 판다스(Pandas)의 핵심 자료구조로, 엑셀 스프레드시트와 유사하게 데이터를 다룰 수 있습니다.', related: '판다스, Series, CSV, 데이터 분석' },
    en: { def: 'A 2D tabular data structure organized in rows and columns. The core data structure of Pandas, allowing data manipulation similar to Excel spreadsheets.', related: 'Pandas, Series, CSV, Data Analysis' } },
  { term: '판다스', enTerm: 'Pandas', cat: 'data',
    ko: { def: 'Python의 데이터 분석 및 조작을 위한 핵심 라이브러리입니다. DataFrame과 Series 구조를 제공하며, 데이터 로딩, 정제, 변환, 집계 등 다양한 기능을 제공합니다.', related: '데이터프레임, 넘파이, 데이터 분석' },
    en: { def: 'A core Python library for data analysis and manipulation. Provides DataFrame and Series structures with features for data loading, cleaning, transformation, and aggregation.', related: 'DataFrame, NumPy, Data Analysis' } },
  { term: '넘파이', enTerm: 'NumPy', cat: 'data',
    ko: { def: 'Python의 수치 계산을 위한 기본 라이브러리입니다. 다차원 배열(ndarray)과 행렬 연산, 선형대수, 푸리에 변환 등을 효율적으로 처리합니다. 대부분의 과학 컴퓨팅 라이브러리의 기반입니다.', related: '판다스, 배열, 선형대수, 사이킷런' },
    en: { def: 'A fundamental Python library for numerical computing. Efficiently handles multi-dimensional arrays (ndarray), matrix operations, linear algebra, and Fourier transforms. Forms the basis of most scientific computing libraries.', related: 'Pandas, Array, Linear Algebra, Scikit-learn' } },
  { term: '텐서플로', enTerm: 'TensorFlow', cat: 'data',
    ko: { def: 'Google이 개발한 오픈소스 머신러닝 프레임워크입니다. 데이터 플로우 그래프를 사용하여 수치 계산을 수행하며, Keras API로 쉽게 딥러닝 모델을 구축할 수 있습니다.', related: 'Keras, 파이토치, 딥러닝, Google' },
    en: { def: 'An open-source machine learning framework developed by Google. Performs numerical computation using data flow graphs and allows easy deep learning model building through the Keras API.', related: 'Keras, PyTorch, Deep Learning, Google' } },
  { term: '파이토치', enTerm: 'PyTorch', cat: 'data',
    ko: { def: 'Meta(Facebook)가 개발한 오픈소스 딥러닝 프레임워크입니다. 동적 계산 그래프를 사용하여 직관적인 디버깅이 가능하며, 연구 분야에서 가장 인기 있는 프레임워크입니다.', related: '텐서플로, 딥러닝, 동적 그래프, Meta' },
    en: { def: 'An open-source deep learning framework developed by Meta (Facebook). Uses dynamic computation graphs for intuitive debugging and is the most popular framework in research.', related: 'TensorFlow, Deep Learning, Dynamic Graph, Meta' } },
  { term: '사이킷런', enTerm: 'Scikit-learn', cat: 'data',
    ko: { def: 'Python의 대표적인 머신러닝 라이브러리입니다. 분류, 회귀, 클러스터링, 차원 축소, 모델 평가 등 전통적인 ML 알고리즘을 일관된 API로 제공합니다.', related: '머신러닝, 판다스, 넘파이, 모델 평가' },
    en: { def: 'A representative Python machine learning library. Provides traditional ML algorithms for classification, regression, clustering, dimensionality reduction, and model evaluation through a consistent API.', related: 'Machine Learning, Pandas, NumPy, Model Evaluation' } },
  { term: '주피터', enTerm: 'Jupyter Notebook', cat: 'data',
    ko: { def: '코드, 텍스트, 시각화를 하나의 문서에서 작성할 수 있는 대화형 개발 환경입니다. 데이터 분석, 실험, 교육에 널리 사용되며, Python, R 등 다양한 언어를 지원합니다.', related: 'Colab, IPython, 데이터 분석, 노트북' },
    en: { def: 'An interactive development environment for writing code, text, and visualizations in a single document. Widely used for data analysis, experimentation, and education, supporting Python, R, and more.', related: 'Colab, IPython, Data Analysis, Notebook' } },
  // 추가 용어
  { term: '하이퍼파라미터', enTerm: 'Hyperparameter', cat: 'ml',
    ko: { def: '모델 학습 전에 사람이 직접 설정하는 파라미터입니다. 학습률, 배치 크기, 에폭 수, 은닉층 수 등이 해당합니다. 그리드 서치, 랜덤 서치 등으로 최적값을 탐색합니다.', related: '학습률, 배치, 그리드 서치, 튜닝' },
    en: { def: 'Parameters manually set before model training. Includes learning rate, batch size, number of epochs, and hidden layers. Optimal values are searched using grid search, random search, etc.', related: 'Learning Rate, Batch, Grid Search, Tuning' } },
  { term: '전이학습', enTerm: 'Transfer Learning', cat: 'ml',
    ko: { def: '한 작업에서 학습된 지식을 다른 관련 작업에 적용하는 기법입니다. 사전학습 모델의 가중치를 재사용하여 적은 데이터와 시간으로 높은 성능을 달성할 수 있습니다.', related: '파인튜닝, 사전학습, 도메인 적응' },
    en: { def: 'A technique that applies knowledge learned from one task to another related task. By reusing pre-trained model weights, it achieves high performance with less data and time.', related: 'Fine-tuning, Pre-training, Domain Adaptation' } },
  { term: '데이터 증강', enTerm: 'Data Augmentation', cat: 'ml',
    ko: { def: '기존 데이터를 변형하여 학습 데이터의 양과 다양성을 늘리는 기법입니다. 이미지의 회전, 반전, 크롭이나 텍스트의 동의어 교체, 역번역 등이 있습니다. 과적합 방지에 효과적입니다.', related: '과적합, 정규화, 이미지 처리' },
    en: { def: 'A technique to increase training data volume and diversity by transforming existing data. Includes image rotation, flipping, cropping, and text synonym replacement, back-translation. Effective against overfitting.', related: 'Overfitting, Regularization, Image Processing' } },
  { term: '멀티모달', enTerm: 'Multimodal AI', cat: 'ai-basic',
    ko: { def: '텍스트, 이미지, 오디오, 비디오 등 여러 유형의 데이터를 동시에 처리하고 이해하는 AI입니다. GPT-4o, Gemini 등이 대표적이며, 더 풍부한 상호작용이 가능합니다.', related: 'GPT-4o, Gemini, 비전-언어 모델' },
    en: { def: 'AI that simultaneously processes and understands multiple data types including text, images, audio, and video. GPT-4o and Gemini are representative examples, enabling richer interactions.', related: 'GPT-4o, Gemini, Vision-Language Model' } },
  { term: '환각', enTerm: 'Hallucination', cat: 'ai-basic',
    ko: { def: 'AI 모델이 사실이 아닌 정보를 마치 사실인 것처럼 자신있게 생성하는 현상입니다. LLM의 주요 문제점 중 하나이며, RAG, 팩트 체킹 등의 기법으로 완화합니다.', related: 'RAG, 팩트 체킹, LLM, 신뢰성' },
    en: { def: 'A phenomenon where AI models confidently generate false information as if it were true. A major issue with LLMs, mitigated through techniques like RAG and fact-checking.', related: 'RAG, Fact-checking, LLM, Reliability' } },

  // AI기초 (추가)
  { term: 'AGI', enTerm: 'Artificial General Intelligence', cat: 'ai-basic',
    ko: { def: '인간 수준의 범용 지능을 가진 인공지능을 의미합니다. 특정 작업에 한정되지 않고 다양한 분야에서 인간처럼 사고하고 학습할 수 있는 AI를 목표로 합니다. 현재까지 완전한 AGI는 달성되지 않았습니다.', related: '인공지능, 강한 AI, 초지능' },
    en: { def: 'Artificial intelligence with human-level general intelligence. It aims to create AI that can think and learn like humans across various domains, not limited to specific tasks. Full AGI has not yet been achieved.', related: 'AI, Strong AI, Superintelligence' } },
  { term: '프롬프트 엔지니어링', enTerm: 'Prompt Engineering', cat: 'ai-basic',
    ko: { def: 'AI 모델에서 원하는 출력을 얻기 위해 입력 프롬프트를 체계적으로 설계하는 기법입니다. 지시사항, 예시, 맥락을 적절히 구성하여 모델의 성능을 극대화합니다. LLM 활용의 핵심 역량으로 부상하고 있습니다.', related: '프롬프트, 제로샷, 퓨샷, 체인 오브 쏘트' },
    en: { def: 'A systematic technique for designing input prompts to obtain desired outputs from AI models. Maximizes model performance by appropriately structuring instructions, examples, and context. Emerging as a key competency in LLM utilization.', related: 'Prompt, Zero-shot, Few-shot, Chain of Thought' } },
  { term: '제로샷', enTerm: 'Zero-shot Learning', cat: 'ai-basic',
    ko: { def: '모델이 특정 작업에 대한 예시 없이 작업을 수행하는 방식입니다. 사전학습된 지식만으로 새로운 작업을 처리하며, LLM의 범용성을 보여주는 대표적인 능력입니다.', related: '퓨샷, 프롬프트 엔지니어링, 전이학습' },
    en: { def: 'A method where a model performs tasks without any task-specific examples. It handles new tasks using only pre-trained knowledge, demonstrating the versatility of LLMs.', related: 'Few-shot, Prompt Engineering, Transfer Learning' } },
  { term: '퓨샷', enTerm: 'Few-shot Learning', cat: 'ai-basic',
    ko: { def: '모델에 소수의 예시만 제공하여 새로운 작업을 수행하게 하는 방식입니다. 프롬프트에 2~5개의 입출력 예시를 포함하여 모델이 패턴을 학습하게 합니다. 제로샷보다 높은 정확도를 보이는 경우가 많습니다.', related: '제로샷, 프롬프트 엔지니어링, 인컨텍스트 학습' },
    en: { def: 'A method where a model performs new tasks with only a few examples. By including 2-5 input-output examples in the prompt, the model learns the pattern. Often shows higher accuracy than zero-shot.', related: 'Zero-shot, Prompt Engineering, In-context Learning' } },
  { term: '체인 오브 쏘트', enTerm: 'Chain of Thought (CoT)', cat: 'ai-basic',
    ko: { def: 'AI 모델이 복잡한 문제를 단계적으로 추론하도록 유도하는 프롬프트 기법입니다. 중간 사고 과정을 명시적으로 생성하게 하여 수학, 논리 문제에서 정확도를 크게 향상시킵니다.', related: '프롬프트 엔지니어링, 추론, 제로샷' },
    en: { def: 'A prompting technique that guides AI models to reason through complex problems step by step. By explicitly generating intermediate reasoning steps, it significantly improves accuracy in math and logic problems.', related: 'Prompt Engineering, Reasoning, Zero-shot' } },
  { term: 'RLHF', enTerm: 'Reinforcement Learning from Human Feedback', cat: 'ai-basic',
    ko: { def: '인간의 피드백을 활용하여 AI 모델을 강화학습으로 개선하는 기법입니다. 인간 평가자가 모델 출력을 비교 평가하고, 이를 보상 모델로 학습하여 모델을 정렬합니다. ChatGPT의 핵심 학습 방법입니다.', related: '강화학습, 정렬, 보상 모델, PPO' },
    en: { def: 'A technique that improves AI models through reinforcement learning using human feedback. Human evaluators compare model outputs, and a reward model is trained from these evaluations to align the model. A key training method behind ChatGPT.', related: 'Reinforcement Learning, Alignment, Reward Model, PPO' } },
  { term: '토크나이저', enTerm: 'Tokenizer', cat: 'ai-basic',
    ko: { def: '텍스트를 토큰 단위로 분할하는 도구입니다. BPE, WordPiece, SentencePiece 등 다양한 방식이 있으며, 모델의 어휘 사전을 구성합니다. 토크나이저의 성능이 모델 성능에 직접적인 영향을 미칩니다.', related: '토큰, BPE, 임베딩, 어휘 사전' },
    en: { def: 'A tool that splits text into token units. Various methods exist including BPE, WordPiece, and SentencePiece, forming the model vocabulary. Tokenizer performance directly impacts model performance.', related: 'Token, BPE, Embedding, Vocabulary' } },
  { term: '컨텍스트 윈도우', enTerm: 'Context Window', cat: 'ai-basic',
    ko: { def: 'LLM이 한 번에 처리할 수 있는 최대 토큰 수를 의미합니다. 컨텍스트 윈도우가 클수록 더 긴 대화와 문서를 처리할 수 있습니다. GPT-4는 128K, Claude는 200K 토큰을 지원합니다.', related: '토큰, LLM, 어텐션' },
    en: { def: 'The maximum number of tokens an LLM can process at once. A larger context window allows processing longer conversations and documents. GPT-4 supports 128K tokens and Claude supports 200K tokens.', related: 'Token, LLM, Attention' } },
  { term: '온도(Temperature)', enTerm: 'Temperature', cat: 'ai-basic',
    ko: { def: 'LLM의 출력 다양성을 제어하는 하이퍼파라미터입니다. 0에 가까울수록 결정적이고 예측 가능한 출력을, 높을수록 창의적이고 다양한 출력을 생성합니다. 일반적으로 0~2 범위에서 설정합니다.', related: '탑P, 샘플링, 하이퍼파라미터' },
    en: { def: 'A hyperparameter that controls the diversity of LLM outputs. Values closer to 0 produce deterministic and predictable outputs, while higher values generate more creative and diverse responses. Typically set between 0 and 2.', related: 'Top-P, Sampling, Hyperparameter' } },
  { term: '탑P(Top-P)', enTerm: 'Top-P (Nucleus Sampling)', cat: 'ai-basic',
    ko: { def: '누적 확률이 P 이상이 되는 토큰들만 샘플링 후보로 선택하는 기법입니다. Temperature와 함께 사용되어 출력의 다양성과 품질을 조절합니다. 값이 낮을수록 더 집중된 출력을 생성합니다.', related: '온도, 샘플링, 소프트맥스' },
    en: { def: 'A technique that selects only tokens whose cumulative probability exceeds P as sampling candidates. Used alongside Temperature to control output diversity and quality. Lower values produce more focused outputs.', related: 'Temperature, Sampling, Softmax' } },

  // 머신러닝 (추가)
  { term: '지도학습', enTerm: 'Supervised Learning', cat: 'ml',
    ko: { def: '입력 데이터와 정답 레이블이 짝지어진 데이터셋으로 모델을 학습시키는 방법입니다. 분류와 회귀가 대표적이며, 이미지 인식, 스팸 필터링 등에 활용됩니다. 가장 널리 사용되는 머신러닝 방법론입니다.', related: '비지도학습, 분류, 회귀, 레이블' },
    en: { def: 'A method of training models using datasets with paired input data and correct labels. Classification and regression are representative tasks, used in image recognition, spam filtering, etc. The most widely used machine learning methodology.', related: 'Unsupervised Learning, Classification, Regression, Label' } },
  { term: '비지도학습', enTerm: 'Unsupervised Learning', cat: 'ml',
    ko: { def: '정답 레이블 없이 데이터의 숨겨진 구조와 패턴을 발견하는 학습 방법입니다. 클러스터링, 차원 축소, 이상 탐지 등이 포함됩니다. 탐색적 데이터 분석과 데이터 전처리에 유용합니다.', related: '지도학습, 클러스터링, 차원 축소, K-means' },
    en: { def: 'A learning method that discovers hidden structures and patterns in data without labels. Includes clustering, dimensionality reduction, and anomaly detection. Useful for exploratory data analysis and preprocessing.', related: 'Supervised Learning, Clustering, Dimensionality Reduction, K-means' } },
  { term: '클러스터링', enTerm: 'Clustering', cat: 'ml',
    ko: { def: '유사한 데이터 포인트를 그룹으로 묶는 비지도학습 기법입니다. K-means, DBSCAN, 계층적 클러스터링 등의 알고리즘이 있습니다. 고객 세분화, 문서 분류, 이상 탐지 등에 활용됩니다.', related: '비지도학습, K-means, DBSCAN' },
    en: { def: 'An unsupervised learning technique that groups similar data points together. Algorithms include K-means, DBSCAN, and hierarchical clustering. Used in customer segmentation, document classification, and anomaly detection.', related: 'Unsupervised Learning, K-means, DBSCAN' } },
  { term: '교차검증', enTerm: 'Cross-Validation', cat: 'ml',
    ko: { def: '모델의 일반화 성능을 평가하기 위해 데이터를 여러 폴드로 나누어 반복 학습하는 기법입니다. K-폴드 교차검증이 가장 일반적이며, 과적합을 방지하고 모델의 신뢰성을 높여줍니다.', related: '과적합, 일반화, K-폴드, 검증 세트' },
    en: { def: 'A technique that divides data into multiple folds for repeated training to evaluate model generalization. K-fold cross-validation is most common, preventing overfitting and improving model reliability.', related: 'Overfitting, Generalization, K-fold, Validation Set' } },
  { term: '앙상블', enTerm: 'Ensemble Learning', cat: 'ml',
    ko: { def: '여러 개의 모델을 결합하여 단일 모델보다 더 나은 성능을 달성하는 기법입니다. 배깅, 부스팅, 스태킹이 대표적인 방법이며, 랜덤포레스트와 XGBoost가 대표적인 앙상블 알고리즘입니다.', related: '랜덤포레스트, XGBoost, 배깅, 부스팅' },
    en: { def: 'A technique that combines multiple models to achieve better performance than a single model. Bagging, boosting, and stacking are representative methods. Random Forest and XGBoost are popular ensemble algorithms.', related: 'Random Forest, XGBoost, Bagging, Boosting' } },
  { term: '랜덤포레스트', enTerm: 'Random Forest', cat: 'ml',
    ko: { def: '여러 개의 결정 트리를 배깅 방식으로 결합한 앙상블 알고리즘입니다. 각 트리가 무작위로 선택된 특성과 데이터 샘플로 학습됩니다. 분류와 회귀 모두에 사용되며, 과적합에 강한 특성을 가집니다.', related: '앙상블, 결정 트리, 배깅, XGBoost' },
    en: { def: 'An ensemble algorithm combining multiple decision trees using bagging. Each tree learns from randomly selected features and data samples. Used for both classification and regression, with strong resistance to overfitting.', related: 'Ensemble, Decision Tree, Bagging, XGBoost' } },
  { term: '정규화', enTerm: 'Regularization', cat: 'ml',
    ko: { def: '모델의 과적합을 방지하기 위해 학습 과정에 제약을 추가하는 기법입니다. L1(Lasso), L2(Ridge) 정규화가 대표적이며, 모델의 복잡도를 제어하여 일반화 성능을 향상시킵니다.', related: '과적합, L1, L2, 드롭아웃' },
    en: { def: 'A technique that adds constraints to the learning process to prevent overfitting. L1 (Lasso) and L2 (Ridge) regularization are representative methods, improving generalization by controlling model complexity.', related: 'Overfitting, L1, L2, Dropout' } },
  { term: '특성공학', enTerm: 'Feature Engineering', cat: 'ml',
    ko: { def: '원본 데이터에서 모델 학습에 유용한 특성(피처)을 생성, 선택, 변환하는 과정입니다. 도메인 지식을 활용하여 데이터의 표현력을 높이며, 모델 성능에 큰 영향을 미치는 핵심 단계입니다.', related: '특성 선택, 차원 축소, 데이터 전처리' },
    en: { def: 'The process of creating, selecting, and transforming useful features from raw data for model training. Leverages domain knowledge to enhance data representation, a critical step significantly impacting model performance.', related: 'Feature Selection, Dimensionality Reduction, Data Preprocessing' } },
  { term: 'A/B 테스트', enTerm: 'A/B Testing', cat: 'ml',
    ko: { def: '두 가지 이상의 변형을 비교하여 더 나은 성과를 보이는 것을 찾는 통계적 실험 방법입니다. 웹사이트, 앱, ML 모델의 성능을 비교할 때 널리 사용됩니다. 데이터 기반 의사결정의 핵심 도구입니다.', related: '통계적 유의성, 가설 검정, 실험 설계' },
    en: { def: 'A statistical experiment method that compares two or more variants to find the better performer. Widely used to compare website, app, and ML model performance. A key tool for data-driven decision making.', related: 'Statistical Significance, Hypothesis Testing, Experiment Design' } },
  { term: 'AutoML', enTerm: 'Automated Machine Learning', cat: 'ml',
    ko: { def: '머신러닝 파이프라인의 설계와 최적화를 자동화하는 기술입니다. 모델 선택, 하이퍼파라미터 튜닝, 특성공학을 자동으로 수행합니다. Google AutoML, Auto-sklearn 등이 대표적인 도구입니다.', related: '하이퍼파라미터, 특성공학, NAS' },
    en: { def: 'Technology that automates the design and optimization of machine learning pipelines. Automatically performs model selection, hyperparameter tuning, and feature engineering. Google AutoML and Auto-sklearn are representative tools.', related: 'Hyperparameter, Feature Engineering, NAS' } },

  // 딥러닝 (추가)
  { term: 'BERT', enTerm: 'Bidirectional Encoder Representations from Transformers', cat: 'dl',
    ko: { def: 'Google이 개발한 양방향 트랜스포머 기반 언어 모델입니다. 마스킹된 단어를 예측하는 방식으로 사전학습되며, 문장 분류, 질의응답, 개체명 인식 등에서 뛰어난 성능을 보입니다.', related: '트랜스포머, GPT, 자연어처리, 사전학습' },
    en: { def: 'A bidirectional Transformer-based language model developed by Google. Pre-trained by predicting masked words, it excels in sentence classification, question answering, and named entity recognition.', related: 'Transformer, GPT, NLP, Pre-training' } },
  { term: 'Diffusion Model', enTerm: 'Diffusion Model', cat: 'dl',
    ko: { def: '데이터에 점진적으로 노이즈를 추가한 후, 역과정으로 노이즈를 제거하여 새로운 데이터를 생성하는 모델입니다. Stable Diffusion, DALL-E, Midjourney 등 이미지 생성 AI의 핵심 기술입니다.', related: 'Stable Diffusion, DALL-E, GAN, 생성 모델' },
    en: { def: 'A model that generates new data by gradually adding noise to data and then reversing the process to remove noise. The core technology behind image generation AI like Stable Diffusion, DALL-E, and Midjourney.', related: 'Stable Diffusion, DALL-E, GAN, Generative Model' } },
  { term: 'ViT', enTerm: 'Vision Transformer', cat: 'dl',
    ko: { def: '트랜스포머 아키텍처를 이미지 인식에 적용한 모델입니다. 이미지를 패치로 나누어 시퀀스로 처리하며, CNN을 대체할 수 있는 가능성을 보여주었습니다. 대규모 데이터셋에서 CNN을 능가하는 성능을 달성합니다.', related: '트랜스포머, CNN, 컴퓨터비전, 어텐션' },
    en: { def: 'A model that applies the Transformer architecture to image recognition. It divides images into patches processed as sequences, showing potential to replace CNNs. Achieves superior performance over CNNs on large-scale datasets.', related: 'Transformer, CNN, Computer Vision, Attention' } },
  { term: 'U-Net', enTerm: 'U-Net', cat: 'dl',
    ko: { def: '의료 이미지 분할을 위해 개발된 인코더-디코더 구조의 신경망입니다. U자형 아키텍처와 스킵 연결이 특징이며, 적은 학습 데이터로도 높은 분할 성능을 달성합니다. Diffusion 모델에서도 핵심적으로 사용됩니다.', related: 'CNN, 이미지 분할, Diffusion Model, 인코더-디코더' },
    en: { def: 'An encoder-decoder neural network developed for medical image segmentation. Characterized by its U-shaped architecture and skip connections, achieving high segmentation performance with limited training data. Also used as a core component in Diffusion models.', related: 'CNN, Image Segmentation, Diffusion Model, Encoder-Decoder' } },
  { term: 'ResNet', enTerm: 'Residual Network', cat: 'dl',
    ko: { def: '잔차 연결(Skip Connection)을 도입하여 매우 깊은 신경망의 학습을 가능하게 한 구조입니다. 그래디언트 소실 문제를 해결하여 100층 이상의 네트워크를 효과적으로 학습할 수 있습니다.', related: 'CNN, 스킵 연결, 그래디언트 소실, VGG' },
    en: { def: 'An architecture that enables training of very deep neural networks by introducing residual connections (skip connections). Solves the vanishing gradient problem, allowing effective training of networks with over 100 layers.', related: 'CNN, Skip Connection, Vanishing Gradient, VGG' } },
  { term: '배치정규화', enTerm: 'Batch Normalization', cat: 'dl',
    ko: { def: '미니배치 단위로 입력을 정규화하여 학습을 안정화하고 가속하는 기법입니다. 내부 공변량 변화를 줄여 더 높은 학습률을 사용할 수 있게 합니다. 대부분의 딥러닝 아키텍처에서 표준적으로 사용됩니다.', related: '정규화, 미니배치, 학습률, 드롭아웃' },
    en: { def: 'A technique that normalizes inputs per mini-batch to stabilize and accelerate training. Reduces internal covariate shift, enabling higher learning rates. Used as a standard component in most deep learning architectures.', related: 'Normalization, Mini-batch, Learning Rate, Dropout' } },
  { term: '드롭아웃', enTerm: 'Dropout', cat: 'dl',
    ko: { def: '학습 중 무작위로 뉴런을 비활성화하여 과적합을 방지하는 정규화 기법입니다. 각 학습 단계에서 일정 비율의 뉴런을 랜덤하게 제거합니다. 앙상블 효과를 내어 모델의 일반화 성능을 향상시킵니다.', related: '과적합, 정규화, 배치정규화, 앙상블' },
    en: { def: 'A regularization technique that prevents overfitting by randomly deactivating neurons during training. Randomly removes a certain proportion of neurons at each training step. Creates an ensemble effect to improve generalization.', related: 'Overfitting, Regularization, Batch Normalization, Ensemble' } },
  { term: '활성화함수', enTerm: 'Activation Function', cat: 'dl',
    ko: { def: '신경망에서 비선형성을 도입하여 복잡한 패턴을 학습할 수 있게 하는 함수입니다. ReLU, Sigmoid, Tanh, GELU 등이 있으며, 현대 딥러닝에서는 ReLU 계열이 가장 널리 사용됩니다.', related: 'ReLU, Sigmoid, 신경망, 비선형성' },
    en: { def: 'Functions that introduce non-linearity in neural networks, enabling learning of complex patterns. Includes ReLU, Sigmoid, Tanh, and GELU. ReLU variants are most widely used in modern deep learning.', related: 'ReLU, Sigmoid, Neural Network, Non-linearity' } },
  { term: 'GPT-4o', enTerm: 'GPT-4o (Omni)', cat: 'dl',
    ko: { def: 'OpenAI의 멀티모달 AI 모델로, 텍스트, 이미지, 오디오를 통합 처리합니다. 기존 GPT-4 대비 더 빠른 응답 속도와 자연스러운 음성 대화를 지원합니다. 실시간 멀티모달 상호작용의 새로운 기준을 제시했습니다.', related: 'GPT, 멀티모달, LLM, OpenAI' },
    en: { def: 'OpenAI\'s multimodal AI model that processes text, images, and audio in a unified manner. Offers faster response times and more natural voice conversations compared to GPT-4. Set new standards for real-time multimodal interaction.', related: 'GPT, Multimodal, LLM, OpenAI' } },
  { term: 'Stable Diffusion', enTerm: 'Stable Diffusion', cat: 'dl',
    ko: { def: 'Stability AI가 개발한 오픈소스 이미지 생성 모델입니다. 잠재 공간에서 디퓨전 과정을 수행하여 효율적으로 고품질 이미지를 생성합니다. 오픈소스로 공개되어 커뮤니티 생태계가 활발합니다.', related: 'Diffusion Model, DALL-E, Midjourney, 잠재 공간' },
    en: { def: 'An open-source image generation model developed by Stability AI. Efficiently generates high-quality images by performing the diffusion process in latent space. Released as open-source, fostering an active community ecosystem.', related: 'Diffusion Model, DALL-E, Midjourney, Latent Space' } },

  // 프로그래밍 (추가)
  { term: 'TypeScript', enTerm: 'TypeScript', cat: 'programming',
    ko: { def: 'JavaScript에 정적 타입 시스템을 추가한 프로그래밍 언어입니다. Microsoft가 개발했으며, 컴파일 시 타입 오류를 감지하여 대규모 프로젝트의 안정성을 높입니다. 현대 웹 개발의 표준으로 자리잡고 있습니다.', related: 'JavaScript, React, Angular, 정적 타입' },
    en: { def: 'A programming language that adds a static type system to JavaScript. Developed by Microsoft, it detects type errors at compile time, improving stability for large-scale projects. Becoming a standard in modern web development.', related: 'JavaScript, React, Angular, Static Typing' } },
  { term: 'Next.js', enTerm: 'Next.js', cat: 'programming',
    ko: { def: 'Vercel이 개발한 React 기반의 풀스택 웹 프레임워크입니다. 서버사이드 렌더링(SSR), 정적 사이트 생성(SSG), API 라우트를 지원합니다. App Router와 서버 컴포넌트로 현대적인 웹 개발을 지원합니다.', related: 'React, SSR, Vercel, 풀스택' },
    en: { def: 'A full-stack web framework based on React, developed by Vercel. Supports server-side rendering (SSR), static site generation (SSG), and API routes. Features App Router and server components for modern web development.', related: 'React, SSR, Vercel, Full-stack' } },
  { term: 'FastAPI', enTerm: 'FastAPI', cat: 'programming',
    ko: { def: 'Python 기반의 고성능 웹 API 프레임워크입니다. 타입 힌트를 활용한 자동 문서화, 비동기 처리, 데이터 검증을 지원합니다. ML 모델 서빙과 백엔드 API 개발에 널리 사용됩니다.', related: 'Python, REST, Flask, API' },
    en: { def: 'A high-performance Python web API framework. Supports automatic documentation via type hints, async processing, and data validation. Widely used for ML model serving and backend API development.', related: 'Python, REST, Flask, API' } },
  { term: 'Flask', enTerm: 'Flask', cat: 'programming',
    ko: { def: 'Python의 경량 웹 프레임워크로, 마이크로 프레임워크를 지향합니다. 최소한의 핵심 기능만 제공하며, 확장을 통해 필요한 기능을 추가합니다. 프로토타이핑과 소규모 프로젝트에 적합합니다.', related: 'Python, FastAPI, Django, REST' },
    en: { def: 'A lightweight Python web framework following the micro-framework philosophy. Provides minimal core functionality with extensions for additional features. Ideal for prototyping and small-scale projects.', related: 'Python, FastAPI, Django, REST' } },
  { term: '웹소켓', enTerm: 'WebSocket', cat: 'programming',
    ko: { def: '서버와 클라이언트 간 양방향 실시간 통신을 가능하게 하는 프로토콜입니다. HTTP와 달리 연결을 유지하여 지속적인 데이터 교환이 가능합니다. 채팅, 실시간 알림, 협업 도구에 필수적입니다.', related: 'HTTP, 실시간 통신, Socket.io, REST' },
    en: { def: 'A protocol enabling bidirectional real-time communication between server and client. Unlike HTTP, it maintains a persistent connection for continuous data exchange. Essential for chat, real-time notifications, and collaboration tools.', related: 'HTTP, Real-time Communication, Socket.io, REST' } },
  { term: 'CI/CD', enTerm: 'Continuous Integration / Continuous Deployment', cat: 'programming',
    ko: { def: '코드 변경사항을 자동으로 빌드, 테스트, 배포하는 소프트웨어 개발 관행입니다. GitHub Actions, Jenkins, GitLab CI 등의 도구를 사용합니다. 개발 속도와 코드 품질을 동시에 향상시킵니다.', related: 'Git, Docker, DevOps, 자동화' },
    en: { def: 'A software development practice that automatically builds, tests, and deploys code changes. Uses tools like GitHub Actions, Jenkins, and GitLab CI. Simultaneously improves development speed and code quality.', related: 'Git, Docker, DevOps, Automation' } },
  { term: '컨테이너', enTerm: 'Container', cat: 'programming',
    ko: { def: '애플리케이션과 그 의존성을 격리된 환경으로 패키징하는 기술입니다. Docker가 가장 대표적이며, 어디서든 동일한 환경에서 실행할 수 있습니다. 마이크로서비스 아키텍처와 클라우드 배포의 핵심 기술입니다.', related: 'Docker, 쿠버네티스, 마이크로서비스, 가상화' },
    en: { def: 'Technology that packages applications and their dependencies into isolated environments. Docker is the most representative tool, enabling consistent execution anywhere. A core technology for microservices and cloud deployment.', related: 'Docker, Kubernetes, Microservices, Virtualization' } },
  { term: '마이크로서비스', enTerm: 'Microservices', cat: 'programming',
    ko: { def: '애플리케이션을 작고 독립적인 서비스로 분할하여 개발하는 아키텍처 패턴입니다. 각 서비스가 독립적으로 배포, 확장, 유지보수될 수 있습니다. 대규모 시스템의 유연성과 확장성을 크게 향상시킵니다.', related: '컨테이너, Docker, API, 모놀리식' },
    en: { def: 'An architecture pattern that develops applications as small, independent services. Each service can be independently deployed, scaled, and maintained. Greatly improves flexibility and scalability of large-scale systems.', related: 'Container, Docker, API, Monolithic' } },

  // 데이터 (추가)
  { term: 'ETL', enTerm: 'Extract, Transform, Load', cat: 'data',
    ko: { def: '데이터를 소스에서 추출(Extract)하고, 변환(Transform)한 후, 목적지에 적재(Load)하는 프로세스입니다. 데이터 웨어하우스와 분석 시스템 구축의 핵심 과정이며, 데이터 품질 관리의 기초가 됩니다.', related: '데이터 파이프라인, 데이터 웨어하우스, 데이터 레이크' },
    en: { def: 'The process of Extracting data from sources, Transforming it, and Loading it into a destination. A core process for building data warehouses and analytics systems, forming the foundation of data quality management.', related: 'Data Pipeline, Data Warehouse, Data Lake' } },
  { term: '데이터 레이크', enTerm: 'Data Lake', cat: 'data',
    ko: { def: '구조화, 반구조화, 비구조화 데이터를 원본 형태 그대로 저장하는 대규모 저장소입니다. 데이터 웨어하우스와 달리 스키마를 미리 정의하지 않습니다. AWS S3, Azure Data Lake 등이 대표적인 서비스입니다.', related: 'ETL, 데이터 웨어하우스, 빅데이터, 클라우드' },
    en: { def: 'A large-scale storage that stores structured, semi-structured, and unstructured data in its raw format. Unlike data warehouses, schemas are not predefined. AWS S3 and Azure Data Lake are representative services.', related: 'ETL, Data Warehouse, Big Data, Cloud' } },
  { term: '데이터 파이프라인', enTerm: 'Data Pipeline', cat: 'data',
    ko: { def: '데이터의 수집, 처리, 저장, 분석을 자동화된 흐름으로 연결하는 시스템입니다. 실시간 또는 배치 방식으로 운영되며, Apache Airflow, Prefect 등의 도구로 관리합니다. 안정적인 데이터 흐름을 보장합니다.', related: 'ETL, Apache Airflow, 배치 처리, 스트리밍' },
    en: { def: 'A system that connects data collection, processing, storage, and analysis in an automated flow. Operates in real-time or batch mode, managed with tools like Apache Airflow and Prefect. Ensures reliable data flow.', related: 'ETL, Apache Airflow, Batch Processing, Streaming' } },
  { term: 'Apache Spark', enTerm: 'Apache Spark', cat: 'data',
    ko: { def: '대규모 데이터 처리를 위한 오픈소스 분산 컴퓨팅 프레임워크입니다. 인메모리 처리로 Hadoop MapReduce보다 최대 100배 빠른 성능을 제공합니다. SQL, 스트리밍, ML, 그래프 처리를 통합 지원합니다.', related: 'Hadoop, 빅데이터, PySpark, 분산 처리' },
    en: { def: 'An open-source distributed computing framework for large-scale data processing. Provides up to 100x faster performance than Hadoop MapReduce through in-memory processing. Supports SQL, streaming, ML, and graph processing.', related: 'Hadoop, Big Data, PySpark, Distributed Processing' } },
  { term: '특성 저장소', enTerm: 'Feature Store', cat: 'data',
    ko: { def: 'ML 모델에 사용되는 특성(피처)을 중앙에서 관리하고 제공하는 시스템입니다. 특성의 재사용성을 높이고, 학습과 서빙 간의 일관성을 보장합니다. Feast, Tecton 등이 대표적인 도구입니다.', related: '특성공학, MLOps, 데이터 파이프라인' },
    en: { def: 'A system that centrally manages and serves features used in ML models. Increases feature reusability and ensures consistency between training and serving. Feast and Tecton are representative tools.', related: 'Feature Engineering, MLOps, Data Pipeline' } },
  { term: '데이터 거버넌스', enTerm: 'Data Governance', cat: 'data',
    ko: { def: '조직 내 데이터의 가용성, 무결성, 보안을 관리하는 정책과 프로세스의 집합입니다. 데이터 품질, 접근 제어, 개인정보 보호, 컴플라이언스를 포괄합니다. AI 시대에 더욱 중요해지고 있습니다.', related: '데이터 품질, 컴플라이언스, 메타데이터, 데이터 카탈로그' },
    en: { def: 'A set of policies and processes managing data availability, integrity, and security within an organization. Encompasses data quality, access control, privacy, and compliance. Increasingly important in the AI era.', related: 'Data Quality, Compliance, Metadata, Data Catalog' } },
  { term: '시각화 라이브러리', enTerm: 'Visualization Library', cat: 'data',
    ko: { def: '데이터를 그래프, 차트, 대시보드 등으로 시각적으로 표현하는 소프트웨어 도구입니다. Python의 Matplotlib, Seaborn, Plotly와 JavaScript의 D3.js, Chart.js가 대표적입니다. 데이터 분석과 인사이트 전달에 필수적입니다.', related: '판다스, Matplotlib, D3.js, 대시보드' },
    en: { def: 'Software tools that visually represent data through graphs, charts, and dashboards. Python\'s Matplotlib, Seaborn, Plotly, and JavaScript\'s D3.js and Chart.js are representative. Essential for data analysis and insight communication.', related: 'Pandas, Matplotlib, D3.js, Dashboard' } },
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
      item.enTerm.toLowerCase().includes(query) ||
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
                        {item.enTerm}
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
