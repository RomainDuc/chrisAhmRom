import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Lieu } from '../model/lieu.model';
import { LieuxService } from '../services/lieux.service';

@Component({
  selector: 'app-lieux',
  templateUrl: './lieux.component.html',
  styleUrls: ['./lieux.component.css'],
})
export class LieuxComponent implements OnInit {
  lieux$!: Observable<Lieu[]>;

  /*
  lieu = new FormGroup({
    activiteLieu: new FormControl(''),
  });
 */
  constructor(
    private lieuService: LieuxService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.lieux$ = this.lieuService.getAllLieux();
  }

  getLieux() {
    //this.lieuService.getAllLieux().subscribe();
  }
  getLieu(id: number): void {
    // this.questObjet = {id: -1,
    //   note: 0,
    //   secteurActivite: "",
    //   questions: []
    // };
    /*
    if (id) {
      this.route.params.subscribe((params) => {
        this.id = id;
        this.lieuService.find(this.id).subscribe(data => this.lieux[this.id] = data);
      })
    } else {
      this.lieuService.getAllLieux().subscribe(data => this.lieux = data);
    }
  */
  }
  /*
  addLieu(l: Lieu) {
     this.lieuService.add(l);
  }
 */
}
