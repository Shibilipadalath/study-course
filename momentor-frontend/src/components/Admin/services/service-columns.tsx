"use client";

import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Service } from "@/types/service-types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ActionMenu } from "../common/action-menu";

import {
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

      const isValidUrl = url && typeof url === "string" && url.trim() !== "" && 
        (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("/"));
      
      return (
        <div className="px-3">
          {isValidUrl ? (
            <Image
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
        <ul className=" list-disc pl- text-sm max-w-md">
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
    <>
      <ActionMenu
        onEdit={() => setOpenEdit(true)}
        onDelete={() => setOpenDelete(true)}
      />

      {openEdit && (
        <ServiceForm
          service={service}
          onClose={() => setOpenEdit(false)}
          onSaved={() => {
            setOpenEdit(false);
            window.location.reload(); // refresh list
          }}
        />
      )}

      <ServiceDeleteDialog
        service={service}
        open={openDelete}
        setOpen={setOpenDelete}
      />
    </>
  );
};
