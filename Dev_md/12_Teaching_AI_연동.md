# Teaching AI 연동

## 개요

OpenClaw와 Teaching AI는 동일한 기술 기반을 공유하는 자매 프로젝트이다. 두 사이트는 같은 Supabase 프로젝트, 동일한 디자인 시스템, 동일한 인증 시스템을 사용하며, Family Site 드롭다운으로 상호 연결된다.

| 항목 | OpenClaw | Teaching AI |
|------|----------|-------------|
| **URL** | https://openclaw.dreamitbiz.com | https://teaching.dreamitbiz.com |
| **GitHub** | github.com/aebonlee/openclaw | github.com/aebonlee/teaching-ai |
| **Dev Port** | 5175 | 5174 |
| **포커스** | AI 학습 플랫폼 | 교수학습 도구 |
| **브랜딩** | OpenClaw | Teaching AI |

## 동일 Supabase 프로젝트 공유

두 사이트는 **같은 Supabase 프로젝트** (같은 PostgreSQL 데이터베이스)를 사용한다.

### 공유되는 리소스

| 리소스 | 설명 |
|--------|------|
| **Database** | 동일한 PostgreSQL 인스턴스 |
| **Auth** | 동일한 인증 시스템 (사용자 계정 공유) |
| **Storage** | 동일한 파일 스토리지 |
| **RLS Policies** | 동일한 보안 정책 |

### 환경 변수

두 사이트 모두 동일한 Supabase URL과 Anon Key를 사용한다:

```env
# 두 프로젝트에서 동일
VITE_SUPABASE_URL=https://[project-id].supabase.co
VITE_SUPABASE_ANON_KEY=[동일한 anon key]
```

## 동일 디자인 시스템

두 사이트는 동일한 CSS 변수 체계와 컴포넌트 구조를 사용한다.

### 공유 요소

- **CSS Custom Properties**: 동일한 변수 체계 (--primary, --bg-primary 등)
- **Glassmorphism**: 동일한 블러 효과 스타일
- **5가지 컬러 테마**: Blue, Red, Green, Purple, Orange
- **Dark/Light/Auto**: 동일한 테마 전환 시스템
- **컴포넌트 구조**: Navbar, Footer, Card, Button 등 동일 패턴
- **반응형 breakpoints**: 1100px, 1024px, 768px, 480px
- **Typography**: Noto Sans KR, 동일한 가중치 체계

### 브랜딩 차이

| 요소 | OpenClaw | Teaching AI |
|------|----------|-------------|
| **로고 텍스트** | OpenClaw | Teaching AI |
| **Tagline** | AI 학습 플랫폼 | AI 교수학습 도구 |
| **Favicon** | OpenClaw 아이콘 | Teaching AI 아이콘 |
| **SEO Title** | OpenClaw - AI 학습 플랫폼 | Teaching AI - 교수학습 도구 |

## 동일 인증 시스템

### 계정 공유

사용자는 한 번 가입하면 두 사이트 모두에서 동일한 계정으로 로그인할 수 있다.

- 동일한 `auth.users` 테이블
- 동일한 `profiles` 테이블
- 동일한 OAuth 설정 (Google, Kakao)

### Cross-Site visited_sites 추적

사용자가 어떤 사이트를 방문했는지 `profiles.visited_sites` 배열에 기록한다.

```javascript
// 사이트 방문 시 visited_sites 업데이트
async function trackSiteVisit(userId) {
  const currentDomain = window.location.hostname;
  // 예: 'openclaw.dreamitbiz.com' 또는 'teaching.dreamitbiz.com'

  const { data: profile } = await supabase
    .from('profiles')
    .select('visited_sites')
    .eq('id', userId)
    .single();

  const sites = profile?.visited_sites || [];

  if (!sites.includes(currentDomain)) {
    await supabase
      .from('profiles')
      .update({
        visited_sites: [...sites, currentDomain],
      })
      .eq('id', userId);
  }
}
```

### visited_sites 데이터 예시

```json
{
  "visited_sites": [
    "openclaw.dreamitbiz.com",
    "teaching.dreamitbiz.com"
  ]
}
```

## Family Site 드롭다운

Footer에 Family Site 드롭다운 메뉴를 통해 두 사이트 간 이동이 가능하다.

```jsx
// Footer.jsx 내 Family Site 섹션
<div className="family-site">
  <select
    onChange={(e) => window.open(e.target.value, '_blank')}
    defaultValue=""
  >
    <option value="" disabled>Family Site</option>
    <option value="https://openclaw.dreamitbiz.com">OpenClaw</option>
    <option value="https://teaching.dreamitbiz.com">Teaching AI</option>
  </select>
</div>
```

## 차이점 상세

### 콘텐츠 포커스

| 영역 | OpenClaw | Teaching AI |
|------|----------|-------------|
| **주요 대상** | 학생, AI 학습자 | 교수자, 교육자 |
| **학습 콘텐츠** | 42+ 코스 (7 카테고리) | 교수학습 관련 콘텐츠 |
| **AI 도구** | 동일 5개 도구 | 동일 5개 도구 |
| **체크리스트** | AI 역량 체크리스트 (학생+교수) | 교수역량 체크리스트 |
| **프롬프트 실습** | 기본/고급 기법 연습 | 교수학습 프롬프트 연습 |
| **학습 자료** | AI/프로그래밍/데이터 자료 | 교수학습 관련 자료 |
| **커뮤니티** | 학습자 게시판 | 교수자 게시판 |

### 개발 환경 차이

| 항목 | OpenClaw | Teaching AI |
|------|----------|-------------|
| **Dev Port** | 5175 | 5174 |
| **Repository** | openclaw | teaching-ai |
| **Deploy Domain** | openclaw.dreamitbiz.com | teaching.dreamitbiz.com |
| **CNAME** | openclaw.dreamitbiz.com | teaching.dreamitbiz.com |

### 동시 개발 시 주의사항

1. **DB 스키마 변경**: 한쪽에서 스키마를 변경하면 양쪽 모두에 영향을 미친다
2. **RLS 정책 수정**: 보안 정책 변경은 양쪽 사이트에 반영된다
3. **Auth 설정 변경**: OAuth 리다이렉트 URL에 두 사이트 도메인 모두 등록 필요
4. **포트 충돌 방지**: 로컬 개발 시 OpenClaw(5175)와 Teaching AI(5174)는 서로 다른 포트 사용
