import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { canActivateViaAuthGuardGuard } from './can-activate-via-auth-guard.guard';

describe('canActivateViaAuthGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canActivateViaAuthGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
