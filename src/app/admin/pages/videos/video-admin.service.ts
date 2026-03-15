import { Injectable } from "@angular/core";
import { Firestore, collection, addDoc } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})

export class VideoAdminService{
  constructor(private firestore: Firestore){}

  addVideo(videoData:any){
    const videoRef = collection(this.firestore, 'videoLinks')
    return addDoc(videoRef, {
      ...videoData,
      createdAt: new Date()
    })
  }
}