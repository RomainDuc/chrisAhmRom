import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OffreServiceService {

  constructor(private http: HttpClient) { }



  getAll() {
    return this.http.get<any>("http://localhost:8080/offreEmplois");
  }

  add(obj: any) {
    return this.http.post("http://localhost:8080/offreEmplois", obj);
  }

  find(id: number) {
    return this.http.get("http://localhost:8080/offreEmplois/" + id);
  }

  delete(id: number) {
    return this.http.delete("http://localhost:8080/offreEmplois/" + id);
  }
}
