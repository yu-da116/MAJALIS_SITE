# モノクロームデザイン個人サイト 技術仕様書
Version 1.0.0 (2024/03/08)

## 1. システム概要

### 1.1 アーキテクチャ
- フロントエンド: React + Vite
- コンテンツ管理: microCMS
- ホスティング: Cloudflare Pages
- スタイリング: Tailwind CSS + shadcn/ui

### 1.2 技術スタック詳細
```typescript
// フロントエンド
{
  "core": [
    "react",
    "vite",
    "typescript"
  ],
  "styling": [
    "tailwindcss",
    "shadcn/ui",
    "class-variance-authority"
  ],
  "state": [
    "@tanstack/react-query"
  ],
  "routing": [
    "wouter"
  ],
  "animation": [
    "framer-motion"
  ]
}
```

## 2. コンポーネント構造

### 2.1 共通コンポーネント
```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   ├── ui/
│   │   └── [shadcn/uiコンポーネント]
│   └── shared/
│       ├── ThemeToggle.tsx
│       └── AnimatedTransition.tsx
```
...