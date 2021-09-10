// @flow strict
import React, { useState } from "react";
import { Link } from "gatsby";

import Comments from "./Comments";
import Content from "./Content";
import Kofi from "./Kofi";
import Tags from "./Tags";
// import SubscribeBox from './SubscribeBox';

import * as styles from "./Post.module.scss";
import type { Node } from "../../types";
import { useSiteMetadata } from "../../hooks";
import { gtagTrack } from "../../utils";
import "katex/dist/katex.min.css";

type Props = {
  post: Node;
};

const Post = ({ post }: Props) => {
  const [showComment, toggleShowComment] = useState<boolean>(false);
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date, fbCommentUrl } = post.frontmatter;
  const siteTitle = useSiteMetadata().title;

  return (
    <div className={styles.post}>
      <Link
        className={styles["post__homeButton"]}
        to="/"
        onClick={() => gtagTrack("HomeLink", "click", "home")}
      >
        {siteTitle}
      </Link>

      <div className={styles["post__content"]}>
        <Content date={date} body={html} title={title} />
      </div>

      <div className={styles["post__footer"]}>
        {/* <SubscribeBox /> */}
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Kofi />
      </div>

      <div className={styles["post__comments"]}>
        <button
          className={styles["post__comments__toggle"]}
          onClick={() => toggleShowComment(!showComment)}
        >
          {showComment ? "Hide comments" : "Show comments"}
        </button>

        {showComment && (
          <Comments
            postSlug={slug}
            postTitle={post.frontmatter.title}
            fbCommentUrl={fbCommentUrl}
          />
        )}
      </div>
    </div>
  );
};

export default Post;
