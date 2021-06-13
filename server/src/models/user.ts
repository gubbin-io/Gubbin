import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
});

export default mongoose.model("User", userSchema);
