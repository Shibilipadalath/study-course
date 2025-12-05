"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { FC } from "react";
import { GalleryCategory } from "@/types/gallery-types";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

export const GalleryCategoryDeleteDialog: FC<{
  category: GalleryCategory;
  open: boolean;
  setOpen: (open: boolean) => void;
}> = ({ category, open, setOpen }) => {

    const router = useRouter()
    const handleDelete = async () => {
      try{
          const response = await fetch(`${API_BASE_URL}/api/gallery-category/${category?.id}`,{
              method:"DELETE",
              credentials: "include"
            });
          
          if (!response.ok) {
            const errorData = await response.json();
            const errorMessage = errorData.message || 'Failed to delete category';
            
            toast.error(`Failed to delete category: ${errorMessage}`);
            return;
          }
          
          toast.success(`Category "${category.name}" deleted successfully.`)
          setOpen(false)
          router.refresh()
      }catch(error){
          toast.error(`Failed to delete category: ${error instanceof Error ? error.message : 'Unknown error'}`)
          console.error("Error deleting category:", error);
      }
    }
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete{" "}
            <span className="font-bold">{category.name}</span> category.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button variant="destructive"
              onClick={handleDelete}>Delete</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

