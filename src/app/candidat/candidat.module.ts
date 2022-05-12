import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv/cv.component';
import { InscriptionCandidatComponent } from './inscription-candidat/inscription-candidat.component';




@NgModule({
  declarations: [
    CvComponent,
    InscriptionCandidatComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CandidatModule { }
