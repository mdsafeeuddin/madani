import { Component } from "@angular/core";
import { MasterConfig } from "../../../../shared/md-crud/master-config.model";
import { VideoCategories, VideoTypesService, VideosChannels } from "./vmasters.service";

@Component({
  selector: 'video-masters',
  standalone: false,
  templateUrl: './video-masters.html'
})

export class VideoMasters {
constructor(
    public vTypesService: VideoTypesService,
    public vCatService: VideoCategories,
    public vChannService: VideosChannels){

  }
  vTypesConfig: MasterConfig = {
    title: 'Video Types',
    layout: 'two-column',
    fields: [
      {name: 'name', label: 'Name', type: 'text'},
      {name: 'baseUrl', label: 'Url', type: 'text'},
      {name: 'code', label: 'Short code', type: 'text'},
      {name: 'status', label: 'Status', type: 'checkbox'}
    ],
    columns: [
      {field: 'name', label: 'Name'},
      {field: 'baseUrl', label: 'Url'},
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