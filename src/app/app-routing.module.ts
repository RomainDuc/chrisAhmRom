import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatComponent } from './candidat/candidat.component';
import { HomeComponent } from './home/home.component';
import { ExamenComponent } from './questionnaire/examen/examen.component';
import { LieuComponent } from './lieux/lieu/lieu.component';
import { LieuxComponent } from './lieux/lieux.component';
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
  {path : 'examen/:id', component: ExamenComponent}
  {path : 'lieux', component: LieuxComponent},
  {path: 'lieu/:id', component: LieuComponent },
  {path : 'nouveauQuestionnaire/:id', component: NouveauQuestionnaireComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
