import {Component} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

interface AppState {
  chores: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
  }

  // increment() {
  //   this.store.dispatch({type: Add});
  // }
  //
  // decrement() {
  //   this.store.dispatch({type: Load});
  // }

}
