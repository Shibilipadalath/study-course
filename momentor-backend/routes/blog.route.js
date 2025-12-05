// routes/blog.route.js
import express from "express";
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} from "../controller/blog.controller.js";

const router = express.Router();

// Create blog
router.post("/", createBlog);

// Get all blogs
router.get("/", getAllBlogs);

// Get single blog
router.get("/:id", getBlogById);

// Update blog
router.put("/:id", updateBlog);

// Delete blog
router.delete("/:id", deleteBlog);

export default router;
