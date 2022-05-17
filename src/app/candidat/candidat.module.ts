import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv/cv.component';
import { InscriptionCandidatComponent } from './inscription-candidat/inscription-candidat.component';
import { DiplomeComponent } from './cv/diplome/diplome.component';
import { ExperienceProfessionelleComponent } from './cv/experience-professionelle/experience-professionelle.component';
import { FormationComponent } from './cv/formation/formation.component';




@NgModule({
  declarations: [
    InscriptionCandidatComponent,
    //DiplomeComponent,
    //ExperienceProfessionelleComponent,
    //FormationComponent
  ],
  exports:[

  ],
  imports: [
    CommonModule
  ]
})
export class CandidatModule { }
