import React from 'react';
import {
  FacebookProvider, Comments, CommentsCount, Initialize
} from 'react-facebook';
import styles from './FacebookComment.module.scss';

export default class ReactCommento extends React.PureComponent {
    state = { show: false };

    componentDidMount() {
      window.addEventListener('scroll', this.onScroll);
      this.timeout = setTimeout(this.onScroll, 5000);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll);
      clearTimeout(this.timeout);
    }

    onScroll = () => {
      this.setState({ show: true });
      window.removeEventListener('scroll', this.onScroll);
    };

    render() {
      if (!this.state.show) {
        return <div style={{ paddingBottom: '100px' }} />;
      }

      const { appId } = this.props.facebookComment;
      const { url } = this.props;
      let commentUrl = url;

      return (
        <FacebookProvider appId={appId}>

          <div className={styles['fbcomment-container']}>

            <Initialize>
            {({ isReady, api }) => {
              if (isReady !== true) return null;
              api.api(`/?id=${url}`, { fields: 'engagment' }, (response) => {
                if (response && !response.error) {
                  if (response.engagement.comment_plugin_count === 0) {
                    commentUrl = url.replace('http://', 'https://');
                  }
                }
              });
              return null;
            }}
            </Initialize>

            <div className={styles['fbcomment-container__message']}>Facebook Comment trên duyet.net sẽ ngưng hoạt động từ 2019-10, vui lòng sử dụng Commento bên dưới</div>
            <Comments href={commentUrl} numPosts={100} mobile={true}/>
          </div>
        </FacebookProvider>
      );
    }
}