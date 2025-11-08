import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Blog {
  id?: string;
  title: string;
  imageUrl: string;
  content: string;
  date: string;
  author1: string;
  author2: string;
  subtitle: string;
  slug:string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private firestore: Firestore = inject(Firestore);
  private blogsCollection = collection(this.firestore, 'blogs');

  getBlogs(): Observable<Blog[]> {
    return collectionData(this.blogsCollection, { idField: 'id' }) as Observable<Blog[]>;
  }

  getBlog(id: string): Observable<Blog> {
    const blogDoc = collection(this.firestore, `blogs/${id}`); // adjust using doc if you like
    return collectionData(blogDoc, { idField: 'id' }) as unknown as Observable<Blog>;
  }
}
