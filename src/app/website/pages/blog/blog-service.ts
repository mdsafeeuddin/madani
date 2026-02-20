import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, collection, where, query, doc, docData } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';

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
  
  private firestore = inject(Firestore);

  getBlogs(): Observable<Blog[]> {
    const blogsCollection = collection(this.firestore, 'blogs');
    return collectionData(blogsCollection, { idField: 'id' }) as Observable<Blog[]>;
  }

  getBlog(id: string): Observable<Blog> {
    const blogDoc = doc(this.firestore, `blogs/${id}`);
    return docData(blogDoc, { idField: 'id' }) as Observable<Blog>;
  }

  getBlogBySlug(slug: string): Observable<Blog | undefined> {
    const q = query(
      collection(this.firestore, 'blogs'),
      where('slug', '==', slug)
    );

    return collectionData(q, { idField: 'id' }).pipe(
      map(arr => arr[0] as Blog | undefined)
    );
  }
}

