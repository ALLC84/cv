module.exports = {
  siteMetadata: {
    name: `Alejandro Llorente`,
    title: `Desarollador Frontend`,
    description: `Estudiante autodidacta de programación Web, enfocado al Frontend utilizando tecnologías como React y Vue. `,
    phone: "618377176",
    email: "alejandrollorente.dev@gmail.com",
    siteUrl: "https://cv.alejandrollorente.com/",
    author: `@alejandro-llorente`,
  },
  pathPrefix: `/cv`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["material icons"],
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `cv-alejandro-llorente`,
        short_name: `cv-alejandro`,
        start_url: `/`,
        background_color: `#FAF7F6`,
        theme_color: `#1E0762`,
        display: `standalone`,
        icon: `src/images/gatsbyIcon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        configFile: "robots-txt.config.js",
      },
    },
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/"],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": `${__dirname}/src/components`,
          "@hooks": `${__dirname}/src/hooks`,
          "@utils": `${__dirname}/src/utils`,
          "@images": `${__dirname}/src/images`,
          "@css": `${__dirname}/src/css`,
          "@providers": `${__dirname}/src/providers`,
          "@static": `${__dirname}/static`,
        },
        extensions: ["js", "css", "png", "jpg", "svg", "jsx"],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
