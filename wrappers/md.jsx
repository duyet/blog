import React from 'react'
import DocumentTitle from 'react-document-title'
import BlogPost from '../components/BlogPost'
import BlogPage from '../components/BlogPage'
import { config } from 'config'

class MarkdownWrapper extends React.Component {
  render() {
    const { route } = this.props
    const post = route.page.data

    let layout, template
    layout = post.layout

    if (layout != 'page') {
      template = <BlogPost {...this.props}/>
    } else {
      template = <BlogPage {...this.props}/>
    }

    return (
      <DocumentTitle title={`${post.title} - ${config.siteTitle}`}>
        <div>
          {template}
        </div>
      </DocumentTitle>
    );
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper