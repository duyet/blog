import React from 'react';
import { Page } from '../../components/Page';

const PagePreview = ({ entry, widgetFor }) => {
  const body = widgetFor(['body']);
  const title = entry.getIn(['data', 'title']);

  return (
    <Page title={title}>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </Page>
  );
};

export default PagePreview;
