import { gql } from "apollo-server";

const userSchema = gql`
  extend type Query {
    users: [User]
    currentUser: UserResponse!
    userClubs(userId: ID!): ClubsResponse!
  }

  extend type Mutation {
    register(userInfo: UserInfo!): AuthResponse!
    login(userInfo: UserInfo!): AuthResponse!
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

  type AuthResponse {
    token: String!
  }

  type UserResponse {
    userId: ID!
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
