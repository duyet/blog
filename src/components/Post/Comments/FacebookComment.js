import React from 'react';
import { FacebookProvider, Comments } from 'react-facebook';

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
      return (
        <FacebookProvider appId={appId}>
            <Comments />
        </FacebookProvider>
      );
    }
}