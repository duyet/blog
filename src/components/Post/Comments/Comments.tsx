// @flow strict
import React from 'react';
import { useSiteMetadata } from '../../../hooks';
import ReactCommento from './Commento';
import FacebookComment from './FacebookComment';

type Props = {
  postTitle: string,
  postSlug: string,
  fbCommentUrl?: string
};

const Comments = ({ postSlug, fbCommentUrl = '' }: Props) => {
  const comments = [];
  const {
    useCommento, facebookComment
  } = useSiteMetadata();

  if (facebookComment && facebookComment.active) {
    const oldUrl = 'http://blog.duyetdev.com'; // TODO: migrate comment to new URL
    comments.push(
        <FacebookComment
          key="fb"
          facebookComment={facebookComment}
          fbCommentUrl={fbCommentUrl}
          url={oldUrl + postSlug}
        />
    );
  }

  if (useCommento) {
    comments.push(<ReactCommento key="commento" />);
  }

  return comments;
};

export default Comments;
