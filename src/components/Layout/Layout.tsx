// @flow strict
import React from 'react';
import Helmet from 'react-helmet';
import type { Node as ReactNode } from 'react';
import { init } from '@amplitude/analytics-browser';
import * as styles from './Layout.module.scss';

type Props = {
  children: ReactNode,
  title: string,
  description?: string
};

init('3a35b45a95aae45c66362440740d4419');

const Layout = ({ children, title, description }: Props) => (
  <div className={styles.layout}>
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "1fc269287fc7476cacbe4cb0b3267201"}'></script>
      <script async src="https://cdn.splitbee.io/sb.js"></script>

    </Helmet>
    {children}
  </div>
);

export default Layout;
