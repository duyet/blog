import React from 'react';
import { Content } from '../../components/Post/Content';

const PostPreview = ({ entry, widgetFor }) => {
  const body = widgetFor(['body']);
  const title = entry.getIn(['data', 'title']);

  return (
    <Content body={body} title={title} />
  );
};

export default PostPreview;
