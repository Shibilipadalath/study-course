import { ColumnDef } from "@tanstack/react-table";

export interface Blog {
  id: string;
  image: string;
  title: string;
  description: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface BlogTableProps<TValue> {
  columns: ColumnDef<Blog, TValue>[];
  data: Blog[];
}