import { TestBed } from '@angular/core/testing';

import { NouvelleCompetenceService } from './nouvelle-competence.service';

describe('NouvelleCompetenceService', () => {
  let service: NouvelleCompetenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NouvelleCompetenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
