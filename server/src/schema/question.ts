import { gql } from "apollo-server";

const questionSchema = gql`
  extend type Mutation {
    postQuestion(questionPost: QuestionPost!): ID!
    postAnswer(answerPost: AnswerPost!): Int!
  }

  input QuestionPost {
    clubId: ID!
    title: String!
    body: String
    anonymousQuestion: Boolean
  }

  input AnswerPost {
    questionId: ID!
    answer: String!
  }
`;

export default questionSchema;
