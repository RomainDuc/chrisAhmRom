import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CandidatComponent } from './candidat/candidat.component';
import { HomeComponent } from './home/home.component';
import { RecruteurComponent } from './recruteur/recruteur.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { NavBarVisiteurComponent } from './nav-bar/nav-bar-visiteur/nav-bar-visiteur.component';
import { NavBarCandidatComponent } from './nav-bar/nav-bar-candidat/nav-bar-candidat.component';
import { NavBarRecruteurComponent } from './nav-bar/nav-bar-recruteur/nav-bar-recruteur.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DernieresOffresComponent } from './home/dernieres-offres/dernieres-offres.component';
import { HttpClientModule } from '@angular/common/http';
import { LieuxComponent } from './lieux/lieux.component';
import { NouveauQuestionnaireComponent } from './questionnaire/nouveau-questionnaire/nouveau-questionnaire.component';
import { ExamenComponent } from './questionnaire/examen/examen.component';
import { LieuComponent } from './lieux/lieu/lieu.component';

import { ListCandidatComponent } from './candidat/list-candidat/list-candidat.component';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { APP_BASE_HREF, DatePipe, DecimalPipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './candidat/register/register.component';


import { CompetenceComponent } from './competence/competence.component';
import { ExperienceProfessionelleComponent } from './candidat/cv/experience-professionelle/experience-professionelle.component';
import { DiplomeComponent } from './candidat/cv/diplome/diplome.component';
import { FormationComponent } from './candidat/cv/formation/formation.component';
import { NouvelleCompetenceComponent } from './competence/nouvelle-competence/nouvelle-competence.component';

import { LoginCandidatComponent } from './login/login-candidat/login-candidat.component';
import { LoginRecruteurComponent } from './login/login-recruteur/login-recruteur.component';
import { OffreEmploiComponent } from './offre-emploi/offre-emploi.component';
import { CvComponent } from './candidat/cv/cv.component';
import { SingleOffreComponent } from './single-offre/single-offre.component';










@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CandidatComponent,
    HomeComponent,
    RecruteurComponent,
    QuestionnaireComponent,
    NavBarVisiteurComponent,
    NavBarCandidatComponent,
    NavBarRecruteurComponent,
    DernieresOffresComponent,
    NouveauQuestionnaireComponent,
    ExamenComponent,
    LieuxComponent,
    NouveauQuestionnaireComponent,
    LieuComponent,
    NouveauQuestionnaireComponent,
    ListCandidatComponent,
    RegisterComponent,
    OffreEmploiComponent,
    DiplomeComponent,
    FormationComponent,
    ExperienceProfessionelleComponent,
    NouvelleCompetenceComponent,
    LoginCandidatComponent,
    LoginRecruteurComponent,
    NouvelleCompetenceComponent,
    DiplomeComponent,
    ExperienceProfessionelleComponent,
    FormationComponent,
    CompetenceComponent,
    CvComponent,
    SingleOffreComponent



  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    ToastrModule.forRoot(),
    CommonModule,
    MatIconModule,
    BrowserAnimationsModule,
    NgxPaginationModule,



  ],

  providers: [
    DatePipe,DecimalPipe,

    { provide: APP_BASE_HREF, useValue: '' }

],
bootstrap: [AppComponent]

})
export class AppModule {
}

export const experencesPro = [ExperienceProfessionelleComponent]


