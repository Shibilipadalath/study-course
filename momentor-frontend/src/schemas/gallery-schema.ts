import { z } from "zod";

export const gallerySchema = z.object({
  image: z.string().min(1, "Image URL is required"),
  categoryId: z.string().min(1, "Category is required"),
});

