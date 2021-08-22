// @flow strict
import React from 'react';
import { getContactHref, getIcon, gtagTrack } from '../../../utils';
import Icon from '../../Icon';


import * as styles from './Contacts.module.scss';

type Props = {
  contacts: {
    [string]: string,
  },
};

const Contacts = ({ contacts }: Props) => (
  <div className={styles['contacts']}>
    <ul className={styles['contacts__list']}>
      {Object.keys(contacts).map((name: string) => (!contacts[name] ? null : (
        <li className={styles['contacts__listItem']} key={name}>
          <a
            className={styles['contacts__listItemLink']}
            href={getContactHref(name, contacts[name])}
            onClick={() => gtagTrack('Sidebar_Contact', 'click', getContactHref(name, contacts[name]))}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon name={name} icon={getIcon(name)} />
          </a>
        </li>
      )))}
    </ul>
  </div>
);

export default Contacts;
