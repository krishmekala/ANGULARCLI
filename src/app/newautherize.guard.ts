import { CanActivateFn } from '@angular/router';

export const newautherizeGuard: CanActivateFn = (route, state) => {
    alert('You do not have permission to view this page');
    return true ;
  };

