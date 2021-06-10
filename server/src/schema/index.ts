import { gql } from "apollo-server";
import userSchema from "./user";
import clubSchema from "./club";
import clubCollectionSchema from "./clubCollection";

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export default [linkSchema, userSchema, clubSchema, clubCollectionSchema];
