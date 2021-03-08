import { Component, ViewChild } from '@angular/core';
import { TetrisCoreComponent } from 'ngx-tetris'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('game')
  private _tetris: TetrisCoreComponent;

  public bw = false;
  public moveLeft = false;
  public moveDown = false;
  public moveRight = false;
  public rotate = false;
  public start = false;
  public stop = false;
  public reset = false;

  public onLineCleared() {
    console.log('Line cleared');
  }

  public onGameOver() {
    alert("Game over!!!")
  }

  public onrotateButtonPressed() {
    this._tetris.actionRotate();
  }
}
