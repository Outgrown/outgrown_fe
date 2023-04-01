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
`
export const FIND_ARTICLES = gql`
  query findArticles($articleType: String, $ageGroup: String, $gender: String) {
    findArticles(articleType: $articleType, ageGroup: $ageGroup, gender: $gender) {
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
            __typename
        }
        __typename
    }
  }
`