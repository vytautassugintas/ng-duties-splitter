import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {choresReducer} from './store/reducers/chores.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ chores: choresReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
