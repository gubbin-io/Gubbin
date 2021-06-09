import mongoose from "mongoose";

const Schema = mongoose.Schema;

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
  backgroundUri: String,
  reviews: [{ rating: Number, comment: String }],
});

export default mongoose.model("Club", clubSchema);
