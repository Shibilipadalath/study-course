import express from 'express';
import upload from '../middleware/upload.js';
import { uploadImage, deleteImage } from '../controller/upload.controller.js';

const router = express.Router();

// Upload single image
router.post('/image', upload.single('image'), uploadImage);

// Delete image
router.delete('/image', deleteImage);

export default router;

