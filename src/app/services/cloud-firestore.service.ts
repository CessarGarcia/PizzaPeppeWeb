import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CloudFirestoreService {

  constructor(private afs: AngularFirestore) { }

  createDoc(){
    this.afs.collection('')
  }
}
