import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import { Role } from './_models';
import { TeamListComponent } from './teams/list/list.component';
import { TeamAddComponent } from './teams/add/add.component';
import { TeamEditComponent } from './teams/edit/edit.component';
import { PlayerListComponent } from './players/list/list.component';
import { PlayerAddComponent } from './players/add/add.component';
import { PlayerEditComponent } from './players/edit/edit.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const adminModule = () => import('./admin/admin.module').then(x => x.AdminModule);
const profileModule = () => import('./profile/profile.module').then(x => x.ProfileModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    { path: 'profile', loadChildren: profileModule, canActivate: [AuthGuard] },
    { path: 'admin', loadChildren: adminModule, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
    { path: 'teams', component: TeamListComponent },
    { path: 'teams/add', component: TeamAddComponent },
    { path: 'teams/edit/:id', component: TeamEditComponent },
    { path: 'players', component: PlayerListComponent },
    { path: 'players/add', component: PlayerAddComponent },
    { path: 'players/edit/:id', component: PlayerEditComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }