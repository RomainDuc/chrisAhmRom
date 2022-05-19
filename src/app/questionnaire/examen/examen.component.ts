import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Questionnaire } from 'src/app/model/questionnaire.model';

import { QuestionaireService } from 'src/app/services/questionaire.service';
import { ReponseService } from 'src/app/services/reponse.service';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css'],
})
export class ExamenComponent implements OnInit {
  questionnaire: Questionnaire = {
    id: -1,
    note: 9,
    secteurActivite: '',
    questions: [],
  };
  id!: number;
  qCMValide: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private questionnaireService: QuestionaireService,
    private reponseService: ReponseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.getQuestionnaire();
    this.nettoyerQuestionnaire();
  }

  //un get avec les réponses aux questions (faut faire ca sinon on les a pas..)
  getQuestionnaire() {
    this.questionnaireService.find(this.id).subscribe((data) => {
      this.questionnaire = data;
      this.questionnaire.questions.forEach((question) => {
        this.reponseService
          .getAllByQuestion(question.id)
          .subscribe((reponse) => {
            question.reponses = reponse;
          });
      });
      // this.nettoyerQuestionnaire();
    });
  }

  //récupérer l'info que le gar a clické sur le bouton check pour cette réponse de cette question
  changeVraiFaux(idQuestion: number, idReponse: number) {
    this.questionnaire.questions.forEach((question) => {
      if (question.id === idQuestion) {
        question.reponses.forEach((reponse) => {
          if (reponse.id === idReponse) {
            reponse.choisie = true;
          } else {
            reponse.choisie = false;
          }
        });
      }
    });
  }
  //faut que quand on charge la page, ca nous remet le statut "choisi" à zéro pour pouvoir repasser le questionnaire
  nettoyerQuestionnaire() {
    this.questionnaire.questions.forEach((question) => {
      question.reponses.forEach((reponse) => {
        reponse.choisie = false;
      });
    });
  }

  //enregister les Réponses sélectionnées dans la DB
  validerQuestionnaire() {
    this.questionnaire.questions.forEach((question) => {
      question.reponses.forEach((reponse) => {
        this.reponseService.add(reponse).subscribe();
        this.qCMValide = true;
      });
    });
    this.router.navigate(['/questionnaire']);
  }
}
