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
  memberClubs: [{ type: Schema.Types.ObjectId, ref: "Club" }],
  organizerClubs: [{ type: Schema.Types.ObjectId, ref: "Club" }],
});

export default mongoose.model("User", userSchema);
