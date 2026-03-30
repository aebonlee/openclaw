# 16. PDF 캐시 무효화 가이드

**날짜:** 2026-03-31

## 문제 상황
GitHub Pages에 배포된 정적 파일(PDF 등)을 동일 파일명으로 덮어쓸 경우,
CDN 캐시로 인해 브라우저에서 구버전이 표시됨.

## 해결 방법 (우선순위)

### 방법 1: 파일명 변경 (가장 확실)
```
openclaw_2603.pdf → openclaw_2631.pdf
```
- CDN이 완전히 새 URL로 인식
- 코드에서 참조 경로도 함께 변경 필요

### 방법 2: 쿼리 파라미터 (간편하지만 CDN에 따라 무시될 수 있음)
```html
<iframe src="/files/openclaw_2603.pdf?v=20260331" />
```
- 브라우저 캐시는 우회 가능
- 일부 CDN은 쿼리 파라미터를 무시할 수 있음

### 방법 3: gh-pages 캐시 삭제 후 재배포
```bash
rm -rf node_modules/.cache/gh-pages
npx gh-pages -d dist
```
- gh-pages 도구 자체의 로컬 캐시 문제 해결

## OpenClaw 프로젝트 PDF 구조

### 파일 위치
```
public/files/openclaw_2631.pdf   ← 원본 (빌드 시 dist로 복사)
dist/files/openclaw_2631.pdf     ← 빌드 결과물 (배포 대상)
```

### 코드 참조 (OpenClawGuide.jsx)
```jsx
// 다운로드
<a href="/files/openclaw_2631.pdf?v=20260331" download="OpenClaw_PT.pdf">

// iframe 뷰어
<iframe src="/files/openclaw_2631.pdf?v=20260331#toolbar=1&navpanes=0&scrollbar=1" />
```

## 향후 PDF 갱신 절차
1. `public/files/`에 새 파일명으로 PDF 배치 (예: `openclaw_YYMM.pdf`)
2. `OpenClawGuide.jsx`에서 파일명 참조 변경
3. `npx vite build && npx gh-pages -d dist`
4. 구 파일은 git에서 제거 (`git rm public/files/구파일.pdf`)
