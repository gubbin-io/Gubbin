import mongoose from "mongoose";

const Schema = mongoose.Schema;

const questionSchema = new Schema({
  title: String,
  body: String,
  questionTime: Date,
  answer: String,
  answerTime: Date,
});

const reviewSchema = new Schema({
  rating: Number,
  title: String,
  comment: String,
  commentTime: Date,
  reviewer: { type: Schema.Types.ObjectId, ref: "User" },
  response: String,
  responseTime: Date,
  responser: { type: Schema.Types.ObjectId, ref: "User" },
});

const clubSchema = new Schema({
  clubName: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
  description: String,
  numMembers: Number,
  themeColor: String,
  about: String,
  logoUri: String,
  logoFileId: String,
  backgroundUri: String,
  backgroundFileId: String,
  socialMedia: {
    facebook: String,
    twitter: String,
    instagram: String,
    website: String,
    discord: String,
    whatsapp: String,
    messager: String,
  },
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
});

export default mongoose.model("Club", clubSchema);
export const Question = mongoose.model("Question", questionSchema);
export const Review = mongoose.model("Review", reviewSchema);
