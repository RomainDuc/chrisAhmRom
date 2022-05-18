import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { AlertService } from 'src/app/services/alert.service';
import { CandidatService } from 'src/app/services/candidat.service';
import { ToastrService } from 'ngx-toastr';
import { Candidat } from 'src/app/model/candidat.model';
//import { MustMatch } from 'src/app/_helpers/must-match.validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
    ]
})
export class RegisterComponent implements OnInit {

  dateNaissance !: Date;
  @Input() viewMode = false;
  @Input() currentCandidat: Candidat = {
    id: -1,
    login: '',
    password :'',
    nom: '',
    prenom: '',
    email: '',
    disponibilite: false,
    cvs: [],
    candidatOffreEmploi: [],
    dateNaissance: new Date(),

  };



  constructor(
    private candidatService: CandidatService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    if (!this.viewMode) {
      this.getCandidat(this.route.snapshot.params["id"]);
    }
  }

  getCandidat(id: number): void {
    this.candidatService.find(id)
      .subscribe({
        next: (data:any) => {
          this.candidatService = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


  updateCandidat1(status: boolean): void {
    const data = {
      id:this.currentCandidat.id,
      login: this.currentCandidat.login,
      password : this.currentCandidat.password,
      nom: this.currentCandidat.nom,
      prenom: this.currentCandidat.prenom,
      email: this.currentCandidat.email,
      dateNaissance: this.currentCandidat.dateNaissance,
      disponibilite: this.currentCandidat.disponibilite,
      cv: this.currentCandidat.cvs,
      candidatOffreEmploi: this.currentCandidat.candidatOffreEmploi

    };



    this.candidatService.update(this.currentCandidat.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          //this.currentCandidat.published = status;
          this.toastr.success('The Candidat was updated successfully!');
        },
        error: (e) => console.error(e)
      });
  }

  updateCandidat(): void {


    this.candidatService.update(this.currentCandidat.id, this.currentCandidat)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.toastr.success('This tutorial was updated successfully!');
        },
        error: (e) => console.error(e)
      });
  }

  deleteCandidat(): void {
    this.candidatService.delete(this.currentCandidat.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/candidat']);
        },
        error: (e) => console.error(e)
      });
  }

}







