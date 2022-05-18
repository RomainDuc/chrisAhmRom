import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { offreEmploi } from '../model/offreEmlpoi.model';
import { OffreServiceService } from '../services/offre-service.service';

@Component({
  selector: 'app-single-offre',
  templateUrl: './single-offre.component.html',
  styleUrls: ['./single-offre.component.css'],
})
export class SingleOffreComponent implements OnInit {


  idOffre: number = 0;
  offreAffichage!: offreEmploi;


  constructor(
    private offreService: OffreServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getOffre();
  }

  getOffre() {
    this.route.params.subscribe((params) => {
      this.idOffre = +params['id'];
      this.offreService.find(this.idOffre).subscribe((offre) => {
        this.offreAffichage = offre;
      });
    });
  }
}
