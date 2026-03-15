import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { VideoAdminService } from "./video-admin.service";

@Component({
  standalone: false,
  selector: 'videos-admin',
  templateUrl: './videos-admin.html'
})

export class VideosAdmin{
   videoForm: FormGroup;

  constructor(private fb: FormBuilder, private videoService: VideoAdminService) {
    this.videoForm = this.fb.group({
      baseUrl: ['', Validators.required],
      channelId: [''],
      isPlaylist: [''],
      videoTitle: [''],
      watchId: [''],
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