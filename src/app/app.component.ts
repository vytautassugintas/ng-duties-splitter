import {Component} from '@angular/core';
import {Chore} from './store/models/chores.model';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {Add, Load} from './store/actions/chore';

interface AppState {
  chores: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  chores: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.chores = store.select('chores');
  }

  increment() {
    this.store.dispatch({type: Add});
  }

  decrement() {
    this.store.dispatch({type: Load});
  }

}
