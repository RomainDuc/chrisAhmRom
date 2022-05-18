import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../model/formation.model';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient) { }


  getAllFormations(): Observable<Formation[]> {
    return this.http.get<Formation[]>("http://localhost:8080/formations");
  }

  getAllFormationsByCv(id: number): Observable<Formation[]> {
    return this.http.get<Formation[]>(`http://localhost:8080/formations/cv/${id}`);
  }

  getFormation(id: number): Observable<Formation>{
    return this.http.get<Formation>(`http://localhost:8080/formation/${id}`);
  }

  add(obj: Formation): Observable<Formation> {
    return this.http.post<Formation>("http://localhost:8080/formation", obj);
  }
  update(id: number, o: Formation): Observable<Formation> {

    return this.http.put<Formation>(`http://localhost:8080/formation/${id}`,o);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8080/formation/${id}`, { responseType: 'text' });
  }
}
