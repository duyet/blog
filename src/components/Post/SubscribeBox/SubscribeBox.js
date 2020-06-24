import React from 'react';

export default class SubscribeBox extends React.PureComponent {
  componentDidMount() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//relentless-crafter-7436.ck.page/f35f7f17c7/index.js';
    script.setAttribute('data-uid', 'f35f7f17c7');

    document.getElementById('subscribe-box').appendChild(script);
  }

  render() {
    return (
      <div id="subscribe-box"/>
    );
  }
}