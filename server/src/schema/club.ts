import { gql } from "apollo-server";

const clubSchema = gql`
  extend type Query {
    clubs: [Club]
    club(clubid: ID): Club
  }

  extend type Mutation {
    addClub(clubInfo: ClubInfo!): Club
    addReview(review: NewReview!): Int
  }

  type Club {
    id: ID!
    description: String!
    about: String
    clubname: String!
    logo_uri: String
    background_uri: String
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
    clubname: String!
    description: String!
    about: String
  }

  input NewReview {
    clubid: ID!
    reviewer: String!
    rating: Int!
    comment: String
  }
`;

export default clubSchema;
