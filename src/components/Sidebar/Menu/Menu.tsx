// @flow strict
import React from 'react';
import Link from '../Link';
import { gtagTrack } from '../../../utils';

import * as styles from './Menu.module.scss';

type Props = {
  menu: {
    label: string,
    path: string
  }[]
};

const Menu = ({ menu }: Props) => (
  <nav className={styles['menu']}>
    <ul className={styles['menu__list']}>
      {menu.map((item) => (
        <li className={styles['menu__listItem']} key={item.path}>
          <Link
            to={item.path}
            className={styles['menu__listItemLink']}
            activeClassName={styles['menu__listItemLinkActive']}
            onClick={() => gtagTrack('Menu', 'click', item.path)}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
