import React from 'react';
import { Link } from 'gatsby';
import profilePic from '../../../pages/photo.jpg';
import styles from './Author.module.scss';

const Author = ({ author, isIndex }) => (
  <div className={styles['author']}>
    <Link to="/">
      <img
        src={profilePic}
        className={styles['author__photo']}
        width="75"
        height="75"
        alt={author.name}
      />
    </Link>

    { isIndex ? (
      <h1 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">{author.name}</Link>
      </h1>
    ) :
      <h2 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">{author.name}</Link>
      </h2>
    }

    <p className={styles['author__subtitle']}>{author.bio}</p>
  </div>
);

export default Author;
