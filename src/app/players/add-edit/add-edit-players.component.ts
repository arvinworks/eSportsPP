import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../../_services';
import { TeamService } from '../../_services/team.services';
import { PlayerService } from '../../_services/players.services';
import { Player } from '../../_models/player';
import { Team } from '../../_models/team';

@Component({ templateUrl: 'add-edit-player.component.html' })
export class AddEditPlayerComponent implements OnInit {
    form: FormGroup;
    id: string;
    isAddMode: boolean;
    loading = false;
    submitted = false;
    teams: Team[];

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private playerService: PlayerService,
        private teamService: TeamService,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.isAddMode = !this.id;

        this.form = this.formBuilder.group({
            ingameName: ['', Validators.required],
            name: ['', Validators.required],
            nationality: ['', Validators.required],
            born: ['', Validators.required],
            region: ['', Validators.required],
            role: ['', Validators.required],
            teamId: ['', Validators.required]
        });

        this.teamService.getAll()
            .pipe(first())
            .subscribe(teams => this.teams = teams);

        if (!this.isAddMode) {
            this.playerService.getById(this.id)
                .pipe(first())
                .subscribe(x => this.form.patchValue(x));
        }
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        if (this.isAddMode) {
            this.createPlayer();
        } else {
            this.updatePlayer();
        }
    }

    private createPlayer() {
        this.playerService.create(this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Player created successfully', { keepAfterRouteChange: true });
                    this.router.navigate(['../'], { relativeTo: this.route });
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }

    private updatePlayer() {
        this.playerService.update(this.id, this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Update successful', { keepAfterRouteChange: true });
                    this.router.navigate(['../../'], { relativeTo: this.route });
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }
}
