const { gql } = require("@apollo/client");

export const GET_ALL_ARTICLES = gql`
  query allArticles {
    allArticles {
      id
      name
      status
      imageLink
      altImage
      articleType
      ageGroup
      color
      gender
      condition
      description
      price
      user {
        id
        name
      }
    }
  }
`

export const GET_USER = gql`
query findUser($id: ID!) {
  findUser(id: $id) {
      id
      name
      articles {
          id
          name
          status
          imageLink
          altImage
          articleType
          ageGroup
          color
          gender
          condition
          description
          price
      }
  }
}
`;

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
