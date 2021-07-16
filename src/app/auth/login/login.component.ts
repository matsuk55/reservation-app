import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    errors: any = [];

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() { }

    login(loginForm: NgForm) {
        this.authService.login(loginForm.value).subscribe(
            (token) => {
                this.router.navigate(['/']);
            },
            (err: HttpErrorResponse) => {
                this.errors = err.error.errors;
                console.error(err)}
          )
    }
}
