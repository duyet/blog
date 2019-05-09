import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery, StaticQuery } from 'gatsby';
import Comments from './Comments';
import siteMetadata from '../../../../jest/__fixtures__/site-metadata';

describe('Comments', () => {
  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }) => (
        render(siteMetadata)
      ),
      useStaticQuery.mockReturnValue(siteMetadata)
    );
  });

  const props = {
    postTitle: 'test',
    postSlug: '/test'
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Comments {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
