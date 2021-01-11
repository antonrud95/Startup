import { GraphQLClient } from "graphql-request";
import * as Blocks from "../components";

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);
export async function getStaticProps() {
  const { unionTests } = await graphcms.request(
    `
    query IndexQuery() {
      unionTests{
        blocks{
          __typename
          ... on Header {
            links
            button {
              id
              name
              type
              link
            }
          } 
            ... on Hero {
              title
              text
              image {
                url
              }
              buttons {
                name
                id
                type
                link
              }
              inputfield {
                id
                type
                placeholder
              }
              sponsored {
                id
                url
              }
            }
            
          ... on Feature {
            id
            title
            text
            featureitems {
              id
              image {
                id
                url
              }
              title
              text
            }
          }
          ... on Advantage {
            info {
              image {
                url
              }
              title
              text
              infoitems {
                id
                text
              }
              link
            }
          }
          ... on Video {
            info {
              title
              text
              link
              image {
                url
              }
            }
          }
          ... on Support {
            info {
              title
              text
              link
              image {
                url
              }
            }
          }
        }
      }
    }
  `
  );

  return {
    props: {
      unionTests,
    },
  };
}


function Index({ unionTests }) {
  return (
    <>
      {unionTests[0].blocks.map((block, index) => {
        const Component = Blocks[block.__typename];

        if (!Component) return null;

        return <Component key={index} {...block} />;
      })}
    </>
  );
}

export default Index
