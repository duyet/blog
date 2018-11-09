'use strict';

const _ = require('lodash');
const path = require('path');
const siteConfig = require('../../config.js');

module.exports = async (graphql, actions) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
      ) {
        group(field: frontmatter___category) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  _.each(result.data.allMarkdownRemark.group, (category) => {
    const numPages = Math.ceil(category.totalCount / siteConfig.postsPerPage);

    for (let i = 0; i < numPages; i += 1) {
      createPage({
        path: i === 0 ? `/category/${_.kebabCase(category.fieldValue)}` : `/category/${_.kebabCase(category.fieldValue)}/page/${i}`,
        component: path.resolve('./src/templates/category-template.js'),
        context: {
          page: i,
          category: category.fieldValue,
          limit: siteConfig.postsPerPage,
          skip: i * siteConfig.postsPerPage,
        }
      });
    }
  });
};
