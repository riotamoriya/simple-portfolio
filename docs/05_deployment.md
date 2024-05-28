# デプロイ手順と設定

## 概要
このドキュメントでは、ポートフォリオサイトをNetlifyにデプロイする手順と設定について説明します。GitHubとNetlifyを連携し、productionブランチを用いて継続的にデプロイを行います。

## 必要なツールとアカウント

1. **GitHubアカウント**
   - プロジェクトのバージョン管理とリポジトリのホスティングに使用します。

2. **Netlifyアカウント**
   - 静的サイトのホスティングと継続的デプロイに使用します。

3. **Node.js**
   - Gatsbyプロジェクトのビルドと依存関係の管理に使用します。

## デプロイ手順

### 1. GitHubリポジトリの作成

1. GitHubで新しいリポジトリを作成します。
   - リポジトリ名: `my-portfolio`
   - プライバシー設定: パブリックまたはプライベート
   - READMEファイル: 初期化する

2. ローカルプロジェクトディレクトリをGitHubリポジトリに接続します。
   ```sh
   git init
   git remote add origin https://github.com/your-username/my-portfolio.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

### 2. productionブランチの作成

1. productionブランチを作成し、GitHubにプッシュします。
   ```sh
   git checkout -b production
   git push -u origin production
   ```

### 3. Netlifyアカウントの作成とサイトの設定

1. [Netlify](https://www.netlify.com/)にサインアップまたはログインします。

2. 新しいサイトを追加します。
   - 「New site from Git」を選択します。

3. GitHubを選択し、NetlifyアカウントをGitHubに接続します。

4. デプロイするリポジトリを選択します。
   - リポジトリ名: `my-portfolio`

5. ビルド設定を行います。
   - ビルドコマンド: `gatsby build`
   - パブリッシュディレクトリ: `public`
   - ビルドブランチ: `production`

### 4. 環境変数の設定

1. Netlifyのサイト設定に移動し、「Build & Deploy」セクションに進みます。

2. 「Environment」セクションで環境変数を設定します。
   - `CONTENTFUL_SPACE_ID`: ContentfulのスペースID
   - `CONTENTFUL_ACCESS_TOKEN`: Contentfulのアクセストークン

### 5. デプロイの実行

1. すべての設定が完了したら、「Deploy site」ボタンをクリックしてデプロイを開始します。

2. NetlifyがGitHubのproductionブランチからコードを取得し、自動的にビルドとデプロイを行います。

### 6. 継続的デプロイの設定

1. GitHubのproductionブランチに変更がプッシュされるたびに、Netlifyが自動的に再デプロイを行います。

## デプロイ後の確認

1. デプロイが完了したら、NetlifyのダッシュボードからサイトのURLを確認します。

2. ブラウザでサイトのURLにアクセスし、すべてのページが正しく表示されることを確認します。

## まとめ
このドキュメントでは、ポートフォリオサイトをNetlifyにデプロイする手順と設定について説明しました。GitHubのproductionブランチを使用して継続的デプロイを行い、Netlifyでホスティングすることで、常に最新の状態のサイトを維持します。継続的なデプロイにより、コードの変更が自動的に反映されるため、効率的な運用が可能になります。