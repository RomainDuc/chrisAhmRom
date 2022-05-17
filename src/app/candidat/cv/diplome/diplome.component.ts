import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Diplome } from 'src/app/model/Diplome.model';
import { DiplomeService } from 'src/app/services/diplome.service';

@Component({
  selector: 'app-diplome',
  templateUrl: './diplome.component.html',
  styleUrls: ['./diplome.component.css']
})
export class DiplomeComponent implements OnInit {

  diplomes$!: Observable<Diplome[]>;
  diplomeForm!: FormGroup;
  diplome!: Diplome;
  modifDiplome!:  Diplome;

  modif: boolean = false;
  creation: boolean =false;
  select: boolean = false;

  constructor(
      private diplomeService: DiplomeService,
      private _router: Router,
      private route: ActivatedRoute,
      private datePipe: DatePipe


    ) { }

  ngOnInit() {
    this.diplomes$= this.diplomeService.getAllDiplomes();
    this.diplomeForm = new FormGroup({
      nom: new FormControl,
      anneeObtention: new FormControl,
      niveauQualification: new FormControl,

    });
  }
  
   // CONTROLE SI L'UTILISATEUR MODIFIE
  isMofif(){

    if(this.select){
      this.modif = true;
    }else{
      this.modif = !this.modif;
    }


  }

   // CONTROLE SI L'UTILISATEUR CREER
  isCreate(){

    this.creation = ! this.creation;
  }
   // RETOURNE UN DIPLOME PAR SON ID
  getOneDiplome(id: number){
      this.diplomeService.getDiplome(id).subscribe((data) => {
        this.diplome = data;

        console.log("diplome obtenue :  ", this.diplome.id)
        this.diplomeForm.controls['nom'].setValue(
          this.diplome.nom
        );
        this.diplomeForm.controls['niveauQualification'].setValue(
          this.diplome.niveauQualification
        );
        this.diplomeForm.controls['anneeObtention'].setValue(
         this.datePipe.transform(this.diplome.anneeObtention,'yyyy-MM-dd')
        );
      });

  }
  // SELECTIONNER UN ITEM
  selectioner(id: number) : void{
    this.select = true;
    this.getOneDiplome(id);
    if(this.select){
      this.isMofif();
      this.select= false;
      console.log("select =  ", this.select)
    }


    console.log("diplome numero :  ", id)


  }
 // MISE A JOURS
  updateDiplome(){



    const idComp = this.diplome.id;
    console.log("diplome à modifier... ", idComp);
    console.log("AVANT MAJ nom = ", this.diplome.nom);
    this.diplomeService.getDiplome(idComp).subscribe(data => {

      this.diplome = data
      this.diplome.nom = this.diplomeForm.get('nom')?.value,
      this.diplome.anneeObtention=this.diplomeForm.get('anneeObtention')?.value,
      this.diplome.niveauQualification =  this.diplomeForm.get('niveauQualification')?.value,
      console.log("APRES MAJ nom = ", this.diplome.nom);

     this.diplomeService.update(idComp,this.diplome).subscribe()
    })


  }
  //  CREATION
  addDiplome(){
    console.log("diplome ajouté... ", this.diplomeForm.value)
    this.diplome = {
      id:2,
      nom: this.diplomeForm.get('nom')?.value,
      niveauQualification: this.diplomeForm.get('niveauQualification')?.value,
      anneeObtention: this.diplomeForm.get('anneeObtention')?.value,
      cv: undefined



  }
   this.diplomeService.add(this.diplome).subscribe();

}
   /*
   refresh(): void {
    this._router.navigateByUrl(`competences`,{skipLocationChange:true}).then(() =>{
         this._router.navigate([decodeURI(this.location.path)])
    });
   }*/

    // SUPPRESSION
  deleteDiplome(id: number){

   this.diplomeService.delete(id).subscribe((data) => {
    if(data == "DELETED SUCCESSFULLY") {
     // this.refresh()
      console.log(data)
    }
   });



   }


}
