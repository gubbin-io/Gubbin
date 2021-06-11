import { gql } from "@apollo/client";

export const GET_CLUB_INFO = gql`
  query Club($clubId: ID!) {
    club(clubId: $clubId) {
      id
      clubName
      rating
      description
      numMembers
      themeColor
      about
      logoUri
      backgroundUri
      reviews {
        id
        rating
        title
        comment
        commentTime
      }
    }
  }
`;

export const GET_CLUB_CARD = gql`
  query Club($clubId: ID!) {
    club(clubId: $clubId) {
      id
      clubName
      description
      themeColor
      logoUri
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation NewReview(
    $clubId: ID!
    $reviewer: String!
    $rating: Int!
    $title: String
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

export const GET_CLUBS = gql`
  query {
    clubs {
      id
      clubName
      rating
    }
  }
`;

export const GET_CLUB_COLLECTION = gql`
  query ($collectionId: ID!) {
    clubCollection(collectionId: $collectionId) {
      collectionId
      collectionName
      clubs
    }
  }
`;
