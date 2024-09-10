import { Injectable } from '@angular/core';
import { objetVente } from '../models/objet-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContenuService {
  private objetventes: objetVente[] = [
    new objetVente(
      'ordinateur', 
      'ordinateur dell latitude 7430',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
       new Date(),
      ),
  
  ];

  constructor() { }

  getobjetVente(): Observable<objetVente[]> {
    return of(this.objetventes);
}
}
