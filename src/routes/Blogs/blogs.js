import { Router } from "express";

import {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} from "./blogs.controller.js";

const router = Router();

router.get("/", getBlogs);
router.post("/", createBlog);
router.get("/:id", getBlog);
router.patch("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
