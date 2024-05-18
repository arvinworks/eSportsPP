import { Component } from '@angular/core';
import { AccountService } from './_services';
import { Account, Role } from './_models';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  Role = Role;
  account: Account;
  darkMode = false;
  showTeams = false; // Add the showTeams property
  showPlayers = false; // Add the showPlayers property

  constructor(private accountService: AccountService) {
    this.accountService.account.subscribe(x => this.account = x);
  }

  logout() {
    this.accountService.logout();
  }

  toggleTeams() {
    this.showTeams = !this.showTeams;
    // Set showPlayers to false when toggling teams
    this.showPlayers = false;
  }

  togglePlayers() {
    this.showPlayers = !this.showPlayers;
    // Set showTeams to false when toggling players
    this.showTeams = false;
  }
}
