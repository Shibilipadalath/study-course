"use client";

import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown, ArrowUpDown } from "lucide-react";
import { GalleryFormDialog } from "./gallery-form";
import { GalleryDeleteDialog } from "./gallery-delete-dailog";
import { Gallery } from "@/types/gallery-types";
import Image from "next/image";
import { ActionMenu } from "../common/action-menu";

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
            <div className="h-24 w-28 overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={imageUrl}
                alt="Gallery"
                width={112}
                height={96}
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="w-28 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs">
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
    <>
      <ActionMenu
        onEdit={() => setOpenEdit(true)}
        onDelete={() => setOpenDelete(true)}
      />

      <GalleryFormDialog
        open={openEdit}
        openChange={setOpenEdit}
        gallery={gallery}
      />

      <GalleryDeleteDialog
        gallery={gallery}
        open={openDelete}
        setOpen={setOpenDelete}
      />
    </>
  );
};
