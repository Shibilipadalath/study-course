"use client";

import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2, ArrowUp, ArrowDown, ArrowUpDown } from "lucide-react";
import { GalleryFormDialog } from "./gallery-form";
import { GalleryDeleteDialog } from "./gallery-delete-dailog";
import { Gallery } from "@/types/gallery-types";
import Image from "next/image";

export const galleryColumns: ColumnDef<Gallery>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const imageUrl = row.getValue("image") as string;
      const isValidUrl = imageUrl && typeof imageUrl === "string" && imageUrl.trim() !== "" && 
        (imageUrl.startsWith("http://") || imageUrl.startsWith("https://") || imageUrl.startsWith("/"));
      
      return (
        <div className="px-3">
          {isValidUrl ? (
            <Image
              src={imageUrl}
              alt="Gallery"
              width={80}
              height={80}
              className="rounded-lg object-cover"
            />
          ) : (
            <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs">
              No Image
            </div>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "category.name",
    header: ({ column }) => {
      const sort = column.getIsSorted();
      const renderIcon = () => {
        if (!sort) return <ArrowUpDown className="size-4" />;
        if (sort === "asc") return <ArrowUp className="size-4" />;
        if (sort === "desc") return <ArrowDown className="size-4" />;
        return null;
      };

      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(sort === "asc")}>
          Category {renderIcon()}
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="px-3">
        <p className="font-medium">{row.original.category?.name || "N/A"}</p>
      </div>
    ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <GalleryActions gallery={row.original} />,
  },
];

const GalleryActions = ({ gallery }: { gallery: Gallery }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  return (
    <div className="flex gap-2">
      {/* Edit Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpenEdit(true)}
        className="text-blue-600 hover:text-blue-700"
      >
        <Edit2 className="h-4 w-4" />
      </Button>

      {/* Delete Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpenDelete(true)}
        className="text-red-600 hover:text-red-700"
      >
        <Trash2 className="h-4 w-4" />
      </Button>

      {/* Edit Modal */}
      <GalleryFormDialog
        open={openEdit}
        openChange={setOpenEdit}
        gallery={gallery}
      />

      {/* Delete Modal */}
      <GalleryDeleteDialog
        gallery={gallery}
        open={openDelete}
        setOpen={setOpenDelete}
      />
    </div>
  );
};
