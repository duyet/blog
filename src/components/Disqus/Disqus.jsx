import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDisqusComments from 'react-disqus-comments';
import config from '../../../gatsby-config';

class Disqus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toasts: []
    };
    this.notifyAboutComment = this.notifyAboutComment.bind(this);
    this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this);
  }

  onSnackbarDismiss() {
    const [, ...toasts] = this.state.toasts;
    this.setState({ toasts });
  }
  notifyAboutComment() {
    const toasts = this.state.toasts.slice();
    toasts.push({ text: 'New comment available!!' });
    this.setState({ toasts });
  }
  render() {
    const { postNode } = this.props;
    if (!config.siteMetadata.disqusShortname) {
      return null;
    }
    const post = postNode.frontmatter;
    const url = config.siteMetadata.url + postNode.fields.slug;
    return (
      <ReactDisqusComments
        shortname={config.siteMetadata.disqusShortname}
        identifier={post.title}
        title={post.title}
        url={url}
        category_id={post.category_id}
        onNewComment={this.notifyAboutComment}
      />
    );
  }
}

Disqus.propTypes = {
  postNode: PropTypes.object.isRequired
};

export default Disqus;
