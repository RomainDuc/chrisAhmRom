import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Competence } from '../model/competence.model';
import { CompetenceService } from '../services/competence.service';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css'],
})
export class CompetenceComponent implements OnInit {
  competences$!: Observable<Competence[]>;
  competenceForm!: FormGroup;
  competence!: Competence;
  modifCompetence!: Competence;

  modif: boolean = false;
  creation: boolean = false;
  select: boolean = false;

  constructor(
    private competenceService: CompetenceService,
    private _router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.competences$ = this.competenceService.getAllCompetences();
    this.competenceForm = new FormGroup({
      nom: new FormControl(),
      description: new FormControl(),
      niveauAptitudes: new FormControl(),
    });
  }
  isMofif() {
    if (this.select) {
      this.modif = true;
    } else {
      this.modif = !this.modif;
    }
  }

  isCreate() {
    this.creation = !this.creation;
  }

  getOneCompetence(id: number) {
    this.competenceService.getCompetence(id).subscribe((data) => {
      this.competence = data;

      console.log('competence obtenue :  ', this.competence.id);
      this.competenceForm.controls['nom'].setValue(this.competence.nom);
      this.competenceForm.controls['description'].setValue(
        this.competence.description
      );
      this.competenceForm.controls['niveauAptitudes'].setValue(
        this.competence.niveauAptitudes
      );
    });
  }

  selectioner(id: number): void {
    this.select = true;
    this.getOneCompetence(id);
    if (this.select) {
      this.isMofif();
      this.select = false;
      console.log('select =  ', this.select);
    }

    console.log('competence numero :  ', id);
  }

  updateCompetence() {
    //const modifCompetences = this.getOneCompetence(id);
    const idComp = this.competence.id;
    console.log('competence à modifier... ', idComp);
    console.log('AVANT MAJ nom = ', this.competence.nom);
    this.competenceService.getCompetence(idComp).subscribe((data) => {
      this.competence = data;
      this.competence.description =
        this.competenceForm.get('description')?.value;
      (this.competence.nom = this.competenceForm.get('nom')?.value),
        console.log('APRES MAJ nom = ', this.competence.nom);
      /*
      data.id = id,
      data.nom =  this.competenceForm.get('nom')?.value,
      data.description =  this.competenceForm.get('description')?.value,
      data.niveauAptitudes =  this.competenceForm.get('niveauAptitudes')?.value*/
      this.competenceService.update(idComp, this.competence).subscribe();
    });
  }

  addCompetence() {
    console.log('competence ajouté... ', this.competenceForm.value);
    this.competence = {
      id: 2,
      description: this.competenceForm.get('description')?.value,
      niveauAptitudes: this.competenceForm.get('niveauAptitudes')?.value,
      cv: undefined,
      competenceOffres: undefined,
      nom: this.competenceForm.get('nom')?.value,
    };
    this.competenceService.add(this.competence).subscribe();
  }
  /*
   refresh(): void {
    this._router.navigateByUrl(`competences`,{skipLocationChange:true}).then(() =>{
         this._router.navigate([decodeURI(this.location.path)])
    });
   }*/
  deleteCompetence(id: number) {
    this.competenceService.delete(id).subscribe((data) => {
      if (data == 'DELETED SUCCESSFULLY') {
        // this.refresh()
        console.log(data);
      }
    });
  }
}
