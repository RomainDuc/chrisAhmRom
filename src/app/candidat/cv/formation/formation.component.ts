import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Formation } from 'src/app/model/formation.model';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  formations$!: Observable<Formation[]>;
  formationForm!: FormGroup;
  formation!: Formation;
  modifFormation!:  Formation;
  toto: string[] = ["toto", "tihi","tata"];
  modif: boolean = false;
  creation: boolean =false;
  select: boolean = false;
  myId!: string;
  @Input('id_cv') id_cv!: number;
  //@Output() sendCvId = 2;
  constructor(
      private formationService: FormationService,
      private _router: Router,
      private route: ActivatedRoute,
      private datePipe: DatePipe


    ) { }

  ngOnInit() {
    this.formations$= this.formationService.getAllFormationsByCv(this.id_cv);
    this.formationForm = new FormGroup({
      numero: new FormControl,
      anneeFormation: new FormControl,
      dureeFormation: new FormControl,
      organismeFormateur: new FormControl
    });
    console.log("L'ID du CV Input= "+this.id_cv+" sont type est "+ typeof this.id_cv)
    //console.log("L'ID du CV output= "+this.sendCvId)
  }
   getId(){
     //console.log("L'ID du CV = "+this.sendCvId)
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
   getOneFormation(id: number){
      this.formationService.getFormation(id).subscribe((data) => {
        this.formation = data;

        console.log("diplome obtenue :  ", this.formation.id)
        this.formationForm.controls['numero'].setValue(
          this.formation.numero
        );

        this.formationForm.controls['anneeFormation'].setValue(
        this.datePipe.transform(this.formation.anneeFormation,'yyyy-MM-dd')
        );
        this.formationForm.controls['dureeFormation'].setValue(
            this.formation.dureeFormation
        );
        this.formationForm.controls['organismeFormateur'].setValue(
          this.formation.organismeFormateur
        );
      });

  }
  // SELECTIONNER UN ITEM
  selectioner(id: number) : void{
    this.select = true;
    this.getOneFormation(id);
    if(this.select){
      this.isMofif();
      this.select= false;
      console.log("select =  ", this.select)
    }

    //console.log("diplome numero :  ", id)
  }
   // MISE A JOURS
   updateFormation(){

    const idFormation = this.formation.id;
    //console.log("diplome à modifier... ", idComp);
    //console.log("AVANT MAJ nom = ", this.diplome.nom);
    this.formationService.getFormation(idFormation).subscribe(data => {

      this.formation = data
      this.formation.numero = this.formationForm.get('numero')?.value,
      this.formation.anneeFormation=this.formationForm.get('anneeFormation')?.value,
      this.formation.dureeFormation=this.formationForm.get('dureeFormation')?.value,
      this.formation.organismeFormateur =  this.formationForm.get('organismeFormateur')?.value,
      //console.log("APRES MAJ nom = ", this.formation.numero);

      this.formationService.update(idFormation,this.formation).subscribe()
    })


  }
  //  CREATION
  addFormation(){
      //console.log("diplome ajouté... ", this.diplomeForm.value)
      this.formation = {
        id:-1,
        numero: this.formationForm.get('numero')?.value,
        anneeFormation: this.formationForm.get('anneeFormation')?.value,
        dureeFormation: this.formationForm.get('dureeFormation')?.value,
        organismeFormateur: this.formationForm.get('organismeFormateur')?.value,
        id_cv: this.id_cv



    }

    this.formationService.add(this.formation).subscribe();

  }

  /*
   refresh(): void {
    this._router.navigateByUrl(`competences`,{skipLocationChange:true}).then(() =>{
         this._router.navigate([decodeURI(this.location.path)])
    });
   }*/

    // SUPPRESSION
    deleteFormation(id: number){

      this.formationService.delete(id).subscribe((data) => {
       if(data == "DELETED SUCCESSFULLY") {
        // this.refresh()
         console.log(data)
       }
      });



      }

}
