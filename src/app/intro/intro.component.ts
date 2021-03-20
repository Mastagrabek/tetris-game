import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Player} from '../models/player';
import {PlayerService} from '../services/player.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  players : Player[];
  playerForm : FormGroup;

  constructor(private router: Router,
              private formBuilder : FormBuilder,
              private playerService : PlayerService
              ) { }

  ngOnInit(): void {
   this.playerForm = this.buildPlayerForm();
   console.log(this.players)
  }

  addPlayer() {
    this.playerService.addPlayer(this.playerForm.value)
    this.getPlayers();
  }

  getPlayers() {
    return this.playerService.getPlayers()
  }

  buildPlayerForm() {
    return this.formBuilder.group({
      name: '',
      email: ''
    })
  }
}
