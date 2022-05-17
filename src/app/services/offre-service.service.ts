import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { offreEmploi } from '../model/offreEmlpoi.model';


@Injectable({
  providedIn: 'root'
})
export class OffreServiceService {

  constructor(private http: HttpClient) { }



  getAll() : Observable<offreEmploi[]> {
    return this.http.get<offreEmploi[]>("http://localhost:8080/offreEmplois");
  }

  add(obj: offreEmploi) : Observable<offreEmploi>{
    return this.http.post<offreEmploi>("http://localhost:8080/offreEmplois", obj);
  }

  find(id: number) : Observable<offreEmploi> {
    return this.http.get<offreEmploi>("http://localhost:8080/offreEmplois/" + id);
  }

  delete(id: number) {
    return this.http.delete("http://localhost:8080/offreEmplois/" + id,{ responseType: 'text' } );
  }
}
