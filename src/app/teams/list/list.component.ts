import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../_services/team.services';
import { Team } from '../../_models/team'

@Component({
  selector: 'app-team-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class TeamListComponent implements OnInit {
  teams: Team[];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService.getAll().subscribe(teams => this.teams = teams);
  }

  deleteTeam(id: string) {
    this.teamService.delete(id).subscribe(() => {
      this.teams = this.teams.filter(team => team.teamId !== id);
    });
  }
}
