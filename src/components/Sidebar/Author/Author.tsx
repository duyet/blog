// @flow strict
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import { gtagTrack } from '../../../utils';

import * as styles from './Author.module.scss';

type Props = {
  author: {
    name: string,
    bio: string,
    photo: string
  },
  isIndex: boolean
};

const Author = ({ author, isIndex }: Props) => (
  <div className={styles['author']}>
    <Link to="/" onClick={() => gtagTrack('Sidebar_Author', 'click', 'AuthorPhoto')}>
      <img
        src={withPrefix(author.photo)}
        className={styles['author__photo']}
        width="100"
        height="100"
        alt={author.name}
      />
    </Link>

    {isIndex === true ? (
      <h1 className={styles['author__title']} onClick={() => gtagTrack('Sidebar_Author', 'click', 'AuthorName_Index')}>
        <Link className={styles['author__titleLink']} to="/">{author.name}</Link>
      </h1>
    ) : (
        <h2 className={styles['author__title']} onClick={() => gtagTrack('Sidebar_Author', 'click', 'AuthorName_NotIndex')}>
          <Link className={styles['author__titleLink']} to="/">{author.name}</Link>
        </h2>
    )}
    <p className={styles['author__subtitle']}
      onClick={() => gtagTrack('Sidebar_Author', 'click', 'AuthorBio')}
      dangerouslySetInnerHTML={{ __html: author.bio }}></p>
  </div>
);

export default Author;
