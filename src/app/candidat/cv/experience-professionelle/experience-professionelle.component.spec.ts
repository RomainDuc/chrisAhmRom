import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceProfessionelleComponent } from './experience-professionelle.component';

describe('ExperienceProfessionelleComponent', () => {
  let component: ExperienceProfessionelleComponent;
  let fixture: ComponentFixture<ExperienceProfessionelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceProfessionelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceProfessionelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
