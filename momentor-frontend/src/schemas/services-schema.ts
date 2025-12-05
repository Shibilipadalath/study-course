import { z } from "zod";

export const serviceSchema = z.object({
  image: z.string().min(1, "Image URL is required"),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),

  // points must be an array, and each point must be a non-empty string
  points: z
    .array(z.string().min(1, "Point cannot be empty"))
    .min(1, "At least one point is required"),
});
