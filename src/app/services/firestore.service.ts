import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
    providedIn: 'root'
})
export class FirestoreService {

    constructor(private afs: AngularFirestore) { }
    createDoc(){
        this.afs.collection('')
    }
}