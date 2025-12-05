import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ============= CREATE CATEGORY =============
export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Category name is required",
      });
    }

    const exists = await prisma.galleryCategory.findUnique({
      where: { name },
    });

    if (exists) {
      return res.status(409).json({
        success: false,
        message: "Category already exists",
      });
    }

    const category = await prisma.galleryCategory.create({
      data: { name },
    });

    return res.status(201).json({
      success: true,
      message: "Category created successfully",
      category,
    });
  } catch (error) {
    console.error("Create Category Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create category",
    });
  }
};

// ============= GET ALL CATEGORIES =============
export const getAllCategories = async (req, res) => {
  try {
    const categories = await prisma.galleryCategory.findMany({
      orderBy: { createdAt: "desc" },
    });

    return res.status(200).json({
      success: true,
      categories,
    });
  } catch (error) {
    console.error("Get All Categories Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch categories",
    });
  }
};

// ============= GET CATEGORY BY ID =============
export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await prisma.galleryCategory.findUnique({
      where: { id },
    });

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    return res.status(200).json({
      success: true,
      category,
    });
  } catch (error) {
    console.error("Get Category By ID Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch category",
    });
  }
};

// ============= UPDATE CATEGORY =============
export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Category name is required",
      });
    }

    const category = await prisma.galleryCategory.update({
      where: { id },
      data: { name },
    });

    return res.status(200).json({
      success: true,
      message: "Category updated successfully",
      category,
    });
  } catch (error) {
    console.error("Update Category Error:", error);

    if (error.code === "P2025") {
      // Prisma "record not found"
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to update category",
    });
  }
};

// ============= DELETE CATEGORY =============
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.galleryCategory.delete({
      where: { id },
    });

    return res.status(200).json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    console.error("Delete Category Error:", error);

    if (error.code === "P2025") {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to delete category",
    });
  }
};
