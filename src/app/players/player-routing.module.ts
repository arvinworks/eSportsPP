import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerListComponent } from './list/list.component';
import { AddEditPlayerComponent } from './add-edit/add-edit-players.component';

const routes: Routes = [
    { path: '', component: PlayerListComponent },
    { path: 'add', component: AddEditPlayerComponent },
    { path: 'edit/:id', component: AddEditPlayerComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlayerRoutingModule { }
