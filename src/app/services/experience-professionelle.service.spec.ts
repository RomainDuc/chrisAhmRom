import { TestBed } from '@angular/core/testing';

import { ExperienceProfessionelleService } from './experience-professionelle.service';

describe('ExperienceProfessionelleService', () => {
  let service: ExperienceProfessionelleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienceProfessionelleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
