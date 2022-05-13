import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReponseQues } from '../model/reponseQues.model';

@Injectable({
  providedIn: 'root'
})
export class ReponseService {

  constructor(private http: HttpClient) { }



  getAll() {
    return this.http.get<any>("http://localhost:8080/reponses");
  }
  getAllByQuestion(id: number) {
    return this.http.get<any>("http://localhost:8080//questions/"+id+"/reponses");
  }

  add(obj: ReponseQues): Observable<ReponseQues> {
    return this.http.post<ReponseQues>("http://localhost:8080/reponses", obj);
  }

  find(id: number) : Observable<ReponseQues> {
    return this.http.get<ReponseQues>("http://localhost:8080/reponses/" + id);
  }

  delete(id: number) {
    return this.http.delete("http://localhost:8080/reponses/" + id, { responseType: 'text' });
  }
}
