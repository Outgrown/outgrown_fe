const { gql } = require("@apollo/client");

export const GET_ARTICLES = gql`
query allArticles {
  allArticles {
      name
      status
      image_link
      alt_image
      articleType
      age_group
      color
      gender
      condition
      description
      price
      created_at
      updated_at
      user {
          id
          name
      }
  }
}`


// query allArticles {
//   allArticles {
//     name
//     status
//     image_link
//     alt_image
//     articleType
//     age_group
//     color
//     gender
//     condition
//     description
//     price
//     created_at
//     updated_at
//     user {
//         id
//         name
//     }
// }