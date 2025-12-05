"use client";

import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2, ArrowUp, ArrowDown, ArrowUpDown } from "lucide-react";
import { BlogFormDialog } from "./blog-form";
import { BlogDeleteDialog } from "./blog-delete-dailog";
import { Blog } from "@/types/blog-types";
import Image from "next/image";

export const blogColumns: ColumnDef<Blog>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const imageUrl = row.getValue("image") as string;
      return (
        <div className="px-3">
          {imageUrl ? (
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
    accessorKey: "createdAt",
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
          Created At {renderIcon()}
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = row.getValue("createdAt") as Date;
      return (
        <div className="px-3">
          {new Date(date).toLocaleDateString()}
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
      <BlogFormDialog
        open={openEdit}
        openChange={setOpenEdit}
        blog={blog}
      />

      {/* Delete Modal */}
      <BlogDeleteDialog
        blog={blog}
        open={openDelete}
        setOpen={setOpenDelete}
      />
    </div>
  );
};
