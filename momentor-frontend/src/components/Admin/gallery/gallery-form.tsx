"use client";

import {
  DialogClose,
} from "@/components/ui/dialog";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  FormDialog,
  FormDialogContent,
  FormDialogDescription,
  FormDialogFooter,
  FormDialogHeader,
  FormDialogTitle,
  FormDialogTrigger,
} from "@/components/ui/form-dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { gallerySchema } from "@/schemas/gallery-schema";
import { toast } from "sonner";
import { Plus, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { Gallery, GalleryCategory } from "@/types/gallery-types";
import { useRouter } from "next/navigation";
import { ImageUpload } from "@/components/Admin/image-upload";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

export function GalleryFormDialog({
  gallery,
  open,
  openChange,
}: {
  gallery?: Gallery;
  open?: boolean;
  openChange?: (open: boolean) => void;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [categories, setCategories] = useState<GalleryCategory[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const router = useRouter();

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/gallery-category`, {
          cache: "no-store",
        });
        if (res.ok) {
          const data = await res.json();
          setCategories(data.categories || []);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoadingCategories(false);
      }
    };
    fetchCategories();
  }, []);

  const form = useForm<z.infer<typeof gallerySchema>>({
    resolver: zodResolver(gallerySchema),
    defaultValues: {
      image: gallery?.image || "",
      categoryId: gallery?.categoryId || "",
    },
  });

  const handleSubmit = async (
    values: z.infer<typeof gallerySchema>,
    close: () => void
  ) => {
    setIsSubmitting(true);
    try {
      const url = gallery
        ? `${API_BASE_URL}/api/gallery/${gallery.id}`
        : `${API_BASE_URL}/api/gallery`;

      const method = gallery ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const response = await res.json();

      if (!res.ok) {
        toast.error(response.message || "Failed to save gallery item");
        return;
      }

      toast.success(gallery ? "Gallery item updated successfully" : "Gallery item created successfully");
      close();
      router.refresh();
    } catch (error) {
      console.error("Error saving gallery item:", error);
      toast.error("Unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormDialog
      open={open}
      openChange={openChange}
      form={form}
      onSubmit={(values) => handleSubmit(values, () => openChange?.(false))}
    >
      <FormDialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          {gallery ? "Edit Gallery" : "New Gallery"}
        </Button>
      </FormDialogTrigger>

      <FormDialogContent className="sm:max-w-2xl">
        <FormDialogHeader>
          <FormDialogTitle>{gallery ? "Edit Gallery Item" : "New Gallery Item"}</FormDialogTitle>
          <FormDialogDescription>
            {gallery
              ? "Update gallery item details. Click save when you're done."
              : "Fill out the gallery item details. Click save when you're done."}
          </FormDialogDescription>
        </FormDialogHeader>

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <ImageUpload
                  value={field.value}
                  onChange={field.onChange}
                  label="Image"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                {loadingCategories ? (
                  <Input placeholder="Loading categories..." disabled />
                ) : (
                  <select
                    {...field}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                )}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormDialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit" disabled={isSubmitting || loadingCategories}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              gallery ? "Update" : "Save"
            )}
          </Button>
        </FormDialogFooter>
      </FormDialogContent>
    </FormDialog>
  );
}
