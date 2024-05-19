import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../_services/players.services';
import { Player } from '../../_models/player';
import { Router } from '@angular/router'

@Component({
  selector: 'app-player-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[];

  constructor(
    private playerService: PlayerService,
    private router: Router  
  ) {}
  ngOnInit(): void {
    this.playerService.getAll().subscribe(players => this.players = players);
  }

  deletePlayer(id: string) {
    this.playerService.delete(id).subscribe(() => {
      this.players = this.players.filter(player => player.id !== id);
    });
  }

  viewPlayer(id: string) {
    this.router.navigate(['/players/profile', id]);
  }
}
