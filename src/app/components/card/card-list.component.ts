import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ICard } from "src/app/interfaces/card";
import { CardService } from "src/app/services/card.service";

@Component({
    selector: "app-card-list",
    templateUrl: "./card-list.component.html",
    styleUrls: ["./card.component.scss"],
})
export class CardListComponent implements OnInit {
    cards: ICard[] = [];
    posts: any;
    id!: string | number;
    filterTitle: string = "";
    filterCat: string = "";
    favCheck: boolean = false;

    constructor(protected cardService: CardService, protected router: Router) {}

    ngOnInit(): void {
        this.getAllCards();
    }

    getAllCards() {
        this.cardService.getAllCards().subscribe((data) => (this.cards = data));
    }

    recieveFilterTitle(filterTitle: string) {
        this.filterTitle = filterTitle;
    }

    recieveFilterCategory(filterCat: string) {
        this.filterCat = filterCat;
    }

    recieveFilterFav(favCheck: boolean) {
        this.favCheck = favCheck;
    }
}
