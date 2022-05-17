import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Competence } from '../model/competence.model';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  constructor(private http: HttpClient) { }


  getAllCompetences(): Observable<Competence[]> {
    return this.http.get<Competence[]>("http://localhost:8080/competences");
  }

  getCompetence(id: number): Observable<Competence>{
    return this.http.get<Competence>(`http://localhost:8080/competence/${id}`);
  }

  add(obj: Competence): Observable<Competence> {
    return this.http.post<Competence>("http://localhost:8080/competences", obj);
  }
  update(id: number, o: Competence): Observable<Competence> {

    return this.http.put<Competence>(`http://localhost:8080/competence/${id}`,o);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8080/competences/${id}`, { responseType: 'text' });
  }


}
