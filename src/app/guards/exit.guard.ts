import { CanDeactivateFn } from '@angular/router';
import { CanExit } from '../models/guard-interface';

export const exitGuard: CanDeactivateFn<CanExit> = (
  component: CanExit,
  currentRoute,
  currentState,
  nextState
) => {
  console.log(component.isDirty());
  return (
    !component.isDirty() || window.confirm('Voulez-vous vraiment quitter ?')
  );
};
