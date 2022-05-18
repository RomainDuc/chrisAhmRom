import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Candidat } from '../model/candidat.model';


@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  formData: any;
  choixmenu  = 'A';
  form: any;
  idConnexion !: number;

  constructor(private http: HttpClient) { }



  // verifEmail(email :string) {
  //   return this.http.get(`${this.host}/${this.baseUrl}`);

  //  }
  private sub:Subject<number> = new Subject<number>();



  getSubject(): Subject<number>{
        return this.sub;
  }


  getAll() {
    return this.http.get<any>("http://localhost:8080/candidats");
  }

  add(obj: any) {
    return this.http.post("http://localhost:8080/candidats", obj);
  }

  find(id: number): Observable<Candidat> {
    return this.http.get<Candidat>("http://localhost:8080/candidats/" + id);
  }

  delete(id: number)  {
    return this.http.delete("http://localhost:8080/candidats/" + id ,{ responseType: 'text' });
  }

  update(id: number, data: any): Observable<any>{
    return this.http.put("http://localhost:8080/candidats/" + id, data);
  }

  login(login: string, password: string) : Observable<Candidat> {
    return this.http.get<Candidat>("http://localhost:8080/login/"+login +"/"+ password )
  }

  connexion(): number {
   return this.idConnexion = Number(localStorage.getItem("id"));
  }

  deconnexion() {
    localStorage.setItem("id", "-1");
    this.getSubject().next(-1)
  }

}



