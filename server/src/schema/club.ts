import { gql } from "apollo-server";

const clubSchema = gql`
  scalar Date
  # scalar Upload

  extend type Query {
    clubs: [Club]
    club(clubId: ID): Club
  }

  extend type Mutation {
    addClub(clubInfo: ClubInfo!): Club
    addReview(review: NewReview!): Int
    addLogo(logo: LogoInput!): File
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
    title: String
    comment: String
    commentTime: Date
  }

  type File {
    filename: String!
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
    title: String
    comment: String
  }

  input LogoInput {
    clubId: ID!
    content: String
  }
`;

export default clubSchema;
