import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv/cv.component';
import { InscriptionCandidatComponent } from './inscription-candidat/inscription-candidat.component';
import { RegisterComponent } from './register/register.component';




@NgModule({
  declarations: [
    CvComponent,
    InscriptionCandidatComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CandidatModule { }
