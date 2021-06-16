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
      questions {
        questionId
        title
        body
        questionTime
        answer
        answerTime
      }
      rating
      numMembers
      themeColor
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
    $rating: Int!
    $title: String!
    $comment: String
    $anonymousReview: Boolean
  ) {
    addReview(
      review: {
        clubId: $clubId
        rating: $rating
        title: $title
        comment: $comment
        anonymousReview: $anonymousReview
      }
    )
  }
`;

const POST_QUESTION = gql`
  mutation postQuestion(
    $clubId: ID!
    $title: String!
    $body: String
    $anonymousQuestion: Boolean
  ) {
    postQuestion(
      questionPost: {
        clubId: $clubId
        title: $title
        body: $body
        anonymousQuestion: $anonymousQuestion
      }
    )
  }
`;

const POST_ANSWER = gql`
  mutation postAnswer($questionId: ID!, $answer: String!) {
    postAnswer(answerPost: { questionId: $questionId, answer: $answer })
  }
`;

const UPDATE_LOGO = gql`
  mutation updateLogo($clubId: ID!, $content: String!) {
    updateLogo(logo: { clubId: $clubId, content: $content }) {
      uri
    }
  }
`;

const UPDATE_BASIC_INFO = gql`
  mutation updateBasicInfo(
    $clubId: ID!
    $about: String
    $description: String
    $numMembers: Int
    $themeColor: String
  ) {
    updateBasicInfo(
      clubId: $clubId
      basicInfoInput: {
        about: $about
        description: $description
        numMembers: $numMembers
        themeColor: $themeColor
      }
    ) {
      success
    }
  }
`;

const queries = {
  ADD_CLUB,
  GET_CLUB,
  GET_CLUBS,
  ADD_REVIEW,
  UPDATE_LOGO,
  POST_QUESTION,
  POST_ANSWER,
  UPDATE_BASIC_INFO,
};

export default queries;
