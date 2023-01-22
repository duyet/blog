import React, { useEffect, useRef } from "react";
import * as styles from "./Page.module.scss";

type Props = {
  title?: string;
  subtitle?: React.Node;
  description?: React.Node;
  children: React.Node;
};

const Page = ({ title, subtitle, description, children }: Props) => {
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });

  return (
    <div ref={pageRef} className={styles["page"]}>
      <div className={styles["page__inner"]}>
        {title && <h1 className={styles["page__title"]}>{title}</h1>}
        {subtitle && <h2 className={styles["page__subtitle"]}>{subtitle}</h2>}
        {description && (
          <div className={styles["page__description"]}>{description}</div>
        )}
        <div className={styles["page__body"]}>{children}</div>
      </div>
    </div>
  );
};

export default Page;
