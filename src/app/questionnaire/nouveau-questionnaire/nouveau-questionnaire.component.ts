import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/model/question.model';
import { Questionnaire } from 'src/app/model/questionnaire.model';
import { QuestionService } from 'src/app/services/question.service';
import { QuestionaireService } from 'src/app/services/questionaire.service';

@Component({
  selector: 'app-nouveau-questionnaire',
  templateUrl: './nouveau-questionnaire.component.html',
  styleUrls: ['./nouveau-questionnaire.component.css'],
})
export class NouveauQuestionnaireComponent implements OnInit {
  questObjet!: Questionnaire;
  id!: number;
  visible: boolean = false;
  question! : Question;
  indexQuestion : number = 1;

  questionnaire = new FormGroup({
    secteurActivite: new FormControl(''),
  });

  questionForm = new FormGroup({
    texte: new FormControl(),
  });

  constructor(
    private questionnaireService: QuestionaireService,
    private router: Router,
    private route: ActivatedRoute,
    private questionService : QuestionService
  ) {}

  ngOnInit(): void {
    this.getInit();
  }

  getInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      //if(this.id === null && this.id === undefined)
      if (!this.id) {
        this.questObjet = {
          id: -1,
          note: 0,
          secteurActivite: '',
          questions: [],
        };
      } else {
        this.questObjet = {
          id: -1,
          note: 0,
          secteurActivite: '',
          questions: [],
        };
        this.getQuestionnaire(this.id);
        this.visible = true;
      }
    });
  }

  getQuestionnaire(id: number) {
    // this.questObjet = {id: -1,
    //   note: 0,
    //   secteurActivite: "",
    //   questions: []
    // };
    this.questionnaireService.find(id).subscribe((data) => {
      this.questObjet = data;
      this.questionnaire.controls['secteurActivite'].setValue(
        this.questObjet.secteurActivite
      );
    });
  }

  creeQestionnaire() {
    //on declare un objet pour qu'on l'envoye ensuite dans la requete add
    (this.questObjet.secteurActivite =
      this.questionnaire.get('secteurActivite')?.value),
      //console.log(this.questObjet)
      //ok en gros si ya pas le .subscribe après, la requête ne se fait même pas !
      this.questionnaireService.add(this.questObjet).subscribe((data) => {
        this.questObjet = data;
        this.router.navigate(['questionnaire']);
        //console.log(this.questObjet.id)
      });

    //console.log("ca a marché peut-etre")
  }

  confirmQuestion() {
    this.question = {
      id: -1,
    index: this.indexQuestion,
    texte: this.questionForm.get('texte')?.value,
    questionnaire: this.questObjet,
    reponses:[]
    }
    this.questionService.add(this.question).subscribe(data => {
      this.question = data
    })

  }
}
