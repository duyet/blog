// @flow strict
import React, { useState } from 'react'
import { Link } from 'gatsby'

import Comments from './Comments'
import Content from './Content'
import Kofi from './Kofi'
import Tags from './Tags'
// import SubscribeBox from './SubscribeBox';

import * as styles from './Post.module.scss'
import type { Node } from '../../types'
import { useSiteMetadata } from '../../hooks'
import { gtagTrack } from '../../utils'
import 'katex/dist/katex.min.css'

type Props = {
  post: Node
}

const Post = ({ post }: Props) => {
  const [showComment, toggleShowComment] = useState<boolean>(false)
  const { html } = post
  const { tagSlugs, slug } = post.fields
  const {
    tags,
    title,
    date,
    fbCommentUrl,
    twitterCommentUrl,
    hackerNewsCommentUrl,
    linkedInCommentUrl,
  } = post.frontmatter
  const siteTitle = useSiteMetadata().title

  return (
    <div className={styles.post}>
      <Link
        className={styles['post__homeButton']}
        to='/'
        onClick={() =>
          gtagTrack('HomeLink', 'page_view', 'home', {
            title: 'Home',
            url: '/',
          })
        }
      >
        {siteTitle}
      </Link>

      <div className={styles['post__content']}>
        <Content date={date} body={html} title={title} />
      </div>

      <div className={styles['post__footer']}>
        {/* <SubscribeBox /> */}
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Kofi />
      </div>

      <div className={styles['post__comments']}>
        <button
          className={styles['post__comments__toggle']}
          onClick={() => toggleShowComment(!showComment)}
        >
          {showComment ? 'Hide comments' : 'Show comments'}
        </button>

        {twitterCommentUrl ? (
          <a
            className={styles['post__comments__twitter']}
            href={twitterCommentUrl}
            target='_blank'
            rel='noopener noreferrer'
          >
            Comments on Twitter
          </a>
        ) : (
            ''
          )}

        {hackerNewsCommentUrl ? (
          <a
            className={styles['post__comments__hackernews']}
            href={hackerNewsCommentUrl}
            target='_blank'
            rel='noopener noreferrer'
          >
            Comments on Hacker News
          </a>
        ) : (
            ''
          )}

        {linkedInCommentUrl ? (
          <a
            className={styles['post__comments__linkedin']}
            href={linkedInCommentUrl}
            target='_blank'
            rel='noopener noreferrer'
          >
            Comments on LinkedIn
          </a>
        ) : (
            ''
          )}

        {showComment && (
          <Comments
            postSlug={slug}
            postTitle={post.frontmatter.title}
            fbCommentUrl={fbCommentUrl}
          />
        )}
      </div>
    </div>
  )
}

export default Post
