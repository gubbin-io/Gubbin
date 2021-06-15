import { gql } from "apollo-server";

const reviewSchema = gql`
  extend type Mutation {
    addReview(review: NewReview!): ID!
    postResponse(responsePost: ResponsePost!): Int!
  }

  input NewReview {
    clubId: ID!
    rating: Int!
    title: String
    comment: String
    anonymousReview: Boolean
  }

  input ResponsePost {
    reviewId: ID!
    response: String!
  }
`;

export default reviewSchema;
