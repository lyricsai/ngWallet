import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService, User } from "src/app/services/auth.service";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
    isLogged: boolean = true;
    username?: string | null = null;

    constructor(public authService: AuthService, private router: Router) {}

    ngOnInit(): void {
        this.username = this.getUser();
        // this.isLogged = this.authService.isLoggedIn();
    }

    getUser() {
        return this.authService.userData?.username;
    }

    login() {
        this.router.navigateByUrl("/account");
        // this.router.onSameUrlNavigation
    }

    logout() {
        this.authService.logout();
        this.router.onSameUrlNavigation;
    }
}
