// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

import * as styles from './TopTag.module.scss';

type Props = {
  kind: string,
  name: string,
};

const TopTag = ({ kind, name }: Props) => (
    <Link className={styles['categoryTag']} key={kebabCase(name)} to={`/${kind}/${kebabCase(name)}/`}>
        {name}
    </Link>
);

export default TopTag;
