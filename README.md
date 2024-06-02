# プロジェクト名

## 概要
このプロジェクトは、フリーランスエンジニアとしてのポートフォリオサイトを構築し、技術力をアピールするためのものです。主要な機能として、プロジェクト一覧、プロジェクト詳細、ブログ、自己紹介、コンタクトフォームを提供します。

## セットアップ手順
1. リポジトリをクローン
   ```
   git clone https://github.com/your-username/portfolio-site.git
   cd portfolio-site
   ```
2. 依存関係をインストール
   ```
   npm install
   ```
3. 環境変数を設定
   ```
   .env.development
   .env.production
   ```
4. 開発サーバーを起動
   ```
   gatsby develop
   ```

## 主要機能
- プロジェクト一覧ページ
- プロジェクト詳細ページ
- 自己紹介ページ

## 外部ツール

1. [CAPCHA](https://www.google.com/recaptcha/admin/)
2. [GA4] (あとで)
3. [GTM] (あとで)
4. [DNS:お名前ドットコム](https://www.onamae.com/)


## ブランチ

1. master(リモートデフォルト): ドキュメント管理用、外部向けブランチ
アクセス可能：
   - README.md
   - docs/*

1. production: 公開断面、netlifyのビルド用
2. develop(ローカルデフォルト): 一般開発ブランチ


## ドキュメント
詳細なドキュメントは[docs](./docs)フォルダを参照してください。


## ライセンス
このプロジェクトの著作権は以下の通りです：
[LICENSE](./LICENSE.txt)

### 謝辞
以下のオープンソースプロジェクトを参考にいたしました。製作者様に感謝いたします。
- [starter-gatsby-blog](https://github.com/contentful/starter-gatsby-blog) - MIT License
