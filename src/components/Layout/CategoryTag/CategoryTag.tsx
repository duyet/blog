// @flow strict
import React from 'react';
import type { Node as ReactNode } from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

import styles from './CategoryTag.module.scss';

type Props = {
  category: string
};

const CategoryTag = ({ category }: Props) => (
    <Link className={styles['category-tag']} key={category} to={`/category/${kebabCase(category)}/`}>
        {category}
    </Link>
);

export default CategoryTag;
