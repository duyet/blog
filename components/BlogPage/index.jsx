import React from 'react'
import moment from 'moment'
import { RouteHandler, Link } from 'react-router'
import { link } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import SidebarLeft from '../SidebarLeft'
import access from 'safe-access'
import { config } from 'config'

import './style.sss';

class BlogPage extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data

        return (
            <div>
              <SidebarLeft {...this.props}/>
              <div className='content'>
                <div className='main'>
                  <div className='main-inner'>
                    <div className='blog-page'>
                      <div className='text'>
                        <h1>{ post.title }</h1>
                        <div dangerouslySetInnerHTML={ {    __html: post.body} } />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            );
    }
}

BlogPage.propTypes = {
    post: React.PropTypes.object.isRequired,
    pages: React.PropTypes.array,
}

export default BlogPage