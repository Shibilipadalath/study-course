import cloudinary from '../config/cloudinary.js';
import { Readable } from 'stream';

// Convert buffer to stream for Cloudinary
const bufferToStream = (buffer) => {
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null);
  return stream;
};

// ============= UPLOAD IMAGE TO CLOUDINARY =============
export const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No image file provided',
      });
    }

    // Upload to Cloudinary
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: 'momentor', // Folder name in Cloudinary
        resource_type: 'auto',
        transformation: [
          { width: 1000, height: 1000, crop: 'limit' }, // Optional: resize images
        ],
      },
      (error, result) => {
        if (error) {
          console.error('Cloudinary upload error:', error);
          return res.status(500).json({
            success: false,
            message: 'Failed to upload image to Cloudinary',
            error: error.message,
          });
        }

        return res.status(200).json({
          success: true,
          message: 'Image uploaded successfully',
          imageUrl: result.secure_url, // Cloudinary secure URL
          publicId: result.public_id, // Cloudinary public_id
        });
      }
    );

    // Pipe the buffer to Cloudinary
    bufferToStream(req.file.buffer).pipe(uploadStream);
  } catch (error) {
    console.error('Upload Image Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to upload image',
      error: error.message,
    });
  }
};

// ============= DELETE IMAGE FROM CLOUDINARY =============
export const deleteImage = async (req, res) => {
  try {
    const { publicId } = req.body;

    if (!publicId) {
      return res.status(400).json({
        success: false,
        message: 'Public ID is required',
      });
    }

    // Extract public_id from URL if full URL is provided
    let imagePublicId = publicId;
    if (publicId.includes('/')) {
      // Extract public_id from Cloudinary URL
      const parts = publicId.split('/');
      const filename = parts[parts.length - 1];
      imagePublicId = filename.split('.')[0]; // Remove extension
      // Get folder path if exists
      const folderIndex = publicId.indexOf('/momentor/');
      if (folderIndex !== -1) {
        const folderPath = publicId.substring(folderIndex + 1).split('.')[0];
        imagePublicId = folderPath;
      }
    }

    const result = await cloudinary.uploader.destroy(imagePublicId);

    if (result.result === 'ok') {
      return res.status(200).json({
        success: true,
        message: 'Image deleted successfully',
      });
    } else {
      return res.status(404).json({
        success: false,
        message: 'Image not found in Cloudinary',
      });
    }
  } catch (error) {
    console.error('Delete Image Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to delete image',
      error: error.message,
    });
  }
};

