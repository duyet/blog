// @flow strict
import React from 'react';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();
  let twitterLink = null;
  if (author.contacts.twitter && author.contacts.twitter !== '#') {
    twitterLink = (
      <a
          className={styles['author__bio-twitter']}
          href={getContactHref('twitter', author.contacts.twitter)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>@{author.contacts.twitter}</strong>
        </a>
    );
  }

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        <span dangerouslySetInnerHTML={{ __html: author.bio }}></span>
        {twitterLink}
      </p>
    </div>
  );
};

export default Author;
