import { Component, Input, OnInit } from "@angular/core";
import { MasterConfig } from "./master-config.model";
import { CrudService } from "./crud-service.interface";
import { FormBuilder, FormGroup } from "@angular/forms";
@Component({
  selector: 'md-crud',
  standalone: false,
  templateUrl: './md-crud.html',
  styles: `.form-grid {display: grid; gap: 12px;}
          .single {grid-template-columns: 1fr;}
          .two-column {grid-template-columns: 1fr 1fr;}
          .three-column {grid-template-columns: 1fr 1fr 1fr;
        }`
})
export class MasterCrudComponent<T> implements OnInit {
  @Input() config!: MasterConfig;
  @Input() service!: CrudService<any>;
  form!: FormGroup;
  filterForm!: FormGroup;
  data: any[] = [];
  editing = false;
  selectedId: string | null = null;
  viewMode: 'list' | 'form' = 'list';
  searchTerm = '';
  filtered: any[] = [];
  currentPage = 1;
  pageSize = 5;
  constructor(
    private fb: FormBuilder) 
  {}
  ngOnInit() {
    const group: any = {};
    this.config.fields.forEach(f => {
      group[f.name] = [''];
    });
    this.form = this.fb.group(group);
    this.loadData();
    const filterGroup: any = {};

    this.config.filters?.forEach(f => {
    filterGroup[f.name] = [''];
    });
    this.filterForm = this.fb.group(filterGroup);
  }
  loadData() {
    this.service.search().subscribe(res => {
    this.data = res;
    this.filtered = res;
    });
  }
  filteredData() {
    if (!this.searchTerm) return this.data;
    return this.data.filter(item =>
      Object.values(item)
        .join(' ')
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase())
    );
  }
  applyFilters() {
    const filters = this.filterForm.value;
    this.filtered = this.data.filter(item => {
      return Object.keys(filters).every(key => {
        if (!filters[key]) return true;
        return item[key]
          .toString()
          .toLowerCase()
          .includes(filters[key].toLowerCase());
      });
    });
    this.currentPage = 1;
  }
  paginatedData() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filtered.slice(start, start + this.pageSize);
  }
  totalPages() {
    return Math.ceil(this.filtered.length / this.pageSize);
  }
  changePage(page:number){
    this.currentPage = page;
  }
  save() {
    if (this.editing) {
      this.service.update(this.selectedId!, this.form.value)
        .subscribe(() => {
          this.loadData();
          this.cancel();
        });
    } else {
      this.service.create(this.form.value)
        .subscribe(() => {
          this.loadData();
          this.cancel();
        });
    }
  }
  delete(id: string) {
    if (confirm('Delete record?')) {
      this.service.delete(id)
        .subscribe(() => this.loadData());
    }
  }
  resetForm() {
    this.editing = false;
    this.selectedId = null;
    this.form.reset();
  }

  trackById(index: number, item: any) {
  return item.id;
}

  addNew() {
    this.viewMode = 'form';
    this.editing = false;
    this.form.reset();
  }

  edit(row: any) {
    this.viewMode = 'form';
    this.editing = true;
    this.selectedId = row.id;
    this.form.patchValue(row);
  }

  cancel() {
    this.viewMode = 'list';
    this.form.reset();
  }
}