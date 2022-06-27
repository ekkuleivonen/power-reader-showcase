module.exports = {
  siteMetadata: {
    title: `power-reader-showcase`,
    siteUrl: `https://power-reader.netlify.app`,
  },
  plugins: [
    "gatsby-plugin-material-ui",
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        ThemeProvider: {
          injectFirst: true,
        },
      },
    },
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
