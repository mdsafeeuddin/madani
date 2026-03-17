import { Component } from "@angular/core";
import { MasterConfig } from "../../../../shared/md-crud/master-config.model";
import { VideoCategories, VideosBaseUrl, VideosChannels } from "./vmasters.service";

@Component({
  selector: 'video-masters',
  standalone: false,
  templateUrl: './video-masters.html'
})

export class VideoMasters {
constructor(
    public vBaseService: VideosBaseUrl,
    public vCatService: VideoCategories,
    public vChannService: VideosChannels){

  }
  vbaseConfig: MasterConfig = {
    title: 'Base URL',
    layout: 'two-column',
    fields: [
      {name: 'name', label: 'Name', type: 'text'},
      {name: 'url', label: 'Url', type: 'text'},
      {name: 'status', label: 'Status', type: 'checkbox'}
    ],
    columns: [
      {field: 'name', label: 'Name'},
      {field: 'url', label: 'Url'},
      {field: 'status', label: 'Status'}
    ]
  }
  vChannConfig: MasterConfig = {
    title: 'Youtube Channel',
    layout: 'two-column',
    fields: [
      {name: 'name', label: 'Name', type: 'text'},
      {name: 'status', label: 'Status', type: 'checkbox'}
    ],
    columns: [
      {field: 'name', label: 'Name'},
      {field: 'status', label: 'Status'}
    ]
  }
  vCatConfig: MasterConfig = {
    title: 'Video Category',
    layout: 'two-column',
    fields: [
      {name: 'name', label: 'Name', type: 'text'},
      {name: 'status', label: 'Status', type: 'checkbox'}
    ],
    columns: [
      {field: 'name', label: 'Name'},
      {field: 'status', label: 'Status'}
    ]
  } 
}