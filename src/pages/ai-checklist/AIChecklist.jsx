import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const SECTIONS = [
  { id: 'common', icon: 'fa-clipboard-check', color: 'green', ko: '공통 체크포인트', en: 'Common Checkpoints' },
  { id: 'student', icon: 'fa-user-graduate', color: 'blue', ko: '학습자 자기 진단', en: 'Student Self-Assessment' },
  { id: 'instructor', icon: 'fa-chalkboard-teacher', color: 'purple', ko: '교수자 체크리스트', en: 'Instructor Checklist' },
  { id: 'materials', icon: 'fa-bookmark', color: 'orange', ko: '학습 자료', en: 'Learning Materials' },
];

const COMMON_CHECKS = {
  ko: [
    'AI의 기본 개념(머신러닝, 딥러닝, 자연어처리)을 설명할 수 있다',
    'ChatGPT, Claude, Gemini 중 하나 이상의 AI를 사용해 본 경험이 있다',
    'AI에게 질문할 때 명확하고 구체적인 프롬프트를 작성할 수 있다',
    'AI가 생성한 텍스트의 정확성을 비판적으로 평가할 수 있다',
    'AI의 한계와 편향성에 대해 인지하고 있다',
    'AI를 활용한 결과물에 대해 출처를 표기할 수 있다',
    'AI API 키의 보안 관리 방법을 알고 있다',
    'AI를 활용하여 업무/학습 효율성을 높인 경험이 있다',
    '프롬프트 엔지니어링의 기본 기법(역할 부여, 예시 제공)을 알고 있다',
    'AI 윤리(편향성, 개인정보, 저작권)에 대해 기본 지식이 있다',
  ],
  en: [
    'I can explain basic AI concepts (ML, DL, NLP)',
    'I have experience using one or more AI tools (ChatGPT, Claude, Gemini)',
    'I can write clear, specific prompts when asking AI questions',
    'I can critically evaluate the accuracy of AI-generated text',
    'I am aware of AI limitations and biases',
    'I can properly attribute AI-generated content',
    'I know how to securely manage AI API keys',
    'I have used AI to improve work/study efficiency',
    'I know basic prompt engineering techniques (role assignment, examples)',
    'I have basic knowledge of AI ethics (bias, privacy, copyright)',
  ],
};

const STUDENT_QUESTIONS = {
  ko: [
    'AI를 활용하여 학습 자료를 효과적으로 검색하고 정리할 수 있는가?',
    '과제 작성 시 AI를 보조 도구로 적절히 활용하고 있는가?',
    'AI가 제공한 답변을 그대로 사용하지 않고 자신의 이해를 바탕으로 재구성하는가?',
    '여러 AI 도구의 특성을 이해하고 목적에 맞게 선택하여 사용하는가?',
    'AI를 활용한 학습 결과를 동료와 공유하고 토론할 수 있는가?',
    'AI의 답변에 대해 추가 질문(Follow-up)을 통해 깊이 있는 학습을 하고 있는가?',
    '코딩 학습에서 AI를 활용하여 코드를 이해하고 디버깅할 수 있는가?',
    'AI를 활용한 번역이나 요약의 한계를 이해하고 있는가?',
    '학습 목표에 맞는 프롬프트를 설계하고 개선할 수 있는가?',
    'AI 활용 시 학술적 정직성(Academic Integrity)을 유지하고 있는가?',
  ],
  en: [
    'Can I effectively search and organize study materials using AI?',
    'Am I appropriately using AI as an assistive tool for assignments?',
    'Do I restructure AI answers based on my own understanding rather than copy them?',
    'Do I understand different AI tools and select them based on purpose?',
    'Can I share and discuss AI-assisted learning outcomes with peers?',
    'Am I using follow-up questions to AI for deeper learning?',
    'Can I use AI to understand and debug code in programming studies?',
    'Do I understand the limitations of AI-assisted translation and summarization?',
    'Can I design and improve prompts aligned with learning objectives?',
    'Do I maintain academic integrity when using AI?',
  ],
};

const INSTRUCTOR_ITEMS = {
  ko: [
    { item: '강의계획서에 AI 활용 정책을 명시하고 있는가?', hint: '허용 범위, 인용 규칙, 평가 기준 포함' },
    { item: 'AI를 활용한 교수학습 자료(루브릭, 과제, 피드백)를 제작하고 있는가?', hint: 'OpenClaw의 AI 도구 활용' },
    { item: '학생들에게 AI 도구의 올바른 사용법을 교육하고 있는가?', hint: '프롬프트 작성법, 결과 검증 방법' },
    { item: 'AI를 활용한 과제의 평가 기준을 적절히 설정했는가?', hint: 'AI 활용 vs 독자적 사고 비율' },
    { item: 'AI 생성 콘텐츠의 표절 여부를 확인하는 방법을 알고 있는가?', hint: 'AI 탐지 도구, 출처 확인' },
    { item: '수업에서 AI를 활용한 실습 활동을 설계하고 있는가?', hint: '프롬프트 실습, 비교 분석 활동' },
    { item: '학생들의 AI 역량 수준을 파악하고 차별화된 지도를 하고 있는가?', hint: '진단 평가, 수준별 과제' },
    { item: 'AI 관련 최신 동향을 수업에 반영하고 있는가?', hint: '새로운 AI 모델, 기술 변화' },
    { item: '학생들의 AI 활용에 대한 피드백을 정기적으로 제공하고 있는가?', hint: '개선점, 우수 사례 공유' },
    { item: 'AI 교육의 효과를 측정하고 개선하는 체계를 갖추고 있는가?', hint: '사전/사후 평가, 학습 성과 분석' },
  ],
  en: [
    { item: 'Have you included an AI usage policy in your syllabus?', hint: 'Scope, citation rules, assessment criteria' },
    { item: 'Are you creating teaching materials (rubrics, assignments, feedback) with AI?', hint: 'Using OpenClaw AI tools' },
    { item: 'Are you educating students on proper AI tool usage?', hint: 'Prompt writing, result verification' },
    { item: 'Have you set appropriate evaluation criteria for AI-assisted assignments?', hint: 'AI usage vs independent thinking ratio' },
    { item: 'Do you know how to check AI-generated content for plagiarism?', hint: 'AI detection tools, source verification' },
    { item: 'Are you designing hands-on AI activities for class?', hint: 'Prompt practice, comparative analysis' },
    { item: 'Do you assess student AI competency levels and provide differentiated guidance?', hint: 'Diagnostic assessment, leveled tasks' },
    { item: 'Are you incorporating latest AI trends in your teaching?', hint: 'New AI models, technology changes' },
    { item: 'Do you regularly provide feedback on students\' AI usage?', hint: 'Improvements, sharing best practices' },
    { item: 'Do you have a system for measuring and improving AI education effectiveness?', hint: 'Pre/post assessment, learning outcome analysis' },
  ],
};

const AI_TOOLS = [
  { name: 'ChatGPT', url: 'https://chat.openai.com', icon: 'fa-robot', color: '#10A37F', desc: { ko: 'OpenAI의 대화형 AI. GPT-4o 모델 지원', en: 'OpenAI\'s conversational AI. GPT-4o model support' } },
  { name: 'Claude', url: 'https://claude.ai', icon: 'fa-message', color: '#D4A574', desc: { ko: 'Anthropic의 안전한 AI. 긴 컨텍스트 지원', en: 'Anthropic\'s safe AI. Long context support' } },
  { name: 'Gemini', url: 'https://gemini.google.com', icon: 'fa-gem', color: '#4285F4', desc: { ko: 'Google의 멀티모달 AI. 검색 통합', en: 'Google\'s multimodal AI. Search integration' } },
  { name: 'GitHub Copilot', url: 'https://github.com/features/copilot', icon: 'fa-code', color: '#000000', desc: { ko: 'AI 코딩 어시스턴트. 코드 자동 완성', en: 'AI coding assistant. Code auto-completion' } },
];

const ANSWER_OPTIONS = {
  ko: ['예', '보통', '아니오'],
  en: ['Yes', 'Sometimes', 'No'],
};

const SCORE_OPTIONS = [0, 1, 2, 3];

export default function AIChecklist() {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const [activeSection, setActiveSection] = useState('common');
  const [commonChecks, setCommonChecks] = useState(Array(10).fill(false));
  const [studentAnswers, setStudentAnswers] = useState(Array(10).fill(-1));
  const [instructorScores, setInstructorScores] = useState(Array(10).fill(-1));

  const commonScore = commonChecks.filter(Boolean).length;
  const studentScore = studentAnswers.reduce((sum, v) => sum + (v === 0 ? 2 : v === 1 ? 1 : 0), 0);
  const instructorScore = instructorScores.reduce((sum, v) => sum + (v >= 0 ? v : 0), 0);

  const getLevel = (score, max) => {
    const pct = score / max;
    if (pct >= 0.8) return { ko: '우수', en: 'Excellent', color: '#10B981' };
    if (pct >= 0.6) return { ko: '양호', en: 'Good', color: '#3B82F6' };
    if (pct >= 0.4) return { ko: '보통', en: 'Average', color: '#F59E0B' };
    return { ko: '노력 필요', en: 'Needs Improvement', color: '#EF4444' };
  };

  const resetSection = () => {
    if (activeSection === 'common') setCommonChecks(Array(10).fill(false));
    if (activeSection === 'student') setStudentAnswers(Array(10).fill(-1));
    if (activeSection === 'instructor') setInstructorScores(Array(10).fill(-1));
  };

  return (
    <div className="ck-page">
      <SEOHead
        title={isKo ? 'AI 역량 체크리스트' : 'AI Competency Checklist'}
        description={isKo ? 'AI 활용 역량을 진단하고 개선하세요' : 'Assess and improve your AI competency'}
        path="/ai-checklist"
      />

      <button className="ck-mobile-toggle" onClick={() => {}}>
        <i className="fa-solid fa-bars" />
        <span>{isKo ? '메뉴' : 'Menu'}</span>
      </button>

      <div className="ck-layout">
        {/* Sidebar */}
        <aside className="ck-sidebar">
          <div className="ck-sb-header">
            <i className="fa-solid fa-clipboard-check" />
            <span>{isKo ? 'AI 체크리스트' : 'AI Checklist'}</span>
          </div>
          <nav className="ck-sb-nav">
            {SECTIONS.map(sec => (
              <button
                key={sec.id}
                className={`ck-nav-child ${activeSection === sec.id ? 'active' : ''}`}
                onClick={() => setActiveSection(sec.id)}
              >
                <span className="ck-nc-icon"><i className={`fa-solid ${sec.icon}`} /></span>
                <span>{isKo ? sec.ko : sec.en}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <div className="ck-main">
          <div className="ck-breadcrumb">
            <span className="current">{isKo ? 'AI 역량 체크리스트' : 'AI Competency Checklist'}</span>
            <span className="ck-bc-sep"><i className="fa-solid fa-chevron-right" /></span>
            <span className="current">
              {isKo ? SECTIONS.find(s => s.id === activeSection)?.ko : SECTIONS.find(s => s.id === activeSection)?.en}
            </span>
          </div>

          {/* Common Checkpoints */}
          {activeSection === 'common' && (
            <div className="ck-content-box">
              <div className="ck-content-header ck-ch--green">
                <i className="fa-solid fa-clipboard-check" />
                <div className="ck-ch-text">
                  <h2>{isKo ? '공통 체크포인트' : 'Common Checkpoints'}</h2>
                  <p>{isKo ? 'AI 기본 역량 10가지를 확인하세요' : 'Check 10 basic AI competencies'}</p>
                </div>
                <button className="ck-reset-btn" onClick={resetSection}>
                  <i className="fa-solid fa-rotate-right" /> {isKo ? '초기화' : 'Reset'}
                </button>
              </div>
              <div className="ck-content-body">
                {(isKo ? COMMON_CHECKS.ko : COMMON_CHECKS.en).map((check, idx) => (
                  <label key={idx} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 0',
                    borderBottom: idx < 9 ? '1px solid var(--border-light)' : 'none',
                    cursor: 'pointer'
                  }}>
                    <input
                      type="checkbox"
                      checked={commonChecks[idx]}
                      onChange={() => {
                        const next = [...commonChecks];
                        next[idx] = !next[idx];
                        setCommonChecks(next);
                      }}
                      style={{ marginTop: 3, accentColor: 'var(--primary-blue)' }}
                    />
                    <span style={{ fontSize: 14, color: commonChecks[idx] ? 'var(--text-primary)' : 'var(--text-secondary)', lineHeight: 1.6 }}>
                      <strong style={{ marginRight: 6, color: 'var(--primary-blue)' }}>{idx + 1}.</strong>
                      {check}
                    </span>
                  </label>
                ))}

                {/* Score */}
                <div style={{
                  marginTop: 24, padding: 20, borderRadius: 12,
                  background: 'var(--bg-light-gray)', textAlign: 'center'
                }}>
                  <div style={{ fontSize: 14, color: 'var(--text-light)', marginBottom: 8 }}>
                    {isKo ? '달성 현황' : 'Achievement'}
                  </div>
                  <div style={{ fontSize: 36, fontWeight: 800, color: getLevel(commonScore, 10).color }}>
                    {commonScore}/10
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: getLevel(commonScore, 10).color, marginTop: 4 }}>
                    {isKo ? getLevel(commonScore, 10).ko : getLevel(commonScore, 10).en}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Student Self-Assessment */}
          {activeSection === 'student' && (
            <div className="ck-content-box">
              <div className="ck-content-header ck-ch--blue">
                <i className="fa-solid fa-user-graduate" />
                <div className="ck-ch-text">
                  <h2>{isKo ? '학습자 자기 진단' : 'Student Self-Assessment'}</h2>
                  <p>{isKo ? '자신의 AI 활용 역량을 점검하세요' : 'Check your AI utilization skills'}</p>
                </div>
                <button className="ck-reset-btn" onClick={resetSection}>
                  <i className="fa-solid fa-rotate-right" /> {isKo ? '초기화' : 'Reset'}
                </button>
              </div>
              <div className="ck-content-body">
                {(isKo ? STUDENT_QUESTIONS.ko : STUDENT_QUESTIONS.en).map((question, idx) => (
                  <div key={idx} style={{
                    padding: '16px 0',
                    borderBottom: idx < 9 ? '1px solid var(--border-light)' : 'none'
                  }}>
                    <div style={{ fontSize: 14, color: 'var(--text-primary)', marginBottom: 10, lineHeight: 1.6 }}>
                      <strong style={{ color: 'var(--primary-blue)', marginRight: 6 }}>{idx + 1}.</strong>
                      {question}
                    </div>
                    <div style={{ display: 'flex', gap: 8 }}>
                      {(isKo ? ANSWER_OPTIONS.ko : ANSWER_OPTIONS.en).map((opt, oi) => (
                        <button
                          key={oi}
                          onClick={() => {
                            const next = [...studentAnswers];
                            next[idx] = oi;
                            setStudentAnswers(next);
                          }}
                          style={{
                            padding: '6px 16px', fontSize: 13, fontWeight: 500,
                            border: `1px solid ${studentAnswers[idx] === oi ? 'var(--primary-blue)' : 'var(--border-light)'}`,
                            borderRadius: 20,
                            background: studentAnswers[idx] === oi ? 'var(--primary-blue)' : 'var(--bg-white)',
                            color: studentAnswers[idx] === oi ? '#fff' : 'var(--text-secondary)',
                            cursor: 'pointer', fontFamily: 'inherit'
                          }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Score */}
                <div style={{
                  marginTop: 24, padding: 20, borderRadius: 12,
                  background: 'var(--bg-light-gray)', textAlign: 'center'
                }}>
                  <div style={{ fontSize: 14, color: 'var(--text-light)', marginBottom: 8 }}>
                    {isKo ? '자기 진단 점수' : 'Self-Assessment Score'}
                  </div>
                  <div style={{ fontSize: 36, fontWeight: 800, color: getLevel(studentScore, 20).color }}>
                    {studentScore}/20
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: getLevel(studentScore, 20).color, marginTop: 4 }}>
                    {isKo ? getLevel(studentScore, 20).ko : getLevel(studentScore, 20).en}
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--text-light)', marginTop: 12 }}>
                    {isKo
                      ? '예=2점, 보통=1점, 아니오=0점으로 계산됩니다.'
                      : 'Calculated as Yes=2, Sometimes=1, No=0 points.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Instructor Checklist */}
          {activeSection === 'instructor' && (
            <div className="ck-content-box">
              <div className="ck-content-header ck-ch--purple">
                <i className="fa-solid fa-chalkboard-teacher" />
                <div className="ck-ch-text">
                  <h2>{isKo ? '교수자 체크리스트' : 'Instructor Checklist'}</h2>
                  <p>{isKo ? 'AI 교육 설계 역량을 점검하세요 (각 항목 0~3점)' : 'Assess your AI education design skills (0-3 points each)'}</p>
                </div>
                <button className="ck-reset-btn" onClick={resetSection}>
                  <i className="fa-solid fa-rotate-right" /> {isKo ? '초기화' : 'Reset'}
                </button>
              </div>
              <div className="ck-content-body">
                {(isKo ? INSTRUCTOR_ITEMS.ko : INSTRUCTOR_ITEMS.en).map((entry, idx) => (
                  <div key={idx} style={{
                    padding: '16px 0',
                    borderBottom: idx < 9 ? '1px solid var(--border-light)' : 'none'
                  }}>
                    <div style={{ fontSize: 14, color: 'var(--text-primary)', marginBottom: 4, lineHeight: 1.6 }}>
                      <strong style={{ color: 'var(--primary-blue)', marginRight: 6 }}>{idx + 1}.</strong>
                      {entry.item}
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--text-light)', marginBottom: 10, fontStyle: 'italic' }}>
                      {isKo ? '힌트: ' : 'Hint: '}{entry.hint}
                    </div>
                    <div style={{ display: 'flex', gap: 8 }}>
                      {SCORE_OPTIONS.map(score => (
                        <button
                          key={score}
                          onClick={() => {
                            const next = [...instructorScores];
                            next[idx] = score;
                            setInstructorScores(next);
                          }}
                          style={{
                            width: 40, height: 36, fontSize: 14, fontWeight: 600,
                            border: `1px solid ${instructorScores[idx] === score ? 'var(--primary-blue)' : 'var(--border-light)'}`,
                            borderRadius: 8,
                            background: instructorScores[idx] === score ? 'var(--primary-blue)' : 'var(--bg-white)',
                            color: instructorScores[idx] === score ? '#fff' : 'var(--text-secondary)',
                            cursor: 'pointer', fontFamily: 'inherit'
                          }}
                        >
                          {score}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Score */}
                <div style={{
                  marginTop: 24, padding: 20, borderRadius: 12,
                  background: 'var(--bg-light-gray)', textAlign: 'center'
                }}>
                  <div style={{ fontSize: 14, color: 'var(--text-light)', marginBottom: 8 }}>
                    {isKo ? '교수자 역량 점수' : 'Instructor Competency Score'}
                  </div>
                  <div style={{ fontSize: 36, fontWeight: 800, color: getLevel(instructorScore, 30).color }}>
                    {instructorScore}/30
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: getLevel(instructorScore, 30).color, marginTop: 4 }}>
                    {isKo ? getLevel(instructorScore, 30).ko : getLevel(instructorScore, 30).en}
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--text-light)', marginTop: 12 }}>
                    {isKo
                      ? '0=미흡, 1=부분적, 2=대체로, 3=완벽히 수행'
                      : '0=Insufficient, 1=Partial, 2=Mostly, 3=Fully implemented'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Learning Materials */}
          {activeSection === 'materials' && (
            <div className="ck-content-box">
              <div className="ck-content-header ck-ch--orange">
                <i className="fa-solid fa-bookmark" />
                <div className="ck-ch-text">
                  <h2>{isKo ? 'AI 학습 자료 & 도구' : 'AI Learning Materials & Tools'}</h2>
                  <p>{isKo ? 'AI 역량을 키울 수 있는 도구와 자료를 소개합니다' : 'Tools and resources to build your AI competency'}</p>
                </div>
              </div>
              <div className="ck-content-body">
                <h3 className="theory-h3">{isKo ? 'AI 도구 바로가기' : 'AI Tool Quick Links'}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16, marginTop: 12 }}>
                  {AI_TOOLS.map((tool, idx) => (
                    <a
                      key={idx}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ck-ov-card"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <div style={{
                        width: 40, height: 40, borderRadius: 10,
                        background: `${tool.color}15`, display: 'flex',
                        alignItems: 'center', justifyContent: 'center', flexShrink: 0
                      }}>
                        <i className={`fa-solid ${tool.icon}`} style={{ color: tool.color, fontSize: 16 }} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-primary)', marginBottom: 2 }}>
                          {tool.name}
                        </div>
                        <div style={{ fontSize: 12, color: 'var(--text-light)' }}>
                          {isKo ? tool.desc.ko : tool.desc.en}
                        </div>
                      </div>
                      <i className="fa-solid fa-external-link-alt" style={{ fontSize: 11, color: 'var(--text-light)', marginLeft: 'auto' }} />
                    </a>
                  ))}
                </div>

                <h3 className="theory-h3" style={{ marginTop: 28 }}>{isKo ? '결과 해석 가이드' : 'Results Interpretation Guide'}</h3>
                <div className="theory-table-wrap">
                  <table className="theory-table">
                    <thead>
                      <tr>
                        <th>{isKo ? '구분' : 'Section'}</th>
                        <th>{isKo ? '총점' : 'Total'}</th>
                        <th>{isKo ? '우수' : 'Excellent'}</th>
                        <th>{isKo ? '양호' : 'Good'}</th>
                        <th>{isKo ? '보통' : 'Average'}</th>
                        <th>{isKo ? '노력 필요' : 'Needs Work'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{isKo ? '공통 체크포인트' : 'Common'}</td>
                        <td>10</td>
                        <td>8~10</td>
                        <td>6~7</td>
                        <td>4~5</td>
                        <td>0~3</td>
                      </tr>
                      <tr>
                        <td>{isKo ? '학습자 자기 진단' : 'Student'}</td>
                        <td>20</td>
                        <td>16~20</td>
                        <td>12~15</td>
                        <td>8~11</td>
                        <td>0~7</td>
                      </tr>
                      <tr>
                        <td>{isKo ? '교수자 체크리스트' : 'Instructor'}</td>
                        <td>30</td>
                        <td>24~30</td>
                        <td>18~23</td>
                        <td>12~17</td>
                        <td>0~11</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <blockquote className="theory-blockquote">
                  {isKo
                    ? '체크리스트는 현재 역량을 파악하기 위한 도구입니다. 점수가 낮은 항목을 중심으로 학습 계획을 세우고, OpenClaw의 학습 자료와 AI 도구를 활용하여 역량을 키워보세요.'
                    : 'This checklist is a tool for assessing current competency. Focus your learning plan on low-scoring items, and use OpenClaw\'s resources and AI tools to build your skills.'}
                </blockquote>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
