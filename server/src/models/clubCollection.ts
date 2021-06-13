import mongoose from "mongoose";

const Schema = mongoose.Schema;

const clubCollectionSchema = new Schema({
  collectionName: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
  clubs: [{ type: Schema.Types.ObjectId, ref: "Club" }],
});

export default mongoose.model("ClubCollection", clubCollectionSchema);
