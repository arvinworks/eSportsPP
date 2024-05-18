import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamListComponent } from './list/list.component';
import { AddEditTeamComponent } from './add-edit/add-edit-team.component';

const routes: Routes = [
    { path: '', component: TeamListComponent },
    { path: 'add', component: AddEditTeamComponent },
    { path: 'edit/:id', component: AddEditTeamComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeamRoutingModule { }
