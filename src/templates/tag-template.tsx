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
      <p>
        Sub-Series: <a href="/tag/rust-design-patterns">Rust Design Patterns</a>
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
  "Rust Design Patterns": (
    <div>
      <p>
        <a
          href="https://en.wikipedia.org/wiki/Software_design_pattern"
          target="_blank"
        >
          Design patterns
        </a>{" "}
        là các những giải pháp giải quyết các vấn đề hay gặp trong thiết kế phần
        mềm.
      </p>
      <p>
        Rust có nhiều feature khá đặc trưng. Những feature đặc trưng này giúp
        loại bỏ hầu hết các vấn đề có thể gặp phải trong các ngôn ngữ lập trình
        khác. Và một số design patterns trong Rust cũng có thể sẽ rất đặc trưng.
      </p>
      <p>Các nhóm Design Patterns trong Rust:</p>
      <p>
        <ul>
          <li>
            <a href="/tag/behavioural-patterns">Behavioural Patterns</a>
          </li>
          <li>
            <a href="/tag/creational-patterns">Creational Patterns</a>
          </li>
          <li>
            <a href="/tag/structural-patterns">Structural Patterns</a>
          </li>
        </ul>
      </p>
    </div>
  ),
  "Behavioural Patterns": (
    <div>
      <p>
        Rust Design Pattern Groups:
        <ul style={{ marginTop: "1em" }}>
          <li>
            <a href="/tag/behavioural-patterns">
              <strong>Behavioural Patterns</strong>
            </a>
          </li>
          <li>
            <a href="/tag/creational-patterns">Creational Patterns</a>
          </li>
          <li>
            <a href="/tag/structural-patterns">Structural Patterns</a>
          </li>
        </ul>
      </p>
      <p>
        From Wikipedia: <br />
        Behavioural Patterns: Design patterns that identify common communication
        patterns among objects. By doing so, these patterns increase flexibility
        in carrying out communication.
      </p>
    </div>
  ),
  "Creational Patterns": (
    <div>
      <p>
        Rust Design Pattern Groups:
        <ul style={{ marginTop: "1em" }}>
          <li>
            <a href="/tag/behavioural-patterns">Behavioural Patterns</a>
          </li>
          <li>
            <a href="/tag/creational-patterns">
              <strong>Creational Patterns</strong>
            </a>
          </li>
          <li>
            <a href="/tag/structural-patterns">Structural Patterns</a>
          </li>
        </ul>
      </p>
      <p>
        From Wikipedia: <br />
        Creational Patterns: Design patterns that deal with object creation
        mechanisms, trying to create objects in a manner suitable to the
        situation. The basic form of object creation could result in design
        problems or in added complexity to the design. Creational design
        patterns solve this problem by somehow controlling this object creation.
      </p>
    </div>
  ),
  "Structural Patterns": (
    <div>
      <p>
        Rust Design Pattern Groups:
        <ul style={{ marginTop: "1em" }}>
          <li>
            <a href="/tag/behavioural-patterns">Behavioural Patterns</a>
          </li>
          <li>
            <a href="/tag/creational-patterns">Creational Patterns</a>
          </li>
          <li>
            <a href="/tag/structural-patterns">
              <strong>Structural Patterns</strong>
            </a>
          </li>
        </ul>
      </p>
      <p>
        From Wikipedia: <br />
        Structual Patterns: Design patterns that ease the design by identifying
        a simple way to realize relationships among entities.
      </p>
    </div>
  ),
};

const subTitle = (tag: string) => {
  const mapping = {
    "Behavioural Patterns": (
      <Link to="/tag/rust-design-patterns">← Back to Rust Design Patterns</Link>
    ),
    "Structural Patterns": (
      <Link to="/tag/rust-design-patterns">← Back to Rust Design Patterns</Link>
    ),
    "Creational Patterns": (
      <Link to="/tag/rust-design-patterns">← Back to Rust Design Patterns</Link>
    ),
    "Rust Design Patterns": (
      <Link to="/tag/rust-tiếng-việt">← Rust Tiếng Việt</Link>
    ),
  };

  const defaultSubTitle = <Link to="/tags">← Back to All Tags</Link>;

  return mapping[tag] || defaultSubTitle;
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
        subtitle={subTitle(tag)}
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
