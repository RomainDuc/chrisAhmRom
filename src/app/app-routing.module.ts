import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatComponent } from './candidat/candidat.component';
import { HomeComponent } from './home/home.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';

const routes: Routes = [

  {path : 'home', component: HomeComponent},
  {path : '', component: HomeComponent},
  {path : 'candidat', component: CandidatComponent},
  {path : 'questionnaire', component: QuestionnaireComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
