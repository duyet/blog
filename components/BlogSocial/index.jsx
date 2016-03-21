import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { link } from 'gatsby-helpers'
import { config } from 'config'

import './style.sss'
import '../../static/fonts/fontawesome/style.css'

class BlogSocial extends React.Component {
    render() {

        const twitter = config.blogTitle
        const vk = config.vk
        const rss = config.rss
        const email = config.email
        const github = config.github
        const telegram = config.telegram

        return (
            <div className='blog-social'>
              <ul>
                <li>
                  <a href={ twitter }><i className='fa fa-twitter'></i></a>
                </li>
                <li>
                  <a href={ github }><i className='fa fa-github-alt'></i></a>
                </li>
                <li>
                  <a href={ vk }><i className='fa fa-vk'></i></a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href={ email }><i className='fa fa-envelope-o'></i></a>
                </li>
                <li>
                  <a href={ telegram }><i className='fa fa-paper-plane'></i></a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href={ rss }><i className='fa fa-rss'></i></a>
                </li>
              </ul>
            </div>
            );
    }
}

export default BlogSocial