const { gql } = require("@apollo/client");

const GET_BLOGS_INFE = gql`
  query {
    posts {
      title
      slug
      id
      coverPhoto {
        url
      }
    }
  }
`;

const GET_POST_INFE = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      content {
        html
      }
      title
      price
      coverPhoto {
        url
      }
    }
  }
`;


const GET_POST_COMMENT = gql`
  query getPostComment($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      name
      id
      text
    }
  }
`;

export { GET_BLOGS_INFE, GET_POST_INFE, GET_POST_COMMENT };