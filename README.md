# Modern Portfolio Website

このプロジェクトは、React と Material-UI を使用したモダンなポートフォリオウェブサイトです。

## 技術スタック

- React
- Material-UI (MUI)
- Framer Motion
- React Intersection Observer
- Emotion (スタイリング)

## 開発環境のセットアップ

このプロジェクトは Node.js version 20.19.4 を使用しています。
[nvm](https://github.com/nvm-sh/nvm) を使用して Node.js のバージョンを管理することを推奨します。

```bash
# nvmがインストールされていない場合
brew install nvm

# 必要なNode.jsバージョンをインストール
nvm install 20.19.4

# このプロジェクトのNode.jsバージョンを使用
nvm use
```

### プロジェクトのセットアップ

```bash
# 依存パッケージのインストール
npm install

# 開発サーバーの起動
npm start

# プロダクションビルド
npm run build
```

## デプロイ

このプロジェクトは GitHub Pages にデプロイすることができます。

```bash
# GitHub Pagesへのデプロイ
npm run deploy
```

## カスタマイズ

1. `src/components/` 内の各コンポーネントを編集してコンテンツをカスタマイズ
2. `src/theme.js` でテーマカラーやタイポグラフィを変更
3. 画像やアイコンは `src/assets/` に配置

## ライセンス

MIT License

## 作者

[Your Name]

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
