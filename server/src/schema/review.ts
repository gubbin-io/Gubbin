import { gql } from "apollo-server";

const reviewSchema = gql`
  extend type Mutation {
    addReview(review: NewReview!): ID!
    postFollowup(followupPost: FollowupPost!): Int!
  }

  input NewReview {
    clubId: ID!
    rating: Int!
    title: String
    comment: String
    anonymousReview: Boolean
  }

  input FollowupPost {
    followupId: ID!
    comment: String!
    isCommittee: Boolean!
  }
`;

export default reviewSchema;
