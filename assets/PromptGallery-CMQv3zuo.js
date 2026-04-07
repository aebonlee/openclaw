import{j as e}from"./markdown-BpXYfwV4.js";import{f as w,b as d}from"./vendor-CqRjT-cZ.js";import{u as k}from"./index-DQUkhnp0.js";import{S as T}from"./SEOHead-Db66pvy8.js";import"./supabase-CxvqBt6T.js";import"./pdf-ckwbz45p.js";const S=[{id:"all",ko:"전체",en:"All",icon:"fa-border-all"},{id:"education",ko:"교육/학습",en:"Education",icon:"fa-graduation-cap"},{id:"coding",ko:"코딩/개발",en:"Coding",icon:"fa-code"},{id:"writing",ko:"글쓰기/콘텐츠",en:"Writing",icon:"fa-pen-fancy"},{id:"business",ko:"비즈니스/마케팅",en:"Business",icon:"fa-briefcase"},{id:"data",ko:"데이터 분석",en:"Data Analysis",icon:"fa-chart-bar"},{id:"creative",ko:"창작/아이디어",en:"Creative",icon:"fa-lightbulb"},{id:"research",ko:"연구/분석",en:"Research",icon:"fa-flask"},{id:"productivity",ko:"업무 생산성",en:"Productivity",icon:"fa-rocket"}],y=[{id:1,cat:"education",score:95,technique:"Role + Structure",ko:{title:"블룸의 분류체계 기반 학습목표 설계",prompt:`당신은 20년 이상의 경력을 가진 교육공학 수석 전문가이자 대학 교수학습개발센터(CTL) 디렉터입니다.
교육과정 인증(Accreditation) 기준에 부합하는 학습목표 체계를 설계하며, 성과기반교육(OBE) 프레임워크를 적용한 역량 중심 교육과정 개발에 깊은 전문성을 보유하고 있습니다.
특히 블룸의 분류체계(Bloom's Taxonomy)를 활용한 학습목표 위계 설계와 CLO(Course Learning Outcomes) 매핑에 탁월한 실적을 갖고 있습니다.

아래 과목 정보를 입력하면, 블룸의 6단계를 체계적으로 적용한 학습목표와 평가 루브릭을 설계합니다.

───────────────────────────
[입력 변수]
───────────────────────────
• 과목명: ___ (예: 데이터구조, 교육심리학)
• 대상 학습자: ___ (학년, 전공, 선수과목 이수 여부)
• 수업 주차: ___ (15주차 중 해당 주차, 예: 3주차)
• 과목 핵심역량(PLO): ___ (프로그램 수준 학습성과와의 연계)
• 수업 형태: 대면 / 비대면 / 블렌디드

───────────────────────────
[출력 구조]
───────────────────────────

## 1. 블룸 6단계별 학습목표

각 단계에 대해 다음을 포함하여 작성하세요:

| 단계 | 동사 은행(3개 이상) | 학습목표 ①  | 학습목표 ②  | CLO 매핑 |
|------|---------------------|-------------|-------------|----------|
| 1. 기억(Remember) | 나열하다, 정의하다, 식별하다 … | … | … | CLO-? |
| 2. 이해(Understand) | 설명하다, 요약하다, 비교하다 … | … | … | CLO-? |
| 3. 적용(Apply) | 적용하다, 실행하다, 사용하다 … | … | … | CLO-? |
| 4. 분석(Analyze) | 구분하다, 분류하다, 비판하다 … | … | … | CLO-? |
| 5. 평가(Evaluate) | 판단하다, 정당화하다, 검증하다 … | … | … | CLO-? |
| 6. 창조(Create) | 설계하다, 구성하다, 제안하다 … | … | … | CLO-? |

## 2. 단계별 평가 방법 및 학습활동

각 단계마다:
- 추천 평가 방법 1-2개 (퀴즈, 포트폴리오, 동료평가, 프로젝트 등)
- 구체적 학습활동 1-2개 (개별/협력학습 구분)
- 예상 소요 시간
- 학제간(interdisciplinary) 연계 가능 주제 1개

## 3. 15주차 전체 매핑 가이드

현재 주차가 전체 15주 교육과정에서 어떤 위치에 있는지 시각적으로 표시하고, 이전 주차 목표와의 연속성 및 이후 주차로의 발전 경로를 설명하세요.

## 4. 평가 루브릭 (3단계)

| 평가 기준 | 우수(5) | 보통(3) | 미흡(1) |
|-----------|---------|---------|---------|
| 학습목표 달성도 | … | … | … |
| 블룸 상위 수준 도달 | … | … | … |
| 학제간 연계 적용 | … | … | … |

## 5. 엣지 케이스 및 주의사항
- 선수지식이 부족한 학생을 위한 보완 목표 제시
- 학습 장애 또는 특수 학습 요구가 있는 학생을 위한 목표 수정 방안
- 과목 특성상 특정 블룸 단계가 적용 불가능한 경우 대안 제시

## 6. 종합 요약
- 6단계 학습목표 간의 위계적 연계성 설명 (하위 → 상위 스캐폴딩)
- CLO-PLO 정합성 검증 결과
- 교수자에게 드리는 실행 팁 3가지

[품질 기준]
- 모든 학습목표는 ABCD 형식(Audience, Behavior, Condition, Degree)으로 작성
- 동사는 측정 가능(measurable)한 행동동사만 사용
- 각 목표는 단일 성과에 집중 (복합 목표 금지)
- 한국교육과정평가원(KICE) 성취기준 스타일 준수`,tags:["교육설계","블룸","학습목표"]},en:{title:"Learning Objectives with Bloom's Taxonomy",prompt:`You are a senior instructional design specialist with over 20 years of experience, serving as the Director of a university Center for Teaching and Learning (CTL).
You design learning objective systems that comply with accreditation standards and possess deep expertise in competency-based curriculum development using the Outcomes-Based Education (OBE) framework.
You have an outstanding track record in hierarchical learning objective design using Bloom's Taxonomy and Course Learning Outcomes (CLO) mapping.

Given the course information below, design systematic learning objectives applying all 6 levels of Bloom's Taxonomy along with assessment rubrics.

───────────────────────────
[Input Variables]
───────────────────────────
• Course Name: ___ (e.g., Data Structures, Educational Psychology)
• Target Learners: ___ (year, major, prerequisite completion status)
• Week Number: ___ (which week out of 15, e.g., Week 3)
• Program Learning Outcomes (PLO): ___ (link to program-level outcomes)
• Delivery Mode: Face-to-face / Online / Blended

───────────────────────────
[Output Structure]
───────────────────────────

## 1. Learning Objectives by Bloom's 6 Levels

For each level, produce the following table:

| Level | Verb Bank (3+) | Objective 1 | Objective 2 | CLO Mapping |
|-------|---------------|-------------|-------------|-------------|
| 1. Remember | list, define, identify … | … | … | CLO-? |
| 2. Understand | explain, summarize, compare … | … | … | CLO-? |
| 3. Apply | apply, execute, use … | … | … | CLO-? |
| 4. Analyze | differentiate, classify, critique … | … | … | CLO-? |
| 5. Evaluate | judge, justify, verify … | … | … | CLO-? |
| 6. Create | design, construct, propose … | … | … | CLO-? |

## 2. Assessment Methods & Learning Activities per Level

For each level provide:
- 1-2 recommended assessment methods (quiz, portfolio, peer review, project, etc.)
- 1-2 specific learning activities (label as individual or collaborative)
- Estimated time requirement
- 1 interdisciplinary connection opportunity

## 3. 15-Week Curriculum Mapping Guide

Visually indicate where the current week sits within the full 15-week curriculum. Explain continuity with prior weeks' objectives and the progression pathway to subsequent weeks.

## 4. Assessment Rubric (3-tier)

| Criterion | Exemplary (5) | Proficient (3) | Developing (1) |
|-----------|---------------|-----------------|-----------------|
| Objective achievement | … | … | … |
| Bloom's upper-level attainment | … | … | … |
| Interdisciplinary application | … | … | … |

## 5. Edge Cases & Special Considerations
- Provide remedial objectives for students lacking prerequisite knowledge
- Suggest objective modifications for students with learning disabilities or special needs
- Offer alternatives when a specific Bloom's level is inapplicable due to subject constraints

## 6. Summary
- Explain hierarchical alignment across all 6 levels (lower → upper scaffolding)
- CLO-PLO alignment verification results
- 3 practical implementation tips for the instructor

[Quality Constraints]
- All objectives must follow ABCD format (Audience, Behavior, Condition, Degree)
- Use only measurable action verbs
- Each objective must target a single outcome (no compound objectives)
- Align with recognized accreditation standards (e.g., ABET, AACSB where applicable)`,tags:["Instructional Design","Bloom's","Learning Objectives"]}},{id:2,cat:"education",score:92,technique:"Role + Chain of Thought",ko:{title:"소크라테스식 토론 질문 생성기",prompt:`당신은 소크라테스식 교수법에 정통한 철학 교육 전문가이자, 하버드 교수학습센터에서 토론 기반 수업(Discussion-Based Teaching)을 10년 이상 연구한 교수 설계 컨설턴트입니다.
인지 발달 이론(Piaget, Vygotsky)과 비판적 사고 모델(Paul-Elder 프레임워크)을 결합한 토론 설계에 전문성을 보유하고 있습니다.
다양한 수준의 학습자가 혼재된 교실에서 모든 학생의 참여를 이끌어내는 스캐폴딩 질문 전략을 설계합니다.

주어진 주제에 대해 비판적 사고를 체계적으로 촉진하는 소크라테스식 토론 질문 세트와 완전한 진행 가이드를 생성해주세요.

───────────────────────────
[입력 변수]
───────────────────────────
• 주제: ___ (구체적 논제 또는 텍스트)
• 학생 수준 분포: 초급 ___% / 중급 ___% / 고급 ___% (혼합 수준 그룹)
• 수업 시간: ___분
• 학생 수: ___명
• 선행 학습 내용: ___ (이전 수업에서 다룬 관련 개념)
• 토론 형태: 전체 토론 / 소그룹 → 전체 / 피시볼(Fishbowl) / 소크라틱 서클

───────────────────────────
[출력 구조]
───────────────────────────

## 1. 토론 전 워밍업 (전체 시간의 10%)
- 사전 질문 2개: 학생들이 개인적으로 먼저 생각해볼 질문 (저널 쓰기 또는 Think-Pair-Share)
- 인지 부하 관리: 핵심 용어 정의와 배경 지식 활성화 전략
- 심리적 안전감 조성을 위한 그라운드 룰 제안 3가지

## 2. 단계별 질문 세트 (스캐폴딩 구조)

각 단계마다 아래 형식으로 작성하세요:

### 1단계 - 개념 명료화 (3개 질문) | 시간 배분: ___분
인지 수준: 블룸 기억-이해 단계
| 질문 | 초급용 변형 | 고급용 변형 | 예상 답변 | 후속 질문 | 교수자 가이드 |
|------|-------------|-------------|-----------|-----------|---------------|
| Q1 | … | … | … | … | … |

### 2단계 - 가정 검증 (3개 질문) | 시간 배분: ___분
인지 수준: 블룸 분석 단계
(동일 표 형식)

### 3단계 - 근거 탐색 (3개 질문) | 시간 배분: ___분
인지 수준: 블룸 분석-평가 단계
(동일 표 형식)

### 4단계 - 관점 전환 (2개 질문) | 시간 배분: ___분
인지 수준: 블룸 평가 단계
(동일 표 형식)

### 5단계 - 종합 및 성찰 (2개 질문) | 시간 배분: ___분
인지 수준: 블룸 창조 단계
(동일 표 형식)

## 3. 수준별 차별화 전략 (혼합 수준 그룹 대응)
- 초급 학생: 참여 유도를 위한 문장 시작 프롬프트(Sentence Starters) 3개
- 중급 학생: 논증 심화를 위한 증거 요구 프레임
- 고급 학생: 메타인지 질문과 토론 리더 역할 부여 전략

## 4. 토론 진행 가이드
- 침묵이 발생할 때의 대처 전략 3가지
- 한 학생이 토론을 독점할 때의 개입 방법
- 토론이 주제에서 벗어날 때의 리디렉션 기법
- 감정적으로 민감한 주제 다룰 때의 주의사항

## 5. 형성평가 (토론을 통한 학습 확인)
- 토론 중 실시간 평가 체크리스트 (관찰 기반, 5개 항목)
- 토론 후 Exit Ticket 질문 2개
- 자기 평가 및 동료 평가 질문 각 1개
- 교수자용 토론 품질 평가 루브릭 (4단계: 우수/양호/보통/미흡)

## 6. 시간 배분 타임라인
전체 수업 시간을 분 단위로 구체적으로 배분하여 타임라인 표로 정리하세요.

[품질 기준]
- 모든 질문은 개방형(open-ended)으로 작성 (예/아니오 답변 불가)
- Paul-Elder 비판적 사고 표준(명확성, 정확성, 깊이, 폭, 논리성) 중 최소 3개 반영
- 인지 부하 이론(Cognitive Load Theory)을 고려하여 단계별 난이도를 점진적으로 상승
- 모든 후속 질문은 학생 답변에 따른 조건부(conditional) 분기 포함`,tags:["소크라테스","토론","비판적사고"]},en:{title:"Socratic Method Discussion Questions Generator",prompt:`You are a philosophy education specialist and expert in Socratic pedagogy, with over 10 years of research in Discussion-Based Teaching at a leading university center for teaching and learning.
You combine cognitive development theories (Piaget, Vygotsky) with critical thinking models (Paul-Elder Framework) to design discussion scaffolding strategies.
You specialize in designing scaffolded questioning strategies that ensure participation from all students in mixed-level classrooms.

Generate a comprehensive Socratic discussion question set and complete facilitation guide that systematically promotes critical thinking on the given topic.

───────────────────────────
[Input Variables]
───────────────────────────
• Topic: ___ (specific thesis or text)
• Student Level Distribution: Beginner ___% / Intermediate ___% / Advanced ___% (mixed-level group)
• Class Duration: ___ minutes
• Class Size: ___ students
• Prior Learning: ___ (related concepts covered in previous sessions)
• Discussion Format: Whole-class / Small group → Whole-class / Fishbowl / Socratic Circle

───────────────────────────
[Output Structure]
───────────────────────────

## 1. Pre-Discussion Warm-up (10% of total time)
- 2 priming questions: Questions for individual reflection first (journaling or Think-Pair-Share)
- Cognitive load management: Key term definitions and background knowledge activation strategies
- 3 suggested ground rules for psychological safety

## 2. Staged Question Set (Scaffolding Structure)

Use the following format for each stage:

### Stage 1 - Concept Clarification (3 questions) | Time: ___ min
Cognitive Level: Bloom's Remember-Understand
| Question | Beginner Variant | Advanced Variant | Expected Response | Follow-up | Facilitator Guide |
|----------|-----------------|------------------|-------------------|-----------|-------------------|
| Q1 | … | … | … | … | … |

### Stage 2 - Assumption Testing (3 questions) | Time: ___ min
Cognitive Level: Bloom's Analyze
(same table format)

### Stage 3 - Evidence Probing (3 questions) | Time: ___ min
Cognitive Level: Bloom's Analyze-Evaluate
(same table format)

### Stage 4 - Perspective Shifting (2 questions) | Time: ___ min
Cognitive Level: Bloom's Evaluate
(same table format)

### Stage 5 - Synthesis & Reflection (2 questions) | Time: ___ min
Cognitive Level: Bloom's Create
(same table format)

## 3. Differentiation Strategies for Mixed-Level Groups
- Beginners: 3 sentence starters to encourage participation
- Intermediate: Evidence-demand frames for deepening argumentation
- Advanced: Metacognitive questions and discussion leader role assignments

## 4. Discussion Facilitation Guide
- 3 strategies for handling silence
- Intervention methods when one student dominates
- Redirection techniques when discussion goes off-topic
- Precautions for emotionally sensitive subjects

## 5. Formative Assessment through Discussion
- Real-time observation checklist during discussion (5 items)
- 2 post-discussion Exit Ticket questions
- 1 self-assessment and 1 peer-assessment question
- Instructor discussion quality rubric (4 levels: Exemplary / Proficient / Developing / Beginning)

## 6. Time Allocation Timeline
Provide a minute-by-minute timeline table allocating the entire class period.

[Quality Constraints]
- All questions must be open-ended (no yes/no answers possible)
- Reflect at least 3 Paul-Elder critical thinking standards (clarity, accuracy, depth, breadth, logic)
- Apply Cognitive Load Theory with progressively increasing difficulty across stages
- All follow-up questions must include conditional branching based on student responses`,tags:["Socratic Method","Discussion","Critical Thinking"]}},{id:3,cat:"education",score:94,technique:"Role + Constraints + Structure",ko:{title:"루브릭 기반 과제 피드백 작성기",prompt:`당신은 교육 평가 및 측정(Educational Assessment & Measurement) 분야에서 15년 이상 경력을 쌓은 수석 전문가입니다.
대학 및 K-12 환경에서 수천 건의 루브릭을 개발하고 피드백 프레임워크를 설계한 경험이 있으며, 성장 지향적(growth-oriented) 피드백 이론과 Hattie & Timperley의 피드백 모델을 실무에 적용하는 전문가입니다.
특히 분석적 루브릭(Analytic Rubric)의 설계, 기준별 진단 피드백, 그리고 학생의 자기조절학습(Self-Regulated Learning)을 촉진하는 피드백 전략에 깊은 전문성을 갖고 있습니다.

다음 과제에 대해 체계적인 분석적 루브릭을 생성하고, 각 기준별 상세 피드백과 개선 로드맵을 작성해주세요.

───────────────────────────
[입력 변수]
───────────────────────────
• 과목: ___ (예: 학술적 글쓰기, 소프트웨어 공학)
• 과제 유형: 에세이 / 연구 보고서 / 프로젝트 / 발표 / 코딩 과제 / 포트폴리오
• 학생 수준: ___ (학년, 전공, 해당 과목 이수 경험)
• 과제 내용 요약: ___ (학생이 제출한 과제의 핵심 내용을 500자 이내로 요약)
• 과제 학습목표: ___ (이 과제가 달성하고자 하는 구체적 학습목표)
• 평가 비중: ___% (전체 성적에서 차지하는 비율)

───────────────────────────
[출력 구조]
───────────────────────────

## 1. 분석적 루브릭 (Analytic Rubric)

아래 6개 평가 기준에 대해 5단계 수준별 기술(descriptor)을 포함한 루브릭 표를 작성하세요:

| 평가 기준 | 탁월(5) | 우수(4) | 보통(3) | 미흡(2) | 부족(1) | 배점 |
|-----------|---------|---------|---------|---------|---------|------|
| ① 내용의 정확성과 학문적 깊이 | … | … | … | … | … | /5 |
| ② 논리적 구성과 논증 흐름 | … | … | … | … | … | /5 |
| ③ 창의성과 독창적 관점 | … | … | … | … | … | /5 |
| ④ 근거 자료의 질과 적절성 | … | … | … | … | … | /5 |
| ⑤ 형식, 표현력, 학술적 작문 | … | … | … | … | … | /5 |
| ⑥ 학습목표 달성도 | … | … | … | … | … | /5 |

## 2. 기준별 상세 피드백

각 평가 기준(①~⑥)마다 다음을 포함하세요:

### 기준 ①: [기준명]
- **점수**: ___/5
- **근거**: 과제에서 구체적인 부분을 인용하여 점수의 이유를 설명
- **잘한 점** (2개): 성장 지향적 언어로 구체적 성취를 인정
  예시: "~한 부분에서 ~한 역량이 명확히 드러납니다."
- **개선점** (2개): 비판이 아닌 발전 가능성의 관점에서 서술
  예시: "~를 추가하면 논증이 더욱 설득력을 갖출 것입니다."
- **모범 사례 참조**: 해당 기준에서 탁월한 수준의 예시 또는 참고 자료 제시
- **구체적 개선 행동 제안**: 다음 과제 전까지 실행할 수 있는 구체적 행동 1-2개

(위 형식을 기준 ②~⑥까지 반복)

## 3. 개선 로드맵 (Improvement Roadmap)

| 우선순위 | 개선 영역 | 현재 수준 | 목표 수준 | 구체적 실행 방안 | 예상 소요 기간 | 참고 자료 |
|----------|-----------|-----------|-----------|-----------------|----------------|-----------|
| 1 | … | … | … | … | … | … |
| 2 | … | … | … | … | … | … |
| 3 | … | … | … | … | … | … |

## 4. 성장 지향적 피드백 언어 가이드라인
- 사용해야 할 표현 5개 (예: "~의 가능성을 보여줍니다", "~를 발전시키면")
- 피해야 할 표현 5개 (예: "틀렸습니다", "부족합니다")
- Dweck의 성장 마인드셋 이론에 기반한 피드백 프레이밍 원칙

## 5. 종합 평가

| 항목 | 내용 |
|------|------|
| 총점 | ___/30 |
| 등급 | A+ ~ F (기관 기준 적용) |
| 핵심 강점 요약 | 100자 이내 |
| 핵심 개선점 요약 | 100자 이내 |
| 전체 피드백 메시지 | 200자 이내, 격려와 방향 제시를 균형있게 |

## 6. 후속 학습 권장 사항
- 이 과제 결과를 바탕으로 한 자기주도학습 계획 제안 (3단계)
- 동료 학습(Peer Learning) 활동 제안 1개
- 교수자 면담 시 논의할 핵심 질문 2개

[품질 기준]
- 모든 피드백은 Hattie의 피드백 4단계(과제/과정/자기조절/자아 수준) 중 과제와 과정 수준에 집중
- 부정적 피드백과 긍정적 피드백의 비율은 1:3 이상 유지
- 모든 개선 제안은 구체적(Specific), 실행 가능한(Actionable), 시간 제한이 있는(Time-bound) SAT 원칙 준수
- 학생의 감정적 수용성을 고려한 어조(tone) 유지`,tags:["루브릭","피드백","평가"]},en:{title:"Rubric-Based Assignment Feedback Writer",prompt:`You are a senior specialist in Educational Assessment & Measurement with over 15 years of experience.
You have developed thousands of rubrics and designed feedback frameworks across university and K-12 settings, and you are an expert in applying growth-oriented feedback theory and Hattie & Timperley's feedback model in practice.
You hold deep expertise in analytic rubric design, criterion-level diagnostic feedback, and feedback strategies that promote Self-Regulated Learning (SRL).

Generate a systematic analytic rubric for the following assignment, then produce detailed criterion-level feedback and an improvement roadmap.

───────────────────────────
[Input Variables]
───────────────────────────
• Subject: ___ (e.g., Academic Writing, Software Engineering)
• Assignment Type: Essay / Research Report / Project / Presentation / Coding Assignment / Portfolio
• Student Level: ___ (year, major, prior experience with this course)
• Assignment Summary: ___ (summarize the student's submission in under 500 words)
• Assignment Learning Objectives: ___ (specific objectives this assignment targets)
• Grade Weight: ___% (percentage of overall course grade)

───────────────────────────
[Output Structure]
───────────────────────────

## 1. Analytic Rubric

Create a rubric table with 5-level descriptors for each of the 6 criteria:

| Criterion | Exemplary (5) | Excellent (4) | Proficient (3) | Developing (2) | Beginning (1) | Score |
|-----------|---------------|---------------|-----------------|-----------------|----------------|-------|
| 1. Accuracy & scholarly depth | … | … | … | … | … | /5 |
| 2. Logical structure & argumentation | … | … | … | … | … | /5 |
| 3. Creativity & originality | … | … | … | … | … | /5 |
| 4. Quality & relevance of evidence | … | … | … | … | … | /5 |
| 5. Format, expression & academic writing | … | … | … | … | … | /5 |
| 6. Learning objective achievement | … | … | … | … | … | /5 |

## 2. Criterion-Level Detailed Feedback

For each criterion (1-6), provide:

### Criterion 1: [Name]
- **Score**: ___/5
- **Justification**: Cite specific parts of the submission to explain the score
- **Strengths** (2): Acknowledge specific achievements using growth-oriented language
  Example: "Your approach to ___ clearly demonstrates developing expertise in ___."
- **Areas for Growth** (2): Frame as opportunities, not criticisms
  Example: "Incorporating ___ would strengthen the persuasiveness of your argument."
- **Exemplar Reference**: Provide an example or reference of exemplary work for this criterion
- **Specific Next Steps**: 1-2 concrete actions the student can take before the next assignment

(Repeat the above format for criteria 2-6)

## 3. Improvement Roadmap

| Priority | Area | Current Level | Target Level | Action Plan | Timeline | Resources |
|----------|------|---------------|--------------|-------------|----------|-----------|
| 1 | … | … | … | … | … | … |
| 2 | … | … | … | … | … | … |
| 3 | … | … | … | … | … | … |

## 4. Growth-Oriented Language Guidelines
- 5 phrases to use (e.g., "shows promising development in," "building toward")
- 5 phrases to avoid (e.g., "wrong," "inadequate," "failed to")
- Feedback framing principles based on Dweck's Growth Mindset theory

## 5. Overall Assessment

| Item | Details |
|------|---------|
| Total Score | ___/30 |
| Grade | A+ through F (apply institutional standards) |
| Key Strengths Summary | Under 100 words |
| Key Growth Areas Summary | Under 100 words |
| Overall Feedback Message | Under 200 words, balancing encouragement with direction |

## 6. Follow-up Learning Recommendations
- Self-directed learning plan based on this assignment (3 steps)
- 1 peer learning activity suggestion
- 2 key questions to discuss during office hours

[Quality Constraints]
- All feedback must focus on Hattie's task and process levels (not self level)
- Maintain a minimum 3:1 ratio of positive to constructive feedback
- All improvement suggestions must follow SAT principles: Specific, Actionable, Time-bound
- Maintain a tone that considers the student's emotional receptivity`,tags:["Rubric","Feedback","Assessment"]}},{id:4,cat:"education",score:91,technique:"Role + Persona + Structure",ko:{title:"차별화 수업 지도안 설계",prompt:`당신은 차별화 교수법(Differentiated Instruction)과 보편적 학습 설계(Universal Design for Learning, UDL)의 교차 영역에서 15년 이상 경력을 쌓은 수석 교육 설계 전문가입니다.
Carol Ann Tomlinson의 차별화 교수 모델, CAST의 UDL 가이드라인, 그리고 다중지능이론(Gardner)을 통합적으로 적용하여 모든 학습자가 성공할 수 있는 포용적 수업을 설계합니다.
특히 학습자 프로파일 분석, 계층적 활동 설계(Tiered Activities), 유연한 그룹핑 전략, 그리고 테크놀로지 기반 맞춤형 학습에 깊은 전문성을 보유하고 있습니다.

다양한 학습 수준, 관심사, 학습 양식(learning profile)의 학생들을 위한 포괄적이고 실행 가능한 차별화 수업 지도안을 설계해주세요.

───────────────────────────
[입력 변수]
───────────────────────────
• 과목: ___ (예: 수학, 국어, 과학)
• 단원/주제: ___
• 수업 시간: ___분
• 학급 규모: ___명
• 학급 구성: 상위 ___% / 중위 ___% / 하위 ___%
• 특수 학습 요구 학생: ___ (IEP 학생, 영재, ELL 학습자 등)
• 활용 가능한 테크놀로지: ___ (1:1 기기, 학습관리시스템, 인터넷 접근 등)
• 선행 학습 진단 결과: ___ (사전 평가 결과 요약)

───────────────────────────
[출력 구조]
───────────────────────────

## 1. 학습자 프로파일 분석 (Learner Profile Analysis)

다음 차원에서 학급을 분석하고 그룹핑 전략을 수립하세요:
| 분석 차원 | 상위 그룹 특성 | 중위 그룹 특성 | 하위 그룹 특성 | 특수 학습 요구 |
|-----------|---------------|---------------|---------------|----------------|
| 준비도(Readiness) | … | … | … | … |
| 관심사(Interest) | … | … | … | … |
| 학습 양식(Learning Profile) | … | … | … | … |

## 2. UDL 기반 수업 프레임워크

### 참여(Engagement) - 왜 배우는가
- 동기 유발 전략 3가지 (선택권 제공, 자율성, 관련성)
- 자기조절 지원 도구

### 표상(Representation) - 무엇을 배우는가
- 정보 제시 방식 다양화 (시각/청각/텍스트/실물)
- 핵심 개념의 다중 표현 방법

### 행동과 표현(Action & Expression) - 어떻게 보여주는가
- 학습 결과 표현 방법 3가지 이상 (글쓰기, 발표, 시각화, 코딩 등)

## 3. 학습 목표 차별화 (Tiered Objectives)

| 수준 | 학습 목표 | 블룸 단계 | 성공 기준 |
|------|-----------|-----------|-----------|
| Tier 1 (기본) | 전체 학생 필수 달성 | … | … |
| Tier 2 (심화) | 중상위 학생 도전 | … | … |
| Tier 3 (확장) | 상위 및 영재 학생 | … | … |
| 보충 목표 | 하위/특수 학습 요구 학생 | … | … |

## 4. 계층적 학습 활동 설계 (Tiered Activities)

### Tier 1 활동 (전체 학생 접근 가능)
- 활동 설명, 소요 시간, 필요 자료
- 스캐폴딩 제공 방법

### Tier 2 활동 (중상위 도전)
- 활동 설명, 소요 시간, 필요 자료
- 자기주도 탐구 요소

### Tier 3 활동 (확장 및 심화)
- 활동 설명, 소요 시간, 필요 자료
- 개방형 문제 해결/창작 과제

### 선택형 활동 메뉴 (Choice Board)
3x3 격자로 9개 활동 옵션 제시 (다중지능 기반, 학생이 3개 이상 선택)

## 5. 유연한 그룹핑 전략 (Flexible Grouping)

| 활동 단계 | 그룹 유형 | 구성 기준 | 그룹 크기 | 역할 배정 | 전환 방법 |
|-----------|-----------|-----------|-----------|-----------|-----------|
| 도입 | 전체 | - | 전체 | - | - |
| 전개 1 | 동질집단 | 준비도 | 3-4명 | … | … |
| 전개 2 | 이질집단 | 혼합 | 4-5명 | … | … |
| 정리 | 파트너 | 관심사 | 2명 | … | … |

## 6. 형성적 체크인 (Formative Check-ins)

수업 중 3회 이상의 형성적 체크인 포인트를 설정하세요:
| 시점 | 체크인 방법 | 확인 내용 | 데이터 활용 방법 |
|------|-------------|-----------|-----------------|
| 도입 후 | … | … | 그룹 재배정 여부 결정 |
| 전개 중반 | … | … | 스캐폴딩 조정 |
| 정리 전 | … | … | 다음 차시 계획 반영 |

## 7. 테크놀로지 통합 옵션

| 도구 | 활용 목적 | 차별화 기능 | 대안(오프라인) |
|------|-----------|-------------|----------------|
| … | … | 적응형 학습 경로 제공 | … |
| … | … | 멀티미디어 결과물 제작 | … |
| … | … | 실시간 형성평가 | … |

## 8. 편의 제공 전략 (Accommodation Strategies)
- IEP 학생을 위한 수정(modification) 및 편의(accommodation) 목록
- ELL 학습자를 위한 언어 지원 전략
- 감각적 과부하 방지를 위한 환경 조정
- 시간 연장 및 대안적 과제 제출 옵션

## 9. 수업 흐름 타임라인

전체 수업 시간을 분 단위로 상세히 배분하세요:
| 시간 | 단계 | 교사 활동 | 학생 활동 | 차별화 포인트 | 그룹 형태 |
|------|------|-----------|-----------|---------------|-----------|
| 0-5분 | 도입 | … | … | … | 전체 |
| … | … | … | … | … | … |

[품질 기준]
- UDL 3원칙(참여/표상/행동과 표현) 각각에 최소 2개 전략 포함
- 모든 계층적 활동은 동일한 핵심 개념을 다루되 복잡도와 추상성만 차별화
- 편의 제공은 학습 목표를 낮추는 것이 아니라 접근성을 높이는 방향으로 설계
- 교사 1인이 실제로 실행 가능한 현실적 수준의 계획 제시`,tags:["차별화수업","수업설계","맞춤교육"]},en:{title:"Differentiated Instruction Lesson Plan",prompt:`You are a senior instructional design specialist with over 15 years of experience at the intersection of Differentiated Instruction (DI) and Universal Design for Learning (UDL).
You integrate Carol Ann Tomlinson's differentiation model, CAST's UDL Guidelines, and Gardner's Multiple Intelligences theory to design inclusive lessons where every learner can succeed.
You hold deep expertise in learner profile analysis, tiered activity design, flexible grouping strategies, and technology-enhanced personalized learning.

Design a comprehensive, actionable differentiated lesson plan for students with diverse readiness levels, interests, and learning profiles.

───────────────────────────
[Input Variables]
───────────────────────────
• Subject: ___ (e.g., Mathematics, Language Arts, Science)
• Unit/Topic: ___
• Class Duration: ___ minutes
• Class Size: ___ students
• Class Composition: Advanced ___% / Intermediate ___% / Struggling ___%
• Special Learning Needs: ___ (IEP students, gifted, ELL learners, etc.)
• Available Technology: ___ (1:1 devices, LMS, internet access, etc.)
• Pre-assessment Results: ___ (summary of diagnostic assessment data)

───────────────────────────
[Output Structure]
───────────────────────────

## 1. Learner Profile Analysis

Analyze the class across these dimensions and establish grouping strategies:
| Dimension | Advanced Group | Intermediate Group | Struggling Group | Special Needs |
|-----------|---------------|-------------------|------------------|---------------|
| Readiness | … | … | … | … |
| Interest | … | … | … | … |
| Learning Profile | … | … | … | … |

## 2. UDL-Based Lesson Framework

### Engagement - The "Why" of Learning
- 3 motivation strategies (choice, autonomy, relevance)
- Self-regulation support tools

### Representation - The "What" of Learning
- Multiple modalities for information delivery (visual/auditory/text/hands-on)
- Multiple representations of core concepts

### Action & Expression - The "How" of Learning
- 3+ ways for students to demonstrate learning (writing, presentation, visualization, coding, etc.)

## 3. Tiered Learning Objectives

| Tier | Learning Objective | Bloom's Level | Success Criteria |
|------|-------------------|---------------|------------------|
| Tier 1 (Core) | All students must achieve | … | … |
| Tier 2 (Extension) | Challenge for upper-intermediate & advanced | … | … |
| Tier 3 (Enrichment) | Advanced & gifted students | … | … |
| Support Objective | Struggling & special needs students | … | … |

## 4. Tiered Activities Design

### Tier 1 Activity (accessible to all students)
- Activity description, time required, materials needed
- Scaffolding methods provided

### Tier 2 Activity (intermediate-advanced challenge)
- Activity description, time required, materials needed
- Self-directed inquiry elements

### Tier 3 Activity (enrichment & extension)
- Activity description, time required, materials needed
- Open-ended problem solving / creative tasks

### Choice Board (3x3 Grid)
Present 9 activity options based on Multiple Intelligences (students select 3+)

## 5. Flexible Grouping Strategy

| Phase | Group Type | Basis | Size | Role Assignment | Transition Method |
|-------|-----------|-------|------|-----------------|-------------------|
| Introduction | Whole class | - | All | - | - |
| Development 1 | Homogeneous | Readiness | 3-4 | … | … |
| Development 2 | Heterogeneous | Mixed | 4-5 | … | … |
| Closure | Partners | Interest | 2 | … | … |

## 6. Formative Check-ins

Establish 3+ formative check-in points during instruction:
| Timing | Method | What to Assess | How Data Informs Teaching |
|--------|--------|----------------|--------------------------|
| After intro | … | … | Decide whether to regroup |
| Mid-development | … | … | Adjust scaffolding |
| Before closure | … | … | Inform next lesson planning |

## 7. Technology Integration Options

| Tool | Purpose | Differentiation Feature | Offline Alternative |
|------|---------|------------------------|---------------------|
| … | … | Adaptive learning pathways | … |
| … | … | Multimedia product creation | … |
| … | … | Real-time formative assessment | … |

## 8. Accommodation Strategies
- Modifications and accommodations list for IEP students
- Language support strategies for ELL learners
- Environmental adjustments to prevent sensory overload
- Extended time and alternative submission options

## 9. Lesson Flow Timeline

Provide a minute-by-minute breakdown:
| Time | Phase | Teacher Actions | Student Actions | Differentiation Point | Grouping |
|------|-------|----------------|-----------------|----------------------|----------|
| 0-5 min | Introduction | … | … | … | Whole class |
| … | … | … | … | … | … |

[Quality Constraints]
- Include at least 2 strategies for each UDL principle (Engagement / Representation / Action & Expression)
- All tiered activities must address the same core concept, varying only in complexity and abstraction
- Accommodations must increase accessibility without lowering learning objectives
- Plans must be realistically executable by a single teacher in the classroom`,tags:["Differentiated Instruction","Lesson Design","Personalized Learning"]}},{id:5,cat:"education",score:93,technique:"Role + Structured Output",ko:{title:"형성평가 문항 은행 생성기",prompt:`당신은 교육 측정 및 평가(Educational Measurement & Evaluation) 분야에서 15년 이상의 전문 경력을 보유한 수석 문항 개발 전문가입니다.
한국교육과정평가원(KICE), 대학수학능력시험, 그리고 국제학업성취도평가(PISA, TIMSS)의 문항 개발 원리를 깊이 이해하고 있으며, 고전검사이론(CTT)과 문항반응이론(IRT)에 기반한 문항 품질 분석에 능숙합니다.
특히 형성평가의 교수학적 기능에 초점을 맞추어, 학생의 오개념(misconception)을 정밀하게 진단하고 학습 격차를 식별하는 문항 설계에 탁월한 전문성을 갖고 있습니다.

다음 학습 주제에 대한 전문적 수준의 형성평가 문항 은행을 생성하고, 각 문항에 대한 심층 분석을 제공해주세요.

───────────────────────────
[입력 변수]
───────────────────────────
• 과목: ___ (예: 수학, 과학, 사회)
• 주제/단원: ___
• 학습 목표: ___ (이 형성평가가 측정하고자 하는 구체적 목표, 복수 가능)
• 대상 학년: ___
• 선수학습 내용: ___ (학생이 이미 학습한 관련 개념)
• 일반적 오개념: ___ (해당 주제에서 학생들이 흔히 보이는 오개념 또는 오류 패턴)
• 평가 시점: 수업 중 / 수업 후 / 단원 중간 점검

───────────────────────────
[출력 구조]
───────────────────────────

## A. 선다형 문항 (Multiple Choice) - 6문항

각 문항에 대해 다음을 포함하세요:

### 문항 A-1
- **문항**: (명확하고 간결한 질문)
- **선택지**: ① ② ③ ④ (4지선다)
- **정답**: ___
- **인지 수준**: 블룸 분류 해당 단계 (기억/이해/적용/분석/평가/창조)
- **난이도 추정**: 상/중/하 (예상 정답률: __%)
- **오답 매력도 분석 (Distractor Analysis)**:
  | 선택지 | 설계 의도 | 선택 시 시사하는 오개념 |
  |--------|-----------|------------------------|
  | ① | … | … |
  | ② | … | … |
  | ③(정답) | … | - |
  | ④ | … | … |
- **채점 및 해설**: 정답 근거와 각 오답이 왜 틀린지 교수학적 설명
- **교수적 활용**: 이 문항 결과로 파악할 수 있는 학습 상태와 후속 지도 방향

(위 형식으로 A-2 ~ A-6까지 반복)

## B. 단답형 문항 (Short Answer) - 4문항

각 문항에 대해:
- **문항**: (개방형 또는 제한적 응답 요구)
- **인지 수준**: 블룸 분류 단계
- **난이도 추정**: 상/중/하 (예상 정답률: __%)
- **예상 정답**: (완전 정답 및 허용 가능한 변형 답안 목록)
- **채점 가이드**:
  | 점수 | 기준 | 예시 답안 |
  |------|------|-----------|
  | 만점(3) | … | … |
  | 부분 점수(2) | … | … |
  | 부분 점수(1) | … | … |
  | 0점 | … | … |
- **흔한 오답 패턴**: 학생들이 자주 보이는 오류 2-3개와 각각의 원인 분석

## C. 서술형/논술형 문항 (Extended Response) - 2문항

각 문항에 대해:
- **문항**: (복합적 사고를 요구하는 개방형 질문)
- **인지 수준**: 블룸 분류 상위 단계 (분석/평가/창조)
- **난이도 추정**: 상/중/하
- **모범 답안**: 상세하고 구조화된 답안
- **채점 루브릭 (4단계)**:
  | 평가 요소 | 우수(4) | 양호(3) | 보통(2) | 미흡(1) |
  |-----------|---------|---------|---------|---------|
  | 개념 이해 | … | … | … | … |
  | 논리적 설명 | … | … | … | … |
  | 적용/확장 | … | … | … | … |

## D. 수행평가 과제 (Performance Task) - 2문항

각 과제에 대해:
- **과제 상황**: 실생활 맥락의 시나리오 (authentic context)
- **과제 요구사항**: 학생이 수행해야 할 구체적 활동
- **인지 수준**: 블룸 분류 상위 단계
- **난이도 추정**: 상/중/하
- **수행 기준**: 과제 완수의 구체적 기준
- **채점 루브릭 (4단계)**: 과정과 결과를 모두 평가하는 루브릭
- **예시 산출물**: 우수 수준의 예시 결과물 설명
- **교수적 활용**: 이 과제를 통해 확인할 수 있는 역량과 후속 지도 전략

## E. 문항 은행 종합 분석

### 난이도 분포표
| 난이도 | 문항 번호 | 비율 | 목표 비율 |
|--------|-----------|------|-----------|
| 하(쉬움) | … | ___% | 30% |
| 중(보통) | … | ___% | 50% |
| 상(어려움) | … | ___% | 20% |

### 인지 수준 분포표
| 블룸 단계 | 문항 번호 | 비율 |
|-----------|-----------|------|
| 기억 | … | ___% |
| 이해 | … | ___% |
| 적용 | … | ___% |
| 분석 | … | ___% |
| 평가 | … | ___% |
| 창조 | … | ___% |

### 학습목표-문항 매핑표 (Blueprint)
| 학습 목표 | 관련 문항 | 문항 유형 | 인지 수준 |
|-----------|-----------|-----------|-----------|
| 목표 1 | … | … | … |
| 목표 2 | … | … | … |

## F. 오개념 진단 가이드
- 각 오개념별로 해당 오개념을 포착할 수 있는 문항 목록
- 오개념 확인 후 권장되는 교정 활동(remediation) 제안

[품질 기준]
- 모든 선다형 문항은 1정답 원칙 엄수 (논란의 여지 없는 명확한 정답)
- 오답 매력도가 균형 잡히도록 설계 (하나의 오답에 응답이 쏠리지 않도록)
- 문항 간 독립성 유지 (한 문항의 정답이 다른 문항의 힌트가 되지 않도록)
- 성별, 문화, 사회경제적 편향이 없는 문항 작성 (DIF 고려)
- 모든 문항은 교육과정 성취기준에 직접적으로 연계`,tags:["형성평가","문항개발","평가"]},en:{title:"Formative Assessment Question Bank Creator",prompt:`You are a senior item development specialist with over 15 years of professional experience in Educational Measurement & Evaluation.
You possess deep understanding of item development principles from major assessment programs (e.g., PISA, TIMSS, AP, SAT) and are proficient in item quality analysis based on Classical Test Theory (CTT) and Item Response Theory (IRT).
You specialize in designing formative assessment items that precisely diagnose student misconceptions and identify learning gaps, with a focus on the pedagogical function of formative assessment.

Generate a professional-grade formative assessment item bank for the following topic, with in-depth analysis for each item.

───────────────────────────
[Input Variables]
───────────────────────────
• Subject: ___ (e.g., Mathematics, Science, Social Studies)
• Topic/Unit: ___
• Learning Objectives: ___ (specific objectives this assessment measures; multiple allowed)
• Grade Level: ___
• Prerequisite Knowledge: ___ (related concepts students have already learned)
• Common Misconceptions: ___ (frequent misconceptions or error patterns for this topic)
• Assessment Timing: During lesson / After lesson / Mid-unit check

───────────────────────────
[Output Structure]
───────────────────────────

## A. Multiple Choice Items - 6 Items

For each item, include:

### Item A-1
- **Stem**: (clear and concise question)
- **Options**: (A) (B) (C) (D)
- **Key**: ___
- **Cognitive Level**: Bloom's level (Remember/Understand/Apply/Analyze/Evaluate/Create)
- **Estimated Difficulty**: Easy/Medium/Hard (estimated correct response rate: __%)
- **Distractor Analysis**:
  | Option | Design Intent | Misconception Indicated if Selected |
  |--------|--------------|-------------------------------------|
  | (A) | … | … |
  | (B) | … | … |
  | (C) key | … | - |
  | (D) | … | … |
- **Scoring & Rationale**: Evidence for correct answer and pedagogical explanation for why each distractor is incorrect
- **Instructional Use**: What this item reveals about student understanding and recommended follow-up instruction

(Repeat format for Items A-2 through A-6)

## B. Short Answer Items - 4 Items

For each item:
- **Stem**: (open-ended or constrained response)
- **Cognitive Level**: Bloom's level
- **Estimated Difficulty**: Easy/Medium/Hard (estimated correct response rate: __%)
- **Expected Answers**: (full-credit answer and acceptable variations)
- **Scoring Guide**:
  | Score | Criteria | Example Response |
  |-------|----------|-----------------|
  | Full (3) | … | … |
  | Partial (2) | … | … |
  | Partial (1) | … | … |
  | Zero (0) | … | … |
- **Common Error Patterns**: 2-3 frequent student errors with causal analysis for each

## C. Extended Response Items - 2 Items

For each item:
- **Stem**: (open-ended question requiring complex thinking)
- **Cognitive Level**: Bloom's upper levels (Analyze/Evaluate/Create)
- **Estimated Difficulty**: Easy/Medium/Hard
- **Model Answer**: Detailed, structured response
- **Scoring Rubric (4-level)**:
  | Dimension | Exemplary (4) | Proficient (3) | Developing (2) | Beginning (1) |
  |-----------|---------------|-----------------|-----------------|----------------|
  | Conceptual understanding | … | … | … | … |
  | Logical explanation | … | … | … | … |
  | Application/extension | … | … | … | … |

## D. Performance Tasks - 2 Items

For each task:
- **Scenario**: Real-world, authentic context
- **Task Requirements**: Specific activities students must perform
- **Cognitive Level**: Bloom's upper levels
- **Estimated Difficulty**: Easy/Medium/Hard
- **Performance Criteria**: Specific standards for task completion
- **Scoring Rubric (4-level)**: Evaluating both process and product
- **Exemplar**: Description of an exemplary student product
- **Instructional Use**: Competencies assessed and follow-up instructional strategies

## E. Item Bank Summary Analysis

### Difficulty Distribution
| Difficulty | Item Numbers | Percentage | Target |
|------------|-------------|------------|--------|
| Easy | … | ___% | 30% |
| Medium | … | ___% | 50% |
| Hard | … | ___% | 20% |

### Cognitive Level Distribution
| Bloom's Level | Item Numbers | Percentage |
|---------------|-------------|------------|
| Remember | … | ___% |
| Understand | … | ___% |
| Apply | … | ___% |
| Analyze | … | ___% |
| Evaluate | … | ___% |
| Create | … | ___% |

### Assessment Blueprint (Objective-Item Mapping)
| Learning Objective | Related Items | Item Type | Cognitive Level |
|-------------------|---------------|-----------|-----------------|
| Objective 1 | … | … | … |
| Objective 2 | … | … | … |

## F. Misconception Diagnostic Guide
- For each misconception, list the items designed to detect it
- Recommended remediation activities after misconception identification

[Quality Constraints]
- All MC items must have one unambiguous correct answer
- Distractors must be balanced in attractiveness (no single distractor should dominate)
- Items must be independent (answering one must not provide clues for another)
- Items must be free from gender, cultural, and socioeconomic bias (DIF consideration)
- All items must directly align with curriculum standards`,tags:["Formative Assessment","Item Development","Evaluation"]}},{id:6,cat:"coding",score:96,technique:"Role + Checklist + Analysis",ko:{title:"보안/성능 분석 포함 코드 리뷰",prompt:`당신은 시니어 소프트웨어 엔지니어이자 보안 전문가입니다. 다음 코드에 대해 종합적인 코드 리뷰를 수행해주세요.

[언어/프레임워크]: ___
[코드의 목적]: ___

\`\`\`
(코드를 여기에 붙여넣기)
\`\`\`

다음 관점에서 분석해주세요:

1. 보안 분석 (Critical):
   - SQL Injection, XSS, CSRF 취약점 여부
   - 인증/인가 관련 문제
   - 민감 데이터 노출 위험
   - 의존성 취약점 가능성

2. 성능 분석:
   - 시간/공간 복잡도 분석
   - N+1 쿼리, 불필요한 연산 여부
   - 메모리 누수 가능성
   - 캐싱 적용 가능 여부

3. 코드 품질:
   - SOLID 원칙 준수 여부
   - 중복 코드, 데드 코드
   - 네이밍 컨벤션 일관성
   - 에러 핸들링 적절성

4. 개선 제안:
   - 리팩토링 전/후 코드 비교 (중요도 상위 3개)
   - 우선순위: [Critical] > [Major] > [Minor]
   - 각 제안에 대한 구체적인 수정 코드 포함

종합 평가를 A-F 등급으로 매기고, 즉시 수정해야 할 항목을 우선순위로 정리해주세요.`,tags:["코드리뷰","보안","성능"]},en:{title:"Code Review with Security/Performance Analysis",prompt:`You are a senior software engineer and security expert. Perform a comprehensive code review of the following code.

[Language/Framework]: ___
[Purpose of Code]: ___

\`\`\`
(paste code here)
\`\`\`

Analyze from these perspectives:

1. Security Analysis (Critical):
   - SQL Injection, XSS, CSRF vulnerabilities
   - Authentication/authorization issues
   - Sensitive data exposure risks
   - Dependency vulnerability potential

2. Performance Analysis:
   - Time/space complexity analysis
   - N+1 queries, unnecessary computations
   - Memory leak potential
   - Caching opportunities

3. Code Quality:
   - SOLID principles compliance
   - Code duplication, dead code
   - Naming convention consistency
   - Error handling adequacy

4. Improvement Suggestions:
   - Before/after code comparison (top 3 by importance)
   - Priority: [Critical] > [Major] > [Minor]
   - Include specific corrected code for each suggestion

Give an overall grade (A-F) and list items requiring immediate attention by priority.`,tags:["Code Review","Security","Performance"]}},{id:7,cat:"coding",score:93,technique:"Structure + Constraints",ko:{title:"OpenAPI 스펙 기반 API 엔드포인트 설계",prompt:`당신은 API 아키텍트입니다. 다음 기능에 대한 RESTful API 엔드포인트를 OpenAPI 3.0 스펙으로 설계해주세요.

[서비스명]: ___
[핵심 리소스]: ___
[인증 방식]: Bearer Token / API Key / OAuth2

다음 사항을 포함해주세요:

1. 엔드포인트 설계:
   - CRUD 작업별 HTTP 메서드와 URL 패턴
   - 중첩 리소스 관계 처리 방법
   - 쿼리 파라미터 (필터링, 정렬, 페이지네이션)

2. 요청/응답 스키마:
   - JSON Schema로 정의 (필수/선택 필드 구분)
   - 유효성 검증 규칙 (타입, 범위, 패턴)
   - 예제 요청/응답 페이로드

3. 에러 처리:
   - HTTP 상태 코드별 에러 응답 형식
   - 비즈니스 로직 에러 코드 체계
   - 에러 메시지 국제화 구조

4. OpenAPI 3.0 YAML 스펙:
   - paths, components/schemas, securitySchemes 포함
   - 각 엔드포인트에 description, summary 포함

Rate Limiting, 버전 관리, HATEOAS 적용 여부도 권장 사항으로 포함해주세요.`,tags:["API설계","OpenAPI","REST"]},en:{title:"API Endpoint Design with OpenAPI Spec",prompt:`You are an API architect. Design RESTful API endpoints using OpenAPI 3.0 specification for the following feature.

[Service Name]: ___
[Core Resource]: ___
[Auth Method]: Bearer Token / API Key / OAuth2

Include the following:

1. Endpoint Design:
   - HTTP methods and URL patterns for CRUD operations
   - Nested resource relationship handling
   - Query parameters (filtering, sorting, pagination)

2. Request/Response Schema:
   - JSON Schema definitions (required/optional fields)
   - Validation rules (type, range, pattern)
   - Example request/response payloads

3. Error Handling:
   - Error response format per HTTP status code
   - Business logic error code system
   - Error message internationalization structure

4. OpenAPI 3.0 YAML Spec:
   - Include paths, components/schemas, securitySchemes
   - Include description and summary for each endpoint

Also include recommendations on Rate Limiting, versioning strategy, and HATEOAS applicability.`,tags:["API Design","OpenAPI","REST"]}},{id:8,cat:"coding",score:94,technique:"Role + Analysis + Structure",ko:{title:"정규화 포함 데이터베이스 스키마 최적화",prompt:`당신은 데이터베이스 아키텍트입니다. 다음 요구사항에 맞는 데이터베이스 스키마를 설계하고 최적화해주세요.

[도메인]: ___
[주요 엔티티]: ___
[예상 데이터 규모]: ___
[DB 종류]: PostgreSQL / MySQL / MongoDB

다음 단계로 진행해주세요:

1. 개념적 설계:
   - ERD (텍스트 기반 다이어그램)
   - 엔티티 간 관계 (1:1, 1:N, M:N)
   - 핵심 비즈니스 규칙 제약조건

2. 정규화 분석:
   - 1NF → 2NF → 3NF → BCNF 단계별 적용
   - 각 단계에서 해결되는 이상(Anomaly) 명시
   - 역정규화가 필요한 경우 근거 제시

3. 물리적 설계:
   - CREATE TABLE DDL 스크립트
   - 인덱스 전략 (B-Tree, Hash, 복합 인덱스)
   - 파티셔닝 전략 (해당되는 경우)

4. 쿼리 최적화:
   - 자주 사용될 쿼리 패턴 3개에 대한 최적화
   - EXPLAIN ANALYZE 예상 결과 분석
   - 인덱스 커버링 쿼리 적용 방안

성능 벤치마크 기준과 확장성 고려사항도 포함해주세요.`,tags:["DB설계","정규화","스키마"]},en:{title:"Database Schema Optimizer with Normalization",prompt:`You are a database architect. Design and optimize a database schema for the following requirements.

[Domain]: ___
[Core Entities]: ___
[Expected Data Scale]: ___
[DB Type]: PostgreSQL / MySQL / MongoDB

Proceed through these steps:

1. Conceptual Design:
   - ERD (text-based diagram)
   - Entity relationships (1:1, 1:N, M:N)
   - Key business rule constraints

2. Normalization Analysis:
   - Step-by-step 1NF → 2NF → 3NF → BCNF application
   - Anomalies resolved at each stage
   - Justification for denormalization where needed

3. Physical Design:
   - CREATE TABLE DDL scripts
   - Index strategy (B-Tree, Hash, composite indexes)
   - Partitioning strategy (if applicable)

4. Query Optimization:
   - Optimization for 3 common query patterns
   - Expected EXPLAIN ANALYZE result analysis
   - Index covering query strategies

Include performance benchmark criteria and scalability considerations.`,tags:["DB Design","Normalization","Schema"]}},{id:9,cat:"coding",score:92,technique:"Role + Edge Cases + Structure",ko:{title:"엣지 케이스 포함 단위 테스트 생성기",prompt:`당신은 테스트 엔지니어링 전문가입니다. 다음 함수/모듈에 대한 포괄적인 단위 테스트를 생성해주세요.

[언어/프레임워크]: ___
[테스트 프레임워크]: Jest / pytest / JUnit / 기타
[함수/모듈 코드]:
\`\`\`
(코드를 여기에 붙여넣기)
\`\`\`

다음 카테고리별로 테스트를 생성해주세요:

1. 정상 케이스 (Happy Path) - 3~5개:
   - 일반적인 입력에 대한 기대 결과 검증
   - Given-When-Then 형식으로 작성

2. 경계값 테스트 (Boundary) - 3~4개:
   - 최솟값, 최댓값, 빈 입력
   - 타입 경계 (정수 오버플로우 등)

3. 엣지 케이스 - 3~4개:
   - null, undefined, NaN 입력
   - 특수 문자, 유니코드, 이모지
   - 동시성 이슈 (해당되는 경우)

4. 에러 케이스 - 2~3개:
   - 잘못된 타입의 인자
   - 네트워크 실패 시나리오 (해당되는 경우)

5. 모킹/스터빙:
   - 외부 의존성에 대한 mock 설정
   - 테스트 더블(Test Double) 전략

각 테스트에 대해 테스트 이름, 설명, 실행 가능한 테스트 코드를 포함해주세요.
코드 커버리지 목표: 라인 90% 이상, 브랜치 85% 이상.`,tags:["단위테스트","엣지케이스","TDD"]},en:{title:"Unit Test Generator with Edge Cases",prompt:`You are a test engineering expert. Generate comprehensive unit tests for the following function/module.

[Language/Framework]: ___
[Test Framework]: Jest / pytest / JUnit / other
[Function/Module Code]:
\`\`\`
(paste code here)
\`\`\`

Generate tests by category:

1. Happy Path (3-5 tests):
   - Verify expected results for typical inputs
   - Write in Given-When-Then format

2. Boundary Tests (3-4 tests):
   - Minimum, maximum, empty inputs
   - Type boundaries (integer overflow, etc.)

3. Edge Cases (3-4 tests):
   - null, undefined, NaN inputs
   - Special characters, Unicode, emojis
   - Concurrency issues (if applicable)

4. Error Cases (2-3 tests):
   - Wrong argument types
   - Network failure scenarios (if applicable)

5. Mocking/Stubbing:
   - Mock setup for external dependencies
   - Test double strategy

Include test name, description, and executable test code for each.
Coverage target: 90%+ line coverage, 85%+ branch coverage.`,tags:["Unit Testing","Edge Cases","TDD"]}},{id:10,cat:"coding",score:91,technique:"Role + Step-by-Step",ko:{title:"레거시 코드 리팩토링 어드바이저",prompt:`당신은 레거시 시스템 현대화 전문 컨설턴트입니다. 다음 레거시 코드를 분석하고 단계적 리팩토링 계획을 제안해주세요.

[언어]: ___
[코드 연식]: 약 ___년
[현재 문제점]: ___

\`\`\`
(레거시 코드를 여기에 붙여넣기)
\`\`\`

다음 순서로 분석해주세요:

1. 코드 스멜(Code Smell) 진단:
   - 발견된 코드 스멜 목록 (Martin Fowler 분류 기준)
   - 각 스멜의 위험도 (High/Medium/Low)
   - 영향 범위 분석

2. 리팩토링 우선순위:
   - 안전하게 먼저 수행할 수 있는 작업 (Quick Wins)
   - 중기 리팩토링 (기능 변경 없이 구조 개선)
   - 장기 아키텍처 개선

3. 단계별 리팩토링 계획:
   - Step 1: 테스트 커버리지 확보 방법
   - Step 2: Extract Method / Extract Class 적용
   - Step 3: 디자인 패턴 적용 (해당되는 경우)
   - Step 4: 의존성 주입(DI) 도입

4. 리팩토링 전/후 코드:
   - 가장 중요한 3개 변경에 대한 Before/After
   - 각 변경의 근거와 이점 설명

위험 요소와 롤백 전략도 포함해주세요.`,tags:["리팩토링","레거시","코드품질"]},en:{title:"Legacy Code Refactoring Advisor",prompt:`You are a legacy system modernization consultant. Analyze the following legacy code and propose a step-by-step refactoring plan.

[Language]: ___
[Code Age]: approximately ___ years
[Current Issues]: ___

\`\`\`
(paste legacy code here)
\`\`\`

Analyze in this order:

1. Code Smell Diagnosis:
   - List of detected code smells (per Martin Fowler's classification)
   - Risk level for each (High/Medium/Low)
   - Impact scope analysis

2. Refactoring Priority:
   - Safe quick wins (can be done first)
   - Medium-term refactoring (structural improvement without behavior changes)
   - Long-term architecture improvements

3. Step-by-Step Refactoring Plan:
   - Step 1: How to establish test coverage
   - Step 2: Apply Extract Method / Extract Class
   - Step 3: Apply design patterns (if applicable)
   - Step 4: Introduce Dependency Injection (DI)

4. Before/After Code:
   - Before/After for the top 3 most important changes
   - Rationale and benefits for each change

Include risk factors and rollback strategy.`,tags:["Refactoring","Legacy","Code Quality"]}},{id:11,cat:"writing",score:93,technique:"Structure + Constraints",ko:{title:"SEO 최적화 블로그 포스트 구조",prompt:`당신은 SEO 콘텐츠 전략가입니다. 다음 주제에 대한 검색 엔진 최적화된 블로그 포스트 구조를 설계해주세요.

[주제]: ___
[타겟 키워드]: ___
[타겟 독자]: ___
[목표 글자 수]: ___자

다음 요소를 포함한 완전한 구조를 만들어주세요:

1. SEO 메타데이터:
   - Title 태그 (60자 이내, 키워드 포함)
   - Meta Description (155자 이내, CTA 포함)
   - URL 슬러그 제안
   - 대체 키워드 및 LSI 키워드 5개

2. 콘텐츠 구조:
   - H1 제목 (호기심을 자극하는 형태)
   - 도입부 (Hook → Problem → Promise, 3문장)
   - H2 소제목 5-7개 (키워드 자연 삽입)
   - 각 섹션별 핵심 포인트 3개
   - 결론 (요약 → CTA)

3. 콘텐츠 강화 요소:
   - 데이터/통계 삽입 위치 제안
   - 내부링크 앵커텍스트 3개
   - FAQ 스키마용 질문-답변 3쌍
   - Featured Snippet 최적화 구간 지정

4. 가독성 최적화:
   - 단락 길이 가이드 (2-3문장)
   - 볼드/리스트 활용 포인트
   - 이미지/인포그래픽 삽입 위치 3곳`,tags:["SEO","블로그","콘텐츠전략"]},en:{title:"SEO-Optimized Blog Post Structure",prompt:`You are an SEO content strategist. Design a search-engine-optimized blog post structure for the following topic.

[Topic]: ___
[Target Keyword]: ___
[Target Audience]: ___
[Target Word Count]: ___ words

Create a complete structure with these elements:

1. SEO Metadata:
   - Title tag (under 60 chars, include keyword)
   - Meta Description (under 155 chars, include CTA)
   - URL slug suggestion
   - 5 related keywords and LSI keywords

2. Content Structure:
   - H1 headline (curiosity-driven)
   - Introduction (Hook → Problem → Promise, 3 sentences)
   - 5-7 H2 subheadings (naturally incorporate keywords)
   - 3 key points per section
   - Conclusion (Summary → CTA)

3. Content Enhancement:
   - Suggested data/statistics insertion points
   - 3 internal link anchor texts
   - 3 Q&A pairs for FAQ schema
   - Featured Snippet optimization sections

4. Readability Optimization:
   - Paragraph length guide (2-3 sentences)
   - Bold/list usage points
   - 3 image/infographic insertion locations`,tags:["SEO","Blog","Content Strategy"]}},{id:12,cat:"writing",score:95,technique:"Role + Template + Constraints",ko:{title:"기술 문서 작성기",prompt:`당신은 시니어 테크니컬 라이터입니다. 다음 기술 주제에 대한 전문적인 기술 문서를 작성해주세요.

[문서 유형]: API 가이드 / 사용자 매뉴얼 / 아키텍처 문서 / 튜토리얼
[기술/제품명]: ___
[대상 독자]: 개발자 / 비개발자 / 혼합
[기술 수준]: 입문 / 중급 / 고급

다음 구조로 작성해주세요:

1. 개요 섹션:
   - 한 문장 요약 (이 문서가 해결하는 문제)
   - 전제 조건 (Prerequisites) 체크리스트
   - 예상 소요 시간

2. 핵심 내용:
   - 개념 설명 (비유와 다이어그램 활용)
   - 단계별 가이드 (번호가 매겨진 절차)
   - 코드 예시 (주석 포함, 복사-붙여넣기 가능)
   - 주의사항/경고 박스 (⚠️ Warning, ℹ️ Note, 💡 Tip)

3. 문서 품질 기준:
   - Microsoft Style Guide 또는 Google Developer Documentation Style Guide 준수
   - 능동태 사용, 2인칭 시점(you)
   - 한 단락 = 하나의 아이디어
   - 전문 용어 첫 등장 시 정의 포함

4. 부록:
   - 문제 해결(Troubleshooting) 가이드 (5가지 일반적 문제)
   - 용어집 (Glossary)
   - 관련 문서 링크

Markdown 형식으로 출력해주세요.`,tags:["기술문서","테크니컬라이팅","문서화"]},en:{title:"Technical Documentation Writer",prompt:`You are a senior technical writer. Write professional technical documentation for the following subject.

[Document Type]: API Guide / User Manual / Architecture Doc / Tutorial
[Technology/Product]: ___
[Target Audience]: Developers / Non-developers / Mixed
[Technical Level]: Beginner / Intermediate / Advanced

Structure as follows:

1. Overview Section:
   - One-sentence summary (the problem this doc solves)
   - Prerequisites checklist
   - Estimated completion time

2. Core Content:
   - Concept explanation (using analogies and diagrams)
   - Step-by-step guide (numbered procedures)
   - Code examples (with comments, copy-paste ready)
   - Callout boxes (Warning, Note, Tip)

3. Documentation Quality Standards:
   - Follow Microsoft Style Guide or Google Developer Documentation Style Guide
   - Use active voice, second person (you)
   - One paragraph = one idea
   - Define technical terms on first use

4. Appendix:
   - Troubleshooting guide (5 common issues)
   - Glossary
   - Related documentation links

Output in Markdown format.`,tags:["Technical Docs","Technical Writing","Documentation"]}},{id:13,cat:"writing",score:92,technique:"Role + A/B Testing + Structure",ko:{title:"A/B 변형 포함 이메일 캠페인 카피",prompt:`당신은 이메일 마케팅 전문 카피라이터입니다. 다음 캠페인에 대한 이메일 카피를 A/B 테스트 변형과 함께 작성해주세요.

[캠페인 목적]: 프로모션 / 리텐션 / 온보딩 / 재참여
[제품/서비스]: ___
[타겟 세그먼트]: ___
[핵심 CTA]: ___

A 변형 (감성 소구):
- 제목줄 (50자 이내, 개인화 토큰 포함)
- 프리헤더 텍스트 (90자 이내)
- 본문 (AIDA 구조: Attention → Interest → Desire → Action)
- CTA 버튼 텍스트 (3-5단어)
- P.S. 라인

B 변형 (논리 소구):
- 제목줄 (숫자/데이터 활용)
- 프리헤더 텍스트
- 본문 (Problem → Solution → Proof → CTA 구조)
- CTA 버튼 텍스트
- P.S. 라인

추가 요소:
- 스팸 필터 회피를 위한 주의사항 3개
- 모바일 최적화 팁
- 발송 시간 추천 (타겟 세그먼트 기준)
- A/B 테스트 성공 측정 지표 (Open Rate, CTR, Conversion)`,tags:["이메일","마케팅","A/B테스트"]},en:{title:"Email Campaign Copy with A/B Variants",prompt:`You are an email marketing copywriter. Write email copy with A/B test variants for the following campaign.

[Campaign Goal]: Promotion / Retention / Onboarding / Re-engagement
[Product/Service]: ___
[Target Segment]: ___
[Primary CTA]: ___

Variant A (Emotional Appeal):
- Subject line (under 50 chars, include personalization token)
- Preheader text (under 90 chars)
- Body (AIDA structure: Attention → Interest → Desire → Action)
- CTA button text (3-5 words)
- P.S. line

Variant B (Logical Appeal):
- Subject line (using numbers/data)
- Preheader text
- Body (Problem → Solution → Proof → CTA structure)
- CTA button text
- P.S. line

Additional elements:
- 3 spam filter avoidance tips
- Mobile optimization tips
- Recommended send time (based on target segment)
- A/B test success metrics (Open Rate, CTR, Conversion)`,tags:["Email","Marketing","A/B Testing"]}},{id:14,cat:"writing",score:94,technique:"Role + Academic Structure",ko:{title:"연구 논문 초록 생성기",prompt:`당신은 학술 논문 작성 전문가입니다. 다음 연구 내용을 바탕으로 학술지 투고용 구조화된 초록(Structured Abstract)을 작성해주세요.

[연구 분야]: ___
[연구 제목]: ___
[타겟 학술지]: ___
[초록 유형]: 구조화 / 비구조화
[단어 수 제한]: ___자

다음 섹션을 포함해주세요:

1. 배경(Background):
   - 연구의 필요성과 기존 연구의 한계점
   - 2-3문장

2. 목적(Objective):
   - 명확한 연구 질문 또는 가설
   - 1-2문장

3. 방법(Methods):
   - 연구 설계, 대상, 주요 변수
   - 분석 방법 명시
   - 2-3문장

4. 결과(Results):
   - 핵심 수치 결과 (p-value, 효과 크기 포함)
   - 가장 중요한 발견 2-3개
   - 2-3문장

5. 결론(Conclusion):
   - 연구 결과의 의미와 시사점
   - 한계점 1개 인정
   - 후속 연구 방향 제안
   - 2문장

키워드: 5-7개 (MeSH 용어 또는 해당 분야 표준 용어 사용)

학술적 톤을 유지하되, 과도한 전문 용어 사용을 피하고, 3인칭 수동태를 적절히 사용해주세요.`,tags:["학술논문","초록","연구"]},en:{title:"Research Paper Abstract Generator",prompt:`You are an academic writing expert. Write a structured abstract for journal submission based on the following research.

[Research Field]: ___
[Paper Title]: ___
[Target Journal]: ___
[Abstract Type]: Structured / Unstructured
[Word Limit]: ___ words

Include these sections:

1. Background:
   - Research necessity and limitations of existing studies
   - 2-3 sentences

2. Objective:
   - Clear research question or hypothesis
   - 1-2 sentences

3. Methods:
   - Study design, participants, key variables
   - Specify analysis methods
   - 2-3 sentences

4. Results:
   - Key quantitative findings (include p-values, effect sizes)
   - 2-3 most important findings
   - 2-3 sentences

5. Conclusion:
   - Implications of findings
   - Acknowledge 1 limitation
   - Suggest future research direction
   - 2 sentences

Keywords: 5-7 (use MeSH terms or field-standard terminology)

Maintain academic tone, avoid excessive jargon, and use third-person passive voice appropriately.`,tags:["Academic Paper","Abstract","Research"]}},{id:15,cat:"writing",score:91,technique:"Role + Tone Constraints",ko:{title:"UX 마이크로카피 라이터",prompt:`당신은 UX 라이팅 전문가입니다. 다음 디지털 제품의 마이크로카피를 작성해주세요.

[제품 유형]: 웹앱 / 모바일앱 / SaaS
[제품명]: ___
[브랜드 톤]: 친근한 / 전문적인 / 유머러스한 / 미니멀한
[타겟 사용자]: ___

다음 시나리오별 마이크로카피를 작성해주세요:

1. 온보딩 플로우:
   - 환영 메시지 (첫 방문)
   - 기능 소개 툴팁 (3개)
   - 프로필 설정 안내문

2. 상태 메시지:
   - 로딩 상태 (3가지 변형)
   - 빈 상태(Empty State) - 데이터 없을 때
   - 성공 메시지 (3가지 액션별)
   - 에러 메시지 (5가지: 네트워크, 권한, 입력, 서버, 404)

3. 액션 요소:
   - CTA 버튼 텍스트 (주요 5개 액션)
   - 확인 다이얼로그 (삭제, 취소, 로그아웃)
   - 토스트 알림 메시지 (4가지)

4. 접근성 고려:
   - 스크린리더용 aria-label 텍스트 (주요 요소 5개)
   - alt 텍스트 가이드라인

각 카피에 대해 왜 그렇게 작성했는지 UX 라이팅 원칙 근거를 1줄로 설명해주세요.
글자 수 제한: 버튼 최대 5단어, 토스트 최대 15단어, 에러메시지 최대 25단어.`,tags:["UX라이팅","마이크로카피","UI"]},en:{title:"UX Microcopy Writer",prompt:`You are a UX writing expert. Write microcopy for the following digital product.

[Product Type]: Web App / Mobile App / SaaS
[Product Name]: ___
[Brand Tone]: Friendly / Professional / Humorous / Minimal
[Target Users]: ___

Write microcopy for these scenarios:

1. Onboarding Flow:
   - Welcome message (first visit)
   - Feature introduction tooltips (3)
   - Profile setup guidance

2. Status Messages:
   - Loading states (3 variations)
   - Empty state (no data)
   - Success messages (3 different actions)
   - Error messages (5 types: network, permission, input, server, 404)

3. Action Elements:
   - CTA button text (5 main actions)
   - Confirmation dialogs (delete, cancel, logout)
   - Toast notification messages (4 types)

4. Accessibility:
   - Screen reader aria-label text (5 key elements)
   - Alt text guidelines

For each piece of copy, explain in one line the UX writing principle behind your choice.
Character limits: buttons max 5 words, toasts max 15 words, error messages max 25 words.`,tags:["UX Writing","Microcopy","UI"]}},{id:16,cat:"business",score:94,technique:"Framework + Action Plan",ko:{title:"SWOT 분석 및 실행 계획",prompt:`당신은 경영 전략 컨설턴트입니다. 다음 기업/프로젝트에 대한 SWOT 분석과 구체적인 실행 계획을 수립해주세요.

[기업/프로젝트명]: ___
[산업 분야]: ___
[현재 단계]: 스타트업 / 성장기 / 성숙기
[핵심 목표]: ___

1. SWOT 분석:
   강점(Strengths) - 5개:
   - 각 강점에 대한 구체적 근거
   - 경쟁 우위 지속 기간 예측

   약점(Weaknesses) - 5개:
   - 약점의 심각도 (High/Medium/Low)
   - 단기 보완 가능 여부

   기회(Opportunities) - 5개:
   - 시장 규모 또는 성장률 추정
   - 진입 장벽 분석

   위협(Threats) - 5개:
   - 발생 확률과 영향도 매트릭스
   - 대응 시급성

2. 크로스 SWOT 전략:
   - SO 전략 (강점으로 기회 활용) - 2개
   - WO 전략 (약점 보완하여 기회 포착) - 2개
   - ST 전략 (강점으로 위협 방어) - 2개
   - WT 전략 (약점+위협 최소화) - 2개

3. 90일 실행 계획:
   - 월별 핵심 액션 아이템 (담당, 기한, KPI 포함)
   - 필요 리소스와 예산 추정
   - 마일스톤과 리뷰 포인트`,tags:["SWOT","경영전략","실행계획"]},en:{title:"SWOT Analysis with Action Plan",prompt:`You are a management strategy consultant. Conduct a SWOT analysis with concrete action plans for the following business/project.

[Business/Project]: ___
[Industry]: ___
[Current Stage]: Startup / Growth / Mature
[Core Objective]: ___

1. SWOT Analysis:
   Strengths - 5 items:
   - Specific evidence for each strength
   - Predicted duration of competitive advantage

   Weaknesses - 5 items:
   - Severity level (High/Medium/Low)
   - Short-term remediation feasibility

   Opportunities - 5 items:
   - Market size or growth rate estimates
   - Entry barrier analysis

   Threats - 5 items:
   - Probability and impact matrix
   - Response urgency

2. Cross-SWOT Strategies:
   - SO strategies (leverage strengths for opportunities) - 2
   - WO strategies (overcome weaknesses to seize opportunities) - 2
   - ST strategies (use strengths to defend against threats) - 2
   - WT strategies (minimize weaknesses + threats) - 2

3. 90-Day Execution Plan:
   - Monthly key action items (owner, deadline, KPI)
   - Required resources and budget estimates
   - Milestones and review points`,tags:["SWOT","Business Strategy","Action Plan"]}},{id:17,cat:"business",score:93,technique:"Storytelling + Structure",ko:{title:"투자자 피치덱 스토리 구조",prompt:`당신은 스타트업 피치 전문 코치입니다. 다음 스타트업의 투자자 피치덱 스토리 구조를 설계해주세요.

[스타트업명]: ___
[업종]: ___
[투자 라운드]: Pre-Seed / Seed / Series A / Series B
[목표 투자금]: ___

12장 슬라이드 구조로 설계해주세요:

슬라이드 1 - 한 줄 피치:
   - "우리는 [타겟]을 위해 [솔루션]으로 [문제]를 해결합니다" 형식

슬라이드 2 - 문제(Problem):
   - 핵심 고통점 3가지 (데이터 기반)
   - 현재 해결책의 한계

슬라이드 3 - 솔루션(Solution):
   - 제품/서비스 핵심 가치 제안
   - Demo 스크린샷/영상 권장 사항

슬라이드 4 - 시장 규모(Market):
   - TAM/SAM/SOM 구분하여 제시
   - Bottom-up 방식 시장 추정

슬라이드 5 - 비즈니스 모델: 수익 구조와 가격 전략
슬라이드 6 - 트랙션: 핵심 지표와 성장률
슬라이드 7 - 경쟁 분석: 포지셔닝 맵
슬라이드 8 - Go-to-Market: 고객 획득 전략
슬라이드 9 - 팀: 핵심 팀원과 어드바이저
슬라이드 10 - 재무 계획: 3년 매출/비용 전망
슬라이드 11 - 투자 요청: 사용처 구체적 배분
슬라이드 12 - 비전: 5년 후 모습

각 슬라이드에 대해:
- 핵심 메시지 1문장
- 포함할 데이터/시각 자료 제안
- 투자자가 자주 하는 질문과 준비할 답변`,tags:["피치덱","투자","스타트업"]},en:{title:"Investor Pitch Deck Story Structure",prompt:`You are a startup pitch coach. Design an investor pitch deck story structure for the following startup.

[Startup Name]: ___
[Industry]: ___
[Investment Round]: Pre-Seed / Seed / Series A / Series B
[Target Funding]: ___

Design a 12-slide structure:

Slide 1 - One-line Pitch:
   - Format: "We solve [problem] for [target] through [solution]"

Slide 2 - Problem:
   - 3 key pain points (data-backed)
   - Limitations of current solutions

Slide 3 - Solution:
   - Core value proposition
   - Demo screenshot/video recommendations

Slide 4 - Market Size:
   - TAM/SAM/SOM breakdown
   - Bottom-up market estimation

Slide 5 - Business Model: Revenue structure and pricing strategy
Slide 6 - Traction: Key metrics and growth rate
Slide 7 - Competitive Analysis: Positioning map
Slide 8 - Go-to-Market: Customer acquisition strategy
Slide 9 - Team: Key members and advisors
Slide 10 - Financial Plan: 3-year revenue/cost projection
Slide 11 - The Ask: Specific allocation of funds
Slide 12 - Vision: Where we'll be in 5 years

For each slide:
- 1-sentence key message
- Suggested data/visual elements
- Common investor questions and prepared answers`,tags:["Pitch Deck","Investment","Startup"]}},{id:18,cat:"business",score:92,technique:"Research + Persona Framework",ko:{title:"고객 페르소나 빌더",prompt:`당신은 사용자 리서치 전문가입니다. 다음 제품/서비스에 대한 상세한 고객 페르소나를 생성해주세요.

[제품/서비스]: ___
[산업]: ___
[B2B / B2C]: ___
[페르소나 수]: 3명 (주요 / 보조 / 부정)

각 페르소나에 대해 다음 정보를 생성해주세요:

1. 기본 프로필:
   - 이름, 나이, 직업, 소득 수준
   - 가족 구성, 거주 지역
   - 성격 유형 (MBTI 또는 유사)

2. 행동 패턴:
   - 하루 일과 타임라인 (기상~취침)
   - 미디어 소비 습관 (소셜미디어, 뉴스, 콘텐츠)
   - 구매 의사결정 패턴 (충동적 / 분석적 / 추천 의존)

3. 목표와 고통점:
   - 직업적 목표 3개
   - 개인적 목표 2개
   - 핵심 고통점 (Frustrations) 5개
   - 현재 사용 중인 대안 솔루션

4. 제품 관련:
   - 제품 발견 채널 (어디서 처음 알게 될까?)
   - 구매 결정 요인 상위 3개
   - 가격 민감도 (1-10)
   - 예상 사용 시나리오 2개

5. 커뮤니케이션:
   - 공감하는 메시지 톤과 키워드
   - 반감을 살 수 있는 표현
   - 이 페르소나를 위한 엘리베이터 피치 1문장

부정적 페르소나(Anti-Persona)에 대해서는 왜 우리 제품이 맞지 않는지 명확히 설명해주세요.`,tags:["페르소나","사용자리서치","마케팅"]},en:{title:"Customer Persona Builder",prompt:`You are a user research expert. Create detailed customer personas for the following product/service.

[Product/Service]: ___
[Industry]: ___
[B2B / B2C]: ___
[Number of Personas]: 3 (Primary / Secondary / Negative)

For each persona, generate:

1. Basic Profile:
   - Name, age, occupation, income level
   - Family composition, location
   - Personality type (MBTI or similar)

2. Behavioral Patterns:
   - Daily timeline (wake to sleep)
   - Media consumption habits (social media, news, content)
   - Purchase decision pattern (impulsive / analytical / recommendation-dependent)

3. Goals and Pain Points:
   - 3 professional goals
   - 2 personal goals
   - 5 core frustrations
   - Current alternative solutions in use

4. Product-Related:
   - Product discovery channel (where would they first learn about it?)
   - Top 3 purchase decision factors
   - Price sensitivity (1-10)
   - 2 expected usage scenarios

5. Communication:
   - Message tone and keywords that resonate
   - Expressions that could cause resistance
   - 1-sentence elevator pitch for this persona

For the Anti-Persona, clearly explain why our product is not a fit.`,tags:["Persona","User Research","Marketing"]}},{id:19,cat:"business",score:95,technique:"Framework + Measurement",ko:{title:"OKR 프레임워크 목표 설정",prompt:`당신은 OKR(Objectives and Key Results) 전문 코치입니다. 다음 조직/팀의 분기별 OKR을 설계해주세요.

[조직/팀명]: ___
[분기]: ___년 Q___
[팀 규모]: ___명
[상위 조직 목표]: ___

다음 원칙을 준수하여 OKR을 작성해주세요:

1. Objective 작성 규칙:
   - 정성적이고 영감을 주는 문장
   - 한 분기 내 달성 가능한 범위
   - 3-5개 Objective 설정

2. 각 Objective당 Key Results 3-4개:
   - 측정 가능한 정량적 지표 (SMART 기준)
   - 기준값(Baseline) → 목표값(Target) 명시
   - 난이도: 70% 달성 가능한 도전적 수준
   - 측정 주기와 담당자

3. Initiative (핵심 활동):
   - 각 KR 달성을 위한 구체적 실행 과제 2-3개
   - 우선순위와 예상 소요 시간
   - 필요 리소스

4. 정렬(Alignment) 확인:
   - 상위 조직 목표와의 연결 관계
   - 타 팀과의 의존성 및 협업 포인트
   - 개인 OKR로 분해하는 방법 가이드

5. 모니터링 체계:
   - 주간/월간 체크인 템플릿
   - 신호등 체계 (빨강/노랑/초록)
   - 중간 점검 시 피봇 기준

흔히 범하는 OKR 실수 5가지와 회피 방법도 포함해주세요.`,tags:["OKR","목표설정","성과관리"]},en:{title:"OKR Framework Goal Setter",prompt:`You are an OKR (Objectives and Key Results) expert coach. Design quarterly OKRs for the following organization/team.

[Organization/Team]: ___
[Quarter]: ___  Q___
[Team Size]: ___
[Parent Organization Goal]: ___

Follow these principles:

1. Objective Writing Rules:
   - Qualitative, inspirational statements
   - Achievable within one quarter
   - Set 3-5 Objectives

2. 3-4 Key Results per Objective:
   - Measurable quantitative metrics (SMART criteria)
   - Baseline → Target values specified
   - Difficulty: challenging but 70% achievable
   - Measurement frequency and owner

3. Initiatives (Key Activities):
   - 2-3 specific execution tasks per KR
   - Priority and estimated time
   - Required resources

4. Alignment Check:
   - Connection to parent organization goals
   - Dependencies and collaboration points with other teams
   - Guide for cascading to individual OKRs

5. Monitoring System:
   - Weekly/monthly check-in template
   - Traffic light system (Red/Yellow/Green)
   - Pivot criteria at mid-quarter review

Include 5 common OKR mistakes and how to avoid them.`,tags:["OKR","Goal Setting","Performance Management"]}},{id:20,cat:"business",score:91,technique:"Analysis + Comparison Matrix",ko:{title:"경쟁 환경 분석",prompt:`당신은 시장 분석 전문가입니다. 다음 제품/서비스의 경쟁 환경을 체계적으로 분석해주세요.

[제품/서비스]: ___
[시장]: ___
[주요 경쟁사]: (3-5개 나열)

다음 프레임워크로 분석해주세요:

1. 시장 개요:
   - 시장 규모와 성장률 (TAM/SAM/SOM)
   - 시장 성숙도와 진입 시점 분석
   - 주요 트렌드와 변화 동인 3가지

2. 경쟁사 프로파일 (각 경쟁사별):
   - 핵심 가치 제안과 포지셔닝
   - 주요 제품/기능 특징
   - 가격 모델과 가격대
   - 추정 시장 점유율
   - 강점 3개, 약점 3개

3. 비교 분석 매트릭스:
   - 기능 비교표 (10개 핵심 기능 기준)
   - 가격 비교표
   - 고객 만족도/리뷰 분석

4. 포지셔닝 분석:
   - 2x2 포지셔닝 맵 (축 2개 제안)
   - 차별화 가능한 빈 공간(White Space) 식별
   - 우리의 고유한 포지셔닝 제안

5. 전략적 시사점:
   - 경쟁 우위 확보를 위한 핵심 전략 3가지
   - 방어해야 할 영역과 공격할 영역
   - 6개월/12개월 액션 플랜`,tags:["경쟁분석","시장분석","전략"]},en:{title:"Competitive Landscape Analysis",prompt:`You are a market analysis expert. Systematically analyze the competitive landscape for the following product/service.

[Product/Service]: ___
[Market]: ___
[Key Competitors]: (list 3-5)

Analyze using this framework:

1. Market Overview:
   - Market size and growth rate (TAM/SAM/SOM)
   - Market maturity and entry timing analysis
   - 3 key trends and change drivers

2. Competitor Profiles (for each):
   - Core value proposition and positioning
   - Key product/feature characteristics
   - Pricing model and price range
   - Estimated market share
   - 3 strengths, 3 weaknesses

3. Comparative Analysis Matrix:
   - Feature comparison table (10 key features)
   - Price comparison table
   - Customer satisfaction/review analysis

4. Positioning Analysis:
   - 2x2 positioning map (suggest 2 axes)
   - Identify white space for differentiation
   - Propose our unique positioning

5. Strategic Implications:
   - 3 key strategies for competitive advantage
   - Areas to defend and areas to attack
   - 6-month/12-month action plan`,tags:["Competitive Analysis","Market Analysis","Strategy"]}},{id:21,cat:"data",score:95,technique:"Role + Step-by-Step + Structure",ko:{title:"탐색적 데이터 분석(EDA) 가이드",prompt:`당신은 데이터 사이언티스트입니다. 다음 데이터셋에 대한 체계적인 탐색적 데이터 분석(EDA) 가이드를 작성해주세요.

[데이터셋 설명]: ___
[행 수]: ___
[열 수]: ___
[분석 목적]: ___
[사용 도구]: Python (pandas, matplotlib, seaborn) / R

다음 단계로 EDA를 수행하는 코드와 해석 가이드를 제공해주세요:

1. 데이터 품질 점검:
   - 기본 통계량 (describe, info, shape)
   - 결측치 분석 (패턴, 비율, 처리 전략)
   - 중복 데이터 탐지
   - 이상치 탐지 (IQR, Z-score 방법)

2. 단변량 분석:
   - 수치형 변수: 히스토그램, 박스플롯, 분포 확인
   - 범주형 변수: 빈도표, 바 차트
   - 각 변수의 비즈니스 의미 해석

3. 이변량/다변량 분석:
   - 상관관계 히트맵
   - 주요 변수 간 산점도
   - 범주형-수치형 변수 관계 (groupby 분석)
   - 교차표(Cross-tabulation) 분석

4. 시각화 대시보드:
   - 핵심 인사이트를 전달하는 차트 5개 코드
   - 각 차트 선택 이유 설명
   - 색상 팔레트와 레이블링 가이드

5. 인사이트 요약:
   - 발견된 핵심 패턴 3-5개
   - 추가 분석이 필요한 영역
   - 모델링을 위한 특성 공학(Feature Engineering) 제안
   - 데이터 품질 개선 권장사항`,tags:["EDA","데이터분석","시각화"]},en:{title:"Exploratory Data Analysis (EDA) Guide",prompt:`You are a data scientist. Write a systematic EDA guide for the following dataset.

[Dataset Description]: ___
[Rows]: ___
[Columns]: ___
[Analysis Purpose]: ___
[Tools]: Python (pandas, matplotlib, seaborn) / R

Provide code and interpretation guide for each step:

1. Data Quality Check:
   - Basic statistics (describe, info, shape)
   - Missing value analysis (patterns, ratios, handling strategies)
   - Duplicate detection
   - Outlier detection (IQR, Z-score methods)

2. Univariate Analysis:
   - Numeric variables: histograms, box plots, distribution checks
   - Categorical variables: frequency tables, bar charts
   - Business meaning interpretation for each variable

3. Bivariate/Multivariate Analysis:
   - Correlation heatmap
   - Scatter plots for key variables
   - Categorical-numeric relationships (groupby analysis)
   - Cross-tabulation analysis

4. Visualization Dashboard:
   - Code for 5 charts conveying key insights
   - Rationale for each chart selection
   - Color palette and labeling guide

5. Insight Summary:
   - 3-5 key patterns discovered
   - Areas requiring further analysis
   - Feature engineering suggestions for modeling
   - Data quality improvement recommendations`,tags:["EDA","Data Analysis","Visualization"]}},{id:22,cat:"data",score:93,technique:"Role + Optimization + Analysis",ko:{title:"SQL 쿼리 최적화 및 실행 계획 분석",prompt:`당신은 데이터베이스 성능 최적화 전문가입니다. 다음 SQL 쿼리를 분석하고 최적화해주세요.

[DB 엔진]: PostgreSQL / MySQL / Oracle / SQL Server
[테이블 규모]: ___행
[현재 실행 시간]: ___초

\`\`\`sql
(SQL 쿼리를 여기에 붙여넣기)
\`\`\`

다음 순서로 분석해주세요:

1. 쿼리 분석:
   - 쿼리의 논리적 실행 순서 설명
   - 잠재적 병목 지점 식별
   - 조인 유형과 효율성 평가

2. EXPLAIN PLAN 분석:
   - 예상 실행 계획 해석
   - Full Table Scan vs Index Scan 구분
   - 예상 비용(Cost)과 행 수 추정

3. 최적화 전략:
   - 인덱스 추가/수정 제안 (CREATE INDEX 문 포함)
   - 쿼리 리라이팅 (서브쿼리 → JOIN, EXISTS 활용 등)
   - 파티셔닝 또는 물리적 설계 변경 제안

4. 최적화 전/후 비교:
   - 원본 쿼리 vs 최적화된 쿼리
   - 예상 성능 개선율
   - 각 변경의 이유 설명

5. 추가 권장사항:
   - 쿼리 캐싱 전략
   - 커넥션 풀링 설정
   - 정기적 VACUUM/ANALYZE 스케줄링 (PostgreSQL)
   - 모니터링할 핵심 성능 지표`,tags:["SQL","쿼리최적화","성능"]},en:{title:"SQL Query Optimizer with Explain Plan",prompt:`You are a database performance optimization expert. Analyze and optimize the following SQL query.

[DB Engine]: PostgreSQL / MySQL / Oracle / SQL Server
[Table Size]: ___ rows
[Current Execution Time]: ___ seconds

\`\`\`sql
(paste SQL query here)
\`\`\`

Analyze in this order:

1. Query Analysis:
   - Explain logical execution order
   - Identify potential bottlenecks
   - Evaluate join types and efficiency

2. EXPLAIN PLAN Analysis:
   - Interpret expected execution plan
   - Distinguish Full Table Scan vs Index Scan
   - Estimated cost and row count

3. Optimization Strategies:
   - Index addition/modification suggestions (include CREATE INDEX statements)
   - Query rewriting (subquery → JOIN, EXISTS usage, etc.)
   - Partitioning or physical design change proposals

4. Before/After Comparison:
   - Original query vs optimized query
   - Expected performance improvement percentage
   - Rationale for each change

5. Additional Recommendations:
   - Query caching strategy
   - Connection pooling configuration
   - VACUUM/ANALYZE scheduling (PostgreSQL)
   - Key performance metrics to monitor`,tags:["SQL","Query Optimization","Performance"]}},{id:23,cat:"data",score:94,technique:"Statistical Analysis + Structure",ko:{title:"A/B 테스트 통계 분석",prompt:`당신은 통계 분석 전문가이자 실험 설계 전문가입니다. 다음 A/B 테스트 결과를 통계적으로 분석해주세요.

[실험 목적]: ___
[주요 지표(Primary Metric)]: ___
[보조 지표(Secondary Metrics)]: ___
[실험 기간]: ___일

[데이터]:
- 대조군(A): 표본 수 ___, 전환율/평균값 ___
- 실험군(B): 표본 수 ___, 전환율/평균값 ___

다음 분석을 수행해주세요:

1. 실험 설계 검증:
   - 통계적 검정력(Power) 분석: 필요 표본 수 계산
   - 유의수준(α) 및 검정력(1-β) 설정 근거
   - 최소 감지 효과 크기(MDE) 타당성

2. 통계적 검정:
   - 적합한 검정 방법 선택 (Z-test / t-test / Chi-square)
   - 검정 통계량, p-value, 신뢰구간 계산
   - 효과 크기(Effect Size) 계산 (Cohen's d 또는 상대적 차이)

3. 결과 해석:
   - 통계적 유의성 판단
   - 실질적 유의성(Practical Significance) 평가
   - 시각화: 신뢰구간 그래프 코드 (Python/R)

4. 의사결정 프레임워크:
   - 결과 시나리오별 의사결정 (유의/비유의/모호)
   - 예상 비즈니스 임팩트 (매출/사용자 수 추정)
   - 롤아웃 vs 추가 실험 권장 사항

5. 주의사항:
   - 다중 비교 보정 (Bonferroni 등)
   - Simpson의 역설 가능성 확인
   - 프레이밍 효과(Novelty Effect, Hawthorne Effect) 고려`,tags:["A/B테스트","통계분석","실험설계"]},en:{title:"A/B Test Statistical Analysis",prompt:`You are a statistics and experiment design expert. Perform a statistical analysis of the following A/B test results.

[Experiment Purpose]: ___
[Primary Metric]: ___
[Secondary Metrics]: ___
[Experiment Duration]: ___ days

[Data]:
- Control (A): Sample size ___, Conversion rate/Mean ___
- Treatment (B): Sample size ___, Conversion rate/Mean ___

Perform the following analysis:

1. Experiment Design Validation:
   - Statistical power analysis: required sample size calculation
   - Significance level (alpha) and power (1-beta) justification
   - Minimum Detectable Effect (MDE) validity

2. Statistical Testing:
   - Select appropriate test (Z-test / t-test / Chi-square)
   - Calculate test statistic, p-value, confidence interval
   - Effect size calculation (Cohen's d or relative difference)

3. Result Interpretation:
   - Statistical significance determination
   - Practical significance evaluation
   - Visualization: confidence interval graph code (Python/R)

4. Decision Framework:
   - Decision per result scenario (significant / not significant / ambiguous)
   - Estimated business impact (revenue / user count projection)
   - Rollout vs additional experiment recommendation

5. Caveats:
   - Multiple comparison correction (Bonferroni, etc.)
   - Check for Simpson's paradox
   - Consider novelty effect and Hawthorne effect`,tags:["A/B Testing","Statistics","Experiment Design"]}},{id:24,cat:"data",score:92,technique:"Architecture + Best Practices",ko:{title:"데이터 파이프라인 아키텍처 설계",prompt:`당신은 데이터 엔지니어링 아키텍트입니다. 다음 요구사항에 맞는 데이터 파이프라인을 설계해주세요.

[데이터 소스]: ___
[데이터 규모]: 일 ___건 / ___GB
[실시간/배치 요구사항]: ___
[최종 사용 목적]: 분석 / ML / 리포팅

다음 요소를 포함한 아키텍처를 설계해주세요:

1. 데이터 수집(Ingestion):
   - 소스별 수집 방법 (API, CDC, 스트리밍)
   - 스키마 레지스트리와 데이터 계약
   - 에러 핸들링과 재처리 전략

2. 데이터 처리(Processing):
   - ETL vs ELT 선택 근거
   - 배치: Airflow/dbt 파이프라인 설계
   - 실시간: Kafka/Spark Streaming 아키텍처
   - 데이터 품질 검증 게이트 (Great Expectations 등)

3. 데이터 저장(Storage):
   - 레이어 구조 (Raw → Staging → Curated → Serving)
   - 각 레이어별 적합한 스토리지 (Data Lake, Warehouse)
   - 파티셔닝/버킷팅 전략
   - 보존 정책과 비용 최적화

4. 모니터링과 거버넌스:
   - 파이프라인 모니터링 지표 (SLA, 지연, 처리량)
   - 데이터 리니지 추적
   - 접근 제어와 암호화

아키텍처 다이어그램(텍스트 기반)과 기술 스택 추천을 포함해주세요.`,tags:["데이터파이프라인","아키텍처","ETL"]},en:{title:"Data Pipeline Architecture Designer",prompt:`You are a data engineering architect. Design a data pipeline for the following requirements.

[Data Sources]: ___
[Data Volume]: ___ records / ___GB per day
[Real-time/Batch Requirements]: ___
[End Use]: Analytics / ML / Reporting

Design an architecture including:

1. Data Ingestion:
   - Collection methods per source (API, CDC, streaming)
   - Schema registry and data contracts
   - Error handling and reprocessing strategy

2. Data Processing:
   - ETL vs ELT selection rationale
   - Batch: Airflow/dbt pipeline design
   - Real-time: Kafka/Spark Streaming architecture
   - Data quality validation gates (Great Expectations, etc.)

3. Data Storage:
   - Layer structure (Raw → Staging → Curated → Serving)
   - Appropriate storage per layer (Data Lake, Warehouse)
   - Partitioning/bucketing strategy
   - Retention policies and cost optimization

4. Monitoring and Governance:
   - Pipeline monitoring metrics (SLA, latency, throughput)
   - Data lineage tracking
   - Access control and encryption

Include a text-based architecture diagram and technology stack recommendations.`,tags:["Data Pipeline","Architecture","ETL"]}},{id:25,cat:"data",score:91,technique:"Role + Business Context",ko:{title:"대시보드 KPI 추천",prompt:`당신은 비즈니스 인텔리전스(BI) 전문가입니다. 다음 비즈니스에 적합한 대시보드 KPI를 추천하고 설계해주세요.

[비즈니스 유형]: SaaS / 이커머스 / 마켓플레이스 / 미디어 / 기타
[비즈니스 단계]: 초기 / 성장기 / 성숙기
[대시보드 사용자]: 경영진 / 팀리더 / 운영팀
[현재 추적 중인 지표]: ___

다음 프레임워크로 KPI를 설계해주세요:

1. 핵심 KPI (North Star Metric):
   - 비즈니스의 핵심 가치를 대표하는 단일 지표
   - 선택 근거와 계산 공식
   - 벤치마크 범위

2. 카테고리별 KPI (각 3-5개):
   - 성장 지표: 사용자 획득, 활성화, 유지
   - 수익 지표: MRR, ARPU, LTV, CAC
   - 품질 지표: NPS, 이탈률, 응답 시간
   - 운영 지표: 효율성, 비용, 자동화율

3. 대시보드 레이아웃:
   - 상단: 핵심 KPI 요약 카드
   - 중단: 트렌드 차트 (시계열)
   - 하단: 세부 분석 테이블
   - 필터: 기간, 세그먼트, 채널

4. 각 KPI별 상세 정의:
   - 정의와 계산 공식
   - 데이터 소스와 갱신 주기
   - 목표값과 경고 임계값
   - 관련 드릴다운 지표

5. 알림 설정:
   - 이상 탐지 규칙 (전주 대비 ___% 변동 시)
   - 일간/주간 자동 리포트 템플릿`,tags:["KPI","대시보드","BI"]},en:{title:"Dashboard KPI Recommendation",prompt:`You are a Business Intelligence (BI) expert. Recommend and design dashboard KPIs for the following business.

[Business Type]: SaaS / E-commerce / Marketplace / Media / Other
[Business Stage]: Early / Growth / Mature
[Dashboard Users]: Executives / Team Leads / Operations
[Currently Tracked Metrics]: ___

Design KPIs using this framework:

1. North Star Metric:
   - Single metric representing core business value
   - Selection rationale and calculation formula
   - Benchmark range

2. KPIs by Category (3-5 each):
   - Growth metrics: user acquisition, activation, retention
   - Revenue metrics: MRR, ARPU, LTV, CAC
   - Quality metrics: NPS, churn rate, response time
   - Operational metrics: efficiency, cost, automation rate

3. Dashboard Layout:
   - Top: Key KPI summary cards
   - Middle: Trend charts (time series)
   - Bottom: Detailed analysis tables
   - Filters: time period, segment, channel

4. Detailed Definition per KPI:
   - Definition and calculation formula
   - Data source and refresh frequency
   - Target value and warning thresholds
   - Related drill-down metrics

5. Alert Configuration:
   - Anomaly detection rules (when ___% change vs previous week)
   - Daily/weekly automated report template`,tags:["KPI","Dashboard","BI"]}},{id:26,cat:"creative",score:93,technique:"Linguistic Analysis + Structure",ko:{title:"언어학적 분석 기반 브랜드 네이밍",prompt:`당신은 브랜드 네이밍 전문가이자 언어학자입니다. 다음 제품/서비스에 대한 브랜드 이름을 언어학적 분석과 함께 제안해주세요.

[제품/서비스]: ___
[타겟 시장]: 한국 / 글로벌 / 양쪽
[브랜드 성격]: ___
[피해야 할 이미지]: ___

다음 방법론으로 각 5개씩, 총 25개 이름을 제안해주세요:

1. 조어법(Coinage) - 5개:
   - 새로운 단어 창조
   - 발음 용이성 (한국어/영어)
   - 음상(Sound Symbolism) 분석

2. 합성법(Compounding) - 5개:
   - 두 단어의 의미적 결합
   - 결합 시 발생하는 새로운 의미 설명

3. 혼성법(Blending) - 5개:
   - 두 단어의 음절 혼합
   - 원래 단어를 유추할 수 있는 정도 평가

4. 은유법(Metaphor) - 5개:
   - 제품 특성을 은유적으로 표현
   - 연상되는 이미지와 감정 분석

5. 두문자법(Acronym) - 5개:
   - 의미 있는 약어 구성
   - 풀어쓴 원문과 약어의 이중 의미

각 이름에 대해:
- 발음 가이드 (IPA 표기)
- 도메인(.com) 가용성 추정
- 상표 충돌 위험도 (Low/Medium/High)
- 타 언어/문화권에서의 부정적 의미 확인
- 추천 로고 컬러와 시각적 이미지

상위 3개를 최종 추천하고 선택 근거를 설명해주세요.`,tags:["브랜드네이밍","언어학","브랜딩"]},en:{title:"Brand Naming with Linguistic Analysis",prompt:`You are a brand naming expert and linguist. Propose brand names with linguistic analysis for the following product/service.

[Product/Service]: ___
[Target Market]: Korea / Global / Both
[Brand Personality]: ___
[Image to Avoid]: ___

Suggest 5 names each using these methodologies (25 total):

1. Coinage - 5:
   - Create new words
   - Pronunciation ease (Korean/English)
   - Sound symbolism analysis

2. Compounding - 5:
   - Semantic combination of two words
   - Explain emergent meaning from combination

3. Blending - 5:
   - Syllable mixing of two words
   - Evaluate traceability to source words

4. Metaphor - 5:
   - Metaphorical expression of product attributes
   - Associated imagery and emotion analysis

5. Acronym - 5:
   - Meaningful abbreviation construction
   - Dual meaning of expanded form and abbreviation

For each name:
- Pronunciation guide (IPA notation)
- Estimated .com domain availability
- Trademark conflict risk (Low/Medium/High)
- Negative meaning check in other languages/cultures
- Recommended logo color and visual imagery

Recommend top 3 finalists with selection rationale.`,tags:["Brand Naming","Linguistics","Branding"]}},{id:27,cat:"creative",score:92,technique:"World-building Framework",ko:{title:"스토리 월드빌딩 프레임워크",prompt:`당신은 세계관 설계 전문 작가이자 내러티브 디자이너입니다. 다음 장르의 스토리 세계관을 체계적으로 구축해주세요.

[장르]: 판타지 / SF / 현대 / 역사 / 디스토피아
[매체]: 소설 / 웹소설 / 게임 / 영화 / 웹툰
[톤/분위기]: ___
[핵심 테마]: ___

다음 요소를 설계해주세요:

1. 세계의 물리적 구조:
   - 지리/환경 (지도 묘사 포함)
   - 기후와 자원 분포
   - 기술/마법 체계의 규칙과 제약

2. 사회적 구조:
   - 정치 체계와 권력 구조
   - 경제 시스템과 화폐
   - 사회 계층과 갈등 구조
   - 종교/신앙 체계

3. 문화적 요소:
   - 언어와 문자 (주요 표현 10개)
   - 의식주 특징
   - 금기와 관습
   - 축제와 의례

4. 역사 타임라인:
   - 창세 신화
   - 5개 핵심 역사적 사건
   - 현재 세계의 갈등/위기 상황

5. 스토리 요소:
   - 이 세계에서 가능한 갈등 유형 5개
   - 주인공 아크타입 제안 3개
   - 3막 구조 플롯 개요

세계관 일관성 체크리스트와 자주 발생하는 설정 충돌 방지 가이드도 포함해주세요.`,tags:["월드빌딩","세계관","스토리"]},en:{title:"Story World-Building Framework",prompt:`You are a world-building expert and narrative designer. Systematically construct a story world for the following genre.

[Genre]: Fantasy / Sci-Fi / Contemporary / Historical / Dystopian
[Medium]: Novel / Web Novel / Game / Film / Webtoon
[Tone/Mood]: ___
[Core Theme]: ___

Design these elements:

1. Physical World Structure:
   - Geography/environment (include map description)
   - Climate and resource distribution
   - Technology/magic system rules and limitations

2. Social Structure:
   - Political system and power structure
   - Economic system and currency
   - Social hierarchy and conflict structure
   - Religion/belief system

3. Cultural Elements:
   - Language and script (10 key expressions)
   - Food, clothing, shelter characteristics
   - Taboos and customs
   - Festivals and rituals

4. Historical Timeline:
   - Creation myth
   - 5 pivotal historical events
   - Current world conflicts/crises

5. Story Elements:
   - 5 conflict types possible in this world
   - 3 protagonist archetype suggestions
   - 3-act structure plot outline

Include a world consistency checklist and a guide for preventing common setting contradictions.`,tags:["World-Building","Setting","Story"]}},{id:28,cat:"creative",score:94,technique:"Design System + Structure",ko:{title:"UI/UX 디자인 시스템 생성기",prompt:`당신은 시니어 UI/UX 디자이너입니다. 다음 제품의 디자인 시스템 기반을 설계해주세요.

[제품 유형]: 웹앱 / 모바일앱 / 대시보드 / 이커머스
[브랜드 키워드]: ___
[타겟 사용자]: ___
[참고 디자인]: ___

다음 요소를 포함한 디자인 시스템을 설계해주세요:

1. 디자인 토큰(Design Tokens):
   - 컬러 팔레트: Primary(3), Secondary(3), Neutral(7), Semantic(4: success, warning, error, info)
   - 타이포그래피: 서체 선택 근거, 스케일 (h1-h6, body, caption)
   - 스페이싱: 4px 기반 스케일 (4, 8, 12, 16, 24, 32, 48, 64)
   - 반응형 브레이크포인트

2. 핵심 컴포넌트 명세 (10개):
   - Button (Primary, Secondary, Ghost, Danger)
   - Input (Text, Select, Checkbox, Radio)
   - Card, Modal, Toast/Snackbar
   - Navigation (Header, Sidebar, Breadcrumb)
   - 각 컴포넌트의 상태 (default, hover, active, disabled, focus)

3. 레이아웃 시스템:
   - 그리드 시스템 (12컬럼, 거터, 마진)
   - 주요 페이지 레이아웃 패턴 3개
   - 반응형 동작 규칙

4. 인터랙션 가이드:
   - 애니메이션 원칙 (duration, easing)
   - 마이크로인터랙션 패턴 5개
   - 로딩/트랜지션 패턴

5. 접근성 (A11y) 기준:
   - WCAG 2.1 AA 준수 체크리스트
   - 색상 대비 비율 가이드
   - 키보드 네비게이션 패턴

CSS 변수(Custom Properties) 코드도 포함해주세요.`,tags:["디자인시스템","UI/UX","컴포넌트"]},en:{title:"UI/UX Design System Creator",prompt:`You are a senior UI/UX designer. Design the foundation of a design system for the following product.

[Product Type]: Web App / Mobile App / Dashboard / E-commerce
[Brand Keywords]: ___
[Target Users]: ___
[Design Reference]: ___

Design a system including:

1. Design Tokens:
   - Color palette: Primary(3), Secondary(3), Neutral(7), Semantic(4: success, warning, error, info)
   - Typography: font selection rationale, scale (h1-h6, body, caption)
   - Spacing: 4px-based scale (4, 8, 12, 16, 24, 32, 48, 64)
   - Responsive breakpoints

2. Core Component Specs (10):
   - Button (Primary, Secondary, Ghost, Danger)
   - Input (Text, Select, Checkbox, Radio)
   - Card, Modal, Toast/Snackbar
   - Navigation (Header, Sidebar, Breadcrumb)
   - States per component (default, hover, active, disabled, focus)

3. Layout System:
   - Grid system (12-column, gutter, margin)
   - 3 key page layout patterns
   - Responsive behavior rules

4. Interaction Guide:
   - Animation principles (duration, easing)
   - 5 micro-interaction patterns
   - Loading/transition patterns

5. Accessibility (A11y) Standards:
   - WCAG 2.1 AA compliance checklist
   - Color contrast ratio guide
   - Keyboard navigation patterns

Include CSS custom properties code.`,tags:["Design System","UI/UX","Components"]}},{id:29,cat:"creative",score:91,technique:"Hook Formula + Structure",ko:{title:"훅 포뮬러 기반 영상 스크립트",prompt:`당신은 영상 콘텐츠 전문 스크립트 라이터입니다. 다음 영상의 스크립트를 훅 포뮬러를 적용하여 작성해주세요.

[영상 유형]: 유튜브 / 릴스 / TikTok / 기업 소개 / 교육
[주제]: ___
[영상 길이]: ___분
[타겟 시청자]: ___
[톤]: 친근한 / 전문적인 / 유머러스한 / 감동적인

다음 구조로 스크립트를 작성해주세요:

1. 훅 (처음 3초):
   - 3가지 훅 변형 제안 (질문형 / 충격형 / 공감형)
   - 각 훅의 예상 이탈 방지 효과 평가
   - 자막 텍스트 (BOLD 처리할 키워드 표시)

2. 문제 제기 (10-20초):
   - 시청자의 고통점과 공감 유도
   - 감정적 연결 포인트

3. 본문 (핵심 내용):
   - 3-5개 핵심 포인트 (각 포인트별 대사/내레이션)
   - 시각적 연출 지시 (B-roll, 그래픽, 텍스트 오버레이)
   - 패턴 인터럽트 (attention reset) 위치 3곳

4. CTA 및 마무리:
   - 부드러운 CTA (구독, 좋아요, 댓글 유도)
   - 다음 영상 예고

5. 제작 노트:
   - 썸네일 텍스트 제안 3개
   - SEO 제목 (60자 이내) 3개
   - 태그/해시태그 10개
   - 설명란 텍스트 (300자)

타임코드와 함께 카메라 앵글, 전환 효과 지시도 포함해주세요.`,tags:["영상스크립트","훅","콘텐츠"]},en:{title:"Video Script with Hook Formula",prompt:`You are a professional video content scriptwriter. Write a script using hook formulas for the following video.

[Video Type]: YouTube / Reels / TikTok / Corporate / Educational
[Topic]: ___
[Video Length]: ___ minutes
[Target Viewers]: ___
[Tone]: Friendly / Professional / Humorous / Emotional

Structure the script as follows:

1. Hook (First 3 seconds):
   - 3 hook variations (Question / Shock / Empathy)
   - Evaluate expected retention impact for each
   - Subtitle text (mark BOLD keywords)

2. Problem Statement (10-20 seconds):
   - Viewer pain points and empathy building
   - Emotional connection points

3. Body (Core Content):
   - 3-5 key points (dialogue/narration per point)
   - Visual direction notes (B-roll, graphics, text overlay)
   - 3 pattern interrupt (attention reset) locations

4. CTA and Closing:
   - Soft CTA (subscribe, like, comment prompts)
   - Next video teaser

5. Production Notes:
   - 3 thumbnail text suggestions
   - 3 SEO titles (under 60 chars)
   - 10 tags/hashtags
   - Description text (300 chars)

Include timecodes with camera angle and transition effect directions.`,tags:["Video Script","Hook","Content"]}},{id:30,cat:"creative",score:95,technique:"SCAMPER + Ideation",ko:{title:"SCAMPER 기법 제품 아이디어 발상",prompt:`당신은 이노베이션 컨설턴트입니다. SCAMPER 기법을 활용하여 다음 제품/서비스의 혁신적인 기능 아이디어를 발상해주세요.

[기존 제품/서비스]: ___
[산업 분야]: ___
[타겟 사용자]: ___
[개선 목표]: 사용성 / 매출 / 차별화 / 비용 절감

SCAMPER 7가지 기법을 적용해주세요:

1. Substitute (대체): 어떤 요소를 다른 것으로 대체할 수 있는가?
   - 아이디어 3개 + 실현 가능성 평가

2. Combine (결합): 어떤 기능/서비스를 결합할 수 있는가?
   - 아이디어 3개 + 시너지 효과 분석

3. Adapt (적용): 다른 분야의 아이디어를 적용할 수 있는가?
   - 아이디어 3개 + 차용한 분야와 원리

4. Modify (수정): 크기, 형태, 속성을 변경하면 어떨까?
   - 아이디어 3개 + 예상 사용자 반응

5. Put to other uses (다른 용도): 다른 목적으로 사용할 수 있는가?
   - 아이디어 3개 + 새로운 시장 기회

6. Eliminate (제거): 어떤 요소를 제거/단순화할 수 있는가?
   - 아이디어 3개 + 비용 절감 효과

7. Reverse/Rearrange (역전/재배치): 순서나 구조를 바꾸면?
   - 아이디어 3개 + 파괴적 혁신 가능성

총 21개 아이디어 중 상위 5개를 선정하여:
- 실현 가능성 (1-10)
- 영향력 (1-10)
- 예상 개발 기간
- 간단한 와이어프레임/사용 시나리오
- MVP 구현에 필요한 핵심 기능 3개`,tags:["SCAMPER","아이디에이션","혁신"]},en:{title:"Product Feature Ideation with SCAMPER",prompt:`You are an innovation consultant. Use the SCAMPER technique to generate innovative feature ideas for the following product/service.

[Existing Product/Service]: ___
[Industry]: ___
[Target Users]: ___
[Improvement Goal]: Usability / Revenue / Differentiation / Cost Reduction

Apply all 7 SCAMPER techniques:

1. Substitute: What elements can be replaced?
   - 3 ideas + feasibility assessment

2. Combine: What features/services can be merged?
   - 3 ideas + synergy effect analysis

3. Adapt: What ideas from other fields can be applied?
   - 3 ideas + borrowed field and principle

4. Modify: What if we change size, shape, or attributes?
   - 3 ideas + expected user reaction

5. Put to other uses: Can it serve a different purpose?
   - 3 ideas + new market opportunities

6. Eliminate: What elements can be removed/simplified?
   - 3 ideas + cost reduction impact

7. Reverse/Rearrange: What if we change the order or structure?
   - 3 ideas + disruptive innovation potential

From the 21 total ideas, select the top 5 and provide:
- Feasibility score (1-10)
- Impact score (1-10)
- Estimated development timeline
- Brief wireframe/usage scenario
- 3 core features needed for MVP`,tags:["SCAMPER","Ideation","Innovation"]}},{id:31,cat:"research",score:95,technique:"Systematic Method + Structure",ko:{title:"체계적 문헌 고찰 가이드",prompt:`당신은 체계적 문헌 고찰(Systematic Literature Review) 방법론 전문가입니다. 다음 연구 주제에 대한 체계적 문헌 고찰 수행 가이드를 작성해주세요.

[연구 주제]: ___
[연구 분야]: ___
[목표 학술지]: ___
[기간 범위]: ___년 ~ ___년

PRISMA 가이드라인에 따라 다음을 제공해주세요:

1. 연구 질문 구조화 (PICO/PEO):
   - Population: 대상
   - Intervention/Exposure: 개입/노출
   - Comparison: 비교군
   - Outcome: 결과 변수

2. 검색 전략:
   - 검색 데이터베이스 선정 (PubMed, Scopus, Web of Science 등)
   - 검색어 조합 (Boolean operators 활용)
   - MeSH terms / 주제어 목록
   - 검색식 예시 (각 DB별)

3. 선정/배제 기준:
   - Inclusion criteria (5개 이상)
   - Exclusion criteria (5개 이상)
   - 2단계 스크리닝 절차 (제목+초록 → 전문)

4. 데이터 추출 양식:
   - 추출할 데이터 항목 목록
   - 데이터 추출 표 템플릿
   - 품질 평가 도구 선택 (RoB, CASP, JBI 등)

5. 합성 및 보고:
   - 서술적 합성(Narrative Synthesis) 구조
   - 메타분석 가능성 평가 기준
   - PRISMA 플로우 다이어그램 템플릿
   - 비뚤림 위험(Risk of Bias) 평가 방법

프로토콜 등록 (PROSPERO) 가이드와 예상 소요 기간도 포함해주세요.`,tags:["체계적문헌고찰","PRISMA","연구방법"]},en:{title:"Systematic Literature Review Guide",prompt:`You are a systematic literature review methodology expert. Write a comprehensive guide for conducting a systematic review on the following topic.

[Research Topic]: ___
[Research Field]: ___
[Target Journal]: ___
[Time Range]: ___ to ___

Following PRISMA guidelines, provide:

1. Research Question Structure (PICO/PEO):
   - Population
   - Intervention/Exposure
   - Comparison
   - Outcome

2. Search Strategy:
   - Database selection (PubMed, Scopus, Web of Science, etc.)
   - Search term combinations (using Boolean operators)
   - MeSH terms / subject headings list
   - Sample search strings (per database)

3. Inclusion/Exclusion Criteria:
   - Inclusion criteria (5+ items)
   - Exclusion criteria (5+ items)
   - 2-stage screening procedure (title+abstract → full text)

4. Data Extraction Form:
   - List of data items to extract
   - Data extraction table template
   - Quality assessment tool selection (RoB, CASP, JBI, etc.)

5. Synthesis and Reporting:
   - Narrative synthesis structure
   - Meta-analysis feasibility criteria
   - PRISMA flow diagram template
   - Risk of bias assessment method

Include PROSPERO protocol registration guide and estimated timeline.`,tags:["Systematic Review","PRISMA","Research Methods"]}},{id:32,cat:"research",score:93,technique:"Decision Tree + Analysis",ko:{title:"연구 방법론 선택기",prompt:`당신은 연구 방법론 전문가입니다. 다음 연구 질문에 가장 적합한 연구 방법론을 선택하고 설계를 안내해주세요.

[연구 질문]: ___
[연구 분야]: ___
[연구 목적]: 탐색 / 기술 / 설명 / 인과관계 검증
[가용 자원]: 시간 ___개월, 예산 ___, 연구자 ___명
[데이터 접근성]: ___

다음 의사결정 트리를 따라 방법론을 추천해주세요:

1. 연구 패러다임 결정:
   - 양적 연구 vs 질적 연구 vs 혼합 연구
   - 선택 근거와 각 접근의 장단점

2. 적합한 연구 설계 Top 3:
   각 설계별로:
   - 설계명과 설명
   - 이 연구 질문에 적합한 이유
   - 장점 3개, 한계점 3개
   - 예상 표본 크기 산정 근거
   - 타당도/신뢰도 확보 전략

3. 추천 순위 1위 방법론 상세 설계:
   - 연구 절차 타임라인
   - 데이터 수집 방법과 도구
   - 분석 방법 (통계 기법 / 코딩 방법)
   - 윤리적 고려사항 (IRB 승인 포인트)

4. 위협 요인과 대응:
   - 내적 타당도 위협 3가지 + 대응 방안
   - 외적 타당도 위협 2가지 + 대응 방안
   - 연구자 편향 관리 방법

5. 결과 보고 가이드:
   - 적합한 보고 지침 (CONSORT, STROBE, COREQ 등)
   - 필수 보고 항목 체크리스트`,tags:["연구방법론","연구설계","방법론"]},en:{title:"Research Methodology Selector",prompt:`You are a research methodology expert. Select and guide the most appropriate methodology for the following research question.

[Research Question]: ___
[Research Field]: ___
[Research Purpose]: Exploratory / Descriptive / Explanatory / Causal
[Available Resources]: Time ___ months, Budget ___, Researchers ___
[Data Accessibility]: ___

Follow this decision tree to recommend a methodology:

1. Research Paradigm Decision:
   - Quantitative vs Qualitative vs Mixed Methods
   - Rationale and pros/cons of each approach

2. Top 3 Suitable Research Designs:
   For each design:
   - Name and description
   - Why it fits this research question
   - 3 advantages, 3 limitations
   - Sample size estimation rationale
   - Validity/reliability strategies

3. #1 Recommended Methodology - Detailed Design:
   - Research procedure timeline
   - Data collection methods and instruments
   - Analysis methods (statistical techniques / coding methods)
   - Ethical considerations (IRB approval points)

4. Threats and Mitigation:
   - 3 internal validity threats + mitigation strategies
   - 2 external validity threats + mitigation strategies
   - Researcher bias management methods

5. Reporting Guide:
   - Appropriate reporting guidelines (CONSORT, STROBE, COREQ, etc.)
   - Required reporting items checklist`,tags:["Research Methodology","Research Design","Methods"]}},{id:33,cat:"research",score:92,technique:"Chain of Thought + Logic",ko:{title:"가설 수립 어시스턴트",prompt:`당신은 과학적 방법론 전문가입니다. 다음 연구 주제에 대한 검증 가능한 연구 가설을 수립하도록 도와주세요.

[연구 분야]: ___
[관찰된 현상/문제]: ___
[기존 이론적 배경]: ___
[가용 데이터/실험 환경]: ___

단계적 사고(Chain of Thought)로 가설을 도출해주세요:

1. 현상 분석:
   - 관찰된 현상의 핵심 변수 식별
   - 변수 간 잠재적 관계 매핑
   - 기존 연구에서 확인된 관계 vs 미확인 관계

2. 가설 생성 (5개):
   각 가설에 대해:
   - 귀무가설(H0)과 대립가설(H1) 쌍
   - 방향성 가설 vs 비방향성 가설 명시
   - 이론적 근거 (어떤 이론/모델에 기반하는지)
   - 반증 가능성(Falsifiability) 확인

3. 가설 평가 매트릭스:
   - 검증 가능성 (1-5)
   - 이론적 중요성 (1-5)
   - 실용적 의의 (1-5)
   - 참신성 (1-5)
   - 연구 실현 가능성 (1-5)

4. 최우선 가설 상세화:
   - 조작적 정의 (각 변수별)
   - 통제 변수 목록
   - 매개/조절 변수 가능성
   - 예상 결과 시나리오 (지지/기각 시 해석)

5. 검증 전략:
   - 적합한 연구 방법
   - 예상 효과 크기와 필요 표본 수
   - 대안적 설명(Rival Hypotheses) 배제 전략`,tags:["가설수립","과학적방법","연구"]},en:{title:"Hypothesis Formulation Assistant",prompt:`You are a scientific methodology expert. Help formulate testable research hypotheses for the following topic.

[Research Field]: ___
[Observed Phenomenon/Problem]: ___
[Existing Theoretical Background]: ___
[Available Data/Experimental Setup]: ___

Derive hypotheses using chain of thought:

1. Phenomenon Analysis:
   - Identify key variables in the observed phenomenon
   - Map potential relationships between variables
   - Confirmed relationships in existing research vs unconfirmed

2. Hypothesis Generation (5):
   For each hypothesis:
   - Null hypothesis (H0) and alternative hypothesis (H1) pair
   - Specify directional vs non-directional
   - Theoretical basis (which theory/model it's based on)
   - Falsifiability verification

3. Hypothesis Evaluation Matrix:
   - Testability (1-5)
   - Theoretical importance (1-5)
   - Practical significance (1-5)
   - Novelty (1-5)
   - Research feasibility (1-5)

4. Top Priority Hypothesis Detail:
   - Operational definitions (per variable)
   - List of control variables
   - Potential mediating/moderating variables
   - Expected result scenarios (interpretation if supported/rejected)

5. Testing Strategy:
   - Appropriate research method
   - Expected effect size and required sample size
   - Rival hypotheses elimination strategy`,tags:["Hypothesis","Scientific Method","Research"]}},{id:34,cat:"research",score:94,technique:"Role + Methodology + Quality",ko:{title:"설문 조사 설계자",prompt:`당신은 설문 방법론 전문가입니다. 다음 연구를 위한 설문지를 체계적으로 설계해주세요.

[연구 목적]: ___
[연구 대상]: ___
[측정할 구성개념(Construct)]: ___
[설문 방식]: 온라인 / 오프라인 / 혼합

다음 단계로 설문지를 설계해주세요:

1. 구성개념 → 문항 매핑:
   - 각 구성개념의 조작적 정의
   - 하위 차원(Sub-dimension) 분류
   - 차원별 문항 수 배분

2. 문항 작성 (각 구성개념별 5-7개):
   - 리커트 5점/7점 척도 문항
   - 역코딩 문항 포함 (최소 20%)
   - 사회적 바람직성 편향 방지 문항
   - 주의력 확인 문항 (Attention Check) 2개

3. 설문지 구조:
   - 인구통계 문항 (필수/선택 구분)
   - 문항 배치 순서와 근거
   - 섹션 간 전환 안내문
   - 예상 소요 시간 계산

4. 타당도와 신뢰도 확보:
   - 내용 타당도: 전문가 검토 체크리스트
   - 구성 타당도: 확인적 요인분석(CFA) 계획
   - 수렴/판별 타당도 확인 방법
   - 크론바흐 알파 목표치

5. 파일럿 테스트 계획:
   - 파일럿 표본 크기와 선정 기준
   - 검증할 항목 체크리스트
   - 문항 수정 기준 (문항-총점 상관, 요인 적재량)

응답 편향 최소화 전략과 IRB 승인용 동의서 템플릿도 포함해주세요.`,tags:["설문설계","측정도구","연구방법"]},en:{title:"Survey Questionnaire Designer",prompt:`You are a survey methodology expert. Systematically design a questionnaire for the following research.

[Research Purpose]: ___
[Target Population]: ___
[Constructs to Measure]: ___
[Survey Method]: Online / Offline / Mixed

Design the questionnaire in these steps:

1. Construct → Item Mapping:
   - Operational definition for each construct
   - Sub-dimension classification
   - Item count allocation per dimension

2. Item Writing (5-7 per construct):
   - 5-point/7-point Likert scale items
   - Include reverse-coded items (minimum 20%)
   - Social desirability bias prevention items
   - 2 attention check items

3. Questionnaire Structure:
   - Demographic items (required/optional distinction)
   - Item ordering sequence and rationale
   - Section transition instructions
   - Estimated completion time calculation

4. Validity and Reliability:
   - Content validity: expert review checklist
   - Construct validity: CFA plan
   - Convergent/discriminant validity methods
   - Cronbach's alpha targets

5. Pilot Test Plan:
   - Pilot sample size and selection criteria
   - Verification checklist
   - Item revision criteria (item-total correlation, factor loadings)

Include response bias minimization strategies and IRB consent form template.`,tags:["Survey Design","Measurement","Research Methods"]}},{id:35,cat:"research",score:91,technique:"Gap Analysis + Structure",ko:{title:"연구 갭 식별자",prompt:`당신은 학술 연구 전략 컨설턴트입니다. 다음 연구 분야에서 의미 있는 연구 갭(Research Gap)을 식별하고 연구 기회를 제안해주세요.

[연구 분야]: ___
[관심 주제]: ___
[최근 읽은 핵심 논문]: (2-3개 나열)
[연구자 수준]: 석사 / 박사 / 포스트닥

다음 프레임워크로 연구 갭을 분석해주세요:

1. 기존 연구 지형 매핑:
   - 해당 분야의 주요 연구 흐름 3-4개
   - 각 흐름의 핵심 연구자와 대표 논문
   - 현재 합의된 사항 vs 논쟁 중인 사항

2. 갭 유형별 식별 (각 2-3개):
   - 이론적 갭: 설명되지 않는 현상
   - 방법론적 갭: 새로운 접근이 필요한 영역
   - 실증적 갭: 검증되지 않은 가설
   - 맥락적 갭: 다른 맥락(문화, 산업, 규모)에서의 검증 필요
   - 시간적 갭: 최근 변화로 재검증 필요

3. 연구 기회 순위 (Top 5):
   각 기회에 대해:
   - 연구 질문 초안
   - 기여도(Contribution) 예상
   - 실행 가능성과 리소스 요구
   - 게재 가능 학술지 수준 예측
   - 경쟁 연구 동향 (다른 연구자도 추진 중인지)

4. 연구 차별화 전략:
   - 이 갭을 채우기 위한 독특한 접근법
   - 학제간 연구 가능성
   - 데이터 소스와 접근 전략

타 분야 키워드를 활용한 교차 검색 전략도 제안해주세요.`,tags:["연구갭","문헌분석","연구전략"]},en:{title:"Research Gap Identifier",prompt:`You are an academic research strategy consultant. Identify meaningful research gaps and propose research opportunities in the following field.

[Research Field]: ___
[Topic of Interest]: ___
[Key Recent Papers Read]: (list 2-3)
[Researcher Level]: Master's / PhD / Postdoc

Analyze research gaps using this framework:

1. Existing Research Landscape Mapping:
   - 3-4 major research streams in the field
   - Key researchers and landmark papers per stream
   - Current consensus vs debated issues

2. Gap Identification by Type (2-3 each):
   - Theoretical gaps: unexplained phenomena
   - Methodological gaps: areas needing new approaches
   - Empirical gaps: untested hypotheses
   - Contextual gaps: need for testing in different contexts (culture, industry, scale)
   - Temporal gaps: need for re-examination due to recent changes

3. Research Opportunity Ranking (Top 5):
   For each opportunity:
   - Draft research question
   - Expected contribution
   - Feasibility and resource requirements
   - Predicted journal tier for publication
   - Competing research trends (are others pursuing this?)

4. Research Differentiation Strategy:
   - Unique approach to fill this gap
   - Interdisciplinary research possibilities
   - Data sources and access strategies

Also suggest cross-search strategies using keywords from adjacent fields.`,tags:["Research Gap","Literature Analysis","Research Strategy"]}},{id:36,cat:"productivity",score:92,technique:"Template + Structure",ko:{title:"회의 안건 및 회의록 템플릿",prompt:`당신은 회의 퍼실리테이션 전문가입니다. 다음 회의를 효과적으로 운영하기 위한 안건과 회의록 템플릿을 작성해주세요.

[회의 유형]: 정기회의 / 프로젝트 킥오프 / 브레인스토밍 / 의사결정 / 회고
[참석자]: ___명 (역할: ___)
[예상 시간]: ___분
[주요 안건]: ___

1. 회의 전 준비:
   - 안건 목록 (우선순위 순서)
   - 각 안건별 배정 시간
   - 사전 읽기 자료 목록
   - 참석자별 준비 사항

2. 안건 템플릿 (각 안건별):
   - 안건명과 목적 (정보 공유 / 토론 / 의사결정)
   - 발표자/진행자
   - 배경 설명 (3문장 이내)
   - 기대 산출물 (결정사항, 액션아이템 등)

3. 회의 운영 스크립트:
   - 오프닝 (2분): 목적, 규칙, 타임키핑 안내
   - 각 안건 진행 멘트
   - 타임박싱 경고 멘트
   - 클로징 (3분): 요약, 액션아이템 확인

4. 회의록 템플릿:
   - 기본 정보 (일시, 장소, 참석자, 불참자)
   - 안건별 논의 내용 요약
   - 결정 사항 목록
   - 액션 아이템 테이블 (담당자, 기한, 상태)
   - 다음 회의 일정과 예비 안건

5. 회의 효율성 체크리스트:
   - 회의 필요성 판단 기준 (이 회의가 정말 필요한가?)
   - 비동기 대안 검토 (이메일/문서로 대체 가능한가?)
   - 적정 참석자 범위 판단`,tags:["회의","안건","회의록"]},en:{title:"Meeting Agenda and Minutes Template",prompt:`You are a meeting facilitation expert. Create an agenda and minutes template for effective meeting management.

[Meeting Type]: Regular / Project Kickoff / Brainstorming / Decision-making / Retrospective
[Attendees]: ___ (Roles: ___)
[Expected Duration]: ___ minutes
[Main Topics]: ___

1. Pre-meeting Preparation:
   - Agenda items (priority ordered)
   - Time allocation per item
   - Pre-read materials list
   - Preparation requirements per attendee

2. Agenda Template (per item):
   - Item name and purpose (Information / Discussion / Decision)
   - Presenter/facilitator
   - Background context (under 3 sentences)
   - Expected output (decisions, action items, etc.)

3. Meeting Facilitation Script:
   - Opening (2 min): purpose, ground rules, timekeeper
   - Transition language per agenda item
   - Timebox warning scripts
   - Closing (3 min): summary, action item review

4. Minutes Template:
   - Basic info (date, location, attendees, absentees)
   - Discussion summary per agenda item
   - Decision log
   - Action item table (owner, deadline, status)
   - Next meeting date and tentative agenda

5. Meeting Efficiency Checklist:
   - Meeting necessity criteria (is this meeting really needed?)
   - Async alternative review (can it be handled via email/doc?)
   - Appropriate attendee scope assessment`,tags:["Meeting","Agenda","Minutes"]}},{id:37,cat:"productivity",score:94,technique:"Risk Matrix + Structure",ko:{title:"프로젝트 리스크 평가 매트릭스",prompt:`당신은 프로젝트 관리(PMP) 전문가입니다. 다음 프로젝트의 리스크를 체계적으로 평가하고 대응 계획을 수립해주세요.

[프로젝트명]: ___
[프로젝트 기간]: ___개월
[팀 규모]: ___명
[예산]: ___
[프로젝트 유형]: 소프트웨어 개발 / 마케팅 / 제품 출시 / 조직 변경

다음 프레임워크로 리스크를 분석해주세요:

1. 리스크 식별 (15개 이상):
   카테고리별로 분류:
   - 기술 리스크 (4개)
   - 일정 리스크 (3개)
   - 인력 리스크 (3개)
   - 예산 리스크 (2개)
   - 외부 리스크 (2개)
   - 품질 리스크 (2개)

2. 리스크 평가 매트릭스:
   각 리스크에 대해:
   - 발생 확률 (1-5)
   - 영향도 (1-5)
   - 리스크 점수 = 확률 x 영향도
   - 우선순위 등급 (Critical / High / Medium / Low)

3. 대응 전략 (상위 5개 리스크):
   각 리스크별:
   - 대응 유형 (회피 / 전이 / 완화 / 수용)
   - 예방 조치 (Proactive Actions)
   - 대응 조치 (Contingency Plan)
   - 트리거 이벤트 (발동 조건)
   - 책임자와 비상 연락망

4. 모니터링 체계:
   - 리스크 리뷰 주기와 방법
   - 핵심 리스크 지표(KRI) 5개
   - 에스컬레이션 기준과 경로
   - 리스크 로그 템플릿

5. 리스크 히트맵:
   - 5x5 매트릭스 시각화 (텍스트 기반)
   - 리스크 추이 추적 방법`,tags:["리스크관리","프로젝트관리","PMP"]},en:{title:"Project Risk Assessment Matrix",prompt:`You are a PMP-certified project management expert. Systematically assess risks and develop response plans for the following project.

[Project Name]: ___
[Duration]: ___ months
[Team Size]: ___
[Budget]: ___
[Project Type]: Software Dev / Marketing / Product Launch / Org Change

Analyze risks using this framework:

1. Risk Identification (15+):
   Categorize by:
   - Technical risks (4)
   - Schedule risks (3)
   - People risks (3)
   - Budget risks (2)
   - External risks (2)
   - Quality risks (2)

2. Risk Assessment Matrix:
   For each risk:
   - Probability (1-5)
   - Impact (1-5)
   - Risk score = Probability x Impact
   - Priority level (Critical / High / Medium / Low)

3. Response Strategy (Top 5 risks):
   Per risk:
   - Response type (Avoid / Transfer / Mitigate / Accept)
   - Proactive actions
   - Contingency plan
   - Trigger events
   - Owner and escalation contacts

4. Monitoring System:
   - Risk review frequency and method
   - 5 Key Risk Indicators (KRI)
   - Escalation criteria and path
   - Risk log template

5. Risk Heat Map:
   - 5x5 matrix visualization (text-based)
   - Risk trend tracking method`,tags:["Risk Management","Project Management","PMP"]}},{id:38,cat:"productivity",score:93,technique:"Eisenhower + Planning",ko:{title:"아이젠하워 매트릭스 주간 계획",prompt:`당신은 시간 관리 및 생산성 코치입니다. 아이젠하워 매트릭스를 활용한 효과적인 주간 계획을 수립해주세요.

[역할/직책]: ___
[이번 주 주요 업무 목록]: (모든 할 일을 나열)
[주간 가용 업무 시간]: ___시간
[이번 주 주요 약속/미팅]: ___

다음 순서로 주간 계획을 수립해주세요:

1. 업무 분류 (아이젠하워 매트릭스):
   Q1 - 긴급 + 중요 (Do First):
   - 해당 업무 분류와 근거
   - 마감 기한 명시
   - 예상 소요 시간

   Q2 - 비긴급 + 중요 (Schedule):
   - 해당 업무 분류와 근거
   - 최적 수행 시간대 제안
   - 장기 목표와의 연결

   Q3 - 긴급 + 비중요 (Delegate):
   - 위임 대상과 방법
   - 위임 시 전달할 컨텍스트

   Q4 - 비긴급 + 비중요 (Eliminate):
   - 제거/축소 근거
   - 거절 스크립트 제안

2. 일별 시간 블록 계획 (월-금):
   각 요일별:
   - 딥 워크 블록 (2시간 단위)
   - 셜로우 워크 블록 (이메일, 미팅 등)
   - 버퍼 시간 (예상치 못한 업무)
   - 에너지 레벨 고려 (오전: 복잡한 작업, 오후: 루틴)

3. 주간 성공 기준:
   - 이번 주 완료 시 성공인 핵심 과제 3개
   - 각 과제의 "완료" 정의
   - 금요일 주간 회고 질문 3개

에너지 관리 팁과 포모도로 타이머 적용 가이드도 포함해주세요.`,tags:["시간관리","아이젠하워","주간계획"]},en:{title:"Weekly Planning with Eisenhower Matrix",prompt:`You are a time management and productivity coach. Create an effective weekly plan using the Eisenhower Matrix.

[Role/Title]: ___
[This Week's Task List]: (list all to-dos)
[Available Work Hours]: ___ hours
[Key Appointments/Meetings]: ___

Build the weekly plan in this order:

1. Task Classification (Eisenhower Matrix):
   Q1 - Urgent + Important (Do First):
   - Classified tasks with rationale
   - Explicit deadlines
   - Estimated time

   Q2 - Not Urgent + Important (Schedule):
   - Classified tasks with rationale
   - Optimal time slot suggestions
   - Connection to long-term goals

   Q3 - Urgent + Not Important (Delegate):
   - Delegation targets and methods
   - Context to provide when delegating

   Q4 - Not Urgent + Not Important (Eliminate):
   - Elimination/reduction rationale
   - Suggested decline scripts

2. Daily Time Block Plan (Mon-Fri):
   Per day:
   - Deep work blocks (2-hour units)
   - Shallow work blocks (email, meetings, etc.)
   - Buffer time (unexpected tasks)
   - Energy level consideration (AM: complex tasks, PM: routine)

3. Weekly Success Criteria:
   - 3 key deliverables that define a successful week
   - "Done" definition for each
   - 3 Friday weekly retrospective questions

Include energy management tips and Pomodoro timer application guide.`,tags:["Time Management","Eisenhower","Weekly Planning"]}},{id:39,cat:"productivity",score:95,technique:"Role + Template + Process",ko:{title:"SOP (표준운영절차) 작성기",prompt:`당신은 프로세스 개선 전문가입니다. 다음 업무에 대한 표준운영절차(SOP)를 작성해주세요.

[업무명]: ___
[부서/팀]: ___
[수행 빈도]: 일간 / 주간 / 월간 / 이벤트 기반
[현재 문제점]: ___
[관련 시스템/도구]: ___

다음 구조로 SOP를 작성해주세요:

1. 문서 정보:
   - SOP 번호, 버전, 작성일
   - 목적과 적용 범위
   - 관련 정책/규정 참조
   - 용어 정의

2. 역할과 책임 (RACI 매트릭스):
   - Responsible (실행): 누가 수행하는가
   - Accountable (책임): 최종 승인자
   - Consulted (자문): 의견을 구할 대상
   - Informed (통보): 결과를 알릴 대상

3. 절차 상세 (번호가 매겨진 단계):
   각 단계별:
   - 구체적인 수행 액션 (스크린샷 위치 표시)
   - 의사결정 분기점 (IF-THEN 형식)
   - 품질 체크포인트
   - 예외 상황 처리 방법
   - 예상 소요 시간

4. 플로우차트:
   - 텍스트 기반 프로세스 흐름도
   - 분기 조건 명확히 표시
   - 병렬 처리 가능 단계 식별

5. 품질 관리:
   - 입력물/산출물 체크리스트
   - 일반적 오류와 방지 방법 5개
   - KPI/성과 측정 지표
   - 개선 제안 프로세스

6. 부록:
   - 관련 양식/템플릿
   - 참고 자료 링크
   - 변경 이력 추적 테이블
   - 교육/온보딩 가이드`,tags:["SOP","프로세스","업무표준화"]},en:{title:"SOP (Standard Operating Procedure) Writer",prompt:`You are a process improvement expert. Write a Standard Operating Procedure (SOP) for the following task.

[Task Name]: ___
[Department/Team]: ___
[Frequency]: Daily / Weekly / Monthly / Event-based
[Current Issues]: ___
[Related Systems/Tools]: ___

Structure the SOP as follows:

1. Document Information:
   - SOP number, version, creation date
   - Purpose and scope
   - Related policies/regulations reference
   - Term definitions

2. Roles and Responsibilities (RACI Matrix):
   - Responsible: who performs it
   - Accountable: final approver
   - Consulted: whose input is sought
   - Informed: who is notified of results

3. Detailed Procedure (Numbered Steps):
   Per step:
   - Specific actions to perform (screenshot location markers)
   - Decision branch points (IF-THEN format)
   - Quality checkpoints
   - Exception handling methods
   - Estimated time

4. Flowchart:
   - Text-based process flow diagram
   - Clearly marked branch conditions
   - Identify parallelizable steps

5. Quality Management:
   - Input/output checklists
   - 5 common errors and prevention methods
   - KPI/performance metrics
   - Improvement suggestion process

6. Appendix:
   - Related forms/templates
   - Reference material links
   - Change history tracking table
   - Training/onboarding guide`,tags:["SOP","Process","Standardization"]}},{id:40,cat:"productivity",score:91,technique:"Decision Matrix + Analysis",ko:{title:"도구/벤더 선정 의사결정 매트릭스",prompt:`당신은 IT 조달 및 벤더 관리 전문가입니다. 다음 도구/벤더 선정을 위한 체계적인 의사결정 매트릭스를 설계해주세요.

[도입 목적]: ___
[카테고리]: SaaS / 하드웨어 / 서비스 / 프레임워크
[후보 수]: ___개
[예산 범위]: ___
[사용자 수]: ___명

다음 프레임워크로 평가해주세요:

1. 평가 기준 설정 (가중치 합계 = 100%):
   - 기능 적합도 (___%)
   - 비용 효율성 (___%)
   - 확장성/유연성 (___%)
   - 사용 편의성 (___%)
   - 보안/컴플라이언스 (___%)
   - 지원/커뮤니티 (___%)
   - 통합/호환성 (___%)

2. 세부 평가 항목 (각 기준별 3-5개):
   예) 기능 적합도:
   - 핵심 기능 A 지원 여부
   - 핵심 기능 B 지원 여부
   - 커스터마이징 가능 범위
   - API/연동 기능

3. 평가 매트릭스 테이블:
   - 후보별 x 기준별 점수 (1-5)
   - 가중 점수 계산
   - 총점 순위

4. 비용 분석 (TCO):
   - 초기 도입 비용
   - 월/연간 운영 비용
   - 숨겨진 비용 (마이그레이션, 교육, 유지보수)
   - 3년 TCO 비교

5. 리스크 평가:
   - 벤더 lock-in 위험도
   - 서비스 중단 시 대안
   - 데이터 이전 용이성
   - 계약 조건 체크리스트

최종 추천과 근거, 도입 로드맵 (PoC → 파일럿 → 전사 도입)을 포함해주세요.`,tags:["의사결정","벤더선정","평가"]},en:{title:"Decision Matrix for Tool/Vendor Selection",prompt:`You are an IT procurement and vendor management expert. Design a systematic decision matrix for the following tool/vendor selection.

[Purpose]: ___
[Category]: SaaS / Hardware / Service / Framework
[Number of Candidates]: ___
[Budget Range]: ___
[Number of Users]: ___

Evaluate using this framework:

1. Evaluation Criteria (weights total = 100%):
   - Feature fit (___%)
   - Cost efficiency (___%)
   - Scalability/flexibility (___%)
   - Ease of use (___%)
   - Security/compliance (___%)
   - Support/community (___%)
   - Integration/compatibility (___%)

2. Detailed Evaluation Items (3-5 per criterion):
   e.g., Feature fit:
   - Core feature A support
   - Core feature B support
   - Customization range
   - API/integration capabilities

3. Evaluation Matrix Table:
   - Score per candidate x criterion (1-5)
   - Weighted score calculation
   - Total score ranking

4. Cost Analysis (TCO):
   - Initial implementation cost
   - Monthly/annual operational cost
   - Hidden costs (migration, training, maintenance)
   - 3-year TCO comparison

5. Risk Assessment:
   - Vendor lock-in risk level
   - Alternatives if service discontinued
   - Data portability ease
   - Contract terms checklist

Include final recommendation with rationale and adoption roadmap (PoC → Pilot → Full rollout).`,tags:["Decision Making","Vendor Selection","Evaluation"]}}];function L({initialCategory:g="all"}){const{language:b}=k(),[u,p]=d.useState(g);d.useEffect(()=>{p(g)},[g]);const[f,v]=d.useState(null),[l,s]=d.useState(null),r=b==="ko",o=u==="all"?y:y.filter(i=>i.cat===u),m=async(i,t,a)=>{i.stopPropagation();try{await navigator.clipboard.writeText(t),s(a),setTimeout(()=>s(null),2e3)}catch{const n=document.createElement("textarea");n.value=t,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),s(a),setTimeout(()=>s(null),2e3)}},A=i=>i>=95?{background:"#FEF3C7",color:"#B45309",border:"1px solid #F59E0B"}:{background:"#DBEAFE",color:"#1D4ED8",border:"1px solid #3B82F6"},C=i=>{const t=S.find(a=>a.id===i);return t?r?t.ko:t.en:""},x=i=>({education:{bg:"#DBEAFE",color:"#2563EB"},coding:{bg:"#D1FAE5",color:"#059669"},writing:{bg:"#FEF3C7",color:"#D97706"},business:{bg:"#E0E7FF",color:"#4F46E5"},data:{bg:"#FCE7F3",color:"#DB2777"},creative:{bg:"#FDE68A",color:"#92400E"},research:{bg:"#E0F2FE",color:"#0369A1"},productivity:{bg:"#F3E8FF",color:"#7C3AED"}})[i]||{bg:"#F3F4F6",color:"#6B7280"};return e.jsx(e.Fragment,{children:e.jsxs("section",{className:"ck-content-box",children:[e.jsxs("div",{className:"ck-content-header ck-ch--blue",children:[e.jsx("i",{className:"fa-solid fa-gem"}),e.jsxs("div",{className:"ck-ch-text",children:[e.jsx("h2",{children:r?"프롬프트 갤러리":"Prompt Gallery"}),e.jsx("p",{children:r?"90점 이상의 검증된 프롬프트를 복사하여 바로 사용하세요":"Copy and use verified prompts rated 90+ points"})]})]}),e.jsxs("div",{className:"ck-content-body",children:[e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:20},children:S.map(i=>e.jsxs("button",{className:`board-category-filter-btn ${u===i.id?"active":""}`,onClick:()=>{p(i.id),v(null)},style:{fontSize:12},children:[e.jsx("i",{className:`fa-solid ${i.icon}`,style:{marginRight:4}}),r?i.ko:i.en]},i.id))}),e.jsx("p",{style:{fontSize:13,color:"var(--text-light)",marginBottom:16},children:r?`${o.length}개의 프롬프트`:`${o.length} prompts`}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:o.map(i=>{const t=f===i.id,a=r?i.ko:i.en,n=x(i.cat),c=A(i.score);return e.jsxs("div",{onClick:()=>v(t?null:i.id),style:{padding:20,borderRadius:12,border:"1px solid var(--border-light)",background:"var(--bg-white)",cursor:"pointer"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:10,flexWrap:"wrap"},children:[e.jsxs("span",{style:{...c,fontSize:12,fontWeight:700,padding:"2px 8px",borderRadius:6,display:"inline-flex",alignItems:"center",gap:4},children:[e.jsx("i",{className:"fa-solid fa-star",style:{fontSize:10}})," ",i.score]}),e.jsx("span",{className:"edu-course-badge",style:{background:n.bg,color:n.color},children:C(i.cat)}),e.jsx("span",{style:{fontSize:11,color:"var(--text-light)",background:"var(--bg-light-gray)",padding:"2px 6px",borderRadius:4},children:i.technique})]}),e.jsx("h3",{style:{fontSize:15,fontWeight:700,color:"var(--text-primary)",marginBottom:8,lineHeight:1.5},children:a.title}),t?e.jsxs("div",{style:{marginBottom:12},children:[e.jsx("pre",{style:{fontSize:13,lineHeight:1.7,background:"var(--bg-light-gray)",border:"1px solid var(--border-light)",borderRadius:8,padding:16,whiteSpace:"pre-wrap",wordBreak:"break-word",fontFamily:"'Noto Sans KR', sans-serif",color:"var(--text-primary)",maxHeight:400,overflowY:"auto"},children:a.prompt}),e.jsxs("button",{onClick:_=>m(_,a.prompt,i.id),style:{marginTop:10,display:"inline-flex",alignItems:"center",gap:6,padding:"8px 16px",fontSize:13,fontWeight:600,color:l===i.id?"#059669":"var(--primary-blue)",background:l===i.id?"#D1FAE5":"var(--bg-light-gray)",border:`1px solid ${l===i.id?"#10B981":"var(--border-light)"}`,borderRadius:8,cursor:"pointer"},children:[e.jsx("i",{className:`fa-solid ${l===i.id?"fa-check":"fa-copy"}`}),l===i.id?r?"복사됨!":"Copied!":r?"프롬프트 복사":"Copy Prompt"]})]}):e.jsx("p",{style:{fontSize:13,color:"var(--text-secondary)",lineHeight:1.6,marginBottom:12,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden",whiteSpace:"pre-wrap"},children:a.prompt}),e.jsxs("div",{style:{display:"flex",gap:4,flexWrap:"wrap"},children:[a.tags.map((_,h)=>e.jsx("span",{className:"resource-tag",children:_},h)),e.jsxs("span",{style:{marginLeft:"auto",fontSize:11,color:t?"var(--text-light)":"var(--primary-blue)",display:"inline-flex",alignItems:"center",gap:4},children:[t?r?"접기":"Collapse":r?"펼치기":"Expand",e.jsx("i",{className:`fa-solid fa-chevron-${t?"up":"down"}`,style:{fontSize:10}})]})]})]},i.id)})})]})]})})}function O(){const{language:g}=k(),[b]=w(),u=b.get("cat")||"all",[p,f]=d.useState(u);d.useEffect(()=>{f(u)},[u]);const[v,l]=d.useState(null),[s,r]=d.useState(null),o=g==="ko",m=p==="all"?y:y.filter(t=>t.cat===p),A=async(t,a,n)=>{t.stopPropagation();try{await navigator.clipboard.writeText(a),r(n),setTimeout(()=>r(null),2e3)}catch{const c=document.createElement("textarea");c.value=a,document.body.appendChild(c),c.select(),document.execCommand("copy"),document.body.removeChild(c),r(n),setTimeout(()=>r(null),2e3)}},C=t=>t>=95?{background:"#FEF3C7",color:"#B45309",border:"1px solid #F59E0B"}:{background:"#DBEAFE",color:"#1D4ED8",border:"1px solid #3B82F6"},x=t=>{const a=S.find(n=>n.id===t);return a?o?a.ko:a.en:""},i=t=>({education:{bg:"#DBEAFE",color:"#2563EB"},coding:{bg:"#D1FAE5",color:"#059669"},writing:{bg:"#FEF3C7",color:"#D97706"},business:{bg:"#E0E7FF",color:"#4F46E5"},data:{bg:"#FCE7F3",color:"#DB2777"},creative:{bg:"#FDE68A",color:"#92400E"},research:{bg:"#E0F2FE",color:"#0369A1"},productivity:{bg:"#F3E8FF",color:"#7C3AED"}})[t]||{bg:"#F3F4F6",color:"#6B7280"};return e.jsxs("div",{className:"edu-hub-page",children:[e.jsx(T,{title:o?"프롬프트 갤러리":"Prompt Gallery",description:o?"90점 이상의 고품질 프롬프트 예시를 카테고리별로 찾아보세요. 교육, 코딩, 글쓰기, 비즈니스 등 8개 분야의 검증된 프롬프트를 바로 복사하여 사용할 수 있습니다.":"Browse curated, high-quality prompts rated 90+ across 8 categories. Copy and use verified prompts for education, coding, writing, business, and more.",path:"/prompt-gallery"}),e.jsx("div",{className:"edu-hub-hero",children:e.jsxs("div",{className:"container",children:[e.jsxs("h1",{children:[e.jsx("i",{className:"fa-solid fa-gem",style:{marginRight:12}}),o?"프롬프트 갤러리":"Prompt Gallery"]}),e.jsx("p",{children:o?"전문가가 엄선한 고품질 프롬프트 컬렉션입니다. 90점 이상의 검증된 프롬프트를 바로 복사하여 사용해보세요.":"A curated collection of high-quality prompts. Copy and use verified prompts rated 90+ points."})]})}),e.jsxs("div",{className:"container",style:{paddingBottom:60},children:[e.jsx("div",{className:"edu-category-tabs",children:S.map(t=>e.jsxs("button",{className:`board-category-filter-btn ${p===t.id?"active":""}`,onClick:()=>{f(t.id),l(null)},children:[e.jsx("i",{className:`fa-solid ${t.icon}`,style:{marginRight:6}}),o?t.ko:t.en,t.id!=="all"&&e.jsxs("span",{style:{marginLeft:4,fontSize:11,opacity:.7},children:["(",y.filter(a=>a.cat===t.id).length,")"]})]},t.id))}),e.jsx("div",{style:{marginBottom:20,fontSize:14,color:"var(--text-light)"},children:o?`${m.length}개의 프롬프트`:`${m.length} prompts`}),e.jsx("div",{className:"edu-course-grid",style:{gridTemplateColumns:"repeat(auto-fill, minmax(360px, 1fr))"},children:m.map(t=>{const a=v===t.id,n=o?t.ko:t.en,c=i(t.cat),_=C(t.score);return e.jsxs("div",{className:"edu-course-card",style:{cursor:"pointer",display:"flex",flexDirection:"column",transition:"box-shadow 0.2s ease"},onClick:()=>l(a?null:t.id),children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:10,flexWrap:"wrap"},children:[e.jsxs("span",{style:{..._,fontSize:12,fontWeight:700,padding:"2px 8px",borderRadius:6,display:"inline-flex",alignItems:"center",gap:4},children:[e.jsx("i",{className:"fa-solid fa-star",style:{fontSize:10}}),t.score]}),e.jsx("span",{className:"edu-course-badge",style:{background:c.bg,color:c.color},children:x(t.cat)}),e.jsx("span",{style:{fontSize:11,color:"var(--text-light)",background:"var(--bg-light-gray)",padding:"2px 6px",borderRadius:4},children:t.technique})]}),e.jsx("h3",{style:{fontSize:15,fontWeight:700,color:"var(--text-primary)",marginBottom:8,lineHeight:1.5},children:n.title}),a?e.jsxs("div",{style:{marginBottom:12},children:[e.jsx("pre",{style:{fontSize:13,lineHeight:1.7,background:"var(--bg-light-gray, #F9FAFB)",border:"1px solid var(--border-light, #E5E7EB)",borderRadius:8,padding:16,whiteSpace:"pre-wrap",wordBreak:"break-word",fontFamily:"'SF Mono', 'Fira Code', 'Consolas', monospace",color:"var(--text-primary)",maxHeight:400,overflowY:"auto"},children:n.prompt}),e.jsxs("button",{onClick:h=>A(h,n.prompt,t.id),style:{marginTop:10,display:"inline-flex",alignItems:"center",gap:6,padding:"8px 16px",fontSize:13,fontWeight:600,color:s===t.id?"#059669":"var(--primary-blue)",background:s===t.id?"#D1FAE5":"var(--bg-light-gray, #F3F4F6)",border:`1px solid ${s===t.id?"#10B981":"var(--border-light, #E5E7EB)"}`,borderRadius:8,cursor:"pointer",transition:"all 0.2s ease"},children:[e.jsx("i",{className:`fa-solid ${s===t.id?"fa-check":"fa-copy"}`}),s===t.id?o?"복사됨!":"Copied!":o?"프롬프트 복사":"Copy Prompt"]})]}):e.jsx("p",{style:{fontSize:13,color:"var(--text-secondary)",lineHeight:1.6,marginBottom:12,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden",whiteSpace:"pre-wrap"},children:n.prompt}),e.jsxs("div",{style:{display:"flex",gap:4,flexWrap:"wrap",marginTop:"auto"},children:[n.tags.map((h,P)=>e.jsx("span",{className:"resource-tag",children:h},P)),!a&&e.jsxs("span",{style:{marginLeft:"auto",fontSize:11,color:"var(--primary-blue)",display:"inline-flex",alignItems:"center",gap:4},children:[o?"펼치기":"Expand",e.jsx("i",{className:"fa-solid fa-chevron-down",style:{fontSize:10}})]}),a&&e.jsxs("span",{style:{marginLeft:"auto",fontSize:11,color:"var(--text-light)",display:"inline-flex",alignItems:"center",gap:4},children:[o?"접기":"Collapse",e.jsx("i",{className:"fa-solid fa-chevron-up",style:{fontSize:10}})]})]})]},t.id)})}),m.length===0&&e.jsxs("div",{style:{textAlign:"center",padding:60,color:"var(--text-light)"},children:[e.jsx("i",{className:"fa-solid fa-gem",style:{fontSize:32,marginBottom:12,display:"block"}}),e.jsx("p",{children:o?"해당 카테고리에 프롬프트가 없습니다.":"No prompts found in this category."})]})]})]})}export{L as GalleryContent,O as default};
