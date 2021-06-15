export interface Review {
  id: string;
  reviewer?: User;
  rating: number;
  title?: string;
  comment?: string;
  commentTime: Date;
  anonymousReview?: boolean;
}

export interface User {
  userId: string;
  userName: string;
}

export interface Club {
  id: string;
  clubName: string;
  rating: number;
  joined: boolean;
  description: string;
  numMembers: number;
  themeColor: string;
  about: string;
  logoUri: string;
  backgroundUri: string;
  reviews: Review[];
  events: ClubEvent[];
  socialMedia?: SocialMedia;
  questions: Question[];
}

export interface Question {
  questionId: string;
  title: string;
  body: string;
  questionTime: Date;
  answer?: string;
  answerTime?: Date;
}

export interface SocialMedia {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  website?: string;
  discord?: string;
  whatsapp?: string;
  messager?: string;
}
export interface ClubEvent {
  eventId: string;
  title: string;
  body: string;
  link: string;
  date: Date;
}
