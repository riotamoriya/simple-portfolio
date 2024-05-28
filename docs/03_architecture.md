# アーキテクチャ設計

## 概要
このドキュメントでは、ポートフォリオサイトのアーキテクチャを設計します。Contentful CMSを使用してコンテンツを管理し、Gatsbyを使用して静的サイトを生成します。主要なページコンポーネントとそれを構成する各コンポーネントの役割を明確にし、各コンポーネントとContentful CMSの連携方法についても説明します。

## サイトマップ

1. **ホームページ（index.js）**
   - `Header.js`
   - `HeroSection.js`
   - `ProjectSection.js`
   - `BlogSection.js`
   - `ProfileSection.js`
   - `Footer.js`

2. **プロジェクト一覧ページ（projects.js）**
   - `Header.js`
   - `ProjectList.js`
   - `ProjectFilter.js`
   - `ProjectSort.js`
   - `Footer.js`

3. **プロジェクト詳細ページ（project.js）**
   - `Header.js`
   - `ProjectDetail.js`
   - `Footer.js`

4. **ブログ一覧ページ（blog.js）**
   - `Header.js`
   - `BlogList.js`
   - `Footer.js`

5. **ブログ詳細ページ（blog-post.js）**
   - `Header.js`
   - `BlogDetail.js`
   - `Footer.js`

6. **自己紹介ページ（profile.js）**
   - `Header.js`
   - `ProfileContent.js`
     - `Resume.js`
     - `SkillMatrix.js`
     - `EventHistory.js`
     - `Certifications.js`
     - `SocialLinks.js`
   - `Footer.js`

7. **連絡ページ（contact.js）**
   - `Header.js`
   - `ContactForm.js` (Google Formによる実装)
   - `Footer.js`

8. **ギャラリーページ（gallery.js）**
   - `Header.js`
   - `GalleryContent.js`
   - `Footer.js`

9. **プライバシーポリシーページ（privacy.js）**
   - `Header.js`
   - `PrivacyPolicyContent.js`
   - `Footer.js`

10. **404ページ（notfound.js）**
    - `Header.js`
    - `NotFoundMessage.js`
    - `Footer.js`

## コンポーネント構成の詳細

### 共通コンポーネント

- **Header.js**
  - ナビゲーションバーやロゴを含むヘッダーコンポーネント。
- **Footer.js**
  - サイト全体のフッターコンポーネント。

### ホームページ関連コンポーネント

- **HeroSection.js**
  - キャッチフレーズ、自己紹介文、メインビジュアルを含むヒーローセクション。
  - Contentfulの`About Me`モデルからデータを取得し、名前、紹介文、プロフィール写真を表示。
- **ProjectSection.js**
  - ホームページのプロジェクトセクション。プロジェクトの概要を表示。
  - Contentfulの`Project`モデルから最新のプロジェクトを取得し、プロジェクトカード（`ProjectCard.js`）を表示。
- **BlogSection.js**
  - ホームページのブログセクション。ブログの概要を表示。
  - Contentfulの`Blog Post`モデルから最新のブログ記事を取得し、ブログカード（`BlogCard.js`）を表示。
- **ProfileSection.js**
  - ホームページの自己紹介セクション。自己紹介のハイライトを表示。
  - Contentfulの`About Me`モデルからデータを取得し、自己紹介のハイライトを表示。

### プロジェクトページ関連コンポーネント

- **ProjectList.js**
  - プロジェクト一覧を表示するコンポーネント。
  - Contentfulの`Project`モデルからすべてのプロジェクトを取得し、一覧表示。
- **ProjectFilter.js**
  - プロジェクトのフィルタリング機能を提供するコンポーネント。
  - 技術スタックや公開日などのフィルタリングオプションを提供。
- **ProjectSort.js**
  - プロジェクトのソート機能を提供するコンポーネント。
  - 公開日や技術スタックでプロジェクトをソートする機能を提供。
- **ProjectDetail.js**
  - プロジェクトの詳細情報を表示するコンポーネント。
  - Contentfulの`Project`モデルから特定のプロジェクトの詳細を取得し、表示。
  - 技術スタック、GitHubリンク、インタラクティブデモ、API実績などを含む。

### 自己紹介ページ関連コンポーネント

- **ProfileContent.js**
  - 自己紹介ページのコンテンツを表示するコンポーネント。
  - Contentfulの`About Me`モデルからデータを取得し、以下のコンポーネントを内包して表示。
  - **Resume.js**
    - 自己紹介の一部として履歴書のダウンロードリンクを提供。
  - **SkillMatrix.js**
    - 技術スキルマトリックスを表示。
  - **EventHistory.js**
    - イベントや登壇歴を表示。
  - **Certifications.js**
    - 資格や認定を表示。
  - **SocialLinks.js**
    - ソーシャルメディアリンクを表示。

### 連絡ページ関連コンポーネント

- **ContactForm.js**
  - 連絡フォームを提供するコンポーネント。
  - Google Formを埋め込む形で実装。

### ブログページ関連コンポーネント

- **BlogList.js**
  - ブログ記事の一覧を表示するコンポーネント。
  - Contentfulの`Blog Post`モデルからすべてのブログ記事を取得し、一覧表示。
- **BlogDetail.js**
  - ブログ記事の詳細を表示するコンポーネント。
  - Contentfulの`Blog Post`モデルから特定のブログ記事の詳細を取得し、表示。

### ギャラリーページ関連コンポーネント

- **GalleryContent.js**
  - 作品集ギャラリーのコンテンツを表示するコンポーネント。

### プライバシーポリシーページ関連コンポーネント

- **PrivacyPolicyContent.js**
  - プライバシーポリシーのコンテンツを表示するコンポーネント。

### 404ページ関連コンポーネント

- **NotFoundMessage.js**
  - 404エラーメッセージを表示するコンポーネント。

## Contentful CMSとの連携

### コンテンツモデル（Content Types）

#### プロジェクト（Project）

フィールド:
- **タイトル（Title）**: テキストフィールド
  - 説明: プロジェクトの名前を記入します。
  - 例: "ポートフォリオサイト作成プロジェクト"
- **概要（Description）**: リッチテキストフィールド
  - 説明: プロジェクトの短い説明を記入します。
  - 例: "フリーランスのためのポートフォリオサイトを作成するプロジェクトです。"
- **技術スタック（Tech Tags）**: ショートテキストリストフィールド
  - 説明: 使用した技術のリストを記入します。
  - 例: ["React", "Node.js", "MongoDB"]
- **スクリーンショット（Hero Image）**: メディアフィールド
  - 説明: プロジェクトのスクリーンショット画像をアップロードします。
  - 例: プロジェクトのスクリーンショット画像
- **詳細（Body）**: リッチテキストフィールド
  - 説明: プロジェクトの詳細説明をマークダウン形式で記入します。
  - 例: 適当なマークダウン形式
- **公開日（Publish Date）**: 日付フィールド
  - 説明: プロジェクトの公開日を記入します。
  - 例: "2024-05-28"
- **著者（Author）**: リファレンスフィールド
  - 説明: プロジェクトの著者をリファレンスで設定します。
  - 例: "森谷亮太"

#### ブログ記事（Blog Post）

フィールド:
- タイトル（Title）：テキストフィールド
- 概要（Summary）：テキストフィールド（短い説明）
- コンテンツ（Content）：マークダウン形式のリッチテキストフィールド
- 画像（Image）：メディアフィールド（画像）
- タグ（Tags）：多選択フィールド（例：JavaScript, Web Development）
- 公開日（Publish Date）：日付フィールド

#### 自己紹介（About Me）

フィールド:
- 名前（Name）：テキストフィールド
- プロフィール写真（Profile Picture）：メディアフィールド（画像）
- 紹介文（Introduction）：リッチテキストフィールド
- 経歴（Career）：リッチテキストフィールド

#### 連絡先情報（Contact Information）

フィールド:
- メールアドレス（Email Address）：テキストフィールド
- 電話番号（Phone Number）：テキストフィールド
- ソーシャルメディアリンク（Social Media Links）：テキストフィールド（複数）

## フォームの実装

連絡フォームについては、Google Formを使用して実装します。Google Formの埋め込みコードを`ContactForm.js`コンポーネントに追加し、フォームからの問い合わせを受け付けます。