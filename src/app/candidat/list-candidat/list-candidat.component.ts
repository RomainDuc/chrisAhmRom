import { Component, OnInit,Inject, Input } from '@angular/core';
import { CandidatService} from '../../services/candidat.service'
import { Candidat} from '../../model/candidat.model';
//import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
//import { AlertService } from '../../services/alert.service';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
//import { MustMatch } from '../../_helpers/must-match.validator';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-candidat',
  templateUrl: './list-candidat.component.html',
  styleUrls: ['./list-candidat.component.css']
})
export class ListCandidatComponent implements OnInit {


  @Input() viewMode = false;
  @Input() currentCandidat: Candidat = {
    id:-1,
    login: '',
    password: '',
    nom: '',
    prenom: '',
    email: '',
    disponibilite: false,
    candidatOffreEmploi: [],
    dateNaissance: new Date(),
    cvs: []
  };


  message = '';

dateNaissance !: Date;
  candidat: Candidat = {
    id: -1,
    login: '',
    password: '',
    nom: '',
    prenom: '',
    email: '',
    disponibilite: false,
    cvs: [],
    candidatOffreEmploi: [],
    dateNaissance: new Date(),

  };


  form!: FormGroup;
  id!: number;
  isAddMode!: boolean;
  loading = false;
  submitted = false;

  candidatListe !: Candidat[];
  pagina :any;
  control: FormControl = new FormControl('');
  constructor(
    public candidatService: CandidatService,
    private route: ActivatedRoute,
    //private alertService: AlertService,
    private router : Router,
    public fb: FormBuilder,
    public toastr: ToastrService,
    private date: DatePipe
    ) {

      this. getAll();
      this.date;
    }

    ngOnInit() {

      if (!this.viewMode) {
        this.message = '';
        //this.getCandidat(this.route.snapshot.params["id"]);
      }

      this.getAll()

      this.id = this.route.snapshot.params['id'];
      this.isAddMode = !this.id;



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

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    this.loading = true;

}

  getAll(){
    this.candidatService.getAll().subscribe(
      data => this.candidatListe= data
    );
  }

  getData() {
    this.candidatService.getAll().subscribe(
      response =>{this.candidatListe = response;}
     );
    }


    removeData(id: number) : void {
      if (window.confirm('Are sure you want to delete this User ?')) {
      this.candidatService.delete(id)
        .subscribe(
          data => {
            console.log(data);
            this.toastr.warning('data successfully deleted!');
            this.getAll();
          },
          error => console.log(error));
    }
  }



  reloadCurrentRoute() {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(['candidat']);
    });
  }

  updateCandidat(): void {
    this.message = '';
    this.candidatService.update(this.currentCandidat.id, this.currentCandidat)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.toastr.success('This tutorial was updated successfully!');
        },
        error: (e) => console.error(e)
      });
  }

  updateCandidat1( id :number): void {
     this.candidatService.find(id).subscribe(data => {
       this.candidat = data;
     })



    // const data = {
    //   id:this.currentCandidat.id,
    //   login: this.currentCandidat.login,
    //   password : this.currentCandidat.password,
    //   nom: this.currentCandidat.nom,
    //   prenom: this.currentCandidat.prenom,
    //   email: this.currentCandidat.email,
    //   dateNaissance: this.currentCandidat.dateNaissance,
    //   disponibilite: this.currentCandidat.disponibilite,
    //   cv: this.currentCandidat.cvs,
    //   candidatOffreEmploi: this.currentCandidat.candidatOffreEmploi

    // };





    // this.candidatService.update(this.currentCandidat.id, this.currentCandidat)
    //   .subscribe({
    //     next: (res) => {
    //       console.log(res);
    //       //this.currentCandidat.published = status;
    //       this.toastr.success('The Candidat was updated successfully!');
    //     },
    //     error: (e) => console.error(e)
    //   });
  }

selectData(item: any) {
  this.candidatService.formData = this.fb.group(Object.assign({},item));

}


saveCandidat(): void {
  const data = {
    login: this.candidat.login,
    password: this.candidat.password,
    nom: this.candidat.nom,
    prenom: this.candidat.prenom,
    email: this.candidat.email,
    dateNaissance: this.candidat.dateNaissance,
    cv: this.candidat.cvs,
    disponibilite: this.candidat.disponibilite,
    candidatOffreEmploi:this.candidat.candidatOffreEmploi
  };

  this.candidatService.add(data)
  .pipe(first())
    .subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
        this.toastr.success('Candidat created with success');
        this.selectData;
        this.getAll()
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



















