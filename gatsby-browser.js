/* eslint-disable no-alert */
/* eslint-disable import/prefer-default-export */

'use strict';

require('./src/assets/scss/init.scss');

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    'This application has been updated. '
        + 'Reload to display the latest version?'
  );
  if (answer === true) {
    window.location.reload();
  }
};