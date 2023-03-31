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

export const GET_ARTICLE = gql`
query findArticle($id: ID!, $name: String!) {
    findArticle(id: $id, name: $name) {
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
`;
