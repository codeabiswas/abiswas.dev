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
    menuLinks: [
      {
        name: "andrei",
        link: "/",
      },
      {
        name: "experience",
        link: "/#experience",
      },
      {
        name: "education",
        link: "/#education",
      },
      {
        name: "skills",
        link: "/#skills",
      },
      {
        name: "tech",
        link: "/#tech",
      },
      {
        name: "music",
        link: "/#music",
      },
      {
        name: "contact",
        link: "/#contact",
      },
    ],
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
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
};
