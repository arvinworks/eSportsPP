import { Component } from '@angular/core';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent {
  showTables = false;
  showBracket = false; 
  showSchedule = false;
  showScheduleDota2 = false;
  showScheduleValorant = false;
  showScheduleMobileLegends = false;

  selectedTournamentData: any;
  currentBracketImage: string = '';
  currentSchedule: any[] = [];

  toggleTournamentData(game: string) {
    if (game) {
      this.showTables = !this.showTables;
      this.showBracket = false;
      switch (game) {
        case 'dota2':
          this.selectedTournamentData = this.showTables ? this.getDota2Data() : [];
          break;
        case 'valorant':
          this.selectedTournamentData = this.showTables ? this.getValorantData() : [];
          break;
        case 'mobilelegends':
          this.selectedTournamentData = this.showTables ? this.getMobileLegendsData() : [];
          break;
        default:
          this.showTables = false;
          this.selectedTournamentData = [];
      }
    }
  }
  //dota 2
  BirminghamSchedule: any[] = [
    { date: 'April 25, 2024 - 19:00 SGT', match: 'Upper Bracket Semifinals', teams: 'Falcons Team Falcons vs Tundra Esports', result: '1:2 (Bo3)' },
    { date: 'April 25, 2024 - 23:20 SGT', match: 'Upper Bracket Semifinals', teams: 'OG vs BetBoom Team', result: '1:2 (Bo3)' },
    { date: 'April 26, 2024 - 19:00 SGT', match: 'Lower Bracket Round 1', teams: 'Liquid Team Liquid vs HEROIC', result: '2:1 (Bo3)' },
    { date: 'April 26, 2024 - 23:15 SGT', match: 'Lower Bracket Round 1', teams: 'XG Xtreme Gaming vs G2.iG', result: '1:2 (Bo3)' },
    { date: 'April 27, 2024 - 04:00 SGT', match: 'Lower Bracket Quarterfinals', teams: 'Falcons Team Falcons vs Team Liquid', result: '2:1 (Bo3)' },
    { date: 'April 27, 2024 - 19:00 SGT', match: 'Lower Bracket Quarterfinals', teams: 'OG vs G2.iG', result: '2:0 (Bo3)' },
    { date: 'April 27, 2024 - 22:35 SGT', match: 'Upper Bracket Final', teams: 'Tundra Tundra Esports vs BetBoom Team', result: '0:2 (Bo3)' },
    { date: 'April 28, 2024 - 02:05 SGT', match: 'Lower Bracket Semifinal', teams: 'Falcons Team Falcons vs OG', result: '2:1 (Bo3)' },
    { date: 'April 28, 2024 - 19:00 SGT', match: 'Lower Bracket Final', teams: 'Tundra Tundra Esports vs Team Falcons', result: '0:2 (Bo3)' },
    { date: 'April 28, 2024 - 23:00 SGT', match: 'Grand Final', teams: 'BetBoom Team vs Team Falcons', result: '0:3 (Bo5)' }
  ];

  eliteLeagueSchedule: any[] = [
    { date: 'April 12, 2024 - 17:00 SGT', match: 'Lower Bracket Round 1', teams: 'G2.iG G2 x iG vs Gaimin Gladiators GG', result: '0:2 (Bo3)' },
    { date: 'April 12, 2024 - 20:00 SGT', match: 'Lower Bracket Round 1', teams: 'Tundra Tundra Esports vs PSG Quest PSG Q', result: '0:2 (Bo3)' },
    { date: 'April 12, 2024 - 23:00 SGT', match: 'Upper Bracket Semifinals', teams: 'Falcons Team Falcons vs Xtreme Gaming XG', result: '2:0 (Bo3)' },
    { date: 'April 13, 2024 - 02:00 SGT', match: 'Upper Bracket Semifinals', teams: 'Liquid Team Liquid vs Azure Ray AR', result: '1:2 (Bo3)' },
    { date: 'April 13, 2024 - 17:00 SGT', match: 'Lower Bracket Quarterfinals', teams: 'XG Xtreme Gaming vs PSG Quest PSG Q', result: '2:0 (Bo3)' },
    { date: 'April 13, 2024 - 20:00 SGT', match: 'Lower Bracket Quarterfinals', teams: 'Liquid Team Liquid vs Gaimin Gladiators GG', result: '2:0 (Bo3)' },
    { date: 'April 13, 2024 - 23:00 SGT', match: 'Upper Bracket Final', teams: 'Falcons Team Falcons vs Azure Ray AR', result: '2:0 (Bo3)' },
    { date: 'April 14, 2024 - 02:00 SGT', match: 'Lower Bracket Semifinal', teams: 'Liquid Team Liquid vs Xtreme Gaming XG', result: '1:2 (Bo3)' },
    { date: 'April 14, 2024 - 21:00 SGT', match: 'Lower Bracket Final', teams: 'AR Azure Ray vs Xtreme Gaming XG', result: '0:2 (Bo3)' },
    { date: 'April 15, 2024 - 00:00 SGT', match: 'Grand Final', teams: 'Falcons Team Falcons vs Xtreme Gaming XG', result: '1:3 (Bo5)' }
  ];

  stockholmMajorSchedule: any[] = [
    { date: 'May 16, 2022 - 17:00 SGT', match: 'Upper Bracket Quarterfinals', teams: 'Tundra Esports vs Team Spirit ', result: '2:1 (Bo3)' },
    { date: 'May 16, 2022 - 21:10 SGT', match: 'Upper Bracket Quarterfinals', teams: 'Thunder Awaken vs BetBoom Team ', result: '2:1 (Bo3)' },
    { date: 'May 17, 2022 - 00:55 SGT', match: 'Upper Bracket Quarterfinals', teams: 'OG vs TSM ', result: '0:2 (Bo3)' },
    { date: 'May 17, 2022 - 03:45 SGT', match: 'Upper Bracket Quarterfinals', teams: 'Gaimin Gladiators vs T1 ', result: '2:0 (Bo3)' },
    { date: 'May 17, 2022 - 18:00 SGT', match: 'Lower Bracket Round 1', teams: 'Team Spirit vs beastcoast ', result: '0:2 (Bo3)' },
    { date: 'May 17, 2022 - 21:35 SGT', match: 'Lower Bracket Round 1', teams: 'BetBoom Team vs Team Liquid ', result: '2:1 (Bo3)' },
    { date: 'May 18, 2022 - 01:05 SGT', match: 'Lower Bracket Round 1', teams: 'OG vs BOOM Esports ', result: '2:0 (Bo3)' },
    { date: 'May 18, 2022 - 18:00 SGT', match: 'Lower Bracket Round 1', teams: 'T1 vs Fnatic ', result: '1:2 (Bo3)' },
    { date: 'May 18, 2022 - 21:55 SGT', match: 'Upper Bracket Semifinals', teams: 'Tundra Esports vs Thunder Awaken ', result: '2:0 (Bo3)' },
    { date: 'May 19, 2022 - 01:20 SGT', match: 'Upper Bracket Semifinals', teams: 'TSM vs Gaimin Gladiators ', result: '2:0 (Bo3)' },
    { date: 'May 20, 2022 - 18:00 SGT', match: 'Lower Bracket Round 2', teams: 'beastcoast vs BetBoom Team ', result: '2:1 (Bo3)' },
    { date: 'May 20, 2022 - 22:10 SGT', match: 'Lower Bracket Round 2', teams: 'OG vs Fnatic ', result: '2:1 (Bo3)' },
    { date: 'May 21, 2022 - 02:15 SGT', match: 'Lower Bracket Quarterfinals', teams: 'Gaimin Gladiators vs beastcoast', result: '2:0 (Bo3)' },
    { date: 'May 21, 2022 - 18:00 SGT', match: 'Lower Bracket Quarterfinals', teams: 'Thunder Awaken vs OG', result: '0:2 (Bo3)' },
    { date: 'May 21, 2022 - 21:35 SGT', match: 'Upper Bracket Final', teams: 'Tundra Esports vs TSM', result: '1:2 (Bo3)' },
    { date: 'May 22, 2022 - 01:45 SGT', match: 'Lower Bracket Semifinal', teams: 'Gaimin Gladiators vs OG', result: '0:2 (Bo3)' },
    { date: 'May 22, 2022 - 18:00 SGT', match: 'Lower Bracket Final', teams: 'Tundra Esports vs OG', result: '0:2 (Bo3)' },
    { date: 'May 22, 2022 - 22:00 SGT', match: 'Grand Final', teams: 'TSM vs OG', result: '1:3 (Bo5)' }
  ];

  BetBoomDachaDubaiSchedule: any[] = [
    { date: 'February 11, 2024 - 14:00 SGT', match: 'Upper Bracket Quarterfinals', teams: 'LGD Gaming vs BetBoom Team ', result: '0:2 (Bo3)' },
    { date: 'February 11, 2024 - 17:00 SGT', match: 'Upper Bracket Quarterfinals', teams: 'Team Spirit vs Gaimin Gladiators', result: '0:2 (Bo3)' },
    { date: 'February 11, 2024 - 19:40 SGT', match: 'Upper Bracket Quarterfinals', teams: 'Xtreme Gaming vs Team Falcons', result: '0:2 (Bo3)' },
    { date: 'February 11, 2024 - 23:00 SGT', match: 'Upper Bracket Quarterfinals', teams: 'Team Liquid vs Azure Ray', result: '1:2 (Bo3)' },
    { date: 'February 12, 2024 - 18:00 SGT', match: 'Lower Bracket Round 1', teams: 'LGD Gaming vs Team Spirit', result: '0:2 (Bo3)' },
    { date: 'February 12, 2024 - 20:40 SGT', match: 'Lower Bracket Round 1', teams: 'Xtreme Gaming vs Team Liquid', result: '0:2 (Bo3)' },
    { date: 'February 13, 2024 - 18:00 SGT', match: 'Upper Bracket Semifinals', teams: 'BetBoom Team vs Gaimin Gladiators', result: '2:0 (Bo3)' },
    { date: 'February 13, 2024 - 21:00 SGT', match: 'Upper Bracket Semifinals', teams: 'Team Falcons vs Azure Ray', result: '2:1 (Bo3)' },
    { date: 'February 14, 2024 - 18:00 SGT', match: 'Lower Bracket Quarterfinals', teams: 'Gaimin Gladiators vs Team Liquid', result: '1:2 (Bo3)' },
    { date: 'February 14, 2024 - 22:25 SGT', match: 'Lower Bracket Quarterfinals', teams: 'Azure Ray vs Team Spirit', result: '2:0 (Bo3)' },
    { date: 'February 15, 2024 - 17:00 SGT', match: 'Upper Bracket Final', teams: 'BetBoom Team vs Team Falcons', result: '1:2 (Bo3)' },
    { date: 'February 15, 2024 - 21:15 SGT', match: 'Lower Bracket Semifinal', teams: 'Azure Ray vs Team Liquid', result: '0:2 (Bo3)' },
    { date: 'February 16, 2024 - 16:30 SGT', match: 'Lower Bracket Final', teams: 'BetBoom Team vs Team Liquid', result: '1:2 (Bo3)' },
    { date: 'February 16, 2024 - 21:20 SGT', match: 'Grand Final', teams: 'Team Falcons vs Team Liquid', result: '3:0 (Bo5)' }
  ];

  ESLOneKualaLumpurSchedule: any[] = [
    { date: 'December 13, 2023 - 18:00 SGT', match: 'Upper Bracket Semifinals', teams: 'Azure Ray vs Team Falcons', result: '2:1 (Bo3)' },
    { date: 'December 13, 2023 - 18:20 SGT', match: 'Upper Bracket Semifinals', teams: 'G2 x iG vs Gaimin Gladiators', result: '1:2 (Bo3)' },
    { date: 'December 15, 2023 - 12:00 SGT', match: 'Lower Bracket Round 1', teams: 'Team Secret vs Team Liquid', result: '0:2 (Bo2)' },
    { date: 'December 15, 2023 - 15:55 SGT', match: 'Lower Bracket Round 1', teams: 'Tundra Esports vs BetBoom Team', result: '0:2 (Bo2)' },
    { date: 'December 15, 2023 - 19:30 SGT', match: 'Lower Bracket Quarterfinals', teams: 'Team Falcons vs Team Liquid', result: '1:2 (Bo3)' },
    { date: 'December 16, 2023 - 12:00 SGT', match: 'Lower Bracket Quarterfinals', teams: 'G2 x iG vs BetBoom Team', result: '0:2 (Bo3)' },
    { date: 'December 16, 2023 - 15:35 SGT', match: 'Upper Bracket Final', teams: 'Azure Ray vs Gaimin Gladiators', result: '0:2 (Bo3)' },
    { date: 'December 16, 2023 - 19:05 SGT', match: 'Lower Bracket Semifinal', teams: 'Team Liquid vs BetBoom Team', result: '2:0 (Bo3)' },
    { date: 'December 17, 2023 - 12:00 SGT', match: 'Lower Bracket Final', teams: 'Azure Ray vs Team Liquid', result: '2:1 (Bo3)' },
    { date: 'December 17, 2023 - 16:00 SGT', match: 'Grand Final', teams: 'Gaimin Gladiators vs Azure Ray', result: '2:3 (Bo5)' }
  ];
  //valorant
  MastersMadridSchedule: any[] = [
    { date: '2024-03-14 - 23:10 SGT', match: 'Round 1', teams: 'KC vs FPX', result: '2 : 0' },
    { date: '2024-03-15 - 23:10 SGT', match: 'Round 1', teams: 'GEN vs LOUD', result: '2 : 1' },
    { date: '2024-03-15 - 23:10 SGT', match: 'Round 1', teams: 'EDG vs PRX', result: '2 : 1' },
    { date: '2024-03-16 - 23:10 SGT', match: 'Round 1', teams: 'SEN vs TH', result: '2 : 1' },
    { date: '2024-03-16 - 23:10 SGT', match: 'Round 2', teams: 'SEN vs KC', result: '2 : 0' },
    { date: '2024-03-17 - 23:10 SGT', match: 'Round 2', teams: 'EDG vs GEN', result: '1 : 2' },
    { date: '2024-03-17 - 23:10 SGT', match: 'Round 2', teams: 'FPX vs LOUD', result: '0 : 2' },
    { date: '2024-03-18 - 23:10 SGT', match: 'Round 2', teams: 'TH vs PRX', result: '1 : 2' },
    { date: '2024-03-18 - 23:10 SGT', match: 'Round 3', teams: 'LOUD vs EDG', result: '2 : 0' },
    { date: '2024-03-19 - 23:10 SGT', match: 'Round 3', teams: 'KC vs PRX', result: '1 : 2' },
    { date: '2024-03-21 - 23:10 SGT', match: 'Upper Bracket Semifinals', teams: 'GEN vs PRX', result: '2 : 0' },
    { date: '2024-03-22 - 23:10 SGT', match: 'Upper Bracket Semifinals', teams: 'SEN vs LOUD', result: '2 : 1' },
    { date: '2024-03-22 - 23:10 SGT', match: 'Upper Bracket Final', teams: 'GEN vs SEN', result: '2 : 1' },
    { date: '2024-03-23 - 23:10 SGT', match: 'Lower Bracket Semifinal', teams: 'PRX vs LOUD', result: '2 : 0' },
    { date: '2024-03-23 - 23:10 SGT', match: 'Lower Bracket Final', teams: 'SEN vs PRX', result: '3 : 1' },
    { date: '2024-03-25 - 23:10 SGT', match: 'Grand Final', teams: 'GEN vs SEN', result: '2 : 3' }
  ];

  GameChangersChampionshipSchedule: any[] = [
    { date: 'November 29, 2023 - 01:15 SGT', match: 'Upper Bracket Quarterfinals', teams: 'Team Liquid Brazil TL.BR', result: '0 : 2', opponent: 'G2 Gozen G2.G' },
    { date: 'November 29, 2023 - 04:00 SGT', match: 'Upper Bracket Quarterfinals', teams: 'Evil Geniuses GC EG.GC', result: '0 : 2', opponent: 'Team SMG SMG' },
    { date: 'November 30, 2023 - 01:15 SGT', match: 'Upper Bracket Quarterfinals', teams: 'Chao Hui EDward Gaming EDGS', result: '0 : 2', opponent: 'Shopify Rebellion SR' },
    { date: 'November 30, 2023 - 03:20 SGT', match: 'Upper Bracket Quarterfinals', teams: 'BBL Queens BBL.Q', result: '2 : 0', opponent: 'KRÜ Blaze KRÜ.B' },
    { date: 'November 30, 2023 - 06:10 SGT', match: 'Upper Bracket Semifinals', teams: 'Team SMG SMG', result: '1 : 2', opponent: 'G2 Gozen G2.G' },
    { date: 'December 1, 2023 - 01:10 SGT', match: 'Lower Bracket Round 1', teams: 'Evil Geniuses GC EG.GC', result: '0 : 2', opponent: 'Team Liquid Brazil TL.BR' },
    { date: 'December 1, 2023 - 03:30 SGT', match: 'Lower Bracket Round 1', teams: 'KRÜ Blaze KRÜ.B', result: '2 : 0', opponent: 'Chao Hui EDward Gaming EDGS' },
    { date: 'December 1, 2023 - 06:10 SGT', match: 'Upper Bracket Semifinals', teams: 'BBL Queens BBL.Q', result: '0 : 2', opponent: 'Shopify Rebellion SR' },
    { date: 'December 2, 2023 - 01:10 SGT', match: 'Lower Bracket Quarterfinals', teams: 'Team SMG SMG', result: '2 : 0', opponent: 'KRÜ Blaze KRÜ.B' },
    { date: 'December 2, 2023 - 03:30 SGT', match: 'Lower Bracket Quarterfinals', teams: 'BBL Queens BBL.Q', result: '0 : 2', opponent: 'Team Liquid Brazil TL.BR' },
    { date: 'December 2, 2023 - 06:10 SGT', match: 'Upper Bracket Final', teams: 'G2 Gozen G2.G', result: '1 : 2', opponent: 'Shopify Rebellion SR' },
    { date: 'December 3, 2023 - 01:10 SGT', match: 'Lower Bracket Semifinal', teams: 'Team Liquid Brazil TL.BR', result: '2 : 1', opponent: 'Team SMG SMG' },
    { date: 'December 3, 2023 - 04:40 SGT', match: 'Lower Bracket Final', teams: 'G2 Gozen G2.G', result: '0 : 2', opponent: 'Team Liquid Brazil TL.BR' },
    { date: 'December 4, 2023 - 01:10 SGT', match: 'Grand Final', teams: 'Shopify Rebellion SR', result: '3 : 2', opponent: 'Team Liquid Brazil TL.BR' }
];

  valorantChampions2023Schedule: any[] = [
  { date: 'August 7, 2023 - 03:15 SGT', match: 'Group D', teams: 'TL Team Liquid vs Natus Vincere NAVI', result: '0 : 2' },
  { date: 'August 7, 2023 - 06:20 SGT', match: 'Group D', teams: 'DRX DRX vs LOUD LOUD', result: '2 : 1' },
  { date: 'August 8, 2023 - 03:10 SGT', match: 'Group B', teams: 'FUT FUT Esports vs T1 T1', result: '2 : 0' },
  { date: 'August 8, 2023 - 05:10 SGT', match: 'Group B', teams: 'EG Evil Geniuses vs FunPlus Phoenix FPX', result: '2 : 0' },
  { date: 'August 8, 2023 - 07:20 SGT', match: 'Group D', teams: 'NAVI Natus Vincere vs DRX DRX', result: '1 : 2' },
  { date: 'August 9, 2023 - 03:10 SGT', match: 'Group C', teams: 'NRG NRG vs Bilibili Gaming BLG', result: '0 : 2' },
  { date: 'August 9, 2023 - 05:40 SGT', match: 'Group C', teams: 'FNC Fnatic vs ZETA DIVISION ZETA', result: '2 : 0' },
  { date: 'August 9, 2023 - 07:45 SGT', match: 'Group B', teams: 'EG Evil Geniuses vs FUT Esports FUT', result: '2 : 0' },
  { date: 'August 10, 2023 - 03:10 SGT', match: 'Group A', teams: 'PRX Paper Rex vs KRÜ Esports KRÜ', result: '2 : 0' },
  { date: 'August 10, 2023 - 05:20 SGT', match: 'Group A', teams: 'EDG EDward Gaming vs Giants GIA', result: '2 : 1' },
  { date: 'August 10, 2023 - 09:10 SGT', match: 'Group C', teams: 'FNC Fnatic vs Bilibili Gaming BLG', result: '2 : 0' },
  { date: 'August 11, 2023 - 03:10 SGT', match: 'Group D', teams: 'TL Team Liquid vs LOUD LOUD', result: '0 : 2' },
  { date: 'August 11, 2023 - 05:30 SGT', match: 'Group B', teams: 'FPX FunPlus Phoenix vs T1 T1', result: '0 : 2' },
  { date: 'August 11, 2023 - 07:50 SGT', match: 'Group A', teams: 'PRX Paper Rex vs EDward Gaming EDG', result: '2 : 0' },
  { date: 'August 12, 2023 - 03:10 SGT', match: 'Group A', teams: 'KRÜ KRÜ Esports vs Giants GIA', result: '0 : 2' },
  { date: 'August 12, 2023 - 05:50 SGT', match: 'Group C', teams: 'ZETA ZETA DIVISION vs NRG NRG', result: '0 : 2' },
  { date: 'August 13, 2023 - 03:10 SGT', match: 'Group D', teams: 'NAVI Natus Vincere vs LOUD LOUD', result: '1 : 2' },
  { date: 'August 13, 2023 - 07:00 SGT', match: 'Group B', teams: 'FUT FUT Esports vs T1 T1', result: '2 : 0' },
  { date: 'August 14, 2023 - 03:10 SGT', match: 'Group A', teams: 'EDG EDward Gaming vs Giants GIA', result: '2 : 0' },
  { date: 'August 14, 2023 - 05:15 SGT', match: 'Group C', teams: 'BLG Bilibili Gaming vs NRG NRG', result: '2 : 0' },
  { date: 'August 17, 2023 - 03:10 SGT', match: 'Upper Bracket Quarterfinals', teams: 'FNC Fnatic vs LOUD LOUD', result: '0 : 2' },
  { date: 'August 17, 2023 - 05:25 SGT', match: 'Upper Bracket Quarterfinals', teams: 'PRX Paper Rex vs FUT Esports FUT', result: '2 : 0' },
  { date: 'August 18, 2023 - 03:10 SGT', match: 'Upper Bracket Quarterfinals', teams: 'DRX DRX vs Bilibili Gaming BLG', result: '2 : 0' },
  { date: 'August 18, 2023 - 05:25 SGT', match: 'Upper Bracket Quarterfinals', teams: 'EG Evil Geniuses vs EDward Gaming EDG', result: '2 : 1' },
  { date: 'August 19, 2023 - 03:10 SGT', match: 'Lower Bracket Round 1', teams: 'FNC Fnatic vs FUT Esports FUT', result: '2 : 0' },
  { date: 'August 19, 2023 - 05:15 SGT', match: 'Lower Bracket Round 1', teams: 'BLG Bilibili Gaming vs EDward Gaming EDG', result: '1 : 2' },
  { date: 'August 20, 2023 - 03:10 SGT', match: 'Upper Bracket Semifinals', teams: 'LOUD LOUD vs Paper Rex PRX', result: '1 : 2' },
  { date: 'August 20, 2023 - 06:25 SGT', match: 'Upper Bracket Semifinals', teams: 'DRX DRX vs Evil Geniuses EG', result: '0 : 2' },
  { date: 'August 21, 2023 - 03:10 SGT', match: 'Lower Bracket Quarterfinals', teams: 'LOUD LOUD vs EDward Gaming EDG', result: '2 : 1' },
  { date: 'August 25, 2023 - 03:10 SGT', match: 'Upper Bracket Final', teams: 'Paper Rex PRX vs Evil Geniuses EG', result: '2 : 1' },
  { date: 'August 25, 2023 - 06:50 SGT', match: 'Lower Bracket Semifinal', teams: 'Fnatic FNC vs LOUD LOUD', result: '1 : 2' },
  { date: 'August 26, 2023 - 03:10 SGT', match: 'Lower Bracket Final', teams: 'Evil Geniuses EG vs LOUD LOUD', result: '3 : 2' },
  { date: 'August 27, 2023 - 03:30 SGT', match: 'Grand Final', teams: 'Paper Rex PRX vs Evil Geniuses EG', result: '1 : 3' }
];

valorantEMEA2022Schedule: any[] = [
  { date: 'August 7, 2022 - 22:00 SGT', match: 'Upper Bracket Quarterfinals', teams: 'G2 Esports vs OG LDN UTD', result: '0 : 2' },
  { date: 'August 8, 2022 - 00:15 SGT', match: 'Upper Bracket Quarterfinals', teams: 'M3 Champions vs Acend', result: '2 : 1' },
  { date: 'August 8, 2022 - 22:05 SGT', match: 'Upper Bracket Quarterfinals', teams: 'Team Liquid vs BBL Esports', result: '2 : 0' },
  { date: 'August 9, 2022 - 00:15 SGT', match: 'Upper Bracket Quarterfinals', teams: 'Guild Esports vs Natus Vincere', result: '1 : 2' },
  { date: 'August 9, 2022 - 22:00 SGT', match: 'Lower Bracket Round 1', teams: 'G2 Esports vs Acend', result: '2 : 1' },
  { date: 'August 10, 2022 - 01:15 SGT', match: 'Lower Bracket Round 1', teams: 'BBL Esports vs Guild Esports', result: '0 : 2' },
  { date: 'August 10, 2022 - 22:05 SGT', match: 'Upper Bracket Semifinals', teams: 'OG LDN UTD vs M3 Champions', result: '1 : 2' },
  { date: 'August 11, 2022 - 01:55 SGT', match: 'Upper Bracket Semifinals', teams: 'Team Liquid vs Natus Vincere', result: '2 : 0' },
  { date: 'August 11, 2022 - 22:05 SGT', match: 'Lower Bracket Quarterfinals', teams: 'Natus Vincere vs G2 Esports', result: '0 : 2' },
  { date: 'August 12, 2022 - 00:40 SGT', match: 'Lower Bracket Quarterfinals', teams: 'OG LDN UTD vs Guild Esports', result: '2 : 0' },
  { date: 'August 13, 2022 - 20:05 SGT', match: 'Upper Bracket Final', teams: 'M3 Champions vs Team Liquid', result: '2 : 1' },
  { date: 'August 13, 2022 - 23:55 SGT', match: 'Lower Bracket Semifinal', teams: 'G2 Esports vs OG LDN UTD', result: '2 : 0' },
  { date: 'August 14, 2022 - 02:10 SGT', match: 'Lower Bracket Final', teams: 'Team Liquid vs G2 Esports', result: '2 : 1' },
  { date: 'August 14, 2022 - 22:05 SGT', match: 'Grand Final', teams: 'M3 Champions vs Team Liquid', result: '1 : 3' }
];

valorantDACHchedule: any[] = [
  { date: 'April 20, 2024 - 23:00 SGT', match: 'Upper Bracket Final', teams: 'MOUZ MOUZ vs CGN Esports CGN', result: '2 : 1' },
  { date: 'April 21, 2024 - 02:00 SGT', match: 'Mid Bracket Quarterfinal', teams: 'FOKUS FKS vs SK Gaming SK', result: '2 : 0' },
  { date: 'April 21, 2024 - 20:00 SGT', match: 'Lower Bracket Quarterfinals', teams: 'DIVIZON DIV vs Ovation eSports OVAT', result: '2 : 0' },
  { date: 'April 21, 2024 - 22:10 SGT', match: 'Mid Bracket Semifinal', teams: 'CGN CGN Esports vs FOKUS FKS', result: '2 : 0' },
  { date: 'April 22, 2024 - 00:40 SGT', match: 'Lower Bracket Semifinal', teams: 'SK SK Gaming vs DIVIZON DIV', result: '2 : 0' },
  { date: 'May 4, 2024 - 17:00 SGT', match: 'Lower Bracket Final', teams: 'FOKUS FKS vs SK Gaming SK', result: '0 : 2' },
  { date: 'May 4, 2024 - 22:10 SGT', match: 'Mid Bracket Final', teams: 'CGN CGN Esports vs SK Gaming SK', result: '2 : 0' },
  { date: 'May 5, 2024 - 01:30 SGT', match: 'Grand Final', teams: 'MOUZ MOUZ vs CGN Esports CGN', result: '1 : 2' }
];
//mobile legends
  m5WchampionshipSchedule: any[] = [
    { date: 'December 9 1:00: PM PHT', match: 'Upper Bracket Quarterfinal', teams: 'Fire Flux Esports vs Deus Vult', result: '1 : 3' },
    { date: 'December 9 5:00: PM PHT', match: 'Upper Bracket Quarterfinal', teams: 'ONIC Esports vs Blacklist International', result: '3 : 2' },
    { date: 'December 10 1:00: PM PHT', match: 'Upper Bracket Quarterfinal', teams: 'AP.Bren vs See You Soon', result: '3 : 1' },
    { date: 'December 10 5:00: PM PHT', match: 'Upper Bracket Quarterfinal', teams: 'Geek Fam ID vs Burmese Ghouls', result: '3 : 2' },
    { date: 'December 11 1:00: PM PHT', match: 'Lower Bracket Round 1', teams: 'Fire Flux Esports vs Blacklist International', result: '3 : 1' },
    { date: 'December 11 5:00: PM PHT', match: 'Lower Bracket Round 1', teams: 'See You Soon vs Burmese Ghouls', result: '0 : 3' },
    { date: 'December 12 1:00: PM PHT', match: 'Upper Bracket Semifinal', teams: 'Deus Vult vs ONIC Esports', result: '0 : 3' },
    { date: 'December 12 5:00: PM PHT', match: 'Upper Bracket Semifinal', teams: 'AP.Bren vs Geek Fam', result: '3 : 1' },
    { date: 'December 15 1:00: PM PHT', match: 'Lower Bracket Quarterfinal', teams: 'Geek Fam vs Blacklist International', result: '1 : 3' },
    { date: 'December 15 5:00: PM PHT', match: 'Lower Bracket Quarterfinal', teams: 'Deus Vult vs See You Soon', result: '3 : 2' },
    { date: 'December 16 10:00: AM PHT', match: 'Lower Bracket Semifinal', teams: 'Blacklist International vs Deus Vult', result: '3 : 0' },
    { date: 'December 16 2:00: PM PHT', match: 'Lower Bracket Semifinal', teams: 'ONIC Esports vs AP.Bren', result: '0 : 3'},
    { date: 'December 16 6:00: PM PHT', match: 'Lower Bracket Semifinal', teams: 'AP.Bren vs Blacklist International', result: '3 : 0'},
    { date: 'December 17 4:00: PM PHT', match: 'Grand Final', teams: 'ONIC Esports vs AP.Bren', result: '3 : 4' },

  ];

  MLLBSAsiaCupSchedule: any[] = [
    { date: 'June 15, 2023 - 15:00 SGT', match: 'Quarterfinals (Bo5)', teams: 'RSG SG vs BURN', result: '0:3 (Bo5)' },
    { date: 'June 15, 2023 - 19:00 SGT', match: 'Quarterfinals (Bo5)', teams: 'Blacklist International vs Fire Flux', result: '3:0 (Bo5)' },
    { date: 'June 16, 2023 - 15:00 SGT', match: 'Quarterfinals (Bo5)', teams: 'ECHO vs TODAK', result: '3:1 (Bo5)' },
    { date: 'June 16, 2023 - 19:00 SGT', match: 'Quarterfinals (Bo5)', teams: 'ONIC vs EVOS Legends', result: '3:0 (Bo5)' },
    { date: 'June 17, 2023 - 12:00 SGT', match: 'Semifinals (Bo5)', teams: 'BURN x FLASH vs Blacklist International', result: '1:3 (Bo5)' },
    { date: 'June 17, 2023 - 16:00 SGT', match: 'Semifinals (Bo5)', teams: 'ECHO vs ONIC', result: '0:3 (Bo5)' },
    { date: 'June 17, 2023 - 20:00 SGT', match: '3rd Place Match (Bo5)', teams: 'BURN vs ECHO', result: '2:3 (Bo5)' },
    { date: 'June 18, 2023 - 19:00 SGT', match: 'Grand Final (Bo7)', teams: 'Blacklist International vs ONIC', result: '2:4 (Bo7)' }
  ];

  M4WchampionshipSchedule: any[] = [
    { date: 'January 7, 2023 - 15:00 SGT', match: 'Upper Bracket QF (Bo5)', teams: 'Falcon Esports  vs ONIC ', result: '0:3 (Bo5)' },
    { date: 'January 7, 2023 - 19:00 SGT', match: 'Upper Bracket QF (Bo5)', teams: 'ECHO  vs Team HAQ ', result: '3:2 (Bo5)' },
    { date: 'January 8, 2023 - 15:00 SGT', match: 'Upper Bracket QF (Bo5)', teams: 'TODAK  vs RRQ ', result: '0:3 (Bo5)' },
    { date: 'January 8, 2023 - 19:00 SGT', match: 'Upper Bracket QF (Bo5)', teams: 'RRQ Akira  vs Blacklist International', result: '1:3 (Bo5)' },
    { date: 'January 9, 2023 - 15:00 SGT', match: 'Lower Bracket Round 1 (Bo3)', teams: 'RSG Singapore  vs S11 Gaming ', result: '0:2 (Bo3)' },
    { date: 'January 9, 2023 - 17:00 SGT', match: 'Lower Bracket Round 1 (Bo3)', teams: 'Incendio Supremacy vs MDH Esports ', result: '2:0 (Bo3)' },
    { date: 'January 9, 2023 - 19:00 SGT', match: 'Lower Bracket Round 1 (Bo3)', teams: 'The Valleyvs BURN ', result: '2:0 (Bo3)' },
    { date: 'January 9, 2023 - 21:00 SGT', match: 'Lower Bracket Round 1 (Bo3)', teams: 'Malvinas Gaming vs Occupy Thrones', result: '0:2 (Bo3)' },
    { date: 'January 10, 2023 - 15:00 SGT', match: 'Lower Bracket Round 2 (Bo3)', teams: 'Falcon Esports vs S11 Gaming ', result: '2:0 (Bo3)' },
    { date: 'January 10, 2023 - 17:00 SGT', match: 'Lower Bracket Round 2 (Bo3)', teams: 'Team HAQ vs Incendio Supremacy ', result: '1:2 (Bo3)' },
    { date: 'January 10, 2023 - 19:00 SGT', match: 'Lower Bracket Round 2 (Bo3)', teams: 'TODAK vs The Valley ', result: '0:2 (Bo3)' },
    { date: 'January 10, 2023 - 21:00 SGT', match: 'Lower Bracket Round 2 (Bo3)', teams: 'RRQ Akira vs Occupy Thrones ', result: '2:0 (Bo3)' },
    { date: 'January 11, 2023 - 15:00 SGT', match: 'Lower Bracket Round 3 (Bo5)', teams: 'Falcon Esports vs Incendio Supremacy', result: '3:2 (Bo5)' },
    { date: 'January 11, 2023 - 19:00 SGT', match: 'Upper Bracket SF (Bo5)', teams: 'RRQ Hoshi vs Blacklist International ', result: '2:3 (Bo5)' },
    { date: 'January 12, 2023 - 15:00 SGT', match: 'Lower Bracket Round 3 (Bo5)', teams: 'The Valley vs RRQ Akira', result: '3:1 (Bo5)' },
    { date: 'January 12, 2023 - 19:00 SGT', match: 'Upper Bracket SF (Bo5)', teams: 'ONIC Esports vs ECHO', result: '1:3 (Bo5)' },
    { date: 'January 13, 2023 - 12:00 SGT', match: 'Lower Bracket QF (Bo5)', teams: 'RRQ Hoshi vs Falcon Esports ', result: '3:2 (Bo5)' },
    { date: 'January 13, 2023 - 16:00 SGT', match: 'Lower Bracket QF (Bo5)', teams: 'ONIC Esports vs The Valley', result: '3:1 (Bo5)' },
    { date: 'January 13, 2023 - 20:00 SGT', match: 'Upper Bracket Final (Bo5)', teams: 'ECHOvs Blacklist International', result: '2:3 (Bo5)' },
    { date: 'January 14, 2023 - 15:00 SGT', match: 'Lower Bracket SF (Bo5)', teams: 'RRQ Hoshi vs ONIC Esports', result: '3:0 (Bo5)' },
    { date: 'January 14, 2023 - 19:00 SGT', match: 'Lower Bracket Final (Bo5)', teams: 'ECHO vs RRQ Hoshi', result: '3:1 (Bo5)' },
    { date: 'January 15, 2023 - 18:30 SGT', match: 'Grand Final (Bo7)', teams: 'Blacklist International vs ECHO', result: '0:4 (Bo7)' }
  ];

  GamesofTheFutureSchedule: any[] = [
    { date: 'February 28', match: 'Round 1', teams: 'Twisted Minds vs Burmese Ghouls', result: '0 — 2' },
    { date: 'February 28', match: 'Round 1', teams: 'Deus Vult vs HomeBois', result: '0 — 2' },
    { date: 'February 28', match: 'Round 1', teams: 'BURN X Flash vs Fire Flux Esports', result: '0 — 2' },
    { date: 'February 28', match: 'Round 1', teams: 'Royal Cybersports Club vs Team Flash', result: '2 — 1' },
    { date: 'February 29', match: 'Quarterfinal', teams: 'RRQ Hoshi vs Burmese Ghouls', result: '2 — 0' },
    { date: 'February 29', match: 'Quarterfinal', teams: 'AP Bren vs HomeBois', result: '2 — 0' },
    { date: 'February 29', match: 'Quarterfinal', teams: 'Blacklist International vs Fire Flux Esports', result: '0 — 2' },
    { date: 'February 29', match: 'Quarterfinal', teams: 'ONIC Esports vs Royal Cybersports Club', result: '2 — 1' },
    { date: 'March 2', match: 'Semifinal', teams: 'RRQ Hoshi vs AP Bren', result: '1 — 2' },
    { date: 'March 2', match: 'Semifinal', teams: 'Fire Flux Esports vs ONIC Esports', result: '0 — 2' },
    { date: 'March 2', match: 'Third place match', teams: 'RRQ Hoshi vs Fire Flux Esports', result: '1 — 2' },
    { date: 'March 2', match: 'Grand final', teams: 'AP Bren vs ONIC Esports', result: '3 — 1' }
  ];

  MPLPhilippinesSeason12Schedule: any[] = [
    { date: 'October 25 (Wednesday)', match: 'Upper bracket quarterfinal', teams: 'Blacklist International vs ONIC PH', result: '3 — 2' },
    { date: 'October 25 (Wednesday)', match: 'Upper bracket quarterfinal', teams: 'RSG PH vs Smart Omega', result: '3 — 0' },
    { date: 'October 26 (Thursday)', match: 'Upper bracket semifinal', teams: 'ECHO vs Blacklist International', result: '1 — 3' },
    { date: 'October 26 (Thursday)', match: 'Upper bracket semifinal', teams: 'AP Bren vs RSG PH', result: '3 — 2' },
    { date: 'October 27 (Friday)', match: 'Upper bracket final', teams: 'Blacklist International vs AP Bren', result: '0 — 3' },
    { date: 'October 27 (Friday)', match: 'Lower bracket semifinal', teams: 'ECHO vs RSG PH', result: '3 — 1' },
    { date: 'October 28 (Saturday)', match: 'Lower bracket final', teams: 'Blacklist International vs ECHO', result: '3 — 1' },
    { date: 'October 29 (Sunday)', match: 'Grand final', teams: 'AP Bren vs Blacklist International', result: '4 — 1' }
  ];
  // { date: '...', match: '...', teams: '...', result: '...' },
  getDota2Data() {
    return [
      {
        tournament: 'ESL One Birmingham 2024',
        date: 'Apr 22 - 28, 2024',
        prizePool: '$1,000,000',
        location: 'United Kingdom Birmingham',
        winner: 'Team Falcons',
        runnerUp: 'BetBoom Team',
        bracketImage: 'assets/img/ESL One Birmingham 2024.PNG'
      },
      {
        tournament: 'Elite League',
        date: 'Mar 31 - Apr 14, 2024',
        prizePool: '$960,000',
        location: 'Europe',
        winner: 'Xtreme Gaming',
        runnerUp: 'Team Falcons',
        bracketImage: 'assets/img/Elite League.PNG'
      },
      {
        tournament: 'ESL One Stockholm Major 2022',
        date: 'May 12 - 22, 2022',
        prizePool: '$500,000',
        location: 'Stockholm',
        winner: 'OG',
        runnerUp: 'TSM',
        bracketImage: 'assets/img/p25yes.PNG'
      },
      {
        tournament: 'BetBoom Dacha Dubai 2024',
        date: 'Feb 4 - 16, 2024',
        prizePool: '$1,000,000',
        location: 'Dubai',
        winner: 'Team Falcons',
        runnerUp: 'Team Liquid',
        bracketImage: 'assets/img/BetBoom Dacha Dubai 2024.PNG'
      },
      {
        tournament: 'ESL One Kuala Lumpur 2023',
        date: 'Dec 11 - 17, 2023',
        prizePool: '$1,000,000',
        location: 'Kuala Lumpur',
        winner: 'Azure Ray',
        runnerUp: 'Gaimin Gladiators',
        bracketImage: 'assets/img/ESL One Kuala Lumpur 2023.PNG'
      }
    ];
  }
  
  getValorantData() {
    return [
      {
        tournament: 'VCT 2024: Masters Madrid',
        date: 'Mar 14 - 24, 2024',
        prizePool: '$500,000',
        location: 'Madrid',
        winner: 'Sentinels',
        runnerUp: 'Gen.G Esports',
        bracketImage: 'assets/img/VCT 2024 Masters Madrid.PNG'
      },
      {
        tournament: 'VCT 2023: Game Changers Championship',
        date: 'Nov 28 - Dec 3, 2023',
        prizePool: '$500,000',
        location: 'São Paulo',
        winner: 'Shopify Rebellion',
        runnerUp: 'Team Liquid Brazil',
        bracketImage: 'assets/img/VCT 2023 Game Changers Championship.PNG'
      },
      {
        tournament: 'VALORANT Champions 2023',
        date: 'Aug 6 - 26, 2023',
        prizePool: '$2,250,000',
        location: 'Los Angeles',
        winner: 'Evil Geniuses',
        runnerUp: 'Paper Rex',
        bracketImage: 'assets/img/VCT 2023 Game Changers Championship.PNG'
      },
      {
        tournament: 'VCT 2022: EMEA Last Chance Qualifier',
        date: 'Aug 7 - 14, 2022',
        prizePool: '$51,274.16',
        location: 'Europe, CIS, Turkey',
        winner: 'Team Liquid',
        runnerUp: 'M3 Champions',
        bracketImage: 'assets/img/VALORANT Champions Tour 2022 EMEA Last Chance Qualifier.PNG'
      },
      {
        tournament: 'VALORANT Challengers 2024 DACH: Evolution Split 1',
        date: 'Feb 10 - May 4, 2024',
        prizePool: '$26,929.50',
        location: 'Cologne',
        winner: 'CGN Esports',
        runnerUp: 'MOUZ',
        bracketImage: 'assets/img/VALORANT Challengers 2024 DACH.PNG'
      }
    ];
  }

  getMobileLegendsData() {
    return [
      {
        tournament: 'M5 World Championship',
        date: 'Nov 23 - Dec 17, 2023',
        prizePool: '$900,000',
        location: 'Manila, Selangor',
        winner: 'AP.Bren',
        runnerUp: 'ONIC',
        bracketImage: 'assets/img/M5 World Championship.PNG'
      },
      {
        tournament: 'MLBB Southeast Asia Cup 2023',
        date: 'Jun 10 - 18, 2023',
        prizePool: '$300,000',
        location: 'Phnom Penh',
        winner: 'ONIC',
        runnerUp: 'Blacklist International',
        bracketImage: 'assets/img/MLBB Southeast Asia Cup 2023.PNG'
      }, 
      {
        tournament: 'M4 World Championship',
        date: 'Jan 1 - 15, 2023',
        prizePool: '$800,000',
        location: 'Jakarta',
        winner: 'ECHO',
        runnerUp: 'Blacklist International',
        bracketImage: 'assets/img/M4 World Championship.PNG'
      },
      {
        tournament: 'Games of the Future 2024',
        date: 'Feb 26 - Mar 2, 2024',
        prizePool: '$1,000,000',
        location: 'Kazan',
        winner: 'AP.Bren',
        runnerUp: 'ONIC',
        bracketImage: 'assets/img/Games of the Future 2024.PNG'
      },
      {
        tournament: 'MPL Philippines Season 12',
        date: 'Sep 8 - Oct 29, 2023',
        prizePool: '$150,000',
        location: 'Makati City',
        winner: 'AP.Bren',
        runnerUp: 'Blacklist International',
        bracketImage: 'assets/img/MPL Philippines Season 12.PNG'
      }
    ];
  }

  tournamentSchedules: { [key: string]: any[] } = {
    'ESL One Birmingham 2024': this.BirminghamSchedule,
    'Elite League': this.eliteLeagueSchedule,
    'ESL One Stockholm Major 2022': this.stockholmMajorSchedule,
    'BetBoom Dacha Dubai 2024': this.BetBoomDachaDubaiSchedule,
    'ESL One Kuala Lumpur 2023': this.ESLOneKualaLumpurSchedule,
    'VCT 2024: Masters Madrid': this.MastersMadridSchedule,
    'VCT 2023: Game Changers Championship': this.GameChangersChampionshipSchedule,
    'VALORANT Champions 2023': this.valorantChampions2023Schedule,
    'VCT 2022: EMEA Last Chance Qualifier': this.valorantEMEA2022Schedule,
    'VALORANT Challengers 2024 DACH: Evolution Split 1': this.valorantDACHchedule,
    'M5 World Championship': this.m5WchampionshipSchedule,
    'MLBB Southeast Asia Cup 2023': this.MLLBSAsiaCupSchedule,
    'M4 World Championship': this.M4WchampionshipSchedule,
    'Games of the Future 2024': this.GamesofTheFutureSchedule,
    'MPL Philippines Season 12': this.MPLPhilippinesSeason12Schedule
};

toggleBracketContent(bracketImage: string, tournamentName: string) {
  this.currentBracketImage = bracketImage;
  this.showBracket = !this.showBracket;
  this.showSchedule = Object.keys(this.tournamentSchedules).includes(tournamentName);
  this.currentSchedule = this.showSchedule ? this.tournamentSchedules[tournamentName] : [];
}

  toggleSchedule() {
    this.showSchedule = !this.showSchedule;
  }
}
