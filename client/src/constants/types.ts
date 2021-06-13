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
