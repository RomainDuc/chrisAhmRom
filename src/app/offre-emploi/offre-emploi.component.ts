import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { enumSelector } from '../model/categorieOffres';
import { NiveauQualification } from '../model/Diplome.model';
import { offreEmploi, Statut, TypeContrat } from '../model/offreEmlpoi.model';
import { OffreServiceService } from '../services/offre-service.service';

@Component({
  selector: 'app-offre-emploi',
  templateUrl: './offre-emploi.component.html',
  styleUrls: ['./offre-emploi.component.css']
})
export class OffreEmploiComponent implements OnInit {

  offreEmploi !: offreEmploi;
  niveauQualificationEnum = enumSelector(NiveauQualification);
  typeContratEnum = enumSelector(TypeContrat);
  statutEnum = enumSelector(Statut);

  offreEmploiForm = new FormGroup({
    id : new FormControl(),
    categorieOffre : new FormControl(),
    description : new FormControl(),
    datePublication : new FormControl(),
    dateLimite : new FormControl(),
    salaire : new FormControl(),
    experienceSouhaite : new FormControl(),
    niveauQualification : new FormControl(),
    typeContrat : new FormControl(),
    statut : new FormControl(),
    active: new FormControl(),

  })
  constructor(private offreEmploiService : OffreServiceService) {
    //instancie un objet offre

    this.offreEmploi = {
      id :-1,
      categorieOffre : "",
      description : "",
      datePublication : new Date(),
      dateLimite : new Date(),
      salaire : 0,
      experienceSouhaite : 0,
      niveauQualification : NiveauQualification.BAC,
      typeContrat : TypeContrat.CDD,
      statut : Statut.DISPONIBLE,
      active : false

    }

   }


  ngOnInit(): void {
  }


  creeOffre() {
    //affecter données du formulaire à notre Objet
    this.offreEmploiForm.controls['datePublication'].setValue(Date.now())

    this.offreEmploiService.add(this.offreEmploiForm.value).subscribe(data => {
      this.offreEmploi = data;
      console.log(data.id);
    })
  }

}
