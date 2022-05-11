import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DernieresOffresComponent } from './dernieres-offres.component';

describe('DernieresOffresComponent', () => {
  let component: DernieresOffresComponent;
  let fixture: ComponentFixture<DernieresOffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DernieresOffresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DernieresOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
