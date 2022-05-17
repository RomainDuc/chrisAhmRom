import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Diplome } from '../model/Diplome.model';

@Injectable({
  providedIn: 'root'
})
export class DiplomeService {

  constructor(private http: HttpClient) { }


  getAllDiplomes(): Observable<Diplome[]> {
    return this.http.get<Diplome[]>("http://localhost:8080/diplomes");
  }

  getDiplome(id: number): Observable<Diplome>{
    return this.http.get<Diplome>(`http://localhost:8080/diplomes/${id}`);
  }

  add(obj: Diplome): Observable<Diplome> {
    return this.http.post<Diplome>("http://localhost:8080/diplome", obj);
  }
  update(id: number, o: Diplome): Observable<Diplome> {

    return this.http.put<Diplome>(`http://localhost:8080/diplome/${id}`,o);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8080/diplome/${id}`, { responseType: 'text' });
  }

}
