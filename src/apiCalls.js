import { gql } from "@apollo/client";

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