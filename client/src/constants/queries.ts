import { gql } from "@apollo/client";

export const GET_CURRENT_USER = gql`
  query {
    currentUser {
      userId
      userName

      organizerClubs {
        id
      }
    }
  }
`;

export const GET_MEMBER_CLUBS = gql`
  query {
    currentUser {
      memberClubs {
        id
        clubName
        description
        themeColor
        logoUri
        joined
      }
    }
  }
`;

export const GET_ORGANISER_CLUBS = gql`
  query {
    currentUser {
      organizerClubs {
        id
        clubName
        description
        themeColor
        logoUri
        joined
      }
    }
  }
`;

export const ADD_MEMBER_CLUB = gql`
  mutation ($userId: ID!, $clubId: ID!) {
    addMemberClub(userClub: { userId: $userId, clubId: $clubId }) {
      success
    }
  }
`;

export const REMOVE_MEMBER_CLUB = gql`
  mutation ($userId: ID!, $clubId: ID!) {
    removeMemberClub(userClub: { userId: $userId, clubId: $clubId }) {
      success
    }
  }
`;

export const LOG_IN = gql`
  mutation ($userName: String!, $password: String!) {
    login(userInfo: { userName: $userName, password: $password }) {
      token
    }
  }
`;

export const FIND_CLUBS = gql`
  query ($searchString: String!) {
    findClubs(searchString: $searchString) {
      id
      clubName
      description
      themeColor
      joined
      logoUri
    }
  }
`;

export const GET_CLUB_COLLECTION = gql`
  query ($collectionId: ID!) {
    clubCollection(collectionId: $collectionId) {
      collectionId
      collectionName
      clubs {
        id
        clubName
        description
        joined
        themeColor
        logoUri
      }
    }
  }
`;

export const GET_CLUB_INFO = gql`
  query Club($clubId: ID!) {
    club(clubId: $clubId) {
      id
      clubName
      rating
      joined
      description
      numMembers
      themeColor
      about
      logoUri
      backgroundUri
      socialMedia {
        facebook
        twitter
        instagram
        website
        discord
        whatsapp
        messager
      }
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
