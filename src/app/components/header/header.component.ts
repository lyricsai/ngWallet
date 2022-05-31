import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { AuthService, User } from "src/app/services/auth.service";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, OnDestroy {
    isLogged!: boolean;
    username?: string | null = null;
    subscription!: Subscription;

    constructor(public authService: AuthService, private router: Router) {
        this.authService.checkStorage();
        this.username = this.getUser();
    }

    ngOnInit(): void {
        // this.isLogged = this.authService.isLoggedIn();

        this.subscription = this.authService
            .isLoggedIn()
            .subscribe((data) => (this.isLogged = data));
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    getUser() {
        return this.authService.userData?.username;
    }

    login() {
        this.router.navigateByUrl("/account");
    }

    logout() {
        // this.authService.checkStorage();
        this.authService.logout();
        return this.authService
            .isLoggedIn()
            .subscribe((data: boolean) => (this.isLogged = data));
    }
}
