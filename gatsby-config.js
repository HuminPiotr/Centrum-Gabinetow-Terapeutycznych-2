require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Centrum Gabinetów Terapeutycznych`,
    description: `Terapeuta, psycholog, fizjoterapeuta, pedagog i logopeda, których łączy
    miłość do dzieci i pragnienie, aby pomagać im w jak najbardziej
    efektywny sposób.`,
    image: `/icon-house2.jpg`,
    author: `Piotr Humin`,
    siteUrl: `https://www.centrum-gabinetow-terapeutycznych.pl`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/data/articles`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.API_DATO_CMS,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Open Sans`,
    //         subsets: [`latin`],
    //         variants: [`400`, `600`, `700`],
    //       },
    //       {
    //         family: `Exo`,
    //         variants: [`200`, `300`, `400`, `600`, `700`],
    //       },
    //     ],
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `Open Sans`,
    //       `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
    //     ],
    //     display: "swap",
    //   },
    // },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/icons/favicon.png`, // This path is relative to the root of the site.
      },
    },
   // this (optional) plugin enables Progressive Web App + Offline functionality
  //  To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
