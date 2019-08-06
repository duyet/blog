// @flow strict
import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import { useSiteMetadata } from '../../../hooks';
import ReactCommento from './Commento';
import FacebookComment from './FacebookComment';

type Props = {
  postTitle: string,
  postSlug: string
};

const Comments = ({ postTitle, postSlug }: Props) => {
  const comments = [];
  const {
    url, disqusShortname, useCommento, facebookComment
  } = useSiteMetadata();

  if (facebookComment && facebookComment.active) {
    const oldUrl = 'https://blog.duyetdev.com'; // TODO: migrate comment to new URL
    comments.push(<FacebookComment facebookComment={facebookComment} url={oldUrl + postSlug} />);
  }

  if (useCommento) {
    comments.push(<ReactCommento />);
  }

  if (disqusShortname) {
    comments.push(<ReactDisqusComments
                    shortname={disqusShortname}
                    identifier={postTitle}
                    title={postTitle}
                    url={url + postSlug}
                  />);
  }

  return comments;
};

export default Comments;
