import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { link } from 'gatsby-helpers'

import './style.sss'

class BlogNav extends React.Component {
  render() {
  	const { location } = this.props
    return (
      <nav className='blog-nav'>
        <ul>
          <li>
            <Link to="/" className={location.pathname === link('/')?"current":null}>Articles</Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === link('/about')?"current":null}>About me</Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === link('/contact')?"current":null}>Contact me</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

 BlogNav.propTypes = {
  location: React.PropTypes.object,
}

export default BlogNav