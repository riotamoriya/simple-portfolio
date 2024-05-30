require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteUrl = "https://moriyaryota.com/";
const title = "Moriya Ryota's Portfolio"


module.exports = {
  siteMetadata: {
    title: `${title}`,
    description: "Moriya Ryota's Portfolio",
    author: "Moriya Ryota",
    siteUrl: `${siteUrl}`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
          'gatsby-remark-prismjs',
        ],
      },
    },
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `${title}`,
        short_name: `${title}`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
        icons: [
          {
            src: `icons/icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`
          },
          {
            src: `icons/icon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`
          },
          {
            src: `icons/icon-128x128.png`,
            sizes: `128x128`,
            type: `image/png`
          },
          {
            src: `icons/icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`
          },
          {
            src: `icons/icon-152x152.png`,
            sizes: `152x152`,
            type: `image/png`
          },
          {
            src: `icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `icons/icon-384x384.png`,
            sizes: `384x384`,
            type: `image/png`
          },
          {
            src: `icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          },
        ]
      },
    },




    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST
      },
    },

    "gatsby-plugin-netlify",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`, //サイトマップをルートディレクトリ直下に出力するようなオプション
      },
    },
    `gatsby-plugin-robots-txt`,

    {
      resolve: `gatsby-plugin-canonical-urls`,　// 追加
      options: {
        siteUrl: `${siteUrl}`,
        stripQueryString: true,
      },
    },


    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `${process.env.CONTENTFUL_G4_MEASUREMENT_ID}`, // GA4の測定IDをここに記入
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.CONTENTFUL_GTM_ID, // GTMのコンテナID
        includeInDevelopment: true, // 開発環境でもGTMを含める
        defaultDataLayer: { platform: "gatsby" },
        gtmAuth: process.env.CONTENTFUL_GTM_AUTH, // プレビューモードから取得したgtmAuth
        gtmPreview: process.env.CONTENTFUL_GTM_PREVIEW, // プレビューモードから取得したgtmPreview
        dataLayerName: "dataLayer",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
      },
    },
    
  ],
};
