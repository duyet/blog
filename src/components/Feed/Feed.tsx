// @flow strict
import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import type { Edges } from '../../types';
import { gtagTrack } from '../../utils';

import * as styles from './Feed.module.scss';

type Props = {
  edges: Edges
};

const Feed = ({ edges }: Props) => (
  <div className={styles.feed}>
    {edges.map((edge) => (
      <div className={styles['feed__item']} key={edge.node.fields.slug}>
        <div className={styles['feed__itemMeta']}>
          <time className={styles['feed__itemMetaTime']} dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}>
            {moment(edge.node.frontmatter.date).format('MMMM YYYY')}
          </time>
          <span className={styles['feed__itemMetaDivider']} />
          <span className={styles['feed__itemMetaCategory']}>
            <Link to={edge.node.fields.categorySlug} className={styles['feed__itemMetaCategoryLink']}
              onClick={() => gtagTrack('CategoryLink', 'click', edge.node.fields.categorySlug)}>{edge.node.frontmatter.category}</Link>
          </span>
        </div>
        <h2 className={styles['feed__itemTitle']}>
          <Link className={styles['feed__itemTitleLink']} to={edge.node.fields.slug}
            onClick={() => gtagTrack('PostLink', 'click', edge.node.fields.slug, { title: edge.node.frontmatter.title })}>{edge.node.frontmatter.title}</Link>
        </h2>
        <p className={styles['feed__itemDescription']}>{edge.node.frontmatter.description}</p>
        <p className={styles['feed__itemThumbnail']}>
          <img src={edge.node.frontmatter.thumbnail} loading="lazy" alt={edge.node.frontmatter.title} />
        </p>
        {/* <Link className={styles['feed__item-readmore']} to={edge.node.fields.slug}>Read</Link> */}
        {/* <Link className={styles['feed__item-readmore']} to={edge.node.fields.slug}>{' '}</Link> */}
      </div>
    ))}
  </div>
);

export default Feed;
