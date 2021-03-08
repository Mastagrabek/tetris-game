import { Component, OnInit, ViewChild } from '@angular/core';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';
import {TetrisCoreComponent} from 'ngx-tetris';
import  { Router} from '@angular/router'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public points : number = 0;
 
  @ViewChild('game')
  private _tetris: TetrisCoreComponent;
  
  ngOnInit(): void {
  }

  constructor(private _hotkeysService: HotkeysService, private router: Router) { 
    this._addHotkeys();
  }

  public bw = false;
  public moveLeft = false;
  public moveDown = false;
  public moveRight = false;
  public rotate = false;
  public start = false;
  public stop = false;
  public reset = false;

  public onLineCleared() {
    this.points += 50;
  }

  public onGameOver() {
    alert("Game over!!!")
  }

  public onrotateButtonPressed() {
    this._tetris.actionRotate();
  }

  public onCancelGame() {
    this.router.navigate([''])
  }

  private _addHotkeys() {
    this._hotkeysService.add(new Hotkey('space', (event: KeyboardEvent): boolean => {
        this._tetris.actionRotate();
        return false;
    }));

    this._hotkeysService.add(new Hotkey('left', (event: KeyboardEvent): boolean => {
        this._tetris.actionLeft();
        return false;
    }));

    this._hotkeysService.add(new Hotkey('down', (event: KeyboardEvent): boolean => {
        this._tetris.actionDown();
        return false;
    }));

    this._hotkeysService.add(new Hotkey('right', (event: KeyboardEvent): boolean => {
        this._tetris.actionRight();
        return false;
    }));
}

}
