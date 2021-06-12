import { gql } from "apollo-server";

const userSchema = gql`
  extend type Query {
    currentUser: User!
  }

  extend type Mutation {
    register(userInfo: UserInfo!): User!
    login(userInfo: UserInfo!): AuthResponse!
    addMemberClub(userClub: UserClub!): AddUserClubResponse!
    addOrganizerClub(userClub: UserClub!): AddUserClubResponse!
  }

  type User {
    userId: ID!
    userName: String!
    memberClubs: [ID]!
    organizerClubs: [ID]!
  }

  type AuthResponse {
    token: String!
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
