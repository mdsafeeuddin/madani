import { Component } from '@angular/core';
import { Blog, BlogService } from '../blog-service';

@Component({
  selector: 'app-blog-list',
  standalone: false,
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.css',
})
export class BlogList {
blogs: Blog[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getBlogs().subscribe(data => {
      this.blogs = data;
    });
  }
}
