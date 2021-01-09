// import Head from 'next/head'
// import { GraphQLClient } from "graphql-request";
// import Link from "next/link";
// import styles from '../styles/Home.module.css'

// const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);
// export async function getStaticProps() {
//   const { tests } = await graphcms.request(
//     `
//     query Tests() {
//       tests {
//         id
//         title
//         image {
//           id
//           url
//         }
//         lowertitle
//       }
//     }
//   `
//   );

//   return {
//     props: {
//       tests,
//     },
//   };
// }


// export default function Home({tests}) {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       {tests.map((test) => {
//         return(
//           <div key={test.id}>
//             <h1>{test.title}</h1>
//             <img src={test.image.url}/>
//             <p>{test.lowertitle}</p>
//           </div>
//         )
//       })}
//     </div>
//   )
// }


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
            }
            
          ... on Feature {
            title
            text
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
