import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TetrisCoreModule} from 'ngx-tetris';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TetrisCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
