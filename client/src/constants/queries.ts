import { gql } from "@apollo/client";

export const GET_CLUB_INFO = gql`
  query Club($clubId: ID!) {
    club(clubId: $clubId) {
      id
      clubName
      rating
      description
      about
      reviews {
        id
        rating
        comment
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation NewReview(
    $clubId: ID!
    $reviewer: String!
    $rating: Int!
    $comment: String
  ) {
    addReview(
      review: {
        clubId: $clubId
        reviewer: $reviewer
        rating: $rating
        comment: $comment
      }
    )
  }
`;

export const GET_CLUBS = gql`
  query {
    clubs {
      id
      clubName
      rating
    }
  }
`;
