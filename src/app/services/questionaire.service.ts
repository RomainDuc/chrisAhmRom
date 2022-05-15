import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Questionnaire } from '../model/questionnaire.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionaireService {

  constructor(private http: HttpClient) { }



  getAll() {
    return this.http.get<any>("http://localhost:8080/questionnaires");
  }

  add(obj: Questionnaire): Observable<Questionnaire> {
    return this.http.post<Questionnaire>("http://localhost:8080/questionnaires", obj);
  }

  find(id: number) : Observable<Questionnaire> {
    return this.http.get<Questionnaire>("http://localhost:8080/questionnaires/" + id);
  }

  delete(id: number) {
    return this.http.delete("http://localhost:8080/questionnaires/" + id, { responseType: 'text' });
  }

}
