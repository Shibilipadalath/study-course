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
import { galleryCategorySchema } from "@/schemas/gallery-category-schema";
import { toast } from "sonner";
import { Plus, Loader2 } from "lucide-react";
import { useState } from "react";
import { GalleryCategory } from "@/types/gallery-types";
import { useRouter } from "next/navigation";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

export function GalleryCategoryFormDialog({
  category,
  open,
  openChange,
}: {
  category?: GalleryCategory;
  open?: boolean;
  openChange?: (open: boolean) => void;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof galleryCategorySchema>>({
    resolver: zodResolver(galleryCategorySchema),
    defaultValues: {
      name: category?.name || "",
    },
  });

  const handleSubmit = async (
    values: z.infer<typeof galleryCategorySchema>,
    close: () => void
  ) => {
    setIsSubmitting(true);
    try {
      const url = category
        ? `${API_BASE_URL}/api/gallery-category/${category.id}`
        : `${API_BASE_URL}/api/gallery-category`;

      const method = category ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const response = await res.json();

      if (!res.ok) {
        toast.error(response.message || "Failed to save category");
        return;
      }

      toast.success(category ? "Category updated successfully" : "Category created successfully");
      close();
      router.refresh();
    } catch (error) {
      console.error("Error saving category:", error);
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
          {category ? "Edit Category" : "New Category"}
        </Button>
      </FormDialogTrigger>

      <FormDialogContent className="sm:max-w-md">
        <FormDialogHeader>
          <FormDialogTitle>{category ? "Edit Category" : "New Category"}</FormDialogTitle>
          <FormDialogDescription>
            {category
              ? "Update category details. Click save when you're done."
              : "Fill out the category details. Click save when you're done."}
          </FormDialogDescription>
        </FormDialogHeader>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter category name" {...field} />
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
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              category ? "Update" : "Save"
            )}
          </Button>
        </FormDialogFooter>
      </FormDialogContent>
    </FormDialog>
  );
}

