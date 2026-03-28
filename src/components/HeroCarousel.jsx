import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import HeroBackground from './HeroBackground';

const SLIDES = [
  {
    bgType: 'particles',
    ko: { badge: 'AI 학습 플랫폼', title: 'AI와 함께 성장하는 학습의 미래', desc: 'OpenClaw에서 AI, 프로그래밍, 데이터 사이언스를 체계적으로 학습하세요.' },
    en: { badge: 'AI Learning Platform', title: 'The Future of Learning with AI', desc: 'Learn AI, programming, and data science systematically on OpenClaw.' },
  },
  {
    bgType: 'network',
    ko: { badge: '프롬프트 엔지니어링', title: 'AI와 대화하는 최적의 방법', desc: 'Zero-shot, Few-shot, Chain of Thought 등 프롬프트 기법을 실습하며 익히세요.' },
    en: { badge: 'Prompt Engineering', title: 'The Best Way to Talk with AI', desc: 'Practice prompt techniques like Zero-shot, Few-shot, and Chain of Thought.' },
  },
  {
    bgType: 'orbs',
    ko: { badge: '체계적 커리큘럼', title: '머신러닝부터 웹개발까지 단계별 학습', desc: '16개 학습 주제를 4개 카테고리로 체계적으로 구성했습니다.' },
    en: { badge: 'Structured Curriculum', title: 'From ML to Web Dev Step by Step', desc: '16 topics organized into 4 categories for systematic learning.' },
  },
  {
    bgType: 'geometric',
    ko: { badge: '학습 커뮤니티', title: '함께 배우고 함께 성장하는 공간', desc: '질문, 자료 공유, 토론을 통해 함께 성장하는 학습 커뮤니티에 참여하세요.' },
    en: { badge: 'Learning Community', title: 'Learn Together, Grow Together', desc: 'Join a community of learners sharing questions, resources, and discussions.' },
  },
  {
    bgType: 'particles',
    ko: { badge: '무료 플랫폼', title: '누구나 무료로 시작할 수 있는 학습', desc: 'OpenClaw의 모든 학습 자료와 프롬프트 실습은 완전 무료입니다.' },
    en: { badge: 'Free Platform', title: 'Anyone Can Start Learning For Free', desc: 'All learning resources and prompt practices on OpenClaw are completely free.' },
  },
];

export default function HeroCarousel() {
  const { language } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(1); // 1=forward, -1=backward

  const goTo = useCallback((idx) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(idx);
    setTimeout(() => setAnimating(false), 700);
  }, [animating]);

  const advance = useCallback(() => {
    const nextIdx = current + direction;
    if (nextIdx >= SLIDES.length) {
      setDirection(-1);
      goTo(current - 1);
    } else if (nextIdx < 0) {
      setDirection(1);
      goTo(current + 1);
    } else {
      goTo(nextIdx);
    }
  }, [current, direction, goTo]);

  const prev = useCallback(() => {
    if (current > 0) goTo(current - 1);
  }, [current, goTo]);

  const next = useCallback(() => {
    if (current < SLIDES.length - 1) goTo(current + 1);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(advance, 6000);
    return () => clearInterval(timer);
  }, [advance]);

  const slide = SLIDES[current];
  const content = language === 'ko' ? slide.ko : slide.en;

  return (
    <section className="hero">
      <div className="carousel-viewport">
        <div className="carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
          {SLIDES.map((s, i) => (
            <div key={i} className="carousel-slide">
              <HeroBackground type={s.bgType} />
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className={`hero-badge hero-text-animate ${animating ? 'fade' : ''}`} key={`badge-${current}`}>
            <span style={{ fontSize: '1.3em' }}>✨</span> {content.badge}
          </div>
          <h1 className={`hero-title hero-text-animate ${animating ? 'fade' : ''}`} key={`title-${current}`}>
            {content.title}
          </h1>
          <p className={`hero-description hero-text-animate ${animating ? 'fade' : ''}`} key={`desc-${current}`}>
            {content.desc}
          </p>
          <div className="hero-buttons">
            <Link to="/register" className="btn btn-primary">
              {language === 'ko' ? '학습 시작하기' : 'Start Learning'}
            </Link>
            <Link to="/intro" className="btn btn-secondary">
              {language === 'ko' ? '플랫폼 소개' : 'Learn More'}
            </Link>
          </div>
        </div>
      </div>

      <button className="carousel-arrow carousel-arrow-left" onClick={prev}>‹</button>
      <button className="carousel-arrow carousel-arrow-right" onClick={next}>›</button>

      <div className="carousel-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      <div className="scroll-indicator">
        <div className="mouse"><div className="wheel" /></div>
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  );
}
