import { gql } from "apollo-server";

const ADD_CLUB = gql`
  mutation addClub($clubName: String!, $description: String!, $about: String) {
    addClub(
      clubInfo: {
        clubName: $clubName
        description: $description
        about: $about
      }
    ) {
      id
      clubName
      description
      about
    }
  }
`;

const GET_CLUB = gql`
  query club($clubId: ID!) {
    club(clubId: $clubId) {
      id
      clubName
      description
      about
      reviews {
        rating
        title
        comment
      }
      rating
    }
  }
`;

const GET_CLUBS = gql`
  query clubs {
    clubs {
      id
      clubName
      description
    }
  }
`;

const ADD_REVIEW = gql`
  mutation addReview(
    $clubId: ID!
    $reviewer: String!
    $rating: Int!
    $title: String!
    $comment: String
  ) {
    addReview(
      review: {
        clubId: $clubId
        reviewer: $reviewer
        rating: $rating
        title: $title
        comment: $comment
      }
    )
  }
`;

const UPLOAD_LOGO = gql`
  mutation addLogo($clubId: ID!, $content: String!) {
    addLogo(logo: { clubId: $clubId, content: $content }) {
      filename
    }
  }
`;

export { ADD_CLUB, GET_CLUB, GET_CLUBS, ADD_REVIEW, UPLOAD_LOGO };
