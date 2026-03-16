export interface FieldConfig {
  name: string;
  label: string;
  type: 'text' | 'number' | 'select' | 'date' | 'checkbox';
  required?: boolean;
  options?: {label: string, value: any}[];
}