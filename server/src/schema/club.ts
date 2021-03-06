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
    updateCommittee(
      clubId: ID!
      committee: [CommitteeMemberInput!]!
    ): UpdateResponse

    updateBasicInfo(
      clubId: ID!
      basicInfoInput: BasicInfoInput!
    ): UpdateResponse

    addEvent(clubId: ID!, eventInput: EventInput!): UpdateResponse
    addUpdate(clubId: ID!, updateInput: UpdateInput!): UpdateResponse
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
    updates: [Update]
    socialMedia: SocialMedia
    committee: [CommitteeMember!]
    rating: Float
    joined: Boolean!
  }

  type Review {
    id: ID!
    reviewer: User
    anonymousReview: Boolean
    rating: Int!
    title: String
    comment: String
    commentTime: Date
    followups: [ReviewFollowup!]
  }

  type ReviewFollowup {
    followupId: ID!
    comment: String!
    followupTime: Date
    isCommittee: Boolean!
  }

  type Question {
    questionId: ID!
    title: String
    body: String
    questionTime: Date
    questioner: User
    anonymousQuestion: Boolean
    answer: String
    answerTime: Date
  }

  type Event {
    eventId: ID!
    title: String
    body: String
    link: String
    date: Date
  }

  type Update {
    updateId: ID!
    title: String
    description: String
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

  type CommitteeMember {
    name: String!
    role: String!
    contactInfo: String
  }

  input CommitteeMemberInput {
    name: String!
    role: String!
    contactInfo: String
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

  input UpdateInput {
    title: String
    description: String
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
