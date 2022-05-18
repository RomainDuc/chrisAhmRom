import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatComponent } from './candidat/candidat.component';
import { CvComponent } from './candidat/cv/cv.component';
import { CompetenceComponent } from './competence/competence.component';
import { NouvelleCompetenceComponent } from './competence/nouvelle-competence/nouvelle-competence.component';
import { HomeComponent } from './home/home.component';
import { LieuComponent } from './lieux/lieu/lieu.component';

import { LieuxComponent } from './lieux/lieux.component';
import { LoginCandidatComponent } from './login/login-candidat/login-candidat.component';
import { LoginRecruteurComponent } from './login/login-recruteur/login-recruteur.component';
import { ExamenComponent } from './questionnaire/examen/examen.component';
import { NouveauQuestionnaireComponent } from './questionnaire/nouveau-questionnaire/nouveau-questionnaire.component';

import { QuestionnaireComponent } from './questionnaire/questionnaire.component';

const routes: Routes = [

  {path : 'home', component: HomeComponent},
  {path : '', component: HomeComponent},
  {path : 'candidat', component: CandidatComponent},
  {path : 'questionnaire', component: QuestionnaireComponent},
  {path : 'questionnaire', component: QuestionnaireComponent},
  {path : 'nouveauQuestionnaire', component: NouveauQuestionnaireComponent},
  {path : 'nouveauQuestionnaire/:id', component: NouveauQuestionnaireComponent},
  {path : 'examen/:id', component: ExamenComponent},
  {path : 'cvs', component: CvComponent},
  {path: 'login/candidat', component: LoginCandidatComponent },
  {path: 'login/recruteur', component: LoginRecruteurComponent },
  {path: 'competences', component: CompetenceComponent },
  {path : 'cv', component: CvComponent},
  {path: 'createCompetence', component: NouvelleCompetenceComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
