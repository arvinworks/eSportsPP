import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-playoffs-bracket',
    templateUrl: './playoffs-bracket.component.html',
    styleUrls: ['./playoffs-bracket.component.css']
})
export class PlayoffsBracketComponent {
    @Input() matches: any[]; 
}
