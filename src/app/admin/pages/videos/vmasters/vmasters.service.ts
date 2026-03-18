import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, deleteDoc, updateDoc, addDoc, docData } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { CrudService } from '../../../../shared/md-crud/crud-service.interface';

@Injectable({
  providedIn: 'root'
})
export class VideoTypesService implements CrudService<any>{
  private collectionName = 'vTypes';
  constructor(private firestore: Firestore) {}
  search(params?: any): Observable<any[]> {
    const ref = collection(this.firestore, this.collectionName);
    return collectionData(ref, { idField: 'id' }) as Observable<any[]>;
  }
  create(data: any): Observable<any> {
    const ref = collection(this.firestore, this.collectionName);
    return from(addDoc(ref, data));
  }
  update(id: string, data: any): Observable<any> {
    const ref = doc(this.firestore, `${this.collectionName}/${id}`);
    return from(updateDoc(ref, data));
  }
  delete(id: string): Observable<any> {
    const ref = doc(this.firestore, `${this.collectionName}/${id}`);
    return from(deleteDoc(ref));
  }
  getById(id: string): Observable<any> {
    const ref = doc(this.firestore, `${this.collectionName}/${id}`);
    return docData(ref, { idField: 'id' }) as Observable<any>;
  }
}
@Injectable({
  providedIn: 'root'
})
export class VideoCategoryService implements CrudService<any>{
  private collectionName = 'vCategories';
  constructor(private firestore: Firestore) {}
  search(params?: any): Observable<any[]> {
    const ref = collection(this.firestore, this.collectionName);
    return collectionData(ref, { idField: 'id' }) as Observable<any[]>;
  }
  create(data: any): Observable<any> {
    const ref = collection(this.firestore, this.collectionName);
    return from(addDoc(ref, data));
  }
  update(id: string, data: any): Observable<any> {
    const ref = doc(this.firestore, `${this.collectionName}/${id}`);
    return from(updateDoc(ref, data));
  }
  delete(id: string): Observable<any> {
    const ref = doc(this.firestore, `${this.collectionName}/${id}`);
    return from(deleteDoc(ref));
  }
  getById(id: string): Observable<any> {
    const ref = doc(this.firestore, `${this.collectionName}/${id}`);
    return docData(ref, { idField: 'id' }) as Observable<any>;
  }
}
@Injectable({
  providedIn: 'root'
})
export class VideoChannelService implements CrudService<any>{
  private collectionName = 'vChannels';
  constructor(private firestore: Firestore) {}
  search(params?: any): Observable<any[]> {
    const ref = collection(this.firestore, this.collectionName);
    return collectionData(ref, { idField: 'id' }) as Observable<any[]>;
  }
  create(data: any): Observable<any> {
    const ref = collection(this.firestore, this.collectionName);
    return from(addDoc(ref, data));
  }
  update(id: string, data: any): Observable<any> {
    const ref = doc(this.firestore, `${this.collectionName}/${id}`);
    return from(updateDoc(ref, data));
  }
  delete(id: string): Observable<any> {
    const ref = doc(this.firestore, `${this.collectionName}/${id}`);
    return from(deleteDoc(ref));
  }
  getById(id: string): Observable<any> {
    const ref = doc(this.firestore, `${this.collectionName}/${id}`);
    return docData(ref, { idField: 'id' }) as Observable<any>;
  }
}