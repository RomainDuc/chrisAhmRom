import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleCompetenceComponent } from './nouvelle-competence.component';

describe('NouvelleCompetenceComponent', () => {
  let component: NouvelleCompetenceComponent;
  let fixture: ComponentFixture<NouvelleCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleCompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
