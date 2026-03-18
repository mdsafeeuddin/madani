import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { VideoAdminService } from "./video-admin.service";

@Component({
  standalone: false,
  selector: 'videos-admin',
  templateUrl: './videos-admin.html'
})
export class VideosAdmin{
    videoForm!: FormGroup;
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
    private fb: FormBuilder, 
    private videoService: VideoAdminService) 
  {
   
  }

  ngOnInit() {
     this.videoForm = this.fb.group({
      category: [''],
      baseUrl: ['', Validators.required],
      channelId: [''],
      isPlaylist: [''],
      videoTitle: [''],
      videoId: [''],
      isLive: [''],
      isPublish: ['']
    });
    this.loadData();
    this.filterForm = this.fb.group({
      videoTitle: [''],
      channel: ['']
    });
  }

  loadData(){
    this.videoService.search().subscribe(res => {
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

  addNew() {
    this.viewMode = 'form';
    this.editing = false;
    this.videoForm.reset();
  }

  edit(row: any) {
    this.viewMode = 'form';
    this.editing = true;
    this.selectedId = row.id;
    this.videoForm.patchValue(row);
  }

   delete(id: string) {
    if (confirm('Delete record?')) {
      this.videoService.delete(id)
        .subscribe(() => this.loadData());
    }
  }

  submitForm() {
     if (this.editing) {
      this.videoService.update(this.selectedId!, this.videoForm.value)
        .subscribe(() => {
          this.loadData();
          this.cancel();
        });
    } else {
      this.videoService.create(this.videoForm.value)
        .subscribe(() => {
          this.loadData();
          this.cancel();
        });
    }
  }

  cancel() {
    this.viewMode = 'list';
    this.videoForm.reset();
  }
}