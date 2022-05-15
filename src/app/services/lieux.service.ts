import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lieu } from '../model/lieu.model';

@Injectable({
  providedIn: 'root'
})
export class LieuxService {

  constructor(private http: HttpClient) { }
  getAllLieux(): Observable<Lieu[]> {
    return this.http.get<Lieu[]>("http://localhost:8080/lieux");
  }

  add(obj: Lieu): Observable<Lieu> {
    return this.http.post<Lieu>("http://localhost:8080/lieux", obj);
  }

  find(id: number) : Observable<Lieu> {
    return this.http.get<Lieu>("http://localhost:8080/lieux/" + id);
  }

  delete(id: number) {
    return this.http.delete("http://localhost:8080/lieux/" + id, { responseType: 'text' });
  }

}
