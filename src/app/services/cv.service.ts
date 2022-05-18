import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cv } from '../model/cv.model';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private http: HttpClient) { }


  getAllCv(): Observable<Cv[]> {
    return this.http.get<Cv[]>("http://localhost:8080/cvs");
  }
   
  getCv(id: number): Observable<Cv>{
    return this.http.get<Cv>(`http://localhost:8080/cv/${id}`);
  }

  add(obj: Cv): Observable<Cv> {
    return this.http.post<Cv>("http://localhost:8080/cv", obj);
  }
  update(id: number, o: Cv): Observable<Cv> {

    return this.http.put<Cv>(`http://localhost:8080/cv/${id}`,o);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8080/cv/${id}`, { responseType: 'text' });
  }
}
