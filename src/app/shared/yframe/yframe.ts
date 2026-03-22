import { Component, Input, SimpleChanges, ChangeDetectorRef } from "@angular/core";
import { SafeResourceUrl, DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'ytube-iframe',
  standalone: false,
  templateUrl: 'yframe.html'
})

export class YoutubeIframe{
  @Input() data!: any;
  constructor(
    private sanitizer: DomSanitizer,
    private changes: ChangeDetectorRef
  ){
  }
  ngOnChanges(changes: SimpleChanges) {
    this.changes.detectChanges()
  }
  getSafeUrl(id: string, code: string): SafeResourceUrl | null {
    let url: string = '';
    if(code==='yp'){
      url = `https://www.youtube.com/embed/videoseries?list=${id}&rel=0`
    }
    else{
      url = `https://www.youtube.com/embed/${id}?rel=0`;
    }
    console.log(url)
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}