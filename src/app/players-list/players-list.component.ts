import { Component, OnInit, Input } from '@angular/core';
import {Player} from '../models/player';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit{
  @Input() players : Array<Player>;

  constructor() { }

  ngOnInit(): void {
  }
}
