import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienceProfessionelle } from '../model/experienceProfessionnelle.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceProfessionelleService {

  constructor(private http: HttpClient) { }


  getAllExperienceProfessionelle(): Observable<ExperienceProfessionelle[]> {
    return this.http.get<ExperienceProfessionelle[]>("http://localhost:8080/experienceProfessionelles");
  }

  getExperienceProfessionelle(id: number): Observable<ExperienceProfessionelle>{
    return this.http.get<ExperienceProfessionelle>(`http://localhost:8080/experienceProfessionelle/${id}`);
  }

  add(obj: ExperienceProfessionelle): Observable<ExperienceProfessionelle> {
    return this.http.post<ExperienceProfessionelle>("http://localhost:8080/experienceProfessionelle", obj);
  }
  update(id: number, o: ExperienceProfessionelle): Observable<ExperienceProfessionelle> {

    return this.http.put<ExperienceProfessionelle>(`http://localhost:8080/experienceProfessionelle/${id}`,o);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8080/experienceProfessionelle/${id}`, { responseType: 'text' });
  }
}
