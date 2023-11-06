import { CanActivateFn } from '@angular/router';

export const canActivateViaAuthGuardGuard: CanActivateFn = (route, state) => {
  
  return true;
};
