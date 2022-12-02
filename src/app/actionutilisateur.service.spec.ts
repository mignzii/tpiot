import { TestBed } from '@angular/core/testing';

import { ActionutilisateurService } from './actionutilisateur.service';

describe('ActionutilisateurService', () => {
  let service: ActionutilisateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionutilisateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
