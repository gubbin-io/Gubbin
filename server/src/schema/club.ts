import { gql } from "apollo-server";

const clubSchema = gql`
  extend type Query {
    clubs: [Club]
    club(clubname: String): Club
  }

  extend type Mutation {
    addClub(clubInfo: ClubInfo!): Club!
  }

  type Club {
    id: ID!
    clubname: String!
    reviews: [Review]
  }

  type Review {
    reviewer: User!
    rating: Int!
    comment: String
  }

  input ClubInfo {
    clubname: String!
  }
`;

export default clubSchema;
