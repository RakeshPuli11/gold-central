import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const CanActivateFn = ()=> {
  const router = inject(Router);
    const token = localStorage.getItem('token');
    if (!token) {
      return true;
    } else {
      router.navigate(['']);
      return false;
  }
}