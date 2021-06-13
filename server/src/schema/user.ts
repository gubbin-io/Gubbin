import { gql } from "apollo-server";

const userSchema = gql`
  extend type Query {
    users: [User]
  }

  extend type Mutation {
    register(userInfo: UserInfo!): RegisterResponse!
    login(userInfo: UserInfo!): Boolean!
  }

  type User {
    id: ID!
    username: String!
    firstLetterOfUsername: String!
  }

  type RegisterResponse {
    user: User
  }

  input UserInfo {
    username: String!
    password: String!
    age: Int
  }
`;

export default userSchema;
