import mongoose, { mongo } from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required",
  },
  title: {
    type: String,
    required: "title is required",
  },
  description: {
    type: String,
    required: "description is required",
  },
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const model = mongoose.model("Video", VideoSchema);
export default model;
