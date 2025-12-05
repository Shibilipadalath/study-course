import { ColumnDef } from "@tanstack/react-table";

export interface Service {
  id: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface ServiceTableProps<TValue> {
  columns: ColumnDef<Service, TValue>[];
  data: Service[];
}
