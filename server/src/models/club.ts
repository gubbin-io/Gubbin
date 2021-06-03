import mongoose from "mongoose";

const Schema = mongoose.Schema;

const clubSchema = new Schema({
  clubname: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
  reviews: [{ rating: Number, comment: String }],
});

export default mongoose.model("Club", clubSchema);
