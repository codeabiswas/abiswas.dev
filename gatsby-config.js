/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `abiswas.dev`,
    siteUrl: `https://www.abiswas.dev`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`],
        web: [
          {
            name: `B612`,
            file: `https://fonts.googleapis.com/css2?family=B612&display=swap`,
          },
        ],
      },
    },
  ],
};
