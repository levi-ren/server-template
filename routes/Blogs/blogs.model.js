import mongoose from "mongoose";
const { Schema, model } = mongoose;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    createdAt: Number,
    updatedAt: Number,
  },
  { timestamps: { currentTime: () => Math.floor(Date.now() / 1000) } }
);

const Blog = model("blog", blogSchema);

export default Blog;
