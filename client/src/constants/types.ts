export interface Review {
  id: string;
  reviewer: string;
  rating: number;
  title?: string;
  comment?: string;
  commentTime: Date;
}
