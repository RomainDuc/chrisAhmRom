import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import {CategorieOffre, enumSelector, Villes} from '../model/categorieOffres'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  aCherche : boolean = false;

  typeEmploi = enumSelector(CategorieOffre);
  experience = [0,2,5,10];
  villes  = enumSelector(Villes);


  experienceForm = new FormControl('');
  capsule  = new FormControl('');
  sopla  = new FormControl('');

  jobSearch = new FormGroup({
    tools: new FormControl(''),
    location: new FormControl(''),
    experience: new FormControl(''),
  });

    competences !: string;

  constructor() { }

  ngOnInit(): void {
  }

  recherche() {
    //on va voir attend
    this.aCherche = true;
  }

}




