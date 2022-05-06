import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jobSearch = new FormGroup({
    tools: new FormControl(''),
    location: new FormControl(''),
    experience: new FormControl(''),
  });

    competences !: string;

  constructor() { }

  ngOnInit(): void {
  }

}
