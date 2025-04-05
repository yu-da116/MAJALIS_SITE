
# モノクロームデザイン個人サイト 開発ガイド
Version 1.0.0 (2024/03/08)

## 1. 開発環境のセットアップ

### 1.1 必要な環境とインストール手順

#### Node.js v20.x以上
```bash
# Windowsの場合
winget install OpenJS.NodeJS.LTS

# macOSの場合（Homebrewを使用）
brew install node@20

# Ubuntu/Debianの場合
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Node.jsのバージョン確認
node --version  # v20.x.x
```

#### pnpm 8.15.4以上
```bash
# npmを使用してpnpmをインストール（全OS共通）
npm install -g pnpm@8.15.4

# pnpmのバージョン確認
pnpm --version  # 8.15.4
```

#### Git
```bash
# Windowsの場合
winget install Git.Git

# macOSの場合
brew install git

# Ubuntu/Debianの場合
sudo apt-get update
sudo apt-get install git

# Gitのバージョン確認
git --version
```

#### Visual Studio Code（推奨エディタ）
```bash
# Windowsの場合
winget install Microsoft.VisualStudioCode

# macOSの場合
brew install --cask visual-studio-code

# Ubuntu/Debianの場合
sudo apt-get update
sudo apt-get install code

# VS Codeの拡張機能（推奨）
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension bradlc.vscode-tailwindcss
```

### 1.2 プロジェクトのセットアップ

```bash
# リポジトリのクローン
git clone <your-repository-url>
cd <project-directory>

# 依存パッケージのインストール
pnpm install
```

### 1.3 環境変数の設定
プロジェクトルートに`.env`ファイルを作成し、以下の環境変数を設定します：

```env
# .env
VITE_MICROCMS_SERVICE_DOMAIN=your-service-domain
VITE_MICROCMS_API_KEY=your-api-key
```

### 1.4 開発サーバーの起動
```bash
pnpm dev
```

## 2. プロジェクト構造

### 2.1 ディレクトリ構造
```
src/
├── components/      # UIコンポーネント
│   ├── layout/     # レイアウトコンポーネント
│   ├── shared/     # 共有コンポーネント
│   └── ui/         # UIコンポーネント
├── hooks/          # カスタムフック
├── lib/            # ユーティリティ関数
├── pages/          # ページコンポーネント
└── providers/      # プロバイダーコンポーネント
```

### 2.2 主要コンポーネント
- `layout/`: ページレイアウト用コンポーネント
  - `Container.tsx`: メインコンテナ
  - `Navbar.tsx`: ナビゲーションバー
  - `Footer.tsx`: フッター

- `shared/`: 共有コンポーネント
  - `AnimatedTransition.tsx`: ページ遷移アニメーション
  - `SEO.tsx`: SEO最適化
  - `ThemeToggle.tsx`: テーマ切り替え

## 3. 実装ガイド

### 3.1 新規ページの追加
1. `src/pages/`に新規ページコンポーネントを作成
2. ルーティングを`App.tsx`に追加

### 3.2 スタイリング
- Tailwind CSSを使用
- shadcn/uiコンポーネントをベースに拡張

### 3.3 状態管理
- React Query: APIデータの取得・キャッシュ
- Context API: グローバル状態管理

## 4. デプロイメント

### 4.1 本番ビルド
```bash
pnpm build
```

### 4.2 デプロイ
- Cloudflare Pagesを使用
- 自動デプロイ設定済み

## 5. その他の機能

### 5.1 ブログ機能
- MicroCMS APIを使用
- 記事一覧・詳細表示
- カテゴリフィルター

### 5.2 アニメーション
- Framer Motionを使用
- ページ遷移アニメーション
- スクロールアニメーション
