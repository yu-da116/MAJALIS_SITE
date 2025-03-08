# モノクロームデザイン個人サイト 技術仕様書
Version 1.0.1 (2024/03/08)

## 1. システム概要

### 1.1 アーキテクチャ
- フロントエンド: React + Vite
- コンテンツ管理: microCMS
- ホスティング: Cloudflare Pages
- スタイリング: Tailwind CSS + shadcn/ui

### 1.2 技術スタック詳細
```typescript
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
  ],
  "cms": {
    "service": "microCMS",
    "features": [
      "ブログ記事管理",
      "APIアクセス",
      "画像最適化",
      "コンテンツプレビュー"
    ]
  }
}
```

### 1.3 ブログ機能実装計画
1. MicroCMS統合
   - APIクライアントのセットアップ
   - 環境変数の設定（MICROCMS_API_KEY, MICROCMS_SERVICE_DOMAIN）
   - 型定義の生成

2. コンポーネント構造
   - BlogList: ブログ記事一覧
   - BlogPost: 記事詳細
   - BlogCard: 記事カードコンポーネント
   - BlogCategories: カテゴリフィルター

3. ルーティング
   - /blog: 記事一覧
   - /blog/[id]: 記事詳細
   - /blog/category/[category]: カテゴリ別一覧

4. データフェッチング
   - React Queryを使用したキャッシュ管理
   - ISRによるパフォーマンス最適化


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