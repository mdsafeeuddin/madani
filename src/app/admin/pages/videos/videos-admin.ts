import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { VideoAdminService } from "./video-admin.service";
import { MasterConfig } from "../../../shared/md-crud/master-config.model";
import { UserService } from "./users.service";
@Component({
  standalone: false,
  selector: 'videos-admin',
  templateUrl: './videos-admin.html'
})
export class VideosAdmin{
   videoForm: FormGroup;
    userConfig: MasterConfig = {
      title: 'User Master',
      layout: 'two-column',
      fields: [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'email', label: 'Email', type: 'text' },
        { name: 'status', label: 'Status', type: 'checkbox'},
        {
          name: 'role',
          label: 'Role',
          type: 'select',
          options: [
            { label: 'Admin', value: 'admin' },
            { label: 'User', value: 'user' }
          ]
        }
      ],
      columns: [
        { field: 'name', label: 'Name' },
        { field: 'email', label: 'Email' },
        { field: 'role', label: 'Role' }
      ],
      filters: [
        { name: 'name', label: 'Name', type: 'text' },
        {
          name: 'role',
          label: 'Role',
          type: 'select',
          options: [
            { label: 'Admin', value: 'admin' },
            { label: 'User', value: 'user' }
          ]
        }
      ]
    };
  constructor(
    private fb: FormBuilder, 
    private videoService: VideoAdminService,
    public userService: UserService) 
  {
    this.videoForm = this.fb.group({
      category: ['',],
      baseUrl: ['', Validators.required],
      channelId: [''],
      isPlaylist: [''],
      videoTitle: [''],
      videoId: [''],
      isLive: [''],
      isPublish: ['']
    });
  }
  submitForm() {
    if (this.videoForm.invalid) return;
    this.videoService.addVideo(this.videoForm.value)
      .then(() => {
        console.log('Video added successfully');
        this.videoForm.reset();
      })
      .catch(error => {
        console.error('Error adding video:', error);
      });
  }
}