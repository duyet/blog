'use strict';

const path = require('path');
const siteConfig = require('../../config.js');

module.exports = async (graphql, actions) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
      ) { totalCount }
    }
  `);

  const numPages = Math.ceil(result.data.allMarkdownRemark.totalCount / siteConfig.postsPerPage);

  for (let i = 0; i < numPages; i += 1) {
    createPage({
      path: i === 0 ? '/' : `/page/${i}`,
      component: path.resolve('./src/templates/index-template.js'),
      context: {
        page: i,
        limit: siteConfig.postsPerPage,
        skip: i * siteConfig.postsPerPage,
      }
    });
  }
};
