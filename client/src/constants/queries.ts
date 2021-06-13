import { gql } from "@apollo/client";

export const FIND_CLUBS = gql`
  query ($searchString: String!) {
    findClubs(searchString: $searchString) {
      id
      clubName
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
      questions {
        questionId
        title
        body
        questionTime
        answer
        answerTime
      }
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

export const POST_QUESTION = gql`
  mutation ($clubId: ID!, $title: String!, $body: String) {
    postQuestion(questionPost: { clubId: $clubId, title: $title, body: $body })
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
