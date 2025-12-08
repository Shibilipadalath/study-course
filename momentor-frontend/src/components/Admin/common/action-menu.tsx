"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { MoreVertical, Pencil, Trash2 } from "lucide-react";

interface ActionMenuProps {
  onEdit?: () => void;
  onDelete?: () => void;
  editLabel?: string;
  deleteLabel?: string;
}

export function ActionMenu({
  onEdit,
  onDelete,
  editLabel = "Edit",
  deleteLabel = "Delete",
}: ActionMenuProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!open) return;
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const handleSelect = (callback?: () => void) => {
    setOpen(false);
    callback?.();
  };

  return (
    <div className="relative" ref={menuRef}>
      <Button
        variant="ghost"
        size="icon"
        className="text-gray-600 hover:text-gray-900"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open actions"
      >
        <MoreVertical className="h-4 w-4" />
      </Button>

      {open && (
        <div className="absolute right-0 z-20 mt-2 w-36 rounded-md border border-gray-200 bg-white shadow-lg">
          <div className="py-1">
            {onEdit && (
              <button
                type="button"
                className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100"
                onClick={() => handleSelect(onEdit)}
              >
                <Pencil className="h-4 w-4 text-gray-700" />
                <span>{editLabel}</span>
              </button>
            )}
            {onDelete && (
              <button
                type="button"
                className="flex w-full items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-gray-100"
                onClick={() => handleSelect(onDelete)}
              >
                <Trash2 className="h-4 w-4" />
                <span>{deleteLabel}</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
