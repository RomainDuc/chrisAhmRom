import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauQuestionnaireComponent } from './nouveau-questionnaire.component';

describe('NouveauQuestionnaireComponent', () => {
  let component: NouveauQuestionnaireComponent;
  let fixture: ComponentFixture<NouveauQuestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauQuestionnaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
