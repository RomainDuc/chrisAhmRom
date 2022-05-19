import { DatePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Cv } from 'src/app/model/cv.model';
import { Diplome } from 'src/app/model/Diplome.model';
import { Formation } from 'src/app/model/formation.model';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',

  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  cv$!: Observable<Cv[]>;
  cvForm!: FormGroup;
  cv!: Cv;
  modifCv!: Cv;
  id!: number;
  diplomes!: Diplome[];
  f!: Formation[];
  modif: boolean = false;
  creation: boolean = false;
  select: boolean = false;
  processReq!: number;
  idDuCvEnCours: number = 0;
  @Output() public myId = new EventEmitter();
  constructor(
    private cvService: CvService,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.cvService.getCv(1).subscribe((data) => {
      this.cv = data;
    });
    this.processReq = 2;
    this.idDuCvEnCours = 1;
  }
  eventId() {
    this.myId.emit(1);
  }
  // CONTROLE SI L'UTILISATEUR MODIFIE
  isMofif() {
    if (this.select) {
      this.modif = true;
    } else {
      this.modif = !this.modif;
    }
  }

  // CONTROLE SI L'UTILISATEUR CREER
  isCreate() {
    this.creation = !this.creation;
  } /*
  /*
    // RETOURNE UN DIPLOME PAR SON ID
    getOneExperienceProfessionelle(id: number){
      this.experienceProfessionelleServive.getExperienceProfessionelle(id).subscribe((data) => {
        this.experienceProfessionelle = data;

        console.log(" ID experience Professionelle obtenue :  ", this.experienceProfessionelle.id)
        this.experienceProfessionelleForm.controls['numero'].setValue(
          this.experienceProfessionelle.numero
        );
        this.experienceProfessionelleForm.controls['description'].setValue(
          this.experienceProfessionelle.description
        );
        this.experienceProfessionelleForm.controls['anneeExperience'].setValue(
          this.experienceProfessionelle.anneeExperience
        );
        this.experienceProfessionelleForm.controls['entreprise'].setValue(
           this.experienceProfessionelle.entreprise
        );
      });

  }
  // SELECTIONNER UN ITEM
  selectioner(id: number) : void{
    this.select = true;
    this.getOneExperienceProfessionelle(id);
    if(this.select){
      this.isMofif();
      this.select= false;
      console.log("select =  ", this.select)
    }


    console.log("experience Professionelle selectionner ID :  ", id)


  }

  // MISE A JOURS
  updateExperienceProfessionelle(){

    const idExp= this.experienceProfessionelle.id;
    console.log("experience Professionelle à modifier... ", idExp);
    console.log("AVANT MAJ numero = ", this.experienceProfessionelle.numero);
    this.experienceProfessionelleServive.getExperienceProfessionelle(idExp).subscribe(data => {

      this.experienceProfessionelle = data
      this.experienceProfessionelle.numero = this.experienceProfessionelleForm.get('numero')?.value,
      this.experienceProfessionelle.anneeExperience = this.experienceProfessionelleForm.get('anneeExperience')?.value,
      this.experienceProfessionelle.description=this.experienceProfessionelleForm.get('description')?.value,
      this.experienceProfessionelle.entreprise =  this.experienceProfessionelleForm.get('entreprise')?.value,
      console.log("APRES MAJ numero = ", this.experienceProfessionelle.numero);

     this.experienceProfessionelleServive.update(idExp,this.experienceProfessionelle).subscribe()
    })


  }
  //  CREATION
  addExperienceProfessionelle(){
    console.log("diplome ajouté... ", this.experienceProfessionelleForm.value)
    this.experienceProfessionelle = {
      id: -1,
      numero: this.experienceProfessionelleForm.get('numero')?.value,
      description: this.experienceProfessionelleForm.get('description')?.value,
      anneeExperience: this.experienceProfessionelleForm.get('anneeExperience')?.value,
      entreprise: this.experienceProfessionelleForm.get('entreprise')?.value,
      cv: undefined



  }
   this.experienceProfessionelleServive.add(this.experienceProfessionelle).subscribe();

 }

   refresh(): void {
    this._router.navigateByUrl(`competences`,{skipLocationChange:true}).then(() =>{
         this._router.navigate([decodeURI(this.location.path)])
    });
   }
  /*
    // SUPPRESSION
    deleteExperienceProfessionelle(id: number){

      this.experienceProfessionelleServive.delete(id).subscribe((data) => {
       if(data == "DELETED SUCCESSFULLY") {
        // this.refresh()
         console.log(data)
       }
      });

   */
}
