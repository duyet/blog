// @flow strict
import React from "react";
import { Link } from "gatsby";
import kebabCase from "lodash/kebabCase";

import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import Page from "../components/Page";
import TopTag from "./TopTag";
import { useSiteMetadata, useCategoriesList } from "../hooks";

const topItems = [
  ["category", "Data Engineer"],
  ["category", "Machine Learning"],
  ["category", "Javascript"],
  ["category", "Web"],
  ["tag", "Rust"],
  ["tag", "Rust Tiếng Việt"],
];

const ListHighlight = ({ items }: { items: string[][] }) => (
  <div style={{ marginBottom: 30 }}>
    {items.map((item) => (
      <TopTag kind={item[0]} name={item[1]} key={item[1]} />
    ))}
  </div>
);

const CategoriesListTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const categories = useCategoriesList();

  return (
    <Layout title={`Categories - ${title}`} description={subtitle}>
      <Page title="Categories" subtitle={<Link to="/tags/">All Tags</Link>}>
        <ListHighlight items={topItems} />

        <ul>
          {categories.map((category) => (
            <li key={category.fieldValue}>
              <Link to={`/category/${kebabCase(category.fieldValue)}/`}>
                {category.fieldValue} ({category.totalCount})
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ marginBottom: 30, marginTop: 30 }}>
          <Link to={`/tags/`}>
            <strong>Tags</strong>
          </Link>
        </div>
      </Page>
      <Sidebar />
    </Layout>
  );
};

export default CategoriesListTemplate;
