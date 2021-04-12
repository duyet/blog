// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import CategoryTag from '../components/Layout/CategoryTag';
import { useSiteMetadata, useCategoriesList } from '../hooks';

const topCategories = ['Machine Learning', 'Javascript', 'Data Engineer', 'Web'];


const CategoriesListHighlight = ({ categories }) => (
    <div style={{ marginBottom: 30 }}>
      {categories.map((category) => <CategoryTag category={category} key={category} />)}
    </div>
);

const CategoriesListTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const categories = useCategoriesList();

  return (
    <Layout title={`Categories - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Categories">
        <CategoriesListHighlight categories={topCategories} />

        <div style={{ marginBottom: 30, marginTop: 30 }}>
          <Link to={`/tags/`}><strong>Tags</strong></Link>
        </div>

        <ul>
          {categories.map((category) => (
            <li key={category.fieldValue}>
              <Link to={`/category/${kebabCase(category.fieldValue)}/`}>
                {category.fieldValue} ({category.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export default CategoriesListTemplate;
