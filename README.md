# OpenClaw - AI 학습 플랫폼

> AI, 프로그래밍, 데이터 사이언스를 체계적으로 학습할 수 있는 종합 무료 플랫폼

[![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue)](https://openclaw.dreamitbiz.com)
[![React](https://img.shields.io/badge/React-19-61DAFB)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF)](https://vitejs.dev)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E)](https://supabase.com)
[![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-red)](#license)

## Live

**https://openclaw.dreamitbiz.com**

## Overview

OpenClaw는 AI와 프로그래밍을 배우려는 학습자, 교육자, 실무자를 위한 종합 학습 플랫폼입니다. 프롬프트 엔지니어링 실습, 100개 AI 용어사전, 단계별 학습 로드맵, 최신 AI 트렌드까지 한곳에서 제공합니다.

## Features

### Learning Content
| 메뉴 | 설명 |
|------|------|
| **OpenClaw** | OpenClaw 플랫폼 구조, 설치, 온보딩, 채널, 모델, 보안, 운영 전문 강의 + PT 자료 |
| **AI 학습자료** | AI 이론, 프로그래밍, 데이터 분석, AI 활용 + 프롬프트 학습/갤러리/실습/퀴즈 |
| **AI 용어사전** | 100개 핵심 용어 (5개 카테고리, 검색, 5개 단위 페이지네이션) |
| **학습 로드맵** | 4개 트랙 (AI/ML, 데이터사이언스, 웹개발, 프롬프트 엔지니어링) |
| **AI 트렌드** | 14+ 뉴스 카드 + 아카이브 목록 (실제 URL 링크) |
| **커뮤니티** | 게시판, 댓글, 카테고리 필터 (OpenClaw 전용 DB) |

### Platform Features
- 5가지 컬러 테마 (Blue, Red, Green, Purple, Orange)
- 다크 / 라이트 / 자동 모드
- 한국어 / 영어 다국어 지원
- 데스크탑 / 태블릿 / 모바일 반응형 (4단계)
- Glassmorphism 디자인 시스템
- Google / Kakao OAuth 소셜 로그인
- OG 이미지 + 카카오톡/SNS 미리보기 지원

## Tech Stack

| Category | Technology |
|----------|-----------|
| Frontend | React 19, Vite 6, react-router-dom 7 |
| Backend | Supabase (PostgreSQL, Auth, RLS) |
| Styling | CSS Custom Properties, Glassmorphism |
| Markdown | react-markdown, remark-gfm |
| Font | Noto Sans KR (Google Fonts) |
| Icons | Font Awesome 6.5.1 |
| Deploy | GitHub Pages (gh-pages) |
| OG Image | sharp |

## Project Structure

```
openclaw/
├── public/               # Static assets (CNAME, 404, favicon, og, files)
├── src/
│   ├── components/       # Reusable components (Navbar, Footer, Hero, etc.)
│   ├── config/           # Site config, admin emails
│   ├── contexts/         # Theme, Language, Auth, Toast
│   ├── layouts/          # PublicLayout with routing
│   ├── pages/            # All page components
│   │   ├── intro/        # About page
│   │   ├── openclaw-guide/  # OpenClaw lecture guide + PT
│   │   ├── resources/    # AI learning resources
│   │   ├── prompt-practice/ # Prompt practice & quiz
│   │   ├── prompt-gallery/  # 40 curated prompts
│   │   ├── glossary/     # 100 AI terms
│   │   ├── roadmap/      # 4 learning tracks
│   │   ├── ai-news/      # AI trends & news
│   │   ├── community/    # Board, detail, write
│   │   └── admin/        # Admin dashboard
│   ├── styles/           # 18 CSS modules
│   └── utils/            # Supabase, auth, translations
├── supabase/             # Database schema (openclaw_board_*)
├── scripts/              # OG image generator
└── Dev_md/               # 13 development documents
```

## Getting Started

### Prerequisites
- Node.js 20+
- npm

### Installation
```bash
git clone https://github.com/aebonlee/openclaw.git
cd openclaw
npm install
```

### Environment Variables
Create `.env` file:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development
```bash
npm run dev          # Start dev server (port 5175)
```

### Build & Deploy
```bash
npm run build        # Build to dist/
npx gh-pages -d dist # Deploy to GitHub Pages
```

## Database

OpenClaw uses its own dedicated tables (separate from Teaching AI):
- `openclaw_board_posts` - Community board posts
- `openclaw_board_comments` - Comments
- `user_profiles` - Shared user profiles

Run `supabase/schema.sql` in Supabase SQL Editor to create tables.

## Development Documents

13 development documents in `Dev_md/`:
| # | Document |
|---|----------|
| 01 | Project Overview |
| 02 | Tech Stack & Architecture |
| 03 | Design System |
| 04 | AI Service Layer |
| 05 | Auth & Database |
| 06 | Routing & Page Structure |
| 07 | Component Guide |
| 08 | Export Functions |
| 09 | i18n (Internationalization) |
| 10 | Deployment Guide |
| 11 | Learning Content Structure |
| 12 | Teaching AI Integration |
| 13 | Development Log |

## License / 라이선스

**저작권 (c) 2025-2026 드림아이티비즈(DreamIT Biz). 모든 권리 보유.**

본 소프트웨어는 저작권법 및 지적재산권법에 의해 보호되는 독점 소프트웨어입니다. 본 프로젝트는 소프트웨어 저작권 등록이 완료되어 법적 보호를 받습니다.

- 본 소프트웨어의 무단 복제, 수정, 배포 또는 사용은 엄격히 금지됩니다.
- 저작권자의 사전 서면 허가 없이 본 소프트웨어의 어떠한 부분도 복제하거나 전송할 수 없습니다.
- 본 소프트웨어는 OpenClaw 플랫폼(https://openclaw.dreamitbiz.com)을 통한 교육 목적으로만 제공됩니다.

라이선스 문의: aebon@dreamitbiz.com

---

**Copyright (c) 2025-2026 DreamIT Biz (Ph.D Aebon Lee). All Rights Reserved.**

This software is proprietary and protected under applicable copyright and intellectual property laws. This project has been registered for software copyright protection.

- Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
- No part of this software may be reproduced or transmitted in any form without prior written permission from the copyright holder.
- This software is provided for educational purposes through the OpenClaw platform (https://openclaw.dreamitbiz.com) only.

For licensing inquiries, contact: aebon@dreamitbiz.com

---

**Designed & Developed by Ph.D Aebon Lee**

DreamIT Biz | https://www.dreamitbiz.com
