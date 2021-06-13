import { gql } from "apollo-server";

const userSchema = gql`
  extend type Query {
    currentUser: User!
  }

  extend type Mutation {
    register(userInfo: UserInfo!): User!
    login(userInfo: UserInfo!): AuthResponse!
    addMemberClub(userClub: UserClub!): UpdateResponse!
    addOrganizerClub(userClub: UserClub!): UpdateResponse!
    removeMemberClub(userClub: UserClub!): UpdateResponse!
    removeOrganizerClub(userClub: UserClub!): UpdateResponse!
  }

  type User {
    userId: ID!
    userName: String!
    memberClubs: [Club]!
    organizerClubs: [Club]!
  }

  type AuthResponse {
    token: String!
  }

  type UpdateResponse {
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
