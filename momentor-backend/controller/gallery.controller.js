import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ============= CREATE GALLERY ITEM =============
export const createGallery = async (req, res) => {
  try {
    console.log("📩 createGallery body:", req.body); // debug log

    const body = req.body || {};
    const { image, categoryId } = body;

    if (!image || !categoryId) {
      return res.status(400).json({
        success: false,
        message: "image and categoryId are required",
      });
    }

    // Check category exists
    const category = await prisma.galleryCategory.findUnique({
      where: { id: categoryId },
    });

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    const gallery = await prisma.gallery.create({
      data: {
        image,
        categoryId,
      },
      include: {
        category: true,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Gallery item created successfully",
      gallery,
    });
  } catch (error) {
    console.error("Create Gallery Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create gallery item",
    });
  }
};


// ============= GET ALL GALLERY ITEMS =============
export const getAllGallery = async (req, res) => {
  try {
    const galleries = await prisma.gallery.findMany({
      include: { category: true },
      orderBy: { createdAt: "desc" },
    });

    return res.status(200).json({
      success: true,
      galleries,
    });
  } catch (error) {
    console.error("Get All Gallery Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch gallery",
    });
  }
};

// ============= GET SINGLE GALLERY ITEM BY ID =============
export const getGalleryById = async (req, res) => {
  try {
    const { id } = req.params;

    const gallery = await prisma.gallery.findUnique({
      where: { id },
      include: { category: true },
    });

    if (!gallery) {
      return res.status(404).json({
        success: false,
        message: "Gallery item not found",
      });
    }

    return res.status(200).json({
      success: true,
      gallery,
    });
  } catch (error) {
    console.error("Get Gallery By ID Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch gallery item",
    });
  }
};

// ============= UPDATE GALLERY ITEM =============
export const updateGallery = async (req, res) => {
  try {
    const { id } = req.params;
    const { image, categoryId } = req.body;

    const dataToUpdate = {};

    if (image) dataToUpdate.image = image;

    if (categoryId) {
      // validate category
      const category = await prisma.galleryCategory.findUnique({
        where: { id: categoryId },
      });

      if (!category) {
        return res.status(404).json({
          success: false,
          message: "Category not found",
        });
      }
      dataToUpdate.categoryId = categoryId;
    }

    const gallery = await prisma.gallery.update({
      where: { id },
      data: dataToUpdate,
      include: { category: true },
    });

    return res.status(200).json({
      success: true,
      message: "Gallery item updated successfully",
      gallery,
    });
  } catch (error) {
    console.error("Update Gallery Error:", error);

    if (error.code === "P2025") {
      // record not found
      return res.status(404).json({
        success: false,
        message: "Gallery item not found",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to update gallery item",
    });
  }
};

// ============= DELETE GALLERY ITEM =============
export const deleteGallery = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.gallery.delete({
      where: { id },
    });

    return res.status(200).json({
      success: true,
      message: "Gallery item deleted successfully",
    });
  } catch (error) {
    console.error("Delete Gallery Error:", error);

    if (error.code === "P2025") {
      return res.status(404).json({
        success: false,
        message: "Gallery item not found",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to delete gallery item",
    });
  }
};
