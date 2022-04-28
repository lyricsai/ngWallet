import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector: "app-auth",
    templateUrl: "./auth.component.html",
    styleUrls: ["./auth.component.scss"],
})
export class AuthComponent implements OnInit {
    formAuth: FormGroup;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {
        this.formAuth = this.fb.group({
            email: ["", [Validators.required, Validators.email]],
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

    ngOnInit() {}

    // login() {
    //   const val = this.formAuth.value;

    //   if (val.email && val.password) {
    // this.authService.login(val.email, val.password).subscribe(() => {
    //   console.log('User is logged in');
    //   this.router.navigateByUrl('/');
    // });
    //   }
    // }
}
