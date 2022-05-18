import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/model/question.model';
import { Questionnaire } from 'src/app/model/questionnaire.model';
import { ReponseQues } from 'src/app/model/reponseQues.model';
import { QuestionService } from 'src/app/services/question.service';
import { QuestionaireService } from 'src/app/services/questionaire.service';
import { ReponseService } from 'src/app/services/reponse.service';


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


  reponse !: ReponseQues;
  reponses : ReponseQues[] = []

  afficheReponse : boolean = false;

  questionnaireAffichage !: Questionnaire;



  questionnaire = new FormGroup({
    secteurActivite: new FormControl(''),
  });

  questionForm = new FormGroup({
    texte: new FormControl(),
  });

  reponseForm = new FormGroup({
    nom : new FormControl(''),
    juste : new FormControl()
  });



  constructor(
    private questionnaireService: QuestionaireService,
    private router: Router,
    private route: ActivatedRoute,
    private questionService : QuestionService,
    private reponseService : ReponseService

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
      this.questionnaireAffichage= data
      this.visible = true;
      this.indexQuestion = this.questionnaireAffichage.questions.length + 1;
      this.questionnaireAffichage.questions.forEach(question => {
        this.reponseService.getAllByQuestion(question.id).subscribe(data => {
          question.reponses = data;
         })
      })
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
  //stocke la question en local, mais pas en base encore, je ne fais ca qu'une fois les réponses enregistrées
  confirmQuestion() {

    //initialise la question
    this.question = {
      id:-1,
      index: 0,
      texte : "",
      questionnaire : this.questObjet,
      reponses : []
    }



    this.question.index = this.indexQuestion;
    this.question.texte = this.questionForm.get('texte')?.value;
    this.afficheReponse = true;
    //this.questionnaireAffichage.questions.push(this.question)

  }


  ajoutReponse() {
    //faut ajouter une case Réponse
    this.reponse= {
      id: -1,
      nom : this.reponseForm.get('nom')?.value,
      juste : this.reponseForm.get('juste')?.value,
      choisie: false,
      question : this.question
    }
    this.reponses.push(this.reponse)
   // this.questionnaireAffichage.questions[this.questionnaireAffichage.questions.length-1].reponses.push(this.reponse);
    this.reponseForm.reset()


  }

  confirmReponses() {
    this.reponse= {
      id: -1,
      nom : this.reponseForm.get('nom')?.value,
      juste : this.reponseForm.get('juste')?.value,
      choisie: false,
      question : this.question

    }
    this.reponses.push(this.reponse)
    //this.questionnaireAffichage.questions[this.questionnaireAffichage.questions.length-1].reponses.push(this.reponse);
    //this.question.reponses = this.reponses;

    // console.log(this.question.id)
    // console.log(this.question.texte)
    // console.log(this.question.questionnaire.id)
   // this.questionnaireAffichage.questions = [];
    this.question.questionnaire.id = this.id
    this.questionService.add(this.question).subscribe(data => {
      this.question = data;
     // this.question.questionnaire.id = this.id
      this.reponses.forEach(item => {
        item.question.id = this.question.id
       // console.log( "id de Question de cette réponse", item.question.id)
        this.reponseService.add(item).subscribe(() => {
         // console.log("reponse sauvegardée")

        });
      })
      this.getQuestionnaire(this.id);
      this.reponses = []
    })


    this.afficheReponse= false;
    this.questionForm.reset();
    this.reponseForm.reset();
    this.indexQuestion =this.indexQuestion +1;
  }


}
