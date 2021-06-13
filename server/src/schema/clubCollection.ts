import { gql } from "apollo-server";

const clubCollectionSchema = gql`
  extend type Query {
    clubCollection(collectionId: ID!): ClubCollection
    clubCollections: [ClubCollection]
  }

  extend type Mutation {
    newCollection(collectionInfo: CollectionInfo!): newCollectionResponse
    addToCollection(
      clubToCollection: ClubToCollection!
    ): addToCollectionResponse
  }

  type ClubCollection {
    collectionId: ID!
    collectionName: String!
    clubs: [Club]!
  }

  type newCollectionResponse {
    collection: ClubCollection
  }

  type addToCollectionResponse {
    success: Boolean
  }

  input CollectionInfo {
    collectionName: String!
  }

  input ClubToCollection {
    clubId: ID!
    collectionId: ID!
  }
`;

export default clubCollectionSchema;
