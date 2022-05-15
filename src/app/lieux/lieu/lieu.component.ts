import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lieu } from 'src/app/model/lieu.model';
import { LieuxService } from 'src/app/services/lieux.service';

@Component({
  selector: 'app-lieu',
  templateUrl: './lieu.component.html',
  styleUrls: ['./lieu.component.css']
})
export class LieuComponent implements OnInit {


  @Input() lieu!: Lieu;

  constructor(
    private lieuService: LieuxService,
    private router: Router)
  { }

  ngOnInit(): void {
  }

}
