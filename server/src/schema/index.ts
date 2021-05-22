import { gql } from "apollo-server";

const schema = gql`
  type Query {
    users: [User]
  }

  type Mutation {
    register(userInfo: UserInfo!): RegisterResponse!
    login(userInfo: UserInfo!): Boolean!
  }

  type User {
    id: ID!
    username: String!
    firstLetterOfUsername: String!
  }
  type Error {
    field: String!
    message: String!
  }
  type RegisterResponse {
    errors: [Error!]!
    user: User
  }

  input UserInfo {
    username: String!
    password: String!
    age: Int
  }
`;

export default schema;
