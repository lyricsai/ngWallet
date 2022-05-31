import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Categories } from "src/app/models/cards";

@Component({
    selector: "app-filter",
    templateUrl: "./filter.component.html",
    styleUrls: ["./filter.component.scss"],
})
export class FilterComponent implements OnInit {
    @Output() cardFilterTitle = new EventEmitter<string>();
    @Output() cardFilterCategory = new EventEmitter<string>();
    @Output() cardFilterFav = new EventEmitter<boolean>();
    selectedCategory: string = "";
    categories: string[] = Categories;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {}

    filterByTitle(title: string) {
        this.cardFilterTitle.emit(title);
    }

    filterByCategory(category: any) {
        this.cardFilterCategory.emit(category.target.value);
    }

    filterByFav(isFav: any) {
        this.cardFilterFav.emit(isFav.currentTarget.checked);
    }
}
