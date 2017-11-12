import { Action } from '@ngrx/store';
import { Chore } from '../models/chores.model';


export const ADD = '[Chore] Add';
export const LOAD = '[Chore] Load';

export class Add implements Action {
  readonly type = ADD;

  constructor(public payload: Chore) {}
}

export class Load implements Action {
  readonly type = LOAD;
}

export type Actions = Add | Load;


