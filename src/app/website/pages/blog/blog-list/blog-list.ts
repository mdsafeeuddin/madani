import { Component } from '@angular/core';
import { Blog, BlogService } from '../blog-service';

@Component({
  selector: 'app-blog-list',
  standalone: false,
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.css'
})

export class BlogList {
  blogs$;

  constructor(private blogService: BlogService) {
    this.blogs$ = this.blogService.getBlogs();
  }

  // ngOnInit() {
  //   this.blogService.getBlogs().subscribe(data => {
  //     this.blogs = data;
  //   });
  // }
}
