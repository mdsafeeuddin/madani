import { Injectable } from "@angular/core";
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, deleteDoc, docData } from "@angular/fire/firestore";
import { CrudService } from "../../../shared/md-crud/crud-service.interface";
import { Observable, from } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VideoAdminService implements CrudService<any>{
  private collectionName = 'videoLinks';
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