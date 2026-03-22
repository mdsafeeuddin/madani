import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { VideoAdminService } from "./video-admin.service";
import { VideoCategoryService, VideoChannelService, VideoTypesService } from "./vmasters/vmasters.service";

@Component({
  standalone: false,
  selector: 'videos-admin',
  templateUrl: './videos-admin.html'
})
export class VideosAdmin{
    videoForm!: FormGroup;
    filterForm!: FormGroup;
    data: any[] = [];
    vTypes!: any[];
    vCats!: any[];
    vChans!: any[];
    editing = false;
    selectedId: string | null = null;
    viewMode: 'list' | 'form' = 'list';
    searchTerm = '';
    filtered: any[] = [];
    currentPage = 1;
    pageSize = 5;
   
  constructor(
    private fb: FormBuilder, 
    private videoService: VideoAdminService,
    private vTypesServ: VideoTypesService,
    private vChannServ: VideoChannelService,
    private vCatServ: VideoCategoryService) 
  {
   
  }

  ngOnInit() {
     this.videoForm = this.fb.group({
      videoTitle: [''],
      vType: ['', Validators.required],
      channel: [''],
      category: [''],
      videoId: [''],
      isPublish: ['']
    });
    this.loadData();
    this.getVideoTypes();
    this.getVideoChan();
    this.getVideoCat();
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

  totalPages() {
    return Math.ceil(this.filtered.length / this.pageSize);
  }
  
  changePage(page:number){
    this.currentPage = page;
  }

  getVideoTypes(){
    this.vTypesServ.search().subscribe(res =>{
      this.vTypes = res;
    })
  }

  getVideoChan(){
    this.vChannServ.search().subscribe(res =>{
      this.vChans = res;
    })
  }

  getVideoCat(){
    this.vCatServ.search().subscribe(res=>{
      this.vCats = res;
    })
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
    this.videoForm.patchValue({
      videoTitle: row.videoTitle,
      vType: row.vType,
      channel: row.channel,
      category: row.category,
      videoId: row.videoId,
      isPublish: row.isPublish
    });
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