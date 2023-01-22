// @flow strict
import React from "react";
import Author from "./Author";
import Menu from "./Menu";
import * as styles from "./Sidebar.module.scss";
import { useSiteMetadata } from "../../hooks";

type Props = {
  isIndex?: boolean;
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, menu } = useSiteMetadata();

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__inner}>
        <Author author={author} isIndex={isIndex || false} />
        <Menu menu={menu} />
      </div>
    </div>
  );
};

export default Sidebar;
