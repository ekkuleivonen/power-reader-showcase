module.exports = {
  siteMetadata: {
    title: `Power reader`,
    description: `Consume web without distractions. Power reader extension removes irrelevant content from your browser and highlights words to help you read faster.`,
    siteUrl: `https://power-reader.netlify.app`,
    author: `@ekkuleivonen`,
    keywords: `chrome extension, power reader, power reader extension, power reader extension for chrome, power reader extension for chrome browser, power reader extension for chrome browser extension, power reader extension for chrome browser extension`,
  },
  plugins: [
    "gatsby-plugin-material-ui",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-netlify",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
