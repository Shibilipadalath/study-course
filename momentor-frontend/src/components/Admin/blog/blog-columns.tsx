"use client";

import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown, ArrowUpDown } from "lucide-react";
import { BlogFormDialog } from "./blog-form";
import { BlogDeleteDialog } from "./blog-delete-dailog";
import { Blog } from "@/types/blog-types";
import Image from "next/image";
import { ActionMenu } from "../common/action-menu";

export const blogColumns: ColumnDef<Blog>[] = [
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
              alt="Blog"
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
    accessorKey: "title",
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
          Title {renderIcon()}
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="px-3 max-w-xs">
        <p className="font-medium truncate">{row.getValue("title") as string}</p>
      </div>
    ),
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      const description = row.getValue("description") as string;
      return (
        <div className="px-3 max-w-md">
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <BlogActions blog={row.original} />,
  },
];

const BlogActions = ({ blog }: { blog: Blog }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  return (
    <>
      <ActionMenu
        onEdit={() => setOpenEdit(true)}
        onDelete={() => setOpenDelete(true)}
      />

      <BlogFormDialog
        open={openEdit}
        openChange={setOpenEdit}
        blog={blog}
      />

      <BlogDeleteDialog
        blog={blog}
        open={openDelete}
        setOpen={setOpenDelete}
      />
    </>
  );
};
