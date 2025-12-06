import cloudinary from '../config/cloudinary.js';
import { Readable } from 'stream';

// Convert buffer to stream for Cloudinary
const bufferToStream = (buffer) => {
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null);
  return stream;
};

// Upload image buffer to Cloudinary
export const uploadToCloudinary = (buffer, folder = 'momentor') => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: folder,
        resource_type: 'auto',
        transformation: [
          { width: 1000, height: 1000, crop: 'limit' },
        ],
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve({
            imageUrl: result.secure_url,
            publicId: result.public_id,
          });
        }
      }
    );

    bufferToStream(buffer).pipe(uploadStream);
  });
};

// Delete image from Cloudinary
export const deleteFromCloudinary = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result.result === 'ok';
  } catch (error) {
    console.error('Error deleting from Cloudinary:', error);
    return false;
  }
};

// Extract public_id from Cloudinary URL
export const extractPublicId = (url) => {
  if (!url) return null;
  
  try {
    // Extract public_id from Cloudinary URL
    // Format: https://res.cloudinary.com/{cloud_name}/image/upload/{folder}/{public_id}.{ext}
    const parts = url.split('/');
    const uploadIndex = parts.findIndex(part => part === 'upload');
    if (uploadIndex !== -1 && uploadIndex < parts.length - 1) {
      const pathAfterUpload = parts.slice(uploadIndex + 1).join('/');
      // Remove file extension
      return pathAfterUpload.split('.')[0];
    }
    return null;
  } catch (error) {
    console.error('Error extracting public_id:', error);
    return null;
  }
};

