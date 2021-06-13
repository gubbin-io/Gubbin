import mongoose from "mongoose";

const Schema = mongoose.Schema;

const questionSchema = new Schema({
  // club: { type: Schema.Types.ObjectId, ref: "Club" },
  title: String,
  body: String,
  questionTime: Date,
  answer: String,
  answerTime: Date,
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
  logoUriThumbnail: String,
  logoFileId: String,
  backgroundUri: String,
  backgroundUriThumbnail: String,
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
  committee: [{ name: String, role: String, contactInfo: String }],
  reviews: [
    { rating: Number, title: String, comment: String, commentTime: Date },
  ],
  questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
});

export default mongoose.model("Club", clubSchema);
export const Question = mongoose.model("Question", questionSchema);
