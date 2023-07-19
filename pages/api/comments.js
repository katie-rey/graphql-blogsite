/** *************************************************************
 * Any file inside the folder pages/api is mapped to /api/* and  *
 * will be treated as an API endpoint instead of a page.         *
 *************************************************************** */

import { GraphqlClient, gql } from 'graphql'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export default async function comments(req, res) {
  const graphQLClient = new GraphqlClient(graphqlAPI, {
    headers: {
      authorization: `BEARER ${process.env.COMMENTS_DEV}`,
    },
  })

  const query = gql`
  // update data or add new data
    mutation CreateComment($name: String!, $email:String!, $comment: String!, $slug: String! ) {
      createComment(data: {name: $name, email: $email, comment: $comment, post : { connect {slug: $slug}}}) {id}
    }`

  const result = await graphQLClient.request(query, req.body)
  return res.status(200).send(result)
}
