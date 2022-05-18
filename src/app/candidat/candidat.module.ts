import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv/cv.component';
import { InscriptionCandidatComponent } from './inscription-candidat/inscription-candidat.component';
<<<<<<< HEAD
import { RegisterComponent } from './register/register.component';
=======
import { DiplomeComponent } from './cv/diplome/diplome.component';
import { ExperienceProfessionelleComponent } from './cv/experience-professionelle/experience-professionelle.component';
import { FormationComponent } from './cv/formation/formation.component';
>>>>>>> 915d3d62d068617348daae3e50de24ef465fc567




@NgModule({
  declarations: [
<<<<<<< HEAD
    CvComponent,
    InscriptionCandidatComponent,
    RegisterComponent
=======
    InscriptionCandidatComponent,
    //DiplomeComponent,
    //ExperienceProfessionelleComponent,
    //FormationComponent
  ],
  exports:[

>>>>>>> 915d3d62d068617348daae3e50de24ef465fc567
  ],
  imports: [
    CommonModule
  ]
})
export class CandidatModule { }
