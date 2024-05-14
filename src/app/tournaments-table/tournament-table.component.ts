import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-tournament-table',
  templateUrl: './tournament-table.component.html',
  styleUrls: ['./tournament-table.component.css']
})
export class TournamentTableComponent implements OnChanges {
  @Input() tournamentData: any;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.tournamentData && this.tournamentData) {
      this.initializeDataTable();
    }
  }

  initializeDataTable() {
    const table = $('#example').DataTable();
    if ($.fn.DataTable.isDataTable('#example')) {
      table.clear().rows.add(this.tournamentData).draw();
    } else {
      $(document).ready(() => {
        $('#example').DataTable({
          data: this.tournamentData,
          columns: [
            {
              data: 'tournament',
              render: function(data, type, row) {
                return `<a href="${row.link}" target="_blank">${data}</a>`;
              }
            },
            { data: 'date' },
            { data: 'prizePool' },
            { data: 'location' },
            { data: 'winner' },
            { data: 'runnerUp' }
          ]
        });
      });
    }
  }
}
