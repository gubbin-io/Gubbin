import { gql } from "@apollo/client";

export const GET_CURRENT_USER = gql`
  query {
    currentUser {
      userId
      userName

      organizerClubs {
        id
      }
    }
  }
`;

export const GET_MEMBER_CLUBS = gql`
  query {
    currentUser {
      memberClubs {
        id
        clubName
        description
        themeColor
        logoUri
        joined
      }
    }
  }
`;

export const GET_ORGANISER_CLUBS = gql`
  query {
    currentUser {
      organizerClubs {
        id
        clubName
        description
        themeColor
        logoUri
        joined
      }
    }
  }
`;

export const ADD_MEMBER_CLUB = gql`
  mutation ($userId: ID!, $clubId: ID!) {
    addMemberClub(userClub: { userId: $userId, clubId: $clubId }) {
      success
    }
  }
`;

export const REMOVE_MEMBER_CLUB = gql`
  mutation ($userId: ID!, $clubId: ID!) {
    removeMemberClub(userClub: { userId: $userId, clubId: $clubId }) {
      success
    }
  }
`;

export const LOG_IN = gql`
  mutation ($userName: String!, $password: String!) {
    login(userInfo: { userName: $userName, password: $password }) {
      token
    }
  }
`;

export const FIND_CLUBS = gql`
  query ($searchString: String!) {
    findClubs(searchString: $searchString) {
      id
      clubName
      description
      themeColor
      joined
      logoUri
    }
  }
`;

export const GET_CLUB_COLLECTION = gql`
  query ($collectionId: ID!) {
    clubCollection(collectionId: $collectionId) {
      collectionId
      collectionName
      clubs {
        id
        clubName
        description
        joined
        themeColor
        logoUri
        backgroundUri
      }
    }
  }
`;

export const GET_CLUB_INFO = gql`
  query Club($clubId: ID!) {
    club(clubId: $clubId) {
      id
      clubName
      rating
      joined
      description
      numMembers
      themeColor
      about
      logoUri
      backgroundUri
      events {
        eventId
        title
        body
        link
        date
      }
      updates {
        updateId
        title
        description
        date
      }
      socialMedia {
        facebook
        twitter
        instagram
        website
        discord
        whatsapp
        messager
      }
      committee {
        name
        role
        contactInfo
      }
      questions {
        questionId
        title
        body
        anonymousQuestion
        questioner {
          userName
        }
        questionTime
        answer
        answerTime
      }
      reviews {
        id
        rating
        title
        comment
        commentTime
        anonymousReview
        reviewer {
          userName
        }
        followups {
          followupId
          comment
          followupTime
          isCommittee
        }
      }
    }
  }
`;

export const POST_QUESTION = gql`
  mutation ($clubId: ID!, $title: String!, $body: String) {
    postQuestion(
      questionPost: {
        clubId: $clubId
        title: $title
        body: $body
        anonymousQuestion: false
      }
    )
  }
`;

export const ADD_REVIEW = gql`
  mutation NewReview(
    $clubId: ID!
    $rating: Int!
    $title: String
    $comment: String
  ) {
    addReview(
      review: {
        clubId: $clubId
        rating: $rating
        title: $title
        comment: $comment
        anonymousReview: false
      }
    )
  }
`;

export const UPDATE_BASIC_INFO = gql`
  mutation (
    $about: String
    $clubName: String
    $description: String
    $themeColor: String
    $clubId: ID!
  ) {
    updateBasicInfo(
      basicInfoInput: {
        about: $about
        clubName: $clubName
        description: $description
        themeColor: $themeColor
      }
      clubId: $clubId
    ) {
      success
    }
  }
`;

export const UPDATE_SOCIAL_MEDIA = gql`
  mutation MyMutation(
    $clubId: ID = ""
    $facebook: String = ""
    $discord: String = ""
    $instagram: String = ""
    $messager: String = ""
    $twitter: String = ""
    $website: String = ""
    $whatsapp: String = ""
  ) {
    updateSocialMedia(
      clubId: $clubId
      socialMedia: {
        discord: $discord
        facebook: $facebook
        instagram: $instagram
        messager: $messager
        twitter: $twitter
        website: $website
        whatsapp: $whatsapp
      }
    ) {
      success
    }
  }
`;

export const UPDATE_LOGO = gql`
  mutation MyMutation($clubId: ID!, $content: String!) {
    updateLogo(logo: { clubId: $clubId, content: $content }) {
      uri
    }
  }
`;

export const UPDATE_BACKGROUND = gql`
  mutation ($content: String!, $clubId: ID!) {
    updateBackground(background: { clubId: $clubId, content: $content }) {
      uri
    }
  }
`;

export const POST_ANSWER = gql`
  mutation PostAnswer($answer: String = "", $questionId: ID!) {
    postAnswer(answerPost: { questionId: $questionId, answer: $answer })
  }
`;

export const ADD_UPDATE = gql`
  mutation addUpdate(
    $clubId: ID!
    $title: String
    $description: String
    $date: Date
  ) {
    addUpdate(
      clubId: $clubId
      updateInput: { title: $title, description: $description, date: $date }
    ) {
      success
    }
  }
`;

export const ADD_EVENT = gql`
  mutation AddEvent($link: String!, $title: String = "", $clubId: ID!) {
    addEvent(clubId: $clubId, eventInput: { link: $link, title: $title }) {
      success
    }
  }
`;
