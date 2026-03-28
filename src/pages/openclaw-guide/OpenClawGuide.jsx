import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const SECTIONS = [
  { id: 'overview', icon: 'fa-eye', ko: '강의 개요', en: 'Course Overview' },
  { id: 'architecture', icon: 'fa-sitemap', ko: '시스템 구조', en: 'Architecture' },
  { id: 'install', icon: 'fa-download', ko: '설치와 실행', en: 'Installation' },
  { id: 'onboarding', icon: 'fa-play-circle', ko: '온보딩', en: 'Onboarding' },
  { id: 'channels', icon: 'fa-comments', ko: '채널 연결', en: 'Channels' },
  { id: 'models', icon: 'fa-brain', ko: '모델과 도구', en: 'Models & Tools' },
  { id: 'security', icon: 'fa-shield-halved', ko: '보안과 권한', en: 'Security' },
  { id: 'operations', icon: 'fa-wrench', ko: '운영과 점검', en: 'Operations' },
];

/* ── Shared inline styles ── */
const codeBlockStyle = {
  background: '#F5F7FA',
  borderRadius: 8,
  padding: 16,
  fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
  fontSize: 13,
  lineHeight: 1.7,
  overflowX: 'auto',
  border: '1px solid #E2E8F0',
  color: '#1A202C',
  whiteSpace: 'pre',
};

const tipBoxStyle = {
  borderLeft: '4px solid #3B82F6',
  background: '#EFF6FF',
  padding: '14px 18px',
  borderRadius: '0 8px 8px 0',
  marginTop: 16,
  marginBottom: 16,
  fontSize: 14,
  lineHeight: 1.7,
  color: '#1E40AF',
};

const warningBoxStyle = {
  borderLeft: '4px solid #EF4444',
  background: '#FEF2F2',
  padding: '14px 18px',
  borderRadius: '0 8px 8px 0',
  marginTop: 16,
  marginBottom: 16,
  fontSize: 14,
  lineHeight: 1.7,
  color: '#991B1B',
};

const importantBoxStyle = {
  borderLeft: '4px solid #F59E0B',
  background: '#FFFBEB',
  padding: '14px 18px',
  borderRadius: '0 8px 8px 0',
  marginTop: 16,
  marginBottom: 16,
  fontSize: 14,
  lineHeight: 1.7,
  color: '#92400E',
};

const cardGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: 16,
  marginTop: 16,
  marginBottom: 16,
};

const cardStyle = {
  border: '1px solid #E2E8F0',
  borderRadius: 12,
  padding: 20,
  background: '#FFFFFF',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: 16,
  marginBottom: 16,
  fontSize: 14,
};

const thStyle = {
  background: '#F1F5F9',
  padding: '10px 14px',
  textAlign: 'left',
  fontWeight: 600,
  borderBottom: '2px solid #CBD5E1',
  fontSize: 13,
};

const tdStyle = {
  padding: '10px 14px',
  borderBottom: '1px solid #E2E8F0',
  fontSize: 13,
  lineHeight: 1.6,
};

const checkItemStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 10,
  padding: '8px 0',
  fontSize: 14,
  lineHeight: 1.7,
};

const externalLinkStyle = {
  color: '#2563EB',
  textDecoration: 'none',
  fontWeight: 500,
};

export default function OpenClawGuide() {
  const { language } = useLanguage();
  const isKo = language === 'ko';
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="ck-page">
      <SEOHead
        title={isKo ? 'OpenClaw 설치와 활용 실무 가이드' : 'OpenClaw Practical Installation & Usage Guide'}
        description={isKo ? 'OpenClaw 개인 AI 비서 플랫폼 구축부터 보안 운영까지 7시간 집중 과정' : 'From building your OpenClaw personal AI assistant platform to secure operations - 7-hour intensive course'}
        path="/openclaw-guide"
      />

      <button className="ck-mobile-toggle" onClick={() => {}}>
        <i className="fa-solid fa-bars" />
        <span>{isKo ? '메뉴' : 'Menu'}</span>
      </button>

      <div className="ck-layout">
        {/* ───── Sidebar ───── */}
        <aside className="ck-sidebar">
          <div className="ck-sb-header">
            <span>{isKo ? 'OpenClaw 가이드' : 'OpenClaw Guide'}</span>
          </div>
          <nav className="ck-sb-nav">
            {SECTIONS.map(sec => (
              <button
                key={sec.id}
                className={`ck-nav-child ${activeSection === sec.id ? 'active' : ''}`}
                onClick={() => setActiveSection(sec.id)}
              >
                <span>{isKo ? sec.ko : sec.en}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* ───── Main Content ───── */}
        <div className="ck-main">
          <div className="ck-breadcrumb">
            <span className="current">{isKo ? 'OpenClaw 가이드' : 'OpenClaw Guide'}</span>
            <span className="ck-bc-sep"><i className="fa-solid fa-chevron-right" /></span>
            <span className="current">
              {isKo
                ? SECTIONS.find(s => s.id === activeSection)?.ko
                : SECTIONS.find(s => s.id === activeSection)?.en}
            </span>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              Section 1: Overview
             ════════════════════════════════════════════════════════════════ */}
          {activeSection === 'overview' && (
            <div className="ck-content-box">
              <div className="ck-content-header ck-ch--blue">
                <i className="fa-solid fa-eye" />
                <div className="ck-ch-text">
                  <h2>{isKo ? 'OpenClaw 설치와 활용 실무' : 'OpenClaw Practical Installation & Usage'}</h2>
                  <p>{isKo
                    ? '개인 AI 비서 구축부터 보안·운영까지 - 7시간 집중 과정'
                    : 'From personal AI assistant setup to security & operations - 7-hour intensive course'}</p>
                </div>
              </div>
              <div className="ck-content-body">
                {/* Course Description */}
                <h3 className="theory-h3">{isKo ? '과정 소개' : 'Course Description'}</h3>
                <p className="theory-p">
                  {isKo
                    ? 'OpenClaw는 단순 챗봇이 아니라 Gateway 중심의 self-hosted 개인 AI assistant 플랫폼입니다. 이 과정은 개념 30% + 실습 70%로 구성되어, 직접 설치하고 운용할 수 있는 역량을 갖추는 것을 목표로 합니다.'
                    : 'OpenClaw is not a simple chatbot but a Gateway-centric self-hosted personal AI assistant platform. This course is structured as 30% concepts + 70% hands-on practice, aiming to build competency in direct installation and operation.'}
                </p>

                {/* Target Audience Cards */}
                <h3 className="theory-h3">{isKo ? '대상 수강자' : 'Target Audience'}</h3>
                <div style={cardGridStyle}>
                  <div style={{ ...cardStyle, borderTop: '3px solid #3B82F6' }}>
                    <div style={{ fontSize: 24, marginBottom: 8 }}><i className="fa-solid fa-code" style={{ color: '#3B82F6' }} /></div>
                    <h4 style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 700 }}>
                      {isKo ? '개발자 / AI 실무자' : 'Developers / AI Practitioners'}
                    </h4>
                    <p style={{ fontSize: 13, color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                      {isKo
                        ? 'CLI와 API에 익숙하며, AI 에이전트를 직접 구축·운영하려는 실무 개발자'
                        : 'Hands-on developers familiar with CLI and APIs who want to build and operate AI agents'}
                    </p>
                  </div>
                  <div style={{ ...cardStyle, borderTop: '3px solid #10B981' }}>
                    <div style={{ fontSize: 24, marginBottom: 8 }}><i className="fa-solid fa-graduation-cap" style={{ color: '#10B981' }} /></div>
                    <h4 style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 700 }}>
                      {isKo ? '자동화 관심 강사·연구자' : 'Automation-Interested Educators & Researchers'}
                    </h4>
                    <p style={{ fontSize: 13, color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                      {isKo
                        ? 'AI를 연구·교육 환경에 통합하고 자동화 워크플로를 구축하려는 분'
                        : 'Those integrating AI into research/education environments and building automation workflows'}
                    </p>
                  </div>
                  <div style={{ ...cardStyle, borderTop: '3px solid #8B5CF6' }}>
                    <div style={{ fontSize: 24, marginBottom: 8 }}><i className="fa-solid fa-lightbulb" style={{ color: '#8B5CF6' }} /></div>
                    <h4 style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 700 }}>
                      {isKo ? 'AI 활용 기획자' : 'AI Strategy Planners'}
                    </h4>
                    <p style={{ fontSize: 13, color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                      {isKo
                        ? 'self-hosted AI 플랫폼의 기획·도입을 검토하는 기획자 및 의사결정자'
                        : 'Planners and decision-makers evaluating adoption of self-hosted AI platforms'}
                    </p>
                  </div>
                </div>

                {/* Learning Objectives */}
                <h3 className="theory-h3">{isKo ? '학습 목표' : 'Learning Objectives'}</h3>
                <div style={{ background: '#F8FAFC', borderRadius: 12, padding: 20, marginBottom: 16 }}>
                  {[
                    { ko: 'OpenClaw의 구조와 작동 원리를 설명할 수 있다', en: 'Explain the architecture and operating principles of OpenClaw' },
                    { ko: '자신의 PC 또는 서버에 설치하고 온보딩할 수 있다', en: 'Install and onboard on your own PC or server' },
                    { ko: 'Telegram 또는 WhatsApp 채널을 연결해 에이전트를 운용할 수 있다', en: 'Connect Telegram or WhatsApp channels and operate agents' },
                    { ko: '모델, 도구, 스킬, 플러그인 개념을 구분하고 설정할 수 있다', en: 'Distinguish and configure models, tools, skills, and plugins' },
                    { ko: '보안 위험, 권한 통제, 운영 점검 방법을 적용할 수 있다', en: 'Apply security risk management, access control, and operational checks' },
                    { ko: '장애 진단과 상태 확인을 수행할 수 있다', en: 'Perform failure diagnosis and status verification' },
                  ].map((obj, idx) => (
                    <div key={idx} style={checkItemStyle}>
                      <i className="fa-solid fa-check-circle" style={{ color: '#10B981', marginTop: 3, flexShrink: 0 }} />
                      <span><strong style={{ color: '#3B82F6', marginRight: 6 }}>{idx + 1}.</strong>{isKo ? obj.ko : obj.en}</span>
                    </div>
                  ))}
                </div>

                {/* Prerequisites */}
                <h3 className="theory-h3">{isKo ? '사전 요구사항' : 'Prerequisites'}</h3>
                <div style={importantBoxStyle}>
                  <strong><i className="fa-solid fa-triangle-exclamation" style={{ marginRight: 6 }} />{isKo ? '필수 준비물' : 'Required'}</strong>
                  <ul className="theory-list" style={{ marginTop: 8, marginBottom: 0 }}>
                    <li>Node.js 22.14+ ({isKo ? '권장' : 'recommended'} Node 24)</li>
                    <li>macOS / Linux / Windows (WSL2)</li>
                    <li>{isKo ? '모델 API 키 1개 이상 (Anthropic, OpenAI, Google 등)' : 'At least one model API key (Anthropic, OpenAI, Google, etc.)'}</li>
                  </ul>
                </div>

                {/* Useful Links */}
                <h3 className="theory-h3">{isKo ? '유용한 링크' : 'Useful Links'}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <i className="fa-solid fa-globe" style={{ color: '#3B82F6', width: 18 }} />
                    <span style={{ fontSize: 14 }}>{isKo ? 'OpenClaw 공식 사이트: ' : 'OpenClaw Official Site: '}</span>
                    <a href="https://openclaw.ai/" target="_blank" rel="noopener noreferrer" style={externalLinkStyle}>
                      https://openclaw.ai/ <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: 11 }} />
                    </a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <i className="fa-solid fa-book" style={{ color: '#3B82F6', width: 18 }} />
                    <span style={{ fontSize: 14 }}>{isKo ? '공식 문서: ' : 'Official Docs: '}</span>
                    <a href="https://docs.openclaw.ai/" target="_blank" rel="noopener noreferrer" style={externalLinkStyle}>
                      https://docs.openclaw.ai/ <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: 11 }} />
                    </a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <i className="fa-brands fa-github" style={{ color: '#3B82F6', width: 18 }} />
                    <span style={{ fontSize: 14 }}>GitHub: </span>
                    <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer" style={externalLinkStyle}>
                      https://github.com/openclaw/openclaw <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: 11 }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════════
              Section 2: Architecture
             ════════════════════════════════════════════════════════════════ */}
          {activeSection === 'architecture' && (
            <div className="ck-content-box">
              <div className="ck-content-header ck-ch--green">
                <i className="fa-solid fa-sitemap" />
                <div className="ck-ch-text">
                  <h2>{isKo ? 'OpenClaw 시스템 구조' : 'OpenClaw System Architecture'}</h2>
                  <p>{isKo ? 'Gateway 중심 아키텍처 이해' : 'Understanding the Gateway-Centric Architecture'}</p>
                </div>
              </div>
              <div className="ck-content-body">
                {/* Key Concept */}
                <h3 className="theory-h3">{isKo ? '핵심 개념' : 'Key Concept'}</h3>
                <div style={{ ...tipBoxStyle, borderLeftColor: '#10B981', background: '#ECFDF5', color: '#065F46' }}>
                  <strong style={{ fontSize: 15 }}>
                    {isKo
                      ? 'OpenClaw = "하나의 Gateway를 중심으로 여러 채널과 에이전트를 연결하는 운영 플랫폼"'
                      : 'OpenClaw = "An operational platform connecting multiple channels and agents around a single Gateway"'}
                  </strong>
                </div>

                {/* 3-Layer Architecture */}
                <h3 className="theory-h3">{isKo ? '3계층 아키텍처' : '3-Layer Architecture'}</h3>
                <div style={cardGridStyle}>
                  <div style={{ ...cardStyle, borderLeft: '4px solid #3B82F6' }}>
                    <h4 style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 700, color: '#3B82F6' }}>
                      <i className="fa-solid fa-gear" style={{ marginRight: 8 }} />
                      Tools ({isKo ? '실행 계층' : 'Execution Layer'})
                    </h4>
                    <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.7, margin: 0 }}>
                      {isKo
                        ? '파일 읽기/쓰기, 명령 실행, 웹 탐색, 메시지 전송 등 실제 행동 단위. 에이전트가 세상과 상호작용하는 손과 발에 해당합니다.'
                        : 'Actual action units such as file read/write, command execution, web browsing, and message sending. The hands and feet through which agents interact with the world.'}
                    </p>
                  </div>
                  <div style={{ ...cardStyle, borderLeft: '4px solid #10B981' }}>
                    <h4 style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 700, color: '#10B981' }}>
                      <i className="fa-solid fa-scroll" style={{ marginRight: 8 }} />
                      Skills ({isKo ? '지침 계층' : 'Instruction Layer'})
                    </h4>
                    <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.7, margin: 0 }}>
                      {isKo
                        ? 'SKILL.md 형태의 지침으로 도구를 언제·어떻게 쓸지 정의합니다. 같은 도구라도 skill이 다르면 에이전트의 행동이 달라집니다.'
                        : 'Instructions in SKILL.md format that define when and how to use tools. The same tools produce different agent behavior with different skills.'}
                    </p>
                  </div>
                  <div style={{ ...cardStyle, borderLeft: '4px solid #8B5CF6' }}>
                    <h4 style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 700, color: '#8B5CF6' }}>
                      <i className="fa-solid fa-puzzle-piece" style={{ marginRight: 8 }} />
                      Plugins ({isKo ? '확장 계층' : 'Extension Layer'})
                    </h4>
                    <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.7, margin: 0 }}>
                      {isKo
                        ? 'Tools와 Skills를 패키징해 기능을 확장합니다. 채널 연결, 외부 서비스 통합 등 재사용 가능한 확장 단위입니다.'
                        : 'Packages tools and skills to extend functionality. Reusable extension units for channel connections, external service integrations, etc.'}
                    </p>
                  </div>
                </div>

                {/* Gateway Components */}
                <h3 className="theory-h3">{isKo ? 'Gateway 구성 요소' : 'Gateway Components'}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 16 }}>
                  {['Channels', 'Nodes', 'Clients', 'WebChat', 'CLI', 'Dashboard'].map(comp => (
                    <span key={comp} style={{
                      background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 20,
                      padding: '6px 16px', fontSize: 13, fontWeight: 600, color: '#166534'
                    }}>
                      {comp}
                    </span>
                  ))}
                </div>

                {/* Comparison Table */}
                <h3 className="theory-h3">{isKo ? '일반 챗봇 vs OpenClaw 비교' : 'Regular Chatbot vs OpenClaw'}</h3>
                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead>
                      <tr>
                        <th style={thStyle}>{isKo ? '항목' : 'Category'}</th>
                        <th style={thStyle}>{isKo ? '일반 챗봇' : 'Regular Chatbot'}</th>
                        <th style={thStyle}>OpenClaw</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { ko: ['실행 위치', '클라우드 SaaS', 'Self-hosted (로컬/서버)'], en: ['Execution Location', 'Cloud SaaS', 'Self-hosted (local/server)'] },
                        { ko: ['채널 수', '단일 웹 UI', '다중 채널 동시 운용'], en: ['Channels', 'Single web UI', 'Multi-channel simultaneous operation'] },
                        { ko: ['도구 연결', '제한적 플러그인', '파일·명령·웹·메시지 전체'], en: ['Tool Connection', 'Limited plugins', 'Full file/command/web/message access'] },
                        { ko: ['운영 통제', '제공자 정책 의존', 'Gateway 수준 직접 통제'], en: ['Operational Control', 'Provider policy dependent', 'Direct Gateway-level control'] },
                        { ko: ['보안 경계', '제공자 관리', '사용자 직접 설정'], en: ['Security Boundary', 'Provider managed', 'User-configured'] },
                        { ko: ['확장성', '제공자 API 한계', 'Plugin + Skill 무제한 확장'], en: ['Extensibility', 'Provider API limits', 'Unlimited Plugin + Skill extension'] },
                      ].map((row, idx) => (
                        <tr key={idx}>
                          <td style={{ ...tdStyle, fontWeight: 600 }}>{isKo ? row.ko[0] : row.en[0]}</td>
                          <td style={tdStyle}>{isKo ? row.ko[1] : row.en[1]}</td>
                          <td style={{ ...tdStyle, color: '#059669', fontWeight: 500 }}>{isKo ? row.ko[2] : row.en[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Supported Channels */}
                <h3 className="theory-h3">{isKo ? '지원 채널' : 'Supported Channels'}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
                  {['Telegram', 'WhatsApp', 'Slack', 'Discord', 'Signal', 'iMessage', 'WebChat', 'LINE', 'Matrix', 'Teams'].map(ch => (
                    <span key={ch} style={{
                      background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 8,
                      padding: '6px 14px', fontSize: 13, fontWeight: 500, color: '#1E40AF'
                    }}>
                      <i className="fa-solid fa-check" style={{ marginRight: 6, fontSize: 11 }} />{ch}
                    </span>
                  ))}
                </div>

                {/* Supported Model Providers */}
                <h3 className="theory-h3">{isKo ? '지원 모델 제공자' : 'Supported Model Providers'}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
                  {['Anthropic', 'OpenAI', 'Google', 'Ollama', 'vLLM', 'OpenRouter'].map(pr => (
                    <span key={pr} style={{
                      background: '#F5F3FF', border: '1px solid #DDD6FE', borderRadius: 8,
                      padding: '6px 14px', fontSize: 13, fontWeight: 500, color: '#5B21B6'
                    }}>
                      <i className="fa-solid fa-microchip" style={{ marginRight: 6, fontSize: 11 }} />{pr}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════════
              Section 3: Install
             ════════════════════════════════════════════════════════════════ */}
          {activeSection === 'install' && (
            <div className="ck-content-box">
              <div className="ck-content-header ck-ch--purple">
                <i className="fa-solid fa-download" />
                <div className="ck-ch-text">
                  <h2>{isKo ? '설치와 실행 환경 구축' : 'Installation & Environment Setup'}</h2>
                  <p>{isKo ? 'OS별 설치부터 첫 실행까지' : 'From OS-specific installation to first run'}</p>
                </div>
              </div>
              <div className="ck-content-body">
                {/* Requirements Table */}
                <h3 className="theory-h3">{isKo ? '시스템 요구사항' : 'System Requirements'}</h3>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>{isKo ? '항목' : 'Item'}</th>
                      <th style={thStyle}>{isKo ? '요구사항' : 'Requirement'}</th>
                      <th style={thStyle}>{isKo ? '비고' : 'Notes'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ ...tdStyle, fontWeight: 600 }}>OS</td>
                      <td style={tdStyle}>macOS / Linux / Windows WSL2</td>
                      <td style={tdStyle}>{isKo ? 'Windows 네이티브는 제한적' : 'Native Windows has limitations'}</td>
                    </tr>
                    <tr>
                      <td style={{ ...tdStyle, fontWeight: 600 }}>Node.js</td>
                      <td style={tdStyle}>22.14+</td>
                      <td style={tdStyle}>{isKo ? '권장 Node 24' : 'Node 24 recommended'}</td>
                    </tr>
                    <tr>
                      <td style={{ ...tdStyle, fontWeight: 600 }}>API Key</td>
                      <td style={tdStyle}>{isKo ? '1개 이상' : '1 or more'}</td>
                      <td style={tdStyle}>Anthropic, OpenAI, Google {isKo ? '등' : 'etc.'}</td>
                    </tr>
                  </tbody>
                </table>

                {/* Installation Methods */}
                <h3 className="theory-h3">{isKo ? '설치 방법 비교' : 'Installation Methods Comparison'}</h3>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>{isKo ? '방법' : 'Method'}</th>
                      <th style={thStyle}>{isKo ? '난이도' : 'Difficulty'}</th>
                      <th style={thStyle}>{isKo ? '설명' : 'Description'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { ko: ['Installer Script', '가장 쉬움', '한 줄 명령으로 설치+온보딩 자동 진행'], en: ['Installer Script', 'Easiest', 'One-line command for install + auto onboarding'] },
                      { ko: ['npm / pnpm', '쉬움', '패키지 매니저로 글로벌 설치'], en: ['npm / pnpm', 'Easy', 'Global install via package manager'] },
                      { ko: ['Source Build', '보통', '소스 클론 후 직접 빌드'], en: ['Source Build', 'Medium', 'Clone source and build manually'] },
                      { ko: ['Docker / Container', '보통', '컨테이너 기반 격리 실행'], en: ['Docker / Container', 'Medium', 'Container-based isolated execution'] },
                    ].map((row, idx) => (
                      <tr key={idx}>
                        <td style={{ ...tdStyle, fontWeight: 600 }}>{isKo ? row.ko[0] : row.en[0]}</td>
                        <td style={tdStyle}>
                          <span style={{
                            background: idx === 0 ? '#D1FAE5' : idx === 1 ? '#DBEAFE' : '#FEF3C7',
                            color: idx === 0 ? '#065F46' : idx === 1 ? '#1E40AF' : '#92400E',
                            padding: '2px 10px', borderRadius: 12, fontSize: 12, fontWeight: 600
                          }}>
                            {isKo ? row.ko[1] : row.en[1]}
                          </span>
                        </td>
                        <td style={tdStyle}>{isKo ? row.ko[2] : row.en[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Quick Install Commands */}
                <h3 className="theory-h3">{isKo ? '빠른 설치 명령어' : 'Quick Install Commands'}</h3>
                <pre style={codeBlockStyle}>{`# macOS / Linux / WSL2
curl -fsSL https://openclaw.ai/install.sh | bash

# Windows PowerShell
iwr -useb https://openclaw.ai/install.ps1 | iex

# ${isKo ? '온보딩 없이 설치만' : 'Install only without onboarding'}
curl -fsSL https://openclaw.ai/install.sh | bash -s -- --no-onboard`}</pre>

                {/* Verification */}
                <h3 className="theory-h3">{isKo ? '설치 확인' : 'Verification'}</h3>
                <pre style={codeBlockStyle}>{`node --version
openclaw --version
openclaw doctor
openclaw gateway status`}</pre>

                {/* Common Issues */}
                <h3 className="theory-h3">{isKo ? '자주 발생하는 설치 문제' : 'Common Installation Issues'}</h3>
                <ul className="theory-list">
                  <li><strong>PATH {isKo ? '문제' : 'issues'}:</strong> {isKo ? 'openclaw 바이너리가 PATH에 없으면 쉘 재시작 또는 수동 추가 필요' : 'Restart shell or manually add to PATH if openclaw binary is not found'}</li>
                  <li><strong>Node {isKo ? '버전 불일치' : 'version mismatch'}:</strong> {isKo ? 'nvm use 22 또는 nvm use 24로 올바른 버전 활성화' : 'Activate correct version with nvm use 22 or nvm use 24'}</li>
                  <li><strong>{isKo ? '권한 문제' : 'Permission issues'}:</strong> {isKo ? 'npm 글로벌 설치 시 sudo 필요 여부 확인, 또는 nvm 사용 권장' : 'Check if sudo is needed for npm global install, or use nvm instead'}</li>
                </ul>

                <div style={tipBoxStyle}>
                  <i className="fa-solid fa-lightbulb" style={{ marginRight: 8 }} />
                  <strong>Tip:</strong> {isKo
                    ? 'Windows는 네이티브보다 WSL2가 더 안정적입니다. WSL2 환경에서 설치를 강력히 권장합니다.'
                    : 'WSL2 is more stable than native Windows. Installation in a WSL2 environment is strongly recommended.'}
                </div>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════════
              Section 4: Onboarding
             ════════════════════════════════════════════════════════════════ */}
          {activeSection === 'onboarding' && (
            <div className="ck-content-box">
              <div className="ck-content-header ck-ch--orange">
                <i className="fa-solid fa-play-circle" />
                <div className="ck-ch-text">
                  <h2>{isKo ? '온보딩과 첫 실행' : 'Onboarding & First Run'}</h2>
                  <p>{isKo ? '초기 설정에서 첫 대화까지' : 'From initial setup to first conversation'}</p>
                </div>
              </div>
              <div className="ck-content-body">
                {/* What onboarding does */}
                <h3 className="theory-h3">{isKo ? '온보딩이란?' : 'What is Onboarding?'}</h3>
                <p className="theory-p">
                  {isKo
                    ? '온보딩은 모델 인증, 워크스페이스, Gateway, 채널, Daemon 설정을 한 흐름에서 처리하는 초기 설정 과정입니다. 처음 설치 후 한 번만 실행하면 기본 환경이 갖추어집니다.'
                    : 'Onboarding is an initial setup process that handles model authentication, workspace, Gateway, channels, and Daemon configuration in a single flow. Run once after first install to set up the basic environment.'}
                </p>

                {/* QuickStart vs Advanced */}
                <h3 className="theory-h3">QuickStart vs Advanced</h3>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>{isKo ? '항목' : 'Item'}</th>
                      <th style={thStyle}>QuickStart</th>
                      <th style={thStyle}>Advanced</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { ko: ['질문 수', '최소 (3~5개)', '상세 (10개 이상)'], en: ['Questions', 'Minimal (3-5)', 'Detailed (10+)'] },
                      { ko: ['자동 설정', '대부분 자동', '사용자 선택'], en: ['Auto Config', 'Mostly automatic', 'User choice'] },
                      { ko: ['포트 선택', '기본값 사용', '직접 지정 가능'], en: ['Port Selection', 'Uses defaults', 'Manual specification'] },
                      { ko: ['인증 조정', '기본 인증', '세부 조정 가능'], en: ['Auth Adjustment', 'Default auth', 'Fine-tunable'] },
                      { ko: ['초보자 적합성', '매우 높음', '보통'], en: ['Beginner Friendly', 'Very high', 'Moderate'] },
                    ].map((row, idx) => (
                      <tr key={idx}>
                        <td style={{ ...tdStyle, fontWeight: 600 }}>{isKo ? row.ko[0] : row.en[0]}</td>
                        <td style={tdStyle}>{isKo ? row.ko[1] : row.en[1]}</td>
                        <td style={tdStyle}>{isKo ? row.ko[2] : row.en[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Key Commands */}
                <h3 className="theory-h3">{isKo ? '주요 명령어' : 'Key Commands'}</h3>
                <pre style={codeBlockStyle}>{`openclaw onboard --install-daemon
openclaw gateway status
openclaw dashboard
openclaw configure`}</pre>

                {/* Onboarding Items */}
                <h3 className="theory-h3">{isKo ? '온보딩 설정 항목' : 'Onboarding Configuration Items'}</h3>
                <ul className="theory-list">
                  <li><strong>Gateway {isKo ? '위치' : 'location'}:</strong> {isKo ? '로컬 또는 원격 서버에서 실행할 위치 결정' : 'Determine where to run - local or remote server'}</li>
                  <li><strong>{isKo ? '인증 방식' : 'Authentication'}:</strong> {isKo ? 'API 키 기반 인증 설정 및 보안 수준 결정' : 'API key-based auth setup and security level determination'}</li>
                  <li><strong>{isKo ? '포트/바인드' : 'Port/Bind'}:</strong> {isKo ? 'Gateway가 수신할 포트와 바인드 주소 설정' : 'Set Gateway listening port and bind address'}</li>
                  <li><strong>{isKo ? '모델 제공자' : 'Model Provider'}:</strong> {isKo ? '사용할 AI 모델 제공자와 API 키 등록' : 'Register AI model provider and API key'}</li>
                  <li><strong>{isKo ? '채널 연결' : 'Channel Connection'}:</strong> {isKo ? '초기 채널 (Telegram, WhatsApp 등) 연결 설정' : 'Initial channel (Telegram, WhatsApp, etc.) connection setup'}</li>
                  <li><strong>{isKo ? '워크스페이스 기본값' : 'Workspace Defaults'}:</strong> {isKo ? '기본 워크스페이스 디렉터리 및 설정 지정' : 'Default workspace directory and settings'}</li>
                </ul>

                {/* First Success Checklist */}
                <h3 className="theory-h3">{isKo ? '첫 실행 성공 체크리스트' : 'First Run Success Checklist'}</h3>
                <div style={{ background: '#F0FDF4', borderRadius: 12, padding: 20, marginBottom: 16 }}>
                  {[
                    { ko: '설치 성공 (openclaw --version 확인)', en: 'Installation success (verify openclaw --version)' },
                    { ko: 'Dashboard 접속 (openclaw dashboard)', en: 'Dashboard access (openclaw dashboard)' },
                    { ko: '모델 연결 (openclaw models status)', en: 'Model connection (openclaw models status)' },
                    { ko: 'Gateway status 정상', en: 'Gateway status is healthy' },
                    { ko: '첫 대화 성공', en: 'First conversation success' },
                  ].map((item, idx) => (
                    <div key={idx} style={checkItemStyle}>
                      <i className="fa-regular fa-square-check" style={{ color: '#10B981', marginTop: 3, flexShrink: 0 }} />
                      <span>{isKo ? item.ko : item.en}</span>
                    </div>
                  ))}
                </div>

                <div style={tipBoxStyle}>
                  <i className="fa-solid fa-lightbulb" style={{ marginRight: 8 }} />
                  <strong>Tip:</strong> {isKo
                    ? '가장 빠른 첫 대화는 채널 연결 없이 openclaw dashboard로 Control UI에서 시작하는 것입니다.'
                    : 'The fastest first conversation is starting from the Control UI via openclaw dashboard without connecting any channels.'}
                </div>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════════
              Section 5: Channels
             ════════════════════════════════════════════════════════════════ */}
          {activeSection === 'channels' && (
            <div className="ck-content-box">
              <div className="ck-content-header ck-ch--blue">
                <i className="fa-solid fa-comments" />
                <div className="ck-ch-text">
                  <h2>{isKo ? '채널 연결 실습' : 'Channel Connection Practice'}</h2>
                  <p>{isKo ? 'Telegram · WhatsApp · 멀티채널 운용' : 'Telegram · WhatsApp · Multi-channel Operation'}</p>
                </div>
              </div>
              <div className="ck-content-body">
                {/* Why Channels */}
                <h3 className="theory-h3">{isKo ? '채널의 핵심 가치' : 'Core Value of Channels'}</h3>
                <div style={{ ...tipBoxStyle, borderLeftColor: '#3B82F6' }}>
                  <strong>
                    {isKo
                      ? '"어디서든 같은 assistant를 호출"하는 것이 채널 연결의 핵심 가치입니다. 하나의 Gateway에 여러 채널을 연결하면 Telegram, WhatsApp, Slack 등 어디서든 동일한 에이전트와 대화할 수 있습니다.'
                      : '"Calling the same assistant from anywhere" is the core value of channel connections. Connecting multiple channels to a single Gateway lets you talk to the same agent from Telegram, WhatsApp, Slack, and more.'}
                  </strong>
                </div>

                {/* Telegram Setup */}
                <h3 className="theory-h3">Telegram {isKo ? '설정' : 'Setup'}</h3>
                <p className="theory-p" style={{ marginBottom: 8 }}>
                  {isKo ? 'Telegram 봇을 연결하는 단계:' : 'Steps to connect a Telegram bot:'}
                </p>
                <ol className="theory-list">
                  <li>{isKo ? 'BotFather에서 봇 토큰 생성' : 'Generate bot token from BotFather'}</li>
                  <li><code>channels.telegram.botToken</code> {isKo ? '설정' : 'configuration'}</li>
                  <li>Gateway {isKo ? '시작' : 'start'}</li>
                  <li>Pairing {isKo ? '승인' : 'approval'}</li>
                </ol>
                <pre style={codeBlockStyle}>{`openclaw gateway
openclaw pairing list telegram
openclaw pairing approve telegram <CODE>`}</pre>

                {/* WhatsApp Setup */}
                <h3 className="theory-h3">WhatsApp {isKo ? '설정' : 'Setup'}</h3>
                <p className="theory-p" style={{ marginBottom: 8 }}>
                  {isKo ? 'WhatsApp 채널을 연결하는 단계:' : 'Steps to connect a WhatsApp channel:'}
                </p>
                <ol className="theory-list">
                  <li>QR {isKo ? '로그인' : 'login'}</li>
                  <li>Gateway {isKo ? '시작' : 'start'}</li>
                  <li>Pairing {isKo ? '승인' : 'approval'}</li>
                </ol>
                <pre style={codeBlockStyle}>{`openclaw channels login --channel whatsapp
openclaw gateway
openclaw pairing list whatsapp
openclaw pairing approve whatsapp <CODE>`}</pre>

                {/* Important Callout */}
                <div style={importantBoxStyle}>
                  <i className="fa-solid fa-triangle-exclamation" style={{ marginRight: 8 }} />
                  <strong>{isKo ? '주의:' : 'Important:'}</strong>{' '}
                  {isKo
                    ? 'WhatsApp은 별도 봇이 아니라 자신의 번호 기반으로 작동합니다. 개인 번호와 분리하여 전용 번호로 운영하는 것을 권장합니다.'
                    : 'WhatsApp operates based on your own number, not a separate bot. It is recommended to use a dedicated number separate from your personal one.'}
                </div>

                {/* Group Message Policy */}
                <h3 className="theory-h3">{isKo ? '그룹 메시지 정책' : 'Group Message Policy'}</h3>
                <p className="theory-p">
                  {isKo
                    ? '그룹 채팅에서는 mention 기반 호출을 권장합니다. allowlist와 groupPolicy 설정을 이해하고, 봇이 불필요하게 모든 메시지에 반응하지 않도록 구성하세요.'
                    : 'Mention-based invocation is recommended in group chats. Understand the allowlist and groupPolicy settings to prevent the bot from unnecessarily responding to all messages.'}
                </p>

                {/* Channel Verification */}
                <h3 className="theory-h3">{isKo ? '채널 연결 확인 체크리스트' : 'Channel Verification Checklist'}</h3>
                <div style={{ background: '#EFF6FF', borderRadius: 12, padding: 20 }}>
                  {[
                    { ko: '로그인 성공', en: 'Login success' },
                    { ko: 'Pairing 승인 완료', en: 'Pairing approval complete' },
                    { ko: 'DM 응답 확인', en: 'DM response verified' },
                    { ko: '그룹 mention 응답 확인', en: 'Group mention response verified' },
                  ].map((item, idx) => (
                    <div key={idx} style={checkItemStyle}>
                      <i className="fa-regular fa-circle-check" style={{ color: '#3B82F6', marginTop: 3, flexShrink: 0 }} />
                      <span>{isKo ? item.ko : item.en}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════════
              Section 6: Models & Tools
             ════════════════════════════════════════════════════════════════ */}
          {activeSection === 'models' && (
            <div className="ck-content-box">
              <div className="ck-content-header ck-ch--green">
                <i className="fa-solid fa-brain" />
                <div className="ck-ch-text">
                  <h2>{isKo ? '모델, 도구, 스킬, 플러그인' : 'Models, Tools, Skills, Plugins'}</h2>
                  <p>{isKo ? '설계 가능한 에이전트 플랫폼 이해' : 'Understanding the Designable Agent Platform'}</p>
                </div>
              </div>
              <div className="ck-content-body">
                {/* Model Providers */}
                <h3 className="theory-h3">{isKo ? '모델 제공자 개요' : 'Model Provider Overview'}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 16 }}>
                  {[
                    { name: 'Anthropic', color: '#D4A574' },
                    { name: 'OpenAI', color: '#10A37F' },
                    { name: 'Google', color: '#4285F4' },
                    { name: 'Ollama', color: '#1A1A1A' },
                    { name: 'vLLM', color: '#FF6B35' },
                    { name: 'OpenRouter', color: '#6366F1' },
                  ].map(pr => (
                    <span key={pr.name} style={{
                      background: '#FFFFFF', border: `2px solid ${pr.color}`, borderRadius: 10,
                      padding: '8px 16px', fontSize: 13, fontWeight: 600, color: pr.color
                    }}>
                      {pr.name}
                    </span>
                  ))}
                </div>

                {/* Model Configuration */}
                <h3 className="theory-h3">{isKo ? '모델 설정' : 'Model Configuration'}</h3>
                <p className="theory-p">
                  {isKo
                    ? '모델은 provider/model 형식으로 지정합니다. 예: '
                    : 'Models are specified in provider/model format. Example: '}
                  <code style={{ background: '#F1F5F9', padding: '2px 8px', borderRadius: 4, fontSize: 13, fontWeight: 600 }}>
                    anthropic/claude-opus-4-6
                  </code>
                </p>

                {/* Model Commands */}
                <h3 className="theory-h3">{isKo ? '모델 관련 명령어' : 'Model Commands'}</h3>
                <pre style={codeBlockStyle}>{`openclaw models list
openclaw models status
openclaw models set anthropic/claude-opus-4-6
openclaw models status --probe`}</pre>

                {/* Tool Profiles Table */}
                <h3 className="theory-h3">{isKo ? '도구 프로필' : 'Tool Profiles'}</h3>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>{isKo ? '프로필' : 'Profile'}</th>
                      <th style={thStyle}>{isKo ? '허용 범위' : 'Allowed Scope'}</th>
                      <th style={thStyle}>{isKo ? '적합한 용도' : 'Best For'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { ko: ['full', '모든 도구 허용 (파일, 명령, 웹, 메시지)', '개발 및 전체 자동화'], en: ['full', 'All tools allowed (file, command, web, message)', 'Development & full automation'] },
                      { ko: ['coding', '파일 조작, 명령 실행 중심', '코드 작성·디버깅'], en: ['coding', 'File manipulation, command execution focused', 'Code writing & debugging'] },
                      { ko: ['messaging', '메시지 전송, 채널 관리 중심', '메신저 봇 운영'], en: ['messaging', 'Message sending, channel management focused', 'Messenger bot operations'] },
                      { ko: ['minimal', '읽기 전용, 실행 제한', '안전한 조회·질의'], en: ['minimal', 'Read-only, execution restricted', 'Safe queries & inquiries'] },
                    ].map((row, idx) => (
                      <tr key={idx}>
                        <td style={{ ...tdStyle, fontWeight: 700, fontFamily: 'monospace' }}>{isKo ? row.ko[0] : row.en[0]}</td>
                        <td style={tdStyle}>{isKo ? row.ko[1] : row.en[1]}</td>
                        <td style={tdStyle}>{isKo ? row.ko[2] : row.en[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Tools vs Skills vs Plugins */}
                <h3 className="theory-h3">Tools vs Skills vs Plugins</h3>
                <div style={cardGridStyle}>
                  <div style={{ ...cardStyle, borderTop: '3px solid #3B82F6' }}>
                    <h4 style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 700, color: '#3B82F6' }}>
                      <i className="fa-solid fa-wrench" style={{ marginRight: 8 }} />Tools
                    </h4>
                    <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.7, margin: '0 0 8px' }}>
                      {isKo ? '실행 함수' : 'Execution Functions'}
                    </p>
                    <ul style={{ fontSize: 13, color: '#64748B', lineHeight: 1.8, margin: 0, paddingLeft: 18 }}>
                      <li>{isKo ? '파일 조작 (읽기/쓰기/검색)' : 'File operations (read/write/search)'}</li>
                      <li>{isKo ? '명령 실행 (bash, shell)' : 'Command execution (bash, shell)'}</li>
                      <li>{isKo ? '웹 탐색 (브라우저 자동화)' : 'Web browsing (browser automation)'}</li>
                    </ul>
                  </div>
                  <div style={{ ...cardStyle, borderTop: '3px solid #10B981' }}>
                    <h4 style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 700, color: '#10B981' }}>
                      <i className="fa-solid fa-scroll" style={{ marginRight: 8 }} />Skills
                    </h4>
                    <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.7, margin: '0 0 8px' }}>
                      {isKo ? 'SKILL.md 기반 행위 지침' : 'SKILL.md-based Behavioral Instructions'}
                    </p>
                    <p style={{ fontSize: 13, color: '#64748B', lineHeight: 1.7, margin: 0 }}>
                      {isKo
                        ? '같은 도구라도 skill이 다르면 에이전트의 행동이 달라집니다. "무엇을 할 수 있는가"(도구)와 "어떻게 해야 하는가"(스킬)의 분리.'
                        : 'Same tools produce different behavior with different skills. Separation of "what can be done" (tools) and "how it should be done" (skills).'}
                    </p>
                  </div>
                  <div style={{ ...cardStyle, borderTop: '3px solid #8B5CF6' }}>
                    <h4 style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 700, color: '#8B5CF6' }}>
                      <i className="fa-solid fa-puzzle-piece" style={{ marginRight: 8 }} />Plugins
                    </h4>
                    <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.7, margin: '0 0 8px' }}>
                      {isKo ? '확장 패키지' : 'Extension Packages'}
                    </p>
                    <p style={{ fontSize: 13, color: '#64748B', lineHeight: 1.7, margin: 0 }}>
                      {isKo
                        ? '채널 연결이나 기능 확장을 위한 재사용 가능한 패키지. Tools + Skills를 묶어 배포합니다.'
                        : 'Reusable packages for channel connections or feature extensions. Bundles and distributes Tools + Skills together.'}
                    </p>
                  </div>
                </div>

                {/* Browser Automation */}
                <h3 className="theory-h3">{isKo ? '브라우저 자동화' : 'Browser Automation'}</h3>
                <p className="theory-p">
                  {isKo
                    ? 'OpenClaw는 openclaw-managed 브라우저 프로필을 통해 탭 열기, 클릭, 텍스트 입력, 스냅샷 캡처 등의 브라우저 자동화를 지원합니다.'
                    : 'OpenClaw supports browser automation through openclaw-managed browser profiles, including tab opening, clicking, text input, and snapshot capture.'}
                </p>

                {/* Agent Roles */}
                <h3 className="theory-h3">{isKo ? '에이전트 역할 분리 전략' : 'Agent Role Separation Strategy'}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 8 }}>
                  {[
                    { ko: 'Coding Agent', en: 'Coding Agent', icon: 'fa-code', color: '#3B82F6' },
                    { ko: 'Research Agent', en: 'Research Agent', icon: 'fa-magnifying-glass', color: '#10B981' },
                    { ko: 'Messaging Agent', en: 'Messaging Agent', icon: 'fa-envelope', color: '#F59E0B' },
                  ].map(role => (
                    <span key={role.en} style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      background: '#FFFFFF', border: `1px solid ${role.color}`, borderRadius: 10,
                      padding: '8px 16px', fontSize: 13, fontWeight: 600, color: role.color
                    }}>
                      <i className={`fa-solid ${role.icon}`} />{isKo ? role.ko : role.en}
                    </span>
                  ))}
                </div>
                <p className="theory-p" style={{ marginTop: 8 }}>
                  {isKo
                    ? '역할별로 서로 다른 tool profile과 skill을 조합하면, 하나의 Gateway 안에서 목적에 맞는 전문 에이전트를 운용할 수 있습니다.'
                    : 'By combining different tool profiles and skills per role, you can operate specialized agents for different purposes within a single Gateway.'}
                </p>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════════
              Section 7: Security
             ════════════════════════════════════════════════════════════════ */}
          {activeSection === 'security' && (
            <div className="ck-content-box">
              <div className="ck-content-header ck-ch--orange">
                <i className="fa-solid fa-shield-halved" />
                <div className="ck-ch-text">
                  <h2>{isKo ? '보안, 권한, 샌드박스' : 'Security, Permissions, Sandbox'}</h2>
                  <p>{isKo ? 'OpenClaw를 안전하게 운영하는 핵심' : 'Core Principles for Secure OpenClaw Operations'}</p>
                </div>
              </div>
              <div className="ck-content-body">
                {/* WARNING */}
                <div style={warningBoxStyle}>
                  <strong><i className="fa-solid fa-exclamation-triangle" style={{ marginRight: 8 }} />WARNING</strong>
                  <p style={{ margin: '8px 0 0', lineHeight: 1.8 }}>
                    {isKo
                      ? 'OpenClaw는 한 Gateway당 하나의 신뢰 경계를 전제로 한 personal assistant 보안 모델입니다. 여러 불신 사용자가 하나의 tool-enabled agent를 공유하는 multi-tenant 보안 경계로 설계된 제품이 아닙니다.'
                      : 'OpenClaw is a personal assistant security model premised on a single trust boundary per Gateway. It is NOT designed as a multi-tenant security boundary where multiple untrusted users share a single tool-enabled agent.'}
                  </p>
                </div>

                {/* 3 Security Layers */}
                <h3 className="theory-h3">{isKo ? '3단계 보안 계층' : '3 Security Layers'}</h3>
                <div style={cardGridStyle}>
                  <div style={{ ...cardStyle, borderLeft: '4px solid #3B82F6' }}>
                    <h4 style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 700, color: '#3B82F6' }}>
                      1. Sandbox
                    </h4>
                    <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.7, margin: '0 0 4px' }}>
                      {isKo ? '실행 환경 격리' : 'Execution Environment Isolation'}
                    </p>
                    <p style={{ fontSize: 13, color: '#94A3B8', lineHeight: 1.6, margin: 0 }}>
                      {isKo ? '어디서 실행할지를 결정합니다. 컨테이너, chroot, 또는 제한된 경로 내에서만 실행하도록 경계를 설정합니다.' : 'Determines where execution happens. Sets boundaries to run only within containers, chroot, or restricted paths.'}
                    </p>
                  </div>
                  <div style={{ ...cardStyle, borderLeft: '4px solid #F59E0B' }}>
                    <h4 style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 700, color: '#F59E0B' }}>
                      2. Tool Policy
                    </h4>
                    <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.7, margin: '0 0 4px' }}>
                      {isKo ? '도구 허용/거부' : 'Tool Allow/Deny'}
                    </p>
                    <p style={{ fontSize: 13, color: '#94A3B8', lineHeight: 1.6, margin: 0 }}>
                      {isKo ? '무엇을 허용할지를 정의합니다. 파일 접근, 명령 실행, 네트워크 요청 등 도구별 세부 정책을 설정합니다.' : 'Defines what to allow. Sets per-tool policies for file access, command execution, network requests, etc.'}
                    </p>
                  </div>
                  <div style={{ ...cardStyle, borderLeft: '4px solid #EF4444' }}>
                    <h4 style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 700, color: '#EF4444' }}>
                      3. Elevated Mode
                    </h4>
                    <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.7, margin: '0 0 4px' }}>
                      {isKo ? '예외 경로' : 'Exception Path'}
                    </p>
                    <p style={{ fontSize: 13, color: '#94A3B8', lineHeight: 1.6, margin: 0 }}>
                      {isKo ? 'Sandbox에서 exec를 host로 올리는 예외 경로입니다. 필요할 때만 제한적으로 사용해야 합니다.' : 'Exception path for elevating exec from sandbox to host. Should be used restrictively only when necessary.'}
                    </p>
                  </div>
                </div>

                {/* Elevated Commands */}
                <h3 className="theory-h3">{isKo ? 'Elevated 명령어' : 'Elevated Commands'}</h3>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>{isKo ? '명령' : 'Command'}</th>
                      <th style={thStyle}>{isKo ? '설명' : 'Description'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { cmd: '/elevated on', ko: 'Elevated 모드 활성화', en: 'Enable elevated mode' },
                      { cmd: '/elevated ask', ko: '매 실행마다 승인 요청', en: 'Request approval for each execution' },
                      { cmd: '/elevated full', ko: '전체 호스트 접근 허용', en: 'Allow full host access' },
                      { cmd: '/elevated off', ko: 'Elevated 모드 비활성화', en: 'Disable elevated mode' },
                    ].map((row, idx) => (
                      <tr key={idx}>
                        <td style={{ ...tdStyle, fontFamily: 'monospace', fontWeight: 600 }}>{row.cmd}</td>
                        <td style={tdStyle}>{isKo ? row.ko : row.en}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Exec Approvals */}
                <h3 className="theory-h3">{isKo ? '실행 승인 3중 안전장치' : 'Exec Approval Triple Safety'}</h3>
                <p className="theory-p">
                  {isKo
                    ? '정책(Policy) + 허용목록(Allowlist) + 사용자 승인(User Approval)의 3중 안전장치가 적용됩니다. 세 가지 모두 통과해야 실행이 허용됩니다.'
                    : 'A triple safety mechanism of Policy + Allowlist + User Approval is applied. All three must pass for execution to be allowed.'}
                </p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
                  {[
                    { label: isKo ? '1. 정책 확인' : '1. Policy Check', color: '#3B82F6' },
                    { label: isKo ? '2. Allowlist 확인' : '2. Allowlist Check', color: '#F59E0B' },
                    { label: isKo ? '3. 사용자 승인' : '3. User Approval', color: '#10B981' },
                  ].map(step => (
                    <span key={step.label} style={{
                      background: '#FFFFFF', border: `2px solid ${step.color}`, borderRadius: 10,
                      padding: '10px 18px', fontSize: 13, fontWeight: 700, color: step.color
                    }}>
                      <i className="fa-solid fa-shield-check" style={{ marginRight: 6 }} />{step.label}
                    </span>
                  ))}
                </div>

                {/* Security Audit Commands */}
                <h3 className="theory-h3">{isKo ? '보안 감사 명령어' : 'Security Audit Commands'}</h3>
                <pre style={codeBlockStyle}>{`openclaw security audit
openclaw security audit --deep
openclaw security audit --fix
openclaw secrets audit --check
openclaw secrets configure`}</pre>

                {/* Key Security Principles */}
                <h3 className="theory-h3">{isKo ? '핵심 보안 원칙' : 'Key Security Principles'}</h3>
                <div style={{ background: '#FEF2F2', borderRadius: 12, padding: 20, marginBottom: 8 }}>
                  {[
                    { ko: '"작동보다 권한 통제가 먼저" - 기능이 작동하는지보다 권한이 올바른지를 먼저 확인하세요.', en: '"Access control before functionality" - Verify permissions are correct before checking if features work.' },
                    { ko: '"팀 공용 봇처럼 쓸 때는 세션 분리만 믿으면 안 된다" - multi-user 시 별도 Gateway 운영을 고려하세요.', en: '"Don\'t rely solely on session isolation when using as a team bot" - Consider separate Gateway operation for multi-user scenarios.' },
                    { ko: '"API 키와 비밀값은 평문 노출을 최소화" - openclaw secrets configure로 안전하게 관리하세요.', en: '"Minimize plaintext exposure of API keys and secrets" - Manage safely with openclaw secrets configure.' },
                  ].map((item, idx) => (
                    <div key={idx} style={{ ...checkItemStyle, padding: '10px 0', borderBottom: idx < 2 ? '1px solid #FECACA' : 'none' }}>
                      <strong style={{ color: '#DC2626', fontSize: 16, flexShrink: 0 }}>{idx + 1}.</strong>
                      <span style={{ color: '#7F1D1D' }}>{isKo ? item.ko : item.en}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════════
              Section 8: Operations
             ════════════════════════════════════════════════════════════════ */}
          {activeSection === 'operations' && (
            <div className="ck-content-box">
              <div className="ck-content-header ck-ch--purple">
                <i className="fa-solid fa-wrench" />
                <div className="ck-ch-text">
                  <h2>{isKo ? '운영 점검과 장애 대응' : 'Operations & Troubleshooting'}</h2>
                  <p>{isKo ? '"돌아간다"를 넘어 "운영할 수 있는" 수준으로' : 'Beyond "it works" to "production-ready"'}</p>
                </div>
              </div>
              <div className="ck-content-body">
                {/* Operation Commands */}
                <h3 className="theory-h3">{isKo ? '운영 명령어 모음' : 'Operations Command Reference'}</h3>
                <pre style={codeBlockStyle}>{`openclaw status              # ${isKo ? '전체 상태 요약' : 'Overall status summary'}
openclaw status --all        # ${isKo ? '상세 보고' : 'Detailed report'}
openclaw gateway status      # ${isKo ? '런타임, RPC 상태' : 'Runtime, RPC status'}
openclaw gateway probe       # ${isKo ? 'Gateway 접근성 확인' : 'Gateway accessibility check'}
openclaw health --json       # ${isKo ? '건강 스냅샷' : 'Health snapshot'}
openclaw channels status --probe  # ${isKo ? '채널 연결 상태' : 'Channel connection status'}
openclaw logs --follow       # ${isKo ? '실시간 로그' : 'Real-time logs'}
openclaw doctor              # ${isKo ? '환경 문제 탐지' : 'Environment issue detection'}
openclaw doctor --fix        # ${isKo ? '자동 수정 시도' : 'Auto-fix attempt'}`}</pre>

                {/* Common Failure Patterns */}
                <h3 className="theory-h3">{isKo ? '자주 발생하는 장애 패턴' : 'Common Failure Patterns'}</h3>
                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead>
                      <tr>
                        <th style={thStyle}>{isKo ? '증상' : 'Symptom'}</th>
                        <th style={thStyle}>{isKo ? '원인' : 'Cause'}</th>
                        <th style={thStyle}>{isKo ? '해결' : 'Solution'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { ko: ['openclaw 명령 미인식', 'Node 버전이 22.14 미만', 'nvm install 24 && nvm use 24'], en: ['openclaw command not found', 'Node version below 22.14', 'nvm install 24 && nvm use 24'] },
                        { ko: ['openclaw: command not found', 'PATH에 바이너리 미등록', '쉘 재시작 또는 수동 PATH 추가'], en: ['openclaw: command not found', 'Binary not in PATH', 'Restart shell or manually add to PATH'] },
                        { ko: ['모델 응답 없음', 'API 키 만료 또는 오류', 'openclaw models status --probe로 진단'], en: ['No model response', 'API key expired or error', 'Diagnose with openclaw models status --probe'] },
                        { ko: ['채널 메시지 미수신', '채널 로그인 만료', 'openclaw channels login 재실행'], en: ['Channel not receiving messages', 'Channel login expired', 'Re-run openclaw channels login'] },
                        { ko: ['Gateway 연결 실패', 'Gateway 미기동', 'openclaw gateway 실행 후 status 확인'], en: ['Gateway connection failure', 'Gateway not running', 'Run openclaw gateway then check status'] },
                        { ko: ['그룹 봇 무응답', '그룹 정책 미설정', 'groupPolicy 및 mention 설정 확인'], en: ['Bot unresponsive in group', 'Group policy not configured', 'Check groupPolicy and mention settings'] },
                        { ko: ['명령 실행 거부', '과도한 권한 제한', 'tool profile 및 elevated 설정 검토'], en: ['Command execution denied', 'Excessive permission restrictions', 'Review tool profile and elevated settings'] },
                      ].map((row, idx) => (
                        <tr key={idx}>
                          <td style={{ ...tdStyle, fontWeight: 600, color: '#DC2626' }}>{isKo ? row.ko[0] : row.en[0]}</td>
                          <td style={tdStyle}>{isKo ? row.ko[1] : row.en[1]}</td>
                          <td style={{ ...tdStyle, fontFamily: row.ko[2].includes('openclaw') || row.en[2].includes('openclaw') ? 'monospace' : 'inherit', fontSize: 12 }}>
                            {isKo ? row.ko[2] : row.en[2]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Daily/Weekly Checklist */}
                <h3 className="theory-h3">{isKo ? '일상/주간 운영 체크리스트' : 'Daily/Weekly Operations Checklist'}</h3>
                <div style={{ background: '#F5F3FF', borderRadius: 12, padding: 20, marginBottom: 16 }}>
                  {[
                    { ko: 'openclaw status로 전체 상태 확인 (매일)', en: 'Check overall status with openclaw status (daily)' },
                    { ko: 'openclaw health --json으로 건강 스냅샷 확인 (매일)', en: 'Check health snapshot with openclaw health --json (daily)' },
                    { ko: 'openclaw channels status --probe로 채널 연결 확인 (매일)', en: 'Verify channel connections with openclaw channels status --probe (daily)' },
                    { ko: 'openclaw security audit로 보안 점검 (주간)', en: 'Security audit with openclaw security audit (weekly)' },
                    { ko: 'openclaw doctor로 환경 문제 탐지 (주간)', en: 'Environment issue detection with openclaw doctor (weekly)' },
                    { ko: 'openclaw secrets audit --check로 비밀 관리 점검 (주간)', en: 'Secrets management check with openclaw secrets audit --check (weekly)' },
                  ].map((item, idx) => (
                    <div key={idx} style={checkItemStyle}>
                      <i className="fa-regular fa-square-check" style={{ color: '#7C3AED', marginTop: 3, flexShrink: 0 }} />
                      <span style={{ color: '#3B0764' }}>{isKo ? item.ko : item.en}</span>
                    </div>
                  ))}
                </div>

                {/* Mini Project */}
                <h3 className="theory-h3">{isKo ? '미니 프로젝트' : 'Mini Project'}</h3>
                <div style={{ ...cardStyle, borderLeft: '4px solid #8B5CF6', marginBottom: 16 }}>
                  <h4 style={{ margin: '0 0 12px', fontSize: 16, fontWeight: 700, color: '#5B21B6' }}>
                    <i className="fa-solid fa-rocket" style={{ marginRight: 8 }} />
                    {isKo ? '내 메신저에서 부르는 개인 AI 비서 만들기' : 'Build a Personal AI Assistant Callable from Your Messenger'}
                  </h4>
                  <p className="theory-p" style={{ marginBottom: 12, fontWeight: 600 }}>
                    {isKo ? '산출물:' : 'Deliverables:'}
                  </p>
                  <ul className="theory-list" style={{ marginBottom: 0 }}>
                    <li>{isKo ? '설치 캡처 (스크린샷)' : 'Installation capture (screenshots)'}</li>
                    <li>{isKo ? 'Dashboard 채팅 화면' : 'Dashboard chat screen'}</li>
                    <li>{isKo ? '메신저에서 호출한 대화 캡처' : 'Conversation capture from messenger'}</li>
                    <li>{isKo ? '활용 시나리오 3개 작성' : '3 usage scenarios'}</li>
                    <li>{isKo ? '보안 주의사항 3개 정리' : '3 security precautions documented'}</li>
                    <li>{isKo ? '문제 해결 로그 1건 기록' : '1 troubleshooting log recorded'}</li>
                  </ul>
                </div>

                {/* Evaluation Rubric */}
                <h3 className="theory-h3">{isKo ? '평가 기준' : 'Evaluation Rubric'}</h3>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>{isKo ? '등급' : 'Grade'}</th>
                      <th style={thStyle}>{isKo ? '기준' : 'Criteria'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ ...tdStyle, fontWeight: 700, color: '#10B981' }}>{isKo ? '상 (A)' : 'High (A)'}</td>
                      <td style={tdStyle}>
                        {isKo
                          ? '모든 산출물 완성, 채널 2개 이상 연결, 보안 감사 수행, 독자적 시나리오 제시'
                          : 'All deliverables complete, 2+ channels connected, security audit performed, original scenarios presented'}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ ...tdStyle, fontWeight: 700, color: '#3B82F6' }}>{isKo ? '중 (B)' : 'Mid (B)'}</td>
                      <td style={tdStyle}>
                        {isKo
                          ? '기본 산출물 완성, 채널 1개 연결, 기본 보안 설정 확인'
                          : 'Basic deliverables complete, 1 channel connected, basic security settings verified'}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ ...tdStyle, fontWeight: 700, color: '#F59E0B' }}>{isKo ? '하 (C)' : 'Low (C)'}</td>
                      <td style={tdStyle}>
                        {isKo
                          ? '설치 완료, Dashboard 접속 성공, 첫 대화 성공'
                          : 'Installation complete, Dashboard access successful, first conversation successful'}
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Command Cheatsheet */}
                <h3 className="theory-h3">{isKo ? '명령어 치트시트' : 'Command Cheatsheet'}</h3>
                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead>
                      <tr>
                        <th style={thStyle}>{isKo ? '명령' : 'Command'}</th>
                        <th style={thStyle}>{isKo ? '용도' : 'Purpose'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { cmd: 'openclaw --version', ko: '설치 버전 확인', en: 'Check installed version' },
                        { cmd: 'openclaw doctor', ko: '환경 진단', en: 'Environment diagnosis' },
                        { cmd: 'openclaw doctor --fix', ko: '환경 문제 자동 수정', en: 'Auto-fix environment issues' },
                        { cmd: 'openclaw onboard', ko: '초기 설정 (온보딩)', en: 'Initial setup (onboarding)' },
                        { cmd: 'openclaw configure', ko: '설정 변경', en: 'Change configuration' },
                        { cmd: 'openclaw gateway', ko: 'Gateway 시작', en: 'Start Gateway' },
                        { cmd: 'openclaw gateway status', ko: 'Gateway 상태 확인', en: 'Check Gateway status' },
                        { cmd: 'openclaw gateway probe', ko: 'Gateway 접근성 확인', en: 'Check Gateway accessibility' },
                        { cmd: 'openclaw dashboard', ko: 'Dashboard 실행', en: 'Launch Dashboard' },
                        { cmd: 'openclaw status', ko: '전체 상태 요약', en: 'Overall status summary' },
                        { cmd: 'openclaw status --all', ko: '상세 상태 보고', en: 'Detailed status report' },
                        { cmd: 'openclaw health --json', ko: '건강 스냅샷 (JSON)', en: 'Health snapshot (JSON)' },
                        { cmd: 'openclaw models list', ko: '사용 가능 모델 목록', en: 'List available models' },
                        { cmd: 'openclaw models status', ko: '모델 연결 상태', en: 'Model connection status' },
                        { cmd: 'openclaw models status --probe', ko: '모델 접근성 확인', en: 'Probe model accessibility' },
                        { cmd: 'openclaw channels login', ko: '채널 로그인', en: 'Channel login' },
                        { cmd: 'openclaw channels status --probe', ko: '채널 연결 상태 확인', en: 'Check channel connection status' },
                        { cmd: 'openclaw pairing list <channel>', ko: 'Pairing 목록 확인', en: 'List pairing requests' },
                        { cmd: 'openclaw pairing approve <ch> <code>', ko: 'Pairing 승인', en: 'Approve pairing' },
                        { cmd: 'openclaw security audit', ko: '보안 감사', en: 'Security audit' },
                        { cmd: 'openclaw security audit --deep', ko: '심층 보안 감사', en: 'Deep security audit' },
                        { cmd: 'openclaw secrets configure', ko: '비밀 관리 설정', en: 'Secrets management setup' },
                        { cmd: 'openclaw logs --follow', ko: '실시간 로그 확인', en: 'Follow real-time logs' },
                      ].map((row, idx) => (
                        <tr key={idx} style={{ background: idx % 2 === 0 ? '#FAFAFA' : '#FFFFFF' }}>
                          <td style={{ ...tdStyle, fontFamily: 'monospace', fontWeight: 600, fontSize: 12, whiteSpace: 'nowrap' }}>{row.cmd}</td>
                          <td style={tdStyle}>{isKo ? row.ko : row.en}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
