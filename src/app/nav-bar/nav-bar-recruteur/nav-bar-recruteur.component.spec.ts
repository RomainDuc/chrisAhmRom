import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarRecruteurComponent } from './nav-bar-recruteur.component';

describe('NavBarRecruteurComponent', () => {
  let component: NavBarRecruteurComponent;
  let fixture: ComponentFixture<NavBarRecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarRecruteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarRecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
