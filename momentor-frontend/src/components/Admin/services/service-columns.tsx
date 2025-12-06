"use client";

import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Service } from "@/types/service-types";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import {
  Edit2,
  Trash2,
  ArrowUp,
  ArrowDown,
  ArrowUpDown
} from "lucide-react";

import { ServiceForm } from "./service-form";
import { ServiceDeleteDialog } from "./service-delete-dialog";

export const serviceColumns: ColumnDef<Service>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const url = row.getValue("image") as string;

      return (
        <div className="px-3">
          {url ? (
            <img
              src={url}
              alt="Service"
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
      const sorted = column.getIsSorted();

      const renderIcon = () => {
        if (!sorted) return <ArrowUpDown className="size-4" />;
        if (sorted === "asc") return <ArrowUp className="size-4" />;
        if (sorted === "desc") return <ArrowDown className="size-4" />;
        return null;
      };

      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(sorted === "asc")}
        >
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
    accessorKey: "points",
    header: "Points",
    cell: ({ row }) => {
      const pts = row.getValue("points") as string[];

      return (
        <ul className="px-3 list-disc pl-5 text-sm max-w-md">
          {pts?.slice(0, 3).map((p, i) => (
            <li key={i} className="truncate">
              {p}
            </li>
          ))}

          {pts && pts.length > 3 && (
            <li className="text-xs text-gray-500">+{pts.length - 3} more</li>
          )}
        </ul>
      );
    },
  },
  {
    accessorKey: "description",
    header: ({ column }) => {
      const sorted = column.getIsSorted();

      const renderIcon = () => {
        if (!sorted) return <ArrowUpDown className="size-4" />;
        if (sorted === "asc") return <ArrowUp className="size-4" />;
        if (sorted === "desc") return <ArrowDown className="size-4" />;
        return null;
      };

      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(sorted === "asc")}
        >
          Description {renderIcon()}
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="px-3 max-w-xs">
        <p className="font-medium truncate">{row.getValue("description") as string}</p>
      </div>
    ),
  },

  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      const sorted = column.getIsSorted();

      const renderIcon = () => {
        if (!sorted) return <ArrowUpDown className="size-4" />;
        if (sorted === "asc") return <ArrowUp className="size-4" />;
        if (sorted === "desc") return <ArrowDown className="size-4" />;
        return null;
      };

      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(sorted === "asc")}
        >
          Created At {renderIcon()}
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt") as string);
      return <div className="px-3">{date.toLocaleDateString()}</div>;
    },
  },

  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <ServiceActions service={row.original} />,
  },
];


// --------------------------------------------------
// Action buttons (Edit + Delete) — LIKE BLOG ACTIONS
// --------------------------------------------------
const ServiceActions = ({ service }: { service: Service }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  return (
    <div className="flex gap-2">
      {/* Edit */}
      <Button
        variant="ghost"
        size="icon"
        className="text-blue-600 hover:text-blue-700"
        onClick={() => setOpenEdit(true)}
      >
        <Edit2 className="h-4 w-4" />
      </Button>

      {/* Delete */}
      <Button
        variant="ghost"
        size="icon"
        className="text-red-600 hover:text-red-700"
        onClick={() => setOpenDelete(true)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>

      {/* Edit Form */}
      <ServiceForm
        service={service}
        onClose={() => setOpenEdit(false)}
        onSaved={() => {
          setOpenEdit(false);
          window.location.reload(); // refresh list
        }}
      />

      {/* Delete Dialog */}
      <ServiceDeleteDialog
        service={service}
        open={openDelete}
        setOpen={setOpenDelete}
      />
    </div>
  );
};
