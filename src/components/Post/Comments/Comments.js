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
    const oldUrl = 'http://blog.duyetdev.com'; // TODO: migrate comment to new URL
    comments.push(<FacebookComment key="fb" facebookComment={facebookComment} url={oldUrl + postSlug} />);
  }

  if (useCommento) {
    comments.push(<ReactCommento key="commento" />);
  }

  if (disqusShortname) {
    comments.push(<ReactDisqusComments
                    shortname={disqusShortname}
                    identifier={postTitle}
                    title={postTitle}
                    url={url + postSlug}
                    key="disqus"
                  />);
  }

  return comments;
};

export default Comments;
