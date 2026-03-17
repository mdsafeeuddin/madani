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
      title: [''],
      channel: ['']
    });
  }
  loadData(){
    this.videoService.search().subscribe(res => {
    this.data = res;
    this.filtered = res;
    console.log(this.filtered)
    });
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