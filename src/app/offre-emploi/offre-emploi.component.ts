import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { enumSelector } from '../model/categorieOffres';
import { NiveauQualification } from '../model/Diplome.model';
import { Lieu } from '../model/lieu.model';
import { offreEmploi, Statut, TypeContrat } from '../model/offreEmlpoi.model';
import { LieuxService } from '../services/lieux.service';
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

  lieuAffichage! : Lieu[];
  lieuStockage!: Lieu;

  lieuCree :string = "";


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
    statue : new FormControl(),
    active: new FormControl(),
    lieuDejaCree : new FormControl(),
    lieu: new FormGroup({
      idLieu :new FormControl(),
      adresse : new FormControl(),
      codePostal :new FormControl(),
      ville :new FormControl(),
      region :new FormControl(),
      pays :new FormControl(),
      offreEmplois :new FormControl()
      })
  })
    lieuForm = new FormGroup({
    idLieu :new FormControl(),
    adresse : new FormControl(),
    codePostal :new FormControl(),
    ville :new FormControl(),
    region :new FormControl(),
    pays :new FormControl(),
    offreEmplois :new FormControl()
    })
    idLieuForm = new FormGroup({
      idLieu :new FormControl(),
    })

  constructor(private offreEmploiService : OffreServiceService,private lieuService : LieuxService) {
    //instancie un objet offre



    this.lieuStockage = {
      id : -1,
      adresse : "",
      codePostal: "",
      ville: "",
      region: "",
      pays: "",
      offreEmplois : []
    }
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
      active : false,
      lieu: this.lieuStockage

    }


   }


  ngOnInit(): void {

  }
  creelOffre (){
    this.offreEmploiForm.controls['datePublication'].setValue(Date.now());
    this.offreEmploiService.add(this.offreEmploiForm.value).subscribe(data => {
      this.offreEmploi = data;
    })
    if(this.lieuCree == "oui" ) {
      let idDeLieu =  this.idLieuForm.get('idLieu')?.value;
      this.lieuAffichage.forEach(lieu => {
        if(lieu.id == idDeLieu) {
          this.lieuService.find(idDeLieu).subscribe(lieu => {
            this.lieuStockage = lieu;
            console.log(this.lieuStockage.id)
            this.offreEmploiForm.controls['lieu'].setValue(this.lieuStockage);
            this.offreEmploiService.add(this.offreEmploiForm.value).subscribe(data => {
              this.offreEmploi = data;
            })

          })
        }
      })


    }else if(this.lieuCree == "cree") {
      this.offreEmploiForm.controls['lieu'].setValue(this.lieuStockage)
      this.offreEmploiService.add(this.offreEmploiForm.value).subscribe(data => {
        this.offreEmploi = data;
      })
    }



  }

  creeOffre() {
    //affecter données du formulaire à notre Objet
    this.offreEmploiForm.controls['datePublication'].setValue(Date.now());

    if(this.lieuCree == "oui" ) {
      let idDeLieu =  this.offreEmploiForm.get('lieu')?.get('idLieu')?.value;
      this.lieuAffichage.forEach(lieu => {
        if(lieu.id == idDeLieu) {
          this.lieuService.find(idDeLieu).subscribe(lieu => {
            this.lieuStockage = lieu;
            console.log(this.lieuStockage.id)
            this.offreEmploiForm.controls['lieu'].setValue(this.lieuStockage);

          })
        }
      })


    } else if(this.lieuCree == "cree") {
      this.offreEmploiForm.controls['lieu'].setValue(this.lieuStockage)
    }

    //this.lieuStockage.offreEmplois.push(this.offreEmploi);
    //this.lieuService.add(this.lieuStockage).subscribe();

    this.offreEmploiService.add(this.offreEmploiForm.value).subscribe(data => {
      this.offreEmploi = data;
    })
  }

  creeLieu() {
    //ah oui on peut pas encore relier le lieu à l'offre vu qu'on l'a pas encore stockée en base..

    this.lieuService.add(this.lieuForm.value).subscribe( (data) => {
      //console.log(data.id)
      this.lieuStockage = data;
      this.lieuCree ="cree";
    })
  }

  pasEncoreCree() {
    this.lieuCree = this.offreEmploiForm.get('lieuDejaCree')?.value;
    if(this.lieuCree == "oui") {
      this.lieuService.getAllLieux().subscribe(data => {
        this.lieuAffichage = data;
      })
    }
  }
}
