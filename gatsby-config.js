/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Andrei Biswas`,
    description: `Portfolio website for Andrei Biswas`,
    siteUrl: `https://www.abiswas.dev`,
    menuLinks: [
      {
        name: "andrei",
        link: "/#about",
      },
      // {
      //   name: "experience",
      //   link: "/#experience",
      // },
      // {
      //   name: "education",
      //   link: "/#education",
      // },
      // {
      //   name: "skills",
      //   link: "/#skills",
      // },
      // {
      //   name: "tech",
      //   link: "/#tech",
      // },
      // {
      //   name: "music",
      //   link: "/#music",
      // },
      // {
      //   name: "contact",
      //   link: "/#contact",
      // },
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
            name: `Playfair Display`,
            file: `https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap`,
          },
          {
            name: `Playfair Display SC`,
            file: `https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap`,
          },
          {
            name: `Alata`,
            file: `https://fonts.googleapis.com/css2?family=Alata&display=swap`,
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
