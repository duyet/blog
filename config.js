'use strict';

module.exports = {
  url: 'https://blog.duyet.net',
  pathPrefix: '/',
  title: 'Tôi là Duyệt',
  subtitle: 'Data Engineer @ Fossil. I blog about web development, machine learning, data engineering and more.',
  copyright: '© duyet.net',
  disqusShortname: '',
  useCommento: true,
  facebookComment: {
    active: true,
    appId: 1394054914200945,
  },
  postsPerPage: 8,
  googleAnalyticsId: 'UA-92451506-3',
  googleTagManagerId: 'GTM-PT3ZDS3',
  useKatex: false,
  menu: [
    {
      label: 'Blog',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    },
    {
      label: 'Data Studio',
      path: '/pages/data-studio'
    },
    {
      label: 'Categories',
      path: '/categories'
    },
    {
      label: 'TL;DR',
      path: '/tag/tldr'
    },
    {
      label: 'TIL',
      path: 'https://til.duyet.net'
    }
  ],
  author: {
    name: 'Tôi là Duyệt',
    photo: '/duyet.jpg',
    bio: 'Data Engineer @ Fossil. I blog about <a href="/tag/web/">Web</a>, <a href="/tag/machine-learning/">Machine Learning</a>, <a href="/tag/data-engineer/">Data Engineering</a>, and <a href="/categories/">more topics</a>.',
    contacts: {
      email: '',
      telegram: '',
      twitter: 'duyetdev',
      github: 'duyet',
      rss: '/rss.xml',
      vkontakte: ''
    }
  }
};
