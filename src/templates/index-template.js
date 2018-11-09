import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Page from '../components/Page';

const IndexTemplate = ({ data, pageContext }) => {
  const {
    title: siteTitle,
    subtitle: siteSubtitle
  } = data.site.siteMetadata;

  const { page } = pageContext;
  const { edges } = data.allMarkdownRemark;
  const pageTitle = page > 0 ? `Posts - Page ${page} - ${siteTitle}` : siteTitle;

  return (
    <Layout title={`${pageTitle}`} description={siteSubtitle}>
      <Sidebar />
      <Page>
        <Feed edges={edges} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query IndexTemplate($limit: Int!, $skip: Int!) {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMarkdownRemark(
        limit: $limit,
        skip: $skip,
        filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`;

export default IndexTemplate;
