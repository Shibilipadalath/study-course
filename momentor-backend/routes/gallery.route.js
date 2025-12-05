import express from "express";
import {
  createGallery,
  getAllGallery,
  getGalleryById,
  updateGallery,
  deleteGallery,
} from "../controller/gallery.controller.js";

const router = express.Router();

// Create gallery item
router.post("/", createGallery);

// Get all gallery items
router.get("/", getAllGallery);

// Get single gallery item
router.get("/:id", getGalleryById);

// Update gallery item
router.put("/:id", updateGallery);

// Delete gallery item
router.delete("/:id", deleteGallery);

export default router;
