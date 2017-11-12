import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Chore } from './chore.model';
import * as ChoreActions from './chore.actions';

export interface State extends EntityState<Chore> {
  selectedChoreId: number | null;
}

export const adapter: EntityAdapter<Chore> = createEntityAdapter<Chore>();

export const initialState: State = adapter.getInitialState({
  selectedUserId: null
});

export function reducer(
  state = initialState,
  action: ChoreActions.All
): State {
  switch (action.type) {
    case ChoreActions.ADD_CHORE: {
      return adapter.addOne(action.payload.user, state);
    }

    case ChoreActions.ADD_CHORES: {
      return adapter.addMany(action.payload.users, state);
    }

    case ChoreActions.UPDATE_CHORE: {
      return adapter.updateOne(action.payload.user, state);
    }

    case ChoreActions.UPDATE_CHORES: {
      return adapter.updateMany(action.payload.users, state);
    }

    case ChoreActions.DELETE_CHORE: {
      return adapter.removeOne(action.payload.id, state);
    }

    case ChoreActions.DELETE_CHORES: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case ChoreActions.LOAD_CHORES: {
      return adapter.addAll(action.payload.users, state);
    }

    case ChoreActions.CLEAR_CHORES: {
      return adapter.removeAll({ ...state, selectedUserId: null });
    }

    default: {
      return state;
    }
  }
}

export const getSelectedUserId = (state: State) => state.selectedUserId;
