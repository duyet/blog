import React from 'react'
import moment from 'moment'
import { RouteHandler, Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { link } from 'gatsby-helpers'
import access from 'safe-access'
import ReadNext from '../ReadNext'
import { config } from 'config'

import './style.sss'

import '../../static/css/highlight.css'

class BlogPost extends React.Component {
  render() {
    const { route } = this.props
    const post = route.page.data
    const home = (
      <div>
        <Link
          className='gohome'
          to={link('/')}
        >
          All Articles
        </Link>
      </div>
    )

    return (
        <div>
          {home}
          <div className='blog-single'>
            <div className='text'>
              <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{__html: post.body}}/>
                <div className='date-published'>
                  <em>Published {moment(post.datePublished).format('D MMM YYYY')}</em>
                </div>
            </div>
            <div className='footer'>
              <ReadNext post={post} {...this.props}/>
              <hr></hr>
              <p>
                {config.siteDescr} <a href={config.twitter}><br></br> <strong>{config.authorName}</strong> on Twitter</a>
              </p>
            </div>
          </div>
        </div>
    );
  }
}


BlogPost.propTypes = {
  post: React.PropTypes.object.isRequired,
  pages: React.PropTypes.array,
}

export default BlogPost