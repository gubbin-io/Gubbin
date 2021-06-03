import { gql } from "apollo-server";

const clubSchema = gql`
  extend type Query {
    clubs: [Club]
    club(clubname: String): Club
  }

  extend type Mutation {
    addClub(clubInfo: ClubInfo!): Club
    addReview(review: NewReview!): Int
  }

  type Club {
    id: ID!
    description: String
    clubname: String!
    reviews: [Review]
    rating: Float
  }

  type Review {
    reviewer: User!
    rating: Int!
    comment: String
  }

  input ClubInfo {
    clubname: String!
    description: String
  }

  input NewReview {
    clubid: ID!
    reviewer: String!
    rating: Int!
    comment: String
  }
`;

export default clubSchema;
