import { z } from "zod";

export const blogSchema = z.object({
  image: z.string().min(1, "Image URL is required"),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
});

