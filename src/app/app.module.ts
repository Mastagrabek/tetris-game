import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TetrisCoreModule } from 'ngx-tetris';
import { HotkeyModule } from 'angular2-hotkeys';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { GameComponent } from './game/game.component';
import { Routes, RouterModule } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {PlayerService} from './services/player.service';
import { PlayersListComponent } from './players-list/players-list.component';

const appRoutes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'game', component: GameComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    GameComponent,
    PlayersListComponent,
  ],
  imports: [
    BrowserModule,
    TetrisCoreModule,
    RouterModule.forRoot(appRoutes),
    HotkeyModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
