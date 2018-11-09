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
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  _.each(result.data.allMarkdownRemark.group, (tag) => {
    const numPages = Math.ceil(tag.totalCount / siteConfig.postsPerPage);

    for (let i = 0; i < numPages; i += 1) {
      createPage({
        path: i === 0 ? `/tag/${_.kebabCase(tag.fieldValue)}` : `/tag/${_.kebabCase(tag.fieldValue)}/page/${i}`,
        component: path.resolve('./src/templates/tag-template.js'),
        context: {
          page: i,
          tag: tag.fieldValue,
          limit: siteConfig.postsPerPage,
          skip: i * siteConfig.postsPerPage,
        }
      });
    }
  });
};
