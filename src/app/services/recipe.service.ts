import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Firestore, collection, query, where, collectionData } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private firestore: AngularFirestore) { }

  getRecipes(): Observable<any[]> {
    return this.firestore.collection('recipes').valueChanges({ idField: 'id' });
  }
  getRecipe(id: string): Observable<any> {
    return this.firestore.collection('recipes').doc(id).valueChanges();
  }
  
}
