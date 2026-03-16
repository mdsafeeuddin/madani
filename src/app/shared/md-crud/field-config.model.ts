export interface FieldConfig {
  name: string;
  label: string;
  type: 'text' | 'number' | 'select' | 'date';
  required?: boolean;
  options?: {label: string, value: any}[];
}