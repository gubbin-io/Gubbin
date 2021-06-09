import { gql } from "apollo-server";

const ADD_CLUB = gql`
  mutation addClub($clubname: String!, $description: String!) {
    addClub(clubInfo: { clubname: $clubname, description: $description }) {
      id
      clubname
    }
  }
`;

const GET_CLUB = gql`
  query club($clubname: String!) {
    club(clubname: $clubname) {
      id
      clubname
      description
      reviews {
        rating
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
      clubname
      description
    }
  }
`;

const ADD_REVIEW = gql`
  mutation addReview(
    $clubid: ID!
    $reviewer: String!
    $rating: Int!
    $comment: String
  ) {
    addReview(
      review: {
        clubid: $clubid
        reviewer: $reviewer
        rating: $rating
        comment: $comment
      }
    )
  }
`;

export { ADD_CLUB, GET_CLUB, GET_CLUBS, ADD_REVIEW };
