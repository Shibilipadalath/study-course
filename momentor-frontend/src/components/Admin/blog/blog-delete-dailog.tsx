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
import { Blog } from "@/types/blog-types";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const BlogDeleteDialog: FC<{
  blog: Blog;
  open: boolean;
  setOpen: (open: boolean) => void;
}> = ({ blog, open, setOpen }) => {

    const router = useRouter()
    const handleDelete = async () => {
      try{
          const response = await fetch(`http://localhost:5001/api/blogs/${blog?.id}`,{
              method:"DELETE",
              credentials: "include"
            });
          
          if (!response.ok) {
            const errorData = await response.json();
            const errorMessage = errorData.message || 'Failed to delete blog';
            
            toast.error(`Failed to delete blog: ${errorMessage}`);
            return;
          }
          
          toast.success(`Blog "${blog.title}" deleted successfully.`)
          setOpen(false)
          router.refresh()
      }catch(error){
          toast.error(`Failed to delete blog: ${error instanceof Error ? error.message : 'Unknown error'}`)
          console.error("Error deleting blog:", error);
      }
    }
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete{" "}
            <span className="font-bold">{blog.title}</span> blog post.
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
