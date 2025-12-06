"use client";

import { useEffect, useState } from "react";
import { Service } from "@/types/service-types";
import { serviceColumns } from "@/components/Admin/services/service-columns";
import { ServiceTable } from "@/components/Admin/services/service-table";
import { ServiceForm } from "@/components/Admin/services/service-form";
import { ServiceDeleteDialog } from "@/components/Admin/services/service-delete-dialog";
import { Button } from "@/components/ui/button";
import { Row } from "@tanstack/react-table"; // to fix row typing error

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

export default function AdminServicePage() {
  const [services, setServices] = useState<Service[]>([]);
  const [openForm, setOpenForm] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Service | null>(null);

  // Fetch all services safely
  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/services`, {
          cache: "no-store",
        });

        if (!res.ok) {
          console.error("Failed to fetch services");
          return;
        }

        const data = await res.json();
        setServices(data.services || data || []);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    load();
  }, []);

  // Columns with proper type safety (NO any)
  const columns = serviceColumns.map((col) => {
    if (col.id === "actions") {
      return {
        ...col,
        cell: ({ row }: { row: Row<Service> }) => {
          const service = row.original;

          return (
            <div className="flex gap-2">
              {/* Edit button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setEditingService(service);
                  setOpenForm(true);
                }}
                className="text-blue-600 hover:text-blue-700"
              >
                Edit
              </Button>

              {/* Delete button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDeleteTarget(service)}
                className="text-red-600 hover:text-red-700"
              >
                Delete
              </Button>
            </div>
          );
        },
      };
    }
    return col;
  });

  return (
    <div className="max-w-7xl mx-auto">

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Service Management</h1>
        <p className="text-gray-600">Manage your services from here.</p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        
        {/* Header Row */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">All Services</h2>

          <Button
            onClick={() => {
              setEditingService(null); // new service
              setOpenForm(true);
            }}
          >
            Add Service
          </Button>
        </div>

        {/* Service Table */}
        <ServiceTable columns={columns} data={services} />
      </div>

      {/* Create / Edit Dialog */}
      {openForm && (
        <ServiceForm
          service={editingService}
          onClose={() => setOpenForm(false)}
          onSaved={() => {
            setOpenForm(false);

            // reload list after saving
            (async () => {
              const res = await fetch(`${API_BASE_URL}/api/services`, { cache: "no-store" });
              const data = await res.json();
              setServices(data.services || data || []);
            })();
          }}
        />
      )}

      {/* Delete Dialog */}
      {deleteTarget && (
        <ServiceDeleteDialog
          service={deleteTarget}
          open={true}
          setOpen={() => setDeleteTarget(null)}
          onDeleted={() => {
            setDeleteTarget(null);

            // reload list after delete
            (async () => {
              const res = await fetch(`${API_BASE_URL}/api/services`, { cache: "no-store" });
              const data = await res.json();
              setServices(data.services || data || []);
            })();
          }}
        />
      )}
    </div>
  );
}
