"use client";

import { useState } from "react";
import { GalleryTable } from "./gallery-table";
import { galleryColumns } from "./gallery-columns";
import { GalleryFormDialog } from "./gallery-form";
import { GalleryCategoryTable } from "./gallery-category/gallery-category-table";
import { galleryCategoryColumns } from "./gallery-category/gallery-category-columns";
import { GalleryCategoryFormDialog } from "./gallery-category/gallery-category-form";
import { Gallery, GalleryCategory } from "@/types/gallery-types";
import { Button } from "@/components/ui/button";

interface GalleryTabsProps {
  galleries: Gallery[];
  categories: GalleryCategory[];
}

export function GalleryTabs({ galleries, categories }: GalleryTabsProps) {
  const [activeTab, setActiveTab] = useState<"gallery" | "category">("gallery");

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100">
      {/* Tab Buttons */}
      <div className="border-b border-gray-200">
        <div className="flex gap-2 p-4">
          <Button
            variant={activeTab === "gallery" ? "default" : "ghost"}
            onClick={() => setActiveTab("gallery")}
            className={activeTab === "gallery" ? "" : "text-gray-600"}
          >
            Gallery Items
          </Button>
          <Button
            variant={activeTab === "category" ? "default" : "ghost"}
            onClick={() => setActiveTab("category")}
            className={activeTab === "category" ? "" : "text-gray-600"}
          >
            Categories
          </Button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === "gallery" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">All Gallery Items</h2>
              <GalleryFormDialog />
            </div>
            <div className="space-y-4">
              <GalleryTable columns={galleryColumns} data={galleries} />
            </div>
          </div>
        )}

        {activeTab === "category" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">All Gallery Categories</h2>
              <GalleryCategoryFormDialog />
            </div>
            <div className="space-y-4">
              <GalleryCategoryTable columns={galleryCategoryColumns} data={categories} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

