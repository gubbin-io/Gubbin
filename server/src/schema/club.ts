import { gql } from "apollo-server";

const clubSchema = gql`
  scalar Date

  extend type Query {
    clubs: [Club]
    club(clubId: ID): Club
    findClubs(searchString: String): [Club]
  }

  extend type Mutation {
    addClub(clubInfo: ClubInfo!): Club
    updateLogo(logo: ImageInput!): ReturnImage
    updateBackground(background: ImageInput!): ReturnImage
    updateSocialMedia(
      clubId: ID!
      socialMedia: SocialMediaInput
    ): UpdateResponse

    updateBasicInfo(
      clubId: ID!
      basicInfoInput: BasicInfoInput!
    ): UpdateResponse

    addEvent(clubId: ID!, eventInput: EventInput!): UpdateResponse
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
    questions: [Question]
    events: [Event]
    socialMedia: SocialMedia
    rating: Float
    joined: Boolean!
  }

  type Review {
    id: ID!
    reviewer: User!
    rating: Int!
    title: String
    comment: String
    commentTime: Date
    response: String
    responseTime: Date
  }

  type Question {
    questionId: ID!
    title: String
    body: String
    questionTime: Date
    answer: String
    answerTime: Date
  }

  type Event {
    title: String
    body: String
    link: String
    date: Date
  }

  type ReturnImage {
    uri: String!
  }

  type SocialMedia {
    facebook: String
    twitter: String
    instagram: String
    website: String
    discord: String
    whatsapp: String
    messager: String
  }

  type UpdateResponse {
    success: Int!
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

  input ImageInput {
    clubId: ID!
    content: String
  }

  input BasicInfoInput {
    clubName: String
    description: String
    numMembers: Int
    themeColor: String
    about: String
  }

  input EventInput {
    title: String
    body: String
    link: String
    date: Date
  }

  input SocialMediaInput {
    facebook: String
    twitter: String
    instagram: String
    website: String
    discord: String
    whatsapp: String
    messager: String
  }
`;

export default clubSchema;
