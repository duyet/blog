// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              name
              bio
              photo
              contacts {
                email
                telegram
                twitter
                github
                rss
                vkontakte
              }
            }
            menu {
              label
              path
              icon
            }
            url
            title
            subtitle
            copyright
            disqusShortname
            useCommento
            facebookComment {
              active
              appId
            }
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
