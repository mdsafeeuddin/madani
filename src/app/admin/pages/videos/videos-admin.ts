import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  standalone: false,
  selector: 'videos-admin',
  templateUrl: './videos-admin.html'
})

export class VideosAdmin{
   videoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.videoForm = this.fb.group({
      baseUrl: ['', Validators.required],
      channelId: [''],
      isPlaylist: [''],
      videoTitle: [''],
      watchId: [''],
      publish: ['']
    });
  }

  submitForm() {
    if (this.videoForm.valid) {
      console.log(this.videoForm.value);
      this.videoForm.reset()
    }
  }
}