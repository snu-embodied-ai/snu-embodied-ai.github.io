# 서울대학교 AI연구원 체화AI연구센터 웹사이트

Astro로 구성한 GitHub Pages용 정적 사이트입니다. 센터 소식과 논문은 Markdown 파일로 추가할 수 있고, GitHub `main` 브랜치에 push하면 Actions가 Astro 프로젝트를 자동으로 빌드·배포합니다.

## 시작하기

```sh
npm install
npm run dev
```

## GitHub Pages 배포

1. 이 프로젝트 파일을 GitHub 저장소의 최상위에 올립니다.
2. 저장소에서 **Settings → Pages**로 이동해 **Source**를 **GitHub Actions**로 설정합니다.
3. `main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 자동으로 빌드하고 배포합니다. 로컬에서는 처음 한 번 `npm install`을 실행하고 생성된 `package-lock.json`도 저장소에 함께 올려 주세요.
4. `astro.config.mjs`는 GitHub Actions의 `GITHUB_REPOSITORY`를 읽어 저장소 경로를 자동 설정합니다. `owner.github.io` 형태의 사용자·조직 사이트도 처리합니다.

Astro 정적 사이트는 저장소 페이지 경로에 맞는 `base` 설정이 필요합니다. 저장소 이름과 소유자에 맞춰 경로를 처리하도록 설정했습니다.

## 콘텐츠 추가

- **소식:** `templates/news-post.md`를 복사해 `src/content/news/`에 새 Markdown 파일로 저장합니다.
- **논문:** `templates/publication.md`를 복사해 `src/content/publications/`에 새 Markdown 파일로 저장합니다.
- **센터 로고:** `public/assets/logo.svg`
- **브라우저 아이콘:** `public/assets/mark.svg`
- **사이트 스타일:** `src/styles/global.css`

연구주제 세 항목은 과제명에서 정리한 편집용 초안입니다. 공식 연구방향과 대조해 확정한 뒤 공개해 주세요. 센터장 인사말, 연혁, 연구진 정보는 자료가 없어 입력 위치만 마련했습니다.

## 프로젝트 구조

```text
src/
├── components/       # 공통 헤더와 푸터
├── content/
│   ├── news/         # 소식 Markdown
│   └── publications/ # 논문 Markdown
├── layouts/          # 공통 페이지 레이아웃
├── pages/            # Astro 페이지
├── scripts/          # 메뉴 동작
└── styles/           # 전역 스타일
```
