// controller/blog.controller.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ============= CREATE BLOG =============
export const createBlog = async (req, res) => {
  try {
    const { image, title, description } = req.body;

    if (!image || !title || !description) {
      return res.status(400).json({
        success: false,
        message: "image, title and description are required",
      });
    }

    const blog = await prisma.blog.create({
      data: {
        image,
        title,
        description,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Blog created successfully",
      blog,
    });
  } catch (error) {
    console.error("Create Blog Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create blog",
    });
  }
};

// ============= GET ALL BLOGS =============
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
    });

    return res.status(200).json({
      success: true,
      blogs,
    });
  } catch (error) {
    console.error("Get All Blogs Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch blogs",
    });
  }
};

// ============= GET SINGLE BLOG BY ID =============
export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await prisma.blog.findUnique({
      where: { id },
    });

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    return res.status(200).json({
      success: true,
      blog,
    });
  } catch (error) {
    console.error("Get Blog By ID Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch blog",
    });
  }
};

// ============= UPDATE BLOG =============
export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { image, title, description } = req.body;

    const blog = await prisma.blog.update({
      where: { id },
      data: {
        ...(image && { image }),
        ...(title && { title }),
        ...(description && { description }),
      },
    });

    return res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      blog,
    });
  } catch (error) {
    console.error("Update Blog Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to update blog",
    });
  }
};

// ============= DELETE BLOG =============
export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.blog.delete({
      where: { id },
    });

    return res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.error("Delete Blog Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete blog",
    });
  }
};
