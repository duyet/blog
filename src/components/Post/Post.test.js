import React from 'react';
import renderer from 'react-test-renderer';
import Post from './Post';

describe('Post', () => {
  const props = {
    post: {
      html: '<p>test</p>',
      fields: {
        tagSlugs: [
          '/test_0',
          '/test_1'
        ]
      },
      frontmatter: {
        date: '2016-09-01T23:46:37.121Z',
        tags: [
          'test_0',
          'test_1'
        ],
        title: 'test'
      }
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Post {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
