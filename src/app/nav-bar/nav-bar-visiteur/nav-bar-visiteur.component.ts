import { Component, OnInit } from '@angular/core';
import { faBlog } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-nav-bar-visiteur',
  templateUrl: './nav-bar-visiteur.component.html',
  styleUrls: ['./nav-bar-visiteur.component.css']
})
export class NavBarVisiteurComponent implements OnInit {

   faNetwork = faBlog;
  //<i class="fa-regular fa-chart-network"></i>
  constructor() { }

  ngOnInit(): void {
  }

}
