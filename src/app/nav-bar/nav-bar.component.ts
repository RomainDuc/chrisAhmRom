import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  //se générer des attributs "Connecté ou pas" et "C quoi son role", qu'on ré
  //récupère à la connexion et qui sont de base en pas connecté role visiteur
  //IsLoggedIn : boolean = localStorage.getItem('LoggedIn');
  //IsRole = localStorage.role;
  constructor() { }

  ngOnInit(): void {
  }


  typeRole() {
    return "visiteur";
    //définir méthode pour candidatConnecté, recruteurConnecté
  }
}
