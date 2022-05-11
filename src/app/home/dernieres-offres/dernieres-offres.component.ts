import { Component, OnInit } from '@angular/core';

import { OffreEmploi } from 'src/app/model/offreEmploi';
import { OffreServiceService } from 'src/app/services/offre-service.service';




@Component({
  selector: 'app-dernieres-offres',
  templateUrl: './dernieres-offres.component.html',
  styleUrls: ['./dernieres-offres.component.css']
})
export class DernieresOffresComponent implements OnInit {

  offres! : OffreEmploi[];


  items = [
    // tslint:disable-next-line: max-line-length
        { name: '1', active: false},
    // tslint:disable-next-line: max-line-length
        { name: '2', active: false  },
    // tslint:disable-next-line: max-line-length
        { name: '3', active: false  }
      ];

      items2 = [
    // tslint:disable-next-line: max-line-length
        { name: '1', active: false },
    // tslint:disable-next-line: max-line-length
        { name: '2', active: false},
    // tslint:disable-next-line: max-line-length
        { name: '3', active: false}
      ];

  constructor(private offreService: OffreServiceService) {
    this.getOffffres();
   }

  ngOnInit(): void {
   // this.getOffffres();
  }

  toggleClass(item : any) {
    for (const i in this.items) {
      if (this.items[i].name !== item.name) {
      this.items[i].active = false;
      }
    }
// tslint:disable-next-line: forin
    for (const i in this.items2) {
      this.items2[i].active = false;
    }
    item.active = !item.active;
  }

  toggleClass2(item: any) {
    for (const i in this.items2) {
      if (this.items2[i].name !== item.name) {
      this.items2[i].active = false;
      }
    }

    for (const i in this.items) {
      this.items[i].active = false;
    }
    item.active = !item.active;
  }

  getOffffres() {
    this.offreService.getAll().subscribe(data => this.offres= data)
  }

}
