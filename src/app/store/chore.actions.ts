import { Action } from '@ngrx/store';
import { Chore } from './chore.model';

export const LOAD_CHORES = '[Chore] Load Chores';
export const ADD_CHORE = '[Chore] Add Chore';
export const ADD_CHORES = '[Chore] Add Chores';
export const UPDATE_CHORE = '[Chore] Update Chore';
export const UPDATE_CHORES = '[Chore] Update Chores';
export const DELETE_CHORE = '[Chore] Delete Chore';
export const DELETE_CHORES = '[Chore] Delete Chores';
export const CLEAR_CHORES = '[Chore] Clear Chores';

export class LoadChores implements Action {
  readonly type = LOAD_CHORES;

  constructor(public payload: { users: Chore[] }) {}
}

export class AddChore implements Action {
  readonly type = ADD_CHORE;

  constructor(public payload: { user: Chore }) {}
}

export class AddChores implements Action {
  readonly type = ADD_CHORES;

  constructor(public payload: { users: Chore[] }) {}
}

export class UpdateChore implements Action {
  readonly type = UPDATE_CHORE;

  constructor(public payload: { user: { id: string, changes: Chore } }) {}
}

export class UpdateChores implements Action {
  readonly type = UPDATE_CHORES;

  constructor(public payload: { users: { id: string, changes: Chore }[] }) {}
}

export class DeleteChore implements Action {
  readonly type = DELETE_CHORE;

  constructor(public payload: { id: string }) {}
}

export class DeleteChores implements Action {
  readonly type = DELETE_CHORES;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearChores implements Action {
  readonly type = CLEAR_CHORES;
}

export type All =
  LoadChores
  | AddChore
  | AddChores
  | UpdateChore
  | UpdateChores
  | DeleteChore
  | DeleteChores
  | ClearChores;
