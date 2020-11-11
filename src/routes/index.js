import { Router } from "express";
import blogs from "./Blogs/blogs.js";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎",
  });
});

router.use("/blogs", blogs);

export default router;
