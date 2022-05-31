import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
    navLinks: any[];
    activeLinkIndex: number = 0;

    constructor(private router: Router) {
        this.navLinks = [
            {
                label: "Cards",
                link: "/cards",
                index: 0,
            },
            {
                label: "Notifications",
                link: "/messages",
                index: 1,
            },
            {
                label: "Rates",
                link: "/rates",
                index: 2,
            },
            {
                label: "Articles",
                link: "/articles",
                index: 3,
            },
            {
                label: "Account",
                link: "/account",
                index: 4,
            },
        ];
    }

    ngOnInit(): void {
        this.router.events.subscribe((res) => {
            this.activeLinkIndex = this.navLinks.indexOf(
                this.navLinks.find((tab) => tab.link === this.router.url)
            );
        });
    }
}
