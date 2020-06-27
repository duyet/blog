// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
// import SubscribeBox from './SubscribeBox';

import styles from './Post.module.scss';
import type { Node } from '../../types';
import { useSiteMetadata } from '../../hooks';
import { gtagTrack } from '../../utils';
import 'katex/dist/katex.min.css';


type Props = {
  post: Node
};

const Post = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const {
    tags, title, date, fbCommentUrl
  } = post.frontmatter;
  const siteTitle = useSiteMetadata().title;

  return (
    <div className={styles['post']}>
      <Link className={styles['post__home-button']} to="/" onClick={() => gtagTrack('HomeLink', 'click', 'home')}>{siteTitle}</Link>

      <div className={styles['post__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['post__footer']}>
        {/* <SubscribeBox /> */}
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
      </div>

      <div className={styles['post__comments']}>
        <Comments
          postSlug={slug}
          postTitle={post.frontmatter.title}
          fbCommentUrl={fbCommentUrl}
        />
      </div>
    </div>
  );
};

export default Post;
