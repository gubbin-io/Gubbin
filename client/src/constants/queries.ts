import { gql } from "@apollo/client";

export const GET_CLUB_INFO = gql`
  query Club($clubid: ID!) {
    club(clubid: $clubid) {
      id
      clubname
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

export const GET_CLUBS = gql`
  query {
    clubs {
      id
      clubname
      rating
    }
  }
`;
