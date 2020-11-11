import { Router } from "express";
import mongoose from "mongoose";
import Blog from "./blogs.model.js";
const { isValidObjectId } = mongoose;
const router = Router();

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).send(blogs);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

export const getBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    res.status(200).send(blog);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

export const createBlog = async (req, res) => {
  const { title, snippet, body } = req.body;
  const blog = new Blog({
    title,
    snippet,
    body,
  });
  try {
    await blog.save();
    res.status(201).send(blog);
  } catch (error) {
    res.status(409).send({ message: error.message });
  }
};

export const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, snippet, body } = req.body;
  if (!isValidObjectId(id))
    return res.status(404).send(`No blog with id: ${id}`);
  const updatedBlog = { title, snippet, body, _id: id };
  try {
    await Blog.findByIdAndUpdate(id, updatedBlog, { new: true });
    res.status(201).send(updatedBlog);
  } catch (error) {
    res.status(409).send({ message: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id))
    return res.status(404).send(`No blog with id: ${id}`);
  try {
    await Blg.findByIdAndRemove(id);
    res.result(201).send({ message: "Blog deleted successfully." });
  } catch (error) {
    res.status(409).send({ message: error.message });
  }
};

export default router;
