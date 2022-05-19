import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Questionnaire } from '../model/questionnaire.model';
import { QuestionaireService } from '../services/questionaire.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
})
export class QuestionnaireComponent implements OnInit {
  questionnaires!: Questionnaire[];

  //icones :
  iconeEdit = faEdit;
  iconePoubelle = faTrash;

  constructor(private questionnaireService: QuestionaireService) {}

  ngOnInit(): void {
    this.getQuestionnaires();
  }

  getQuestionnaires() {
    this.questionnaireService
      .getAll()
      .subscribe((data) => (this.questionnaires = data));
  }

  supprimer(id: number) {
    this.questionnaireService.delete(id).subscribe((data) => {
      if (data == 'DELETED SUCCESSFULLY') {
        this.getQuestionnaires();
        console.log(data);
      }
    });
  }
}
