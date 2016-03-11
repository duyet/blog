import React from 'react'
import DocumentTitle from 'react-document-title'
import { link } from 'gatsby-helpers'

module.exports = React.createClass({
  propTypes () {
    return {
      title: React.PropTypes.string,
    }
  },
  render () {
    let title = DocumentTitle.rewind()
    if (this.props.title) {
      title = this.props.title
    }

    let cssLink
    if (process.env.NODE_ENV === 'production') {
      cssLink = <link rel="stylesheet" href={link('/styles.css')} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0 maximum-scale=1.0"
          />
          <title>{title}</title>
          <link rel="shortcut icon" href={this.props.favicon}/>
          <link href='https://fonts.googleapis.com/css?family=Roboto:700|Raleway:600,700|PT+Sans:400,400italic,700,700italic' rel='stylesheet' type='text/css' />
          {cssLink}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={link('/bundle.js')}/>
        </body>
      </html>
    )
  },
})
