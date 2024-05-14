import { Component } from '@angular/core';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent {
  showTables = false;
  showBracket = false;
  selectedTournamentData: any;

  toggleTournamentData(game: string) {
    if (game === 'dota2') {
      this.showTables = !this.showTables;
      this.selectedTournamentData = this.showTables ? this.getDota2Data() : [];
    } else {
      this.showTables = false;
    }
    this.showBracket = false; // Reset the bracket image visibility when changing games
  }

  getDota2Data() {
    return [
      {
        tournament: 'ESL One Birmingham 2024',
        date: 'Apr 22 - 28, 2024',
        prizePool: '$1,000,000',
        location: 'United Kingdom Birmingham',
        winner: 'Team Falcons',
        runnerUp: 'BetBoom Team',
        link: '#'
      },
      {
        tournament: 'Elite League',
        date: 'Mar 31 - Apr 14, 2024',
        prizePool: '$960,000',
        location: 'Europe',
        winner: 'Xtreme Gaming',
        runnerUp: 'Team Falcons',
        link: '#'
      }
    ];
  }

  toggleBracketImage() {
    this.showBracket = !this.showBracket;
  }
}
