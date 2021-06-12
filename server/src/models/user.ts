import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    minlength: 3,
  },

  password: String,
  memberClubs: [{ clubId: String }],
  organizerClubs: [{ clubId: String }],
});

export default mongoose.model("User", userSchema);
