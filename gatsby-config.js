"use strict";

const siteConfig = require("./config.js");
const postCssPlugins = require("./postcss-config.js");

module.exports = {
  pathPrefix: siteConfig.pathPrefix,
  siteMetadata: {
    url: siteConfig.url,
    siteUrl: siteConfig.url,
    title: siteConfig.title,
    subtitle: siteConfig.subtitle,
    copyright: siteConfig.copyright,
    disqusShortname: siteConfig.disqusShortname,
    useCommento: siteConfig.useCommento,
    facebookComment: siteConfig.facebookComment,
    menu: siteConfig.menu,
    author: siteConfig.author,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/media`,
        name: "media",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "css",
        path: `${__dirname}/static/css`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                site_url: url
                title
                description: subtitle
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map((edge) => ({
                ...edge.node.frontmatter,
                description: edge.node.frontmatter.description,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.site_url + edge.node.fields.slug,
                guid: site.siteMetadata.site_url + edge.node.fields.slug,
                custom_elements: [
                  {
                    "content:encoded": `${edge.node.frontmatter.description}<br /><img src="${edge.node.frontmatter.thumbnail}" loading="lazy" />`,
                  },
                ],
              })),
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
                ) {
                  edges {
                    node {
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                        template
                        draft
                        thumbnail
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Duyet's Blog",
          },
        ],
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              include: ["thumbnail"],
            },
          },
          {
            resolve: "gatsby-remark-katex",
            options: {
              strict: "ignore",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
              withWebp: true,
              quality: 80,
              showCaptions: true,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: { wrapperStyle: "margin-bottom: 1.0725rem" },
          },
          {
            resolve: "gatsby-remark-figure-caption",
            options: { figureClassName: "md-figure" },
          },
          // {
          //   resolve: 'gatsby-remark-series',
          //   options: {
          //     render: {
          //       placeholder: 'toc'
          //     }
          //   },
          //   render: {
          //     placeholder: 'toc'
          //   }
          // },
          "gatsby-remark-autolink-headers",
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
          "gatsby-remark-external-links",
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: siteConfig.googleTagManagerId,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteConfig.title,
        short_name: siteConfig.title,
        start_url: "/",
        // background_color: '#FFF',
        // theme_color: '#F7A046',
        display: "standalone",
        icon: "static/duyet-notion.png",
        cache_busting_mode: "none",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        postCssPlugins: [...postCssPlugins],
        cssLoaderOptions: {
          camelCase: false,
        },
        // Override the file regex for Sass
        sassRuleTest: /\.s(a|c)ss$/,
        // Override the file regex for CSS modules
        sassRuleModulesTest: /\.module\.s(a|c)ss$/,
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    "gatsby-plugin-flow",
    "gatsby-plugin-robots-txt",
  ],
};
