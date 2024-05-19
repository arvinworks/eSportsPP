import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../_models/team';
import { Player } from '../_models/player';

@Injectable({ providedIn: 'root' })
export class TeamService {
  private apiUrl = '/api/teams';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Team[]> {
    return this.http.get<Team[]>(this.apiUrl);
  }

  getById(teamId: string): Observable<Team> {
    return this.http.get<Team>(`${this.apiUrl}/${teamId}`);
  }

  create(team: Team): Observable<Team> {
    return this.http.post<Team>(this.apiUrl, team);
  }

  update(teamId: string, team: Team): Observable<Team> {
    return this.http.put<Team>(`${this.apiUrl}/${teamId}`, team);
  }

  getPlayersByTeamId(teamId: string): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.apiUrl}/teams/${teamId}/players`);
  }

  delete(teamId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${teamId}`);
  }
}
