import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TetrisCoreModule } from 'ngx-tetris';
import { HotkeyModule } from 'angular2-hotkeys';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { GameComponent } from './game/game.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'game', component: GameComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    TetrisCoreModule,
    RouterModule.forRoot(appRoutes),
    HotkeyModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
