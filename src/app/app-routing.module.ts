import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatComponent } from './candidat/candidat.component';
<<<<<<< HEAD
import { RegisterComponent } from './candidat/register/register.component';
=======
import { CvComponent } from './candidat/cv/cv.component';
import { CompetenceComponent } from './competence/competence.component';
import { NouvelleCompetenceComponent } from './competence/nouvelle-competence/nouvelle-competence.component';
>>>>>>> 915d3d62d068617348daae3e50de24ef465fc567
import { HomeComponent } from './home/home.component';
import { LieuComponent } from './lieux/lieu/lieu.component';

import { LieuxComponent } from './lieux/lieux.component';
import { OffreEmploiComponent } from './offre-emploi/offre-emploi.component';
import { ExamenComponent } from './questionnaire/examen/examen.component';
import { NouveauQuestionnaireComponent } from './questionnaire/nouveau-questionnaire/nouveau-questionnaire.component';

import { QuestionnaireComponent } from './questionnaire/questionnaire.component';

const routes: Routes = [

  {path : '', component: HomeComponent},
  {path : 'home', component: HomeComponent},
  {path : 'questionnaire', component: QuestionnaireComponent},
  {path : 'nouveauQuestionnaire', component: NouveauQuestionnaireComponent},
  {path : 'nouveauQuestionnaire/:id', component: NouveauQuestionnaireComponent},
  {path : 'examen/:id', component: ExamenComponent},
  {path : 'lieux', component: LieuxComponent},
  {path: 'lieu/:id', component: LieuComponent },
<<<<<<< HEAD
  {path : 'nouveauQuestionnaire/:id', component: NouveauQuestionnaireComponent},
  { path: 'candidat', component: CandidatComponent,
  children: [
    { path: 'add', component: RegisterComponent },
    { path: 'edit/:id', component: RegisterComponent }
] },
=======
  {path : 'offreEmploi', component: OffreEmploiComponent},
  {path: 'competences', component: CompetenceComponent },
  {path : 'cv', component: CvComponent},
  {path: 'createCompetence', component: NouvelleCompetenceComponent }
>>>>>>> 915d3d62d068617348daae3e50de24ef465fc567


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
