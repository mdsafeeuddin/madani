import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog-service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.css',
})
export class BlogDetails {
  slug!: any;
  blog!: any;

  constructor(public route: ActivatedRoute, public blogService: BlogService){
    
  }

  ngOnInit(){
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.blogService.getBlogBySlug(this.slug).subscribe(blog => {
      this.blog = blog;
    })
  }

}
