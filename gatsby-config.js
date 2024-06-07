require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteUrl = process.env.SITE_URL || "https://moriyaryota.com/";
const title = "Moriya Ryota's Portfolio";
const isProduction = process.env.NETLIFY_PRODUCTION === "true";

module.exports = {
  siteMetadata: {
    title: `${title}`,
    description: "Moriya Ryota's Portfolio",
    author: "Moriya Ryota",
    siteUrl: `${siteUrl}`,
  },
  pathPrefix: "/simple-portfolio",
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: `${process.env.NOTION_TOKEN}`,
        databaseId: `${process.env.NOTION_DATABASE_ID}`,
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      },
    },
    `gatsby-plugin-netlify`,
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
          { src: `icons/icon-72x72.png`, sizes: `72x72`, type: `image/png` },
          { src: `icons/icon-96x96.png`, sizes: `96x96`, type: `image/png` },
          { src: `icons/icon-128x128.png`, sizes: `128x128`, type: `image/png` },
          { src: `icons/icon-144x144.png`, sizes: `144x144`, type: `image/png` },
          { src: `icons/icon-152x152.png`, sizes: `152x152`, type: `image/png` },
          { src: `icons/icon-192x192.png`, sizes: `192x192`, type: `image/png` },
          { src: `icons/icon-384x384.png`, sizes: `384x384`, type: `image/png` },
          { src: `icons/icon-512x512.png`, sizes: `512x512`, type: `image/png` },
        ],
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
        host: process.env.CONTENTFUL_HOST,
      },
    },
    isProduction && {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    isProduction && {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: "*", disallow: [] }],
      },
    },
    !isProduction && {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: "*", disallow: ["/"] }],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `${siteUrl}`,
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`${process.env.CONTENTFUL_G4_MEASUREMENT_ID}`],
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
        id: process.env.CONTENTFUL_GTM_ID,
        includeInDevelopment: true,
        defaultDataLayer: { platform: "gatsby" },
        gtmAuth: process.env.CONTENTFUL_GTM_AUTH,
        gtmPreview: process.env.CONTENTFUL_GTM_PREVIEW,
        dataLayerName: "dataLayer",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        footnotes: true,
        gfm: true,
      },
    },
  ].filter(Boolean), // 不要なプラグインをフィルタリング
};
