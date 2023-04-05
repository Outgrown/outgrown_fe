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
      __typename
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
          __typename
      }
  }
}
`;

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
`;
export const GET_ARTICLE = gql  `
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
`

export const POST_USER = gql `
mutation updateArticleUser ($article: UpdateArticleUserInput!) {
  updateArticleUser(input: $article) {
      article {
          id
          name
          status
          user {
              id
              name
              __typename
          }
          __typename
      }
      errors
  }
}
`

export const UPDATE_ARTICLE_STATUS = gql `
mutation updateArticleStatus ($article: UpdateArticleStatusInput!) {
  updateArticleStatus(input: $article) {
      article {
          id
          name
          status
          user {
              id
              name
              __typename
          }
          __typename
      }
      errors
  }
}`