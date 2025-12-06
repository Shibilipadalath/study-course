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
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

export const LogoutDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data?.error || data?.message || "Logout failed");
        return;
      }

      // Clear stored auth tokens and user data
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      
      // Clear cookies
      document.cookie = "token=; path=/; max-age=0; SameSite=Lax";
      document.cookie = "user=; path=/; max-age=0; SameSite=Lax";

      toast.success(data?.message || "Logged out successfully");
      setOpen(false);
      router.replace("/login");
    } catch (error) {
      console.error("Logout error:", error);
      // Even if API call fails, clear local storage and redirect
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      document.cookie = "token=; path=/; max-age=0; SameSite=Lax";
      document.cookie = "user=; path=/; max-age=0; SameSite=Lax";
      toast.error("Failed to logout");
      setOpen(false);
      router.replace("/login");
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to logout?</AlertDialogTitle>
          <AlertDialogDescription>
            You will be redirected to the login page.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              variant="destructive"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
