import { ColumnDef } from "@tanstack/react-table";

export interface GalleryCategory {
  id: string;
  name: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface Gallery {
  id: string;
  image: string;
  categoryId: string;
  category: GalleryCategory;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface GalleryTableProps<TValue> {
  columns: ColumnDef<Gallery, TValue>[];
  data: Gallery[];
}

