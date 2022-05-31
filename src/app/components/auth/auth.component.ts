import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { UserDTO } from "src/app/models/userDTO.model";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector: "app-auth",
    templateUrl: "./auth.component.html",
    styleUrls: ["./auth.component.scss"],
})
export class AuthComponent implements OnInit {
    isLogged!: boolean;
    formAuth: FormGroup;

    formLogin = [
        {
            label: "User Name",
            name: "username",
            formControl: "username",
            type: "text",
        },
        { label: "Email", name: "email", formControl: "email", type: "text" },
        {
            label: "Password",
            name: "password",
            formControl: "password",
            type: "password",
        },
    ];

    constructor(
        private fb: FormBuilder,
        public authService: AuthService,
        private router: Router
    ) {
        this.formAuth = this.fb.group({
            email: ["", [Validators.required, Validators.email]],
            username: ["", Validators.required],
            password: [
                "",
                [
                    Validators.required,
                    Validators.pattern(
                        /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
                    ),
                ],
            ],
        });
    }

    ngOnInit() {
        this.checkStorage();
    }

    login() {
        const val = this.formAuth.value;

        if (val.email && val.username) {
            const usr = new UserDTO();
            usr.email = val.email;
            usr.username = val.username;
            this.authService.login(usr);
        }
    }

    logout() {
        this.authService.logout();
        this.checkStorage();
        this.router.navigate(["/"]);
    }

    checkStorage() {
        return this.authService
            .isLoggedIn()
            .subscribe((data: boolean) => (this.isLogged = data));
    }
}
