// @flow strict
import React from 'react'
import moment from 'moment'
import Balancer from 'react-wrap-balancer'
import * as styles from './Content.module.scss'

type Props = {
  body: string
  title: string
}

const Content = ({ date, body, title }: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>
      <Balancer>{title}</Balancer>
    </h1>
    <div className={styles['content__date']}>
      {moment(date).format('MMM D, YYYY')}
    </div>
    <div
      className={styles['content__body']}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  </div>
)

export default Content
