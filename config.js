'use strict'

module.exports = {
  url: 'https://blog.duyet.net',
  pathPrefix: '/',
  title: 'Tôi là Duyệt',
  subtitle:
    'Data Engineer @ Fossil. I blog about web development, machine learning, data engineering and more.',
  copyright: '© duyet.net',
  disqusShortname: '',
  useCommento: true,
  facebookComment: {
    active: true,
    appId: 1394054914200945,
  },
  postsPerPage: 8,
  googleAnalyticsId: 'UA-92451506-3',
  googleTagManagerId: 'G-HXJPPQVYQN',
  useKatex: false,
  menu: [
    {
      label: 'Blog',
      path: '/',
    },
    {
      label: 'About me',
      path: '/pages/about',
    },
    {
      label: 'Categories',
      path: '/categories',
    },
    {
      label: 'Rust Tiếng Việt',
      path: '/tag/rust-tiếng-việt',
      icon: 'rust',
    },
    {
      label: 'Rust Tiếng Việt (Book)',
      path:
        'https://rust-tieng-viet.github.io/?utm_source=blog.duyet.net&utm_medium=sidebar&utm_campaign=launch_rust_tieng_viet',
      icon: 'rust',
    },
    {
      label: 'Buy Me a Coffee',
      path: 'https://ko-fi.com/duyet',
      icon: 'kofi',
    },
    {
      label: '@_duyet',
      path: 'https://unsplash.com/@_duyet',
      icon: 'unsplash',
    },
    {
      label: '@_duyet',
      path: 'https://twitter.com/_duyet',
      icon: 'twitter',
    },
    {
      label: '@duyet',
      path: 'https://github.com/duyet',
      icon: 'github',
    },
  ],
  author: {
    name: 'Tôi là Duyệt',
    photo: '/duyet-notion.png',
    bio:
      'Mostly about <a href="/tag/data-engineer/">Data Engineering</a>. <a href="/tag/rust/">Rustacean</a> at night.',
    contacts: {
      email: '',
      telegram: '',
      twitter: '_duyet',
      github: 'duyet',
      rss: '/rss.xml',
      vkontakte: '',
      kofi: 'duyet',
    },
  },
}
