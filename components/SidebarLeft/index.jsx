import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { link } from 'gatsby-helpers'
import { config } from 'config'
import BlogNav from '../BlogNav'
import BlogSocial from '../BlogSocial'
import './style.sss'

class SidebarLeft extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    header = (
      <header>
        <Link
          style={{
            textDecoration: 'none',
            borderBottom: 'none',
            outline: 'none'
          }}
          to={link('/')}
        >
          <img
            src='./images/photo9.jpg'
            width='75'
            height='75'
          />
        </Link>

        <h1>
          <Link
            style={{
              textDecoration: 'none',
              borderBottom: 'none',
              color: 'inherit'
            }}
            to={link('/')}
          >
            {config.siteTitle}
          </Link>
        </h1>

        <p>
          {config.siteDescr}
        </p>
      </header>
    );

    return (
      <div className='sidebar'>
        <div className='sidebar-inner'>
          <div className='blog-details'>
            <header>
              {header}
            </header>
          </div>
          <div className='blog-options'>
            <BlogNav {...this.props}/>
            <footer>
            <BlogSocial {...this.props}/>
            <p className='copyright'>
              &copy; All rights reserved.
            </p>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

SidebarLeft.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
}

export default SidebarLeft