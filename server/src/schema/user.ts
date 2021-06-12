import { gql } from "apollo-server";

const userSchema = gql`
  extend type Query {
    users: [User]
    user(userId: ID!): UserResponse!
    login(userInfo: UserInfo!): UserResponse!
    userClubs(userId: ID!): ClubsResponse!
  }

  extend type Mutation {
    register(userInfo: UserInfo!): UserResponse!
    addMemberClub(userClub: UserClub!): AddUserClubResponse!
    addOrganizerClub(userClub: UserClub!): AddUserClubResponse!
  }

  type User {
    id: ID!
    userName: String!
    password: String!
    clubs: [ID]!
    firstLetterOfUsername: String!
  }

  type UserResponse {
    userId: ID!
    userName: String!
  }

  type ClubsResponse {
    clubs: [ID]!
  }

  type AddUserClubResponse {
    success: Int!
  }

  input UserInfo {
    userName: String!
    password: String!
  }

  input UserClub {
    clubId: ID!
    userId: ID!
  }
`;

export default userSchema;
