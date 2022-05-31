import { Injectable } from "@angular/core";
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
} from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        if (this.authService.userData?.username) {
            return true;
        } else {
            return false;
        }
    }
}
