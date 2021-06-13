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
    addReview(review: NewReview!): Int
    updateLogo(logo: LogoInput!): ReturnImage
    updateSocialMedia(
      clubId: ID!
      socialMedia: SocialMediaInput
    ): UpdateSocialMediaResponse
  }

  type Club {
    id: ID!
    description: String!
    numMembers: Int!
    themeColor: String!
    about: String
    clubName: String!
    logoUri: String
    logoUriThumbnail: String
    backgroundUri: String
    backgroundUriThumbnail: String
    reviews: [Review]
    questions: [Question]
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
  }

  type Question {
    questionId: ID!
    title: String
    body: String
    questionTime: Date
    answer: String
    answerTime: Date
  }

  type ReturnImage {
    uri: String!
    thumbnailUri: String!
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

  type UpdateSocialMediaResponse {
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

  input NewReview {
    clubId: ID!
    reviewer: String!
    rating: Int!
    title: String
    comment: String
  }

  input LogoInput {
    clubId: ID!
    content: String
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
