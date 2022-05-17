import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidat } from '../model/candidat.model';


@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  formData: any;
  choixmenu  = 'A';
  form: any;


  constructor(private http: HttpClient) { }



  // verifEmail(email :string) {
  //   return this.http.get(`${this.host}/${this.baseUrl}`);
   
  //  }  
 
  getAll() {
    return this.http.get<any>("http://localhost:8080/candidats");
  }

  add(obj: any) {
    return this.http.post("http://localhost:8080/candidats", obj);
  }

  find(id: number) {
    return this.http.get("http://localhost:8080/candidats/" + id);
  }

  delete(id: number)  {
    return this.http.delete("http://localhost:8080/candidats/" + id ,{ responseType: 'text' });
  }

  update(id: number, data: any): Observable<any>{
    return this.http.put("http://localhost:8080/candidats/" + id, data);
  }
 
}



