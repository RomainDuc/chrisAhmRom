import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../model/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {


  constructor(private http: HttpClient) { }



  getAll() {
    return this.http.get<any>("http://localhost:8080/questions");
  }

  add(obj: Question): Observable<Question> {
    return this.http.post<Question>("http://localhost:8080/questions", obj);
  }

  find(id: number) : Observable<Question> {
    return this.http.get<Question>("http://localhost:8080/questions/" + id);
  }

  delete(id: number) {
    return this.http.delete("http://localhost:8080/questions/" + id, { responseType: 'text' });
  }
}
