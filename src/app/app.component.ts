import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CandidatService } from './services/candidat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit{

  title = 'chrisAhmRom';
  constructor(private candidatService : CandidatService){}

  idConnecte : number= -1;

  ngOnInit(): void {
    this.candidatService.getSubject().subscribe(data => {
      this.idConnecte = data
    })
  }

  connexion() {
    //this.idConnecté = Number(localStorage.getItem("id"));
  }

  deco() {
    this.candidatService.deconnexion();

  }
}
