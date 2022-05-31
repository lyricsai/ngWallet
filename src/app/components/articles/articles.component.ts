import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-articles",
    templateUrl: "./articles.component.html",
    styleUrls: ["./articles.component.scss"],
})
export class ArticlesComponent implements OnInit {
    articles = [
        "Article 1",
        "Article 2",
        "Article 3",
        "Article 4",
        "Article 5",
    ];
    expandedIndex = 0;
    value = "lollo";
    constructor() {}

    ngOnInit(): void {}
}
