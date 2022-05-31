import { Injectable } from "@angular/core";
import { UserDTO } from "../models/userDTO.model";

export class User {
    id?: number;
    email!: string;
    password!: string;
    token?: string;
}

export const AUTH_TOKEN_KEY = "auth-token";
export const AUTH_TOKEN_DATA = "auth-data";

@Injectable({ providedIn: "root" })
export class AuthService {
    public authToken: string | null = null;
    public userData: UserDTO | null = null;

    constructor() {
        this.checkStorage();
    }

    checkStorage() {
        const authToken = localStorage.getItem(AUTH_TOKEN_KEY);
        const userData = localStorage.getItem(AUTH_TOKEN_DATA);
        this.authToken = authToken;

        if (userData) {
            this.userData = JSON.parse(userData);
        } else {
            this.userData = null;
        }
    }

    login(authData: UserDTO) {
        //вместо authData.email + "randomString" вставлять токен
        localStorage.setItem(AUTH_TOKEN_KEY, authData.email + "randomString");
        localStorage.setItem(AUTH_TOKEN_DATA, JSON.stringify(authData));
        this.checkStorage();
    }

    logout() {
        if (!this.isLoggedIn()) {
            return;
        } else {
            localStorage.removeItem(AUTH_TOKEN_KEY);
            localStorage.removeItem(AUTH_TOKEN_DATA);
            this.checkStorage();
        }
    }

    public isLoggedIn(): boolean {
        return this.authToken !== null;
    }
}
