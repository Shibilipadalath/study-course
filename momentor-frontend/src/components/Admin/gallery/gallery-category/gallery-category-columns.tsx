"use client";

import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2, ArrowUp, ArrowDown, ArrowUpDown } from "lucide-react";
import { GalleryCategoryFormDialog } from "./gallery-category-form";
import { GalleryCategoryDeleteDialog } from "./gallery-category-delete-dailog";
import { GalleryCategory } from "@/types/gallery-types";

export const galleryCategoryColumns: ColumnDef<GalleryCategory>[] = [
  {
    accessorKey: "name",
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
          Name {renderIcon()}
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="px-3">
        <p className="font-medium">{row.getValue("name") as string}</p>
      </div>
    ),
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
      const formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
      return (
        <div className="px-3">
          {formattedDate}
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <GalleryCategoryActions category={row.original} />,
  },
];

const GalleryCategoryActions = ({ category }: { category: GalleryCategory }) => {
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
      <GalleryCategoryFormDialog
        open={openEdit}
        openChange={setOpenEdit}
        category={category}
      />

      {/* Delete Modal */}
      <GalleryCategoryDeleteDialog
        category={category}
        open={openDelete}
        setOpen={setOpenDelete}
      />
    </div>
  );
};

