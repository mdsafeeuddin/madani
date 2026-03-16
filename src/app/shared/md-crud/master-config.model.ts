import { FieldConfig } from "./field-config.model";
export interface ColumnConfig {
  field: string;
  label: string;
}
export interface MasterConfig {
  title: string;
  layout: 'single' | 'two-column' | 'three-column';
  fields: FieldConfig[];
  columns: ColumnConfig[];
  filters?: FieldConfig[];
}