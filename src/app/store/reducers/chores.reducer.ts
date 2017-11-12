import {Action} from '@ngrx/store';
import {Actions, Add, Load} from '../actions/chore';

export function choresReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case Add:
      return state + 1;

    case Load:
      return state - 1;

    default:
      return state;
  }
}
