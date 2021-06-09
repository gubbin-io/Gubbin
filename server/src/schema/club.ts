import { gql } from "apollo-server";

const clubSchema = gql`
  extend type Query {
    clubs: [Club]
    club(clubId: ID): Club
  }

  extend type Mutation {
    addClub(clubInfo: ClubInfo!): Club
    addReview(review: NewReview!): Int
  }

  type Club {
    id: ID!
    description: String!
    about: String
    clubName: String!
    logoUri: String
    backgroundUri: String
    reviews: [Review]
    rating: Float
  }

  type Review {
    id: ID!
    reviewer: User!
    rating: Int!
    comment: String
  }

  input ClubInfo {
    clubName: String!
    description: String!
    about: String
  }

  input NewReview {
    clubId: ID!
    reviewer: String!
    rating: Int!
    comment: String
  }
`;

export default clubSchema;
