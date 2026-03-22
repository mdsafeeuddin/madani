import { Component } from "@angular/core";
import { VideoAdminService } from "../../../admin/pages/videos/video-admin.service";

@Component({
  selector: 'web-teachings',
  standalone: false,
  templateUrl: 'tngs.html'
})

export class WebTeachings {
  vdata!: any;
  constructor(
    private vserv: VideoAdminService
  ){

  }

  ngOnInit(){
    this.vserv.search().subscribe(res => {
      this.vdata = res;
    })
  }
}