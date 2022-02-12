// @flow strict
import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Page from "../components/Page";
import Pagination from "../components/Pagination";
import { useSiteMetadata } from "../hooks";
import { AllMarkdownRemark, PageContext } from "../types";

type Props = {
  data: AllMarkdownRemark;
  pageContext: PageContext;
};

const tagDescription = {
  "Rust Tiếng Việt": (
    <div>
      <p>
        Rust là một ngôn ngữ mới, với hệ thống document và sách đồ sộ và chi
        tiết. Nhưng đôi khi nó sẽ khó với một số người bởi đa số sẽ là Tiếng
        Anh. Với chuỗi bài Rust Tiếng Việt, mình ghi chép và giải thích những gì
        đã học được, chia sẽ với hy vọng có thể giúp cho mọi người tiếp cận
        nhanh hơn, cũng như dành cho các thành viên trong team mình.
      </p>
      <p>Tham thảo:</p>
      <p>
        <ul>
          <li>
            <a href="https://doc.rust-lang.org/stable/book/" target="_blank">
              Rust book
            </a>
          </li>
          <li>
            <a href="https://bloggingfordevs.com/rust-blogs/" target="_blank">
              Today's 10 Best Rust Blogs
            </a>
          </li>
        </ul>
      </p>
    </div>
  ),
};

const TagTemplate = ({ data, pageContext }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  const {
    tag,
    currentPage,
    prevPagePath,
    nextPagePath,
    hasPrevPage,
    hasNextPage,
  } = pageContext;

  const { edges } = data.allMarkdownRemark;
  const pageTitle =
    currentPage > 0
      ? `All Posts tagged as "${tag}" - Page ${currentPage} - ${siteTitle}`
      : `All Posts tagged as "${tag}" - ${siteTitle}`;

  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      <Sidebar />
      <Page
        title={tag}
        subtitle={<Link to="/tags/">← Back to All Tags</Link>}
        description={tagDescription[tag]}
      >
        <Feed edges={edges} />
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query TagPage($tag: String, $postsLimit: Int!, $postsOffset: Int!) {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: {
        frontmatter: {
          tags: { in: [$tag] }
          template: { eq: "post" }
          draft: { ne: true }
        }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
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
            thumbnail
          }
        }
      }
    }
  }
`;

export default TagTemplate;
