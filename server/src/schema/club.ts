import { gql } from "apollo-server";

const clubSchema = gql`
  scalar Date

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
    numMembers: Int!
    themeColor: String!
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
    commentTime: Date
  }

  input ClubInfo {
    description: String!
    clubName: String!
    numMembers: Int
    themeColor: String
    about: String
    logoUri: String
    backgroundUri: String
  }

  input NewReview {
    clubId: ID!
    reviewer: String!
    rating: Int!
    comment: String
    commentTime: Date
  }
`;

export default clubSchema;
