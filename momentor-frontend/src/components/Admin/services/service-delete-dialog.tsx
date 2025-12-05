"use client";

import { useState, Dispatch, SetStateAction } from "react";
import { Service } from "@/types/service-types";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

interface Props {
  service: Service;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onDeleted?: () => void;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export function ServiceDeleteDialog({ service, open, setOpen, onDeleted }: Props) {
  const [deleting, setDeleting] = useState<boolean>(false);

  const handleClose = () => setOpen(false);

  const handleDelete = async () => {
    setDeleting(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/services/${service.id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        // try to parse JSON error, fallback to plain text
        const json = await res.json().catch(() => null);
        const text = json ?? (await res.text().catch(() => null));
        console.error("Delete error:", text);
        alert(json?.message ?? text ?? "Failed to delete");
        return;
      }

      // optional callback (parent can refetch)
      onDeleted?.();

      // close dialog
      handleClose();
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) handleClose(); }}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Delete Service</DialogTitle>
        </DialogHeader>

        <div className="py-4">
          Are you sure you want to delete <strong>{service.title}</strong>?
        </div>

        <DialogFooter className="flex justify-end gap-2">
          <Button variant="ghost" onClick={handleClose} disabled={deleting}>Cancel</Button>
          <Button variant="destructive" onClick={handleDelete} disabled={deleting}>
            {deleting ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
