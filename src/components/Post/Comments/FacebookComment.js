import React from 'react';
import { FacebookProvider, Comments } from 'react-facebook';
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
      return (
        <FacebookProvider appId={appId}>
          <div className={styles['fbcomment-container']}>
            <div className={styles['fbcomment-container__message']}>Facebook Comment sẽ bị ngưng hoạt động từ 2019-10, vui lòng sử dụng Commento bên dưới</div>
            <Comments href={url}/>
          </div>
        </FacebookProvider>
      );
    }
}