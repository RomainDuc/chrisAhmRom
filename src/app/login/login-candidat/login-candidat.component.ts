import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Candidat } from 'src/app/model/candidat.model';
import { CandidatService } from 'src/app/services/candidat.service';

@Component({
  selector: 'app-login-candidat',
  templateUrl: './login-candidat.component.html',
  styleUrls: ['./login-candidat.component.css'],
})
export class LoginCandidatComponent implements OnInit {
  idConnexion!: number;

  loginForm = new FormGroup({
    login: new FormControl(),
    password: new FormControl(),
  });
  candidat!: Candidat;

  constructor(
    private candidatService: CandidatService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.candidatService
      .login(
        this.loginForm.get('login')?.value,
        this.loginForm.get('password')?.value
      )
      .subscribe((data) => {
        this.candidat = data;
        localStorage.setItem('id', this.candidat.id.toString());
        let idObs: number = this.candidat.id;
        console.log(this.candidat.id);
        this.idConnexion = this.candidatService.connexion();
        this.candidatService.getSubject().next(idObs);
        this.router.navigate(['home']);
      });
  }
}
