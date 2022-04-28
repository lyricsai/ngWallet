import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatButtonModule } from "@angular/material/button";

import { CardRoutingModule } from "./card-routing.module";
import { CardComponent } from "./card.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CardEditComponent } from "./card-edit.component";
import { CardDeleteComponent } from "./card-delete.component";
import { CardDetailComponent } from "./card-detail.component";
import { CardListComponent } from "./card-list.component";
import { FilterComponent } from "../filter/filter.component";
import { FilterPipe } from "src/app/pipes/filter.pipe";
import { FilterCategoryPipe } from "src/app/pipes/filter-category.pipe";
import { FilterFavPipe } from "src/app/pipes/filter-fav.pipe";

@NgModule({
    declarations: [
        CardComponent,
        CardEditComponent,
        CardDeleteComponent,
        CardDetailComponent,
        CardListComponent,
        FilterComponent,
        FilterPipe,
        FilterCategoryPipe,
        FilterFavPipe,
    ],
    imports: [CommonModule, CardRoutingModule, ReactiveFormsModule, FormsModule, MatButtonModule],
    exports: [],
})
export class CardModule {}
