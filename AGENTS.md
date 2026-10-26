# 저장소 기여 안내

## 프로젝트 구조

이 저장소는 서울대학교 AI연구원 체화AI연구센터의 Astro 정적 웹사이트입니다. 페이지 경로는 `src/pages/`, 공통 레이아웃과 사이트 구성 요소는 `src/layouts/`와 `src/components/`에 있습니다. 브라우저 메뉴 동작은 `src/scripts/`, 전역 스타일은 `src/styles/`에서 관리합니다. 소식과 논문은 각각 `src/content/news/`, `src/content/publications/`의 Markdown 파일로 작성합니다. 항목 작성 예시는 `templates/`에 있으며, 로고와 브라우저 아이콘 등 공개 자산은 `public/assets/`에 둡니다.

## 개발 명령어

- `npm install`: 의존성을 설치합니다. 의존성을 변경하면 갱신된 잠금 파일도 커밋합니다.
- `npm run dev`: 변경 사항이 자동 반영되는 로컬 개발 서버를 실행합니다.
- `npm run build`: 배포용 사이트를 `dist/`에 생성합니다. 변경 내용을 제출하기 전에 실행합니다.
- `npm run preview`: 먼저 빌드한 뒤 배포 환경과 유사하게 사이트를 확인합니다.

`main` 브랜치에 변경 사항을 푸시하거나 워크플로를 수동 실행하면 GitHub Actions가 사이트를 빌드하고 GitHub Pages에 배포합니다.

## 코드 및 콘텐츠 작성 방식

기존 Astro, TypeScript, CSS 작성 방식을 따르고 들여쓰기는 공백 2칸을 사용합니다. 컴포넌트와 레이아웃 파일명은 `SiteHeader.astro`처럼 PascalCase로 작성합니다. 콘텐츠 파일명은 `center-workshop-2026.md`처럼 설명이 분명한 소문자와 하이픈을 사용합니다. 새 콘텐츠는 해당 템플릿을 복사해 작성합니다. 소식에는 `title`, `date`, `summary`가 필요하며 `category`는 선택 항목입니다. 논문에는 `title`, `authors`, `venue`, 정수형 `year`가 필요하고, `link`를 입력할 경우 유효한 URL이어야 합니다. 자세한 스키마는 `src/content.config.ts`를 확인합니다.

## 확인 및 테스트

별도의 테스트나 린트 명령은 설정되어 있지 않습니다. 사이트를 변경한 뒤 `npm run build`를 실행해 빌드 및 콘텐츠 스키마 오류를 확인합니다. 화면을 수정했다면 `npm run dev` 또는 `npm run preview`에서 해당 페이지를 확인하고, 필요하면 모바일 화면 폭도 점검합니다.

## 커밋 및 풀 리퀘스트

현재 체크아웃에서는 Git 기록을 확인할 수 없어 기존 커밋 규칙은 알 수 없습니다. `센터 세미나 소식 추가`처럼 짧고 명령형인 제목을 권장합니다. 풀 리퀘스트에는 변경 내용과 목적, 콘텐츠 또는 설정 변경 사항을 적고, 화면 변경에는 스크린샷을 첨부합니다. 관련 이슈가 있으면 연결하고, 프로덕션 빌드가 성공했는지 기록합니다.

## 설정 및 보안

GitHub Pages 배포 설정을 바꿀 때는 `astro.config.mjs`와 `.github/workflows/deploy.yml`을 함께 확인합니다. 인증 정보나 로컬 전용 환경 파일은 커밋하지 않습니다. 의존성을 변경할 때는 `package-lock.json`도 함께 갱신합니다.
