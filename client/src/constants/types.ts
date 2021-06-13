export interface Review {
  id: string;
  reviewer: string;
  rating: number;
  title?: string;
  comment?: string;
  commentTime: Date;
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
