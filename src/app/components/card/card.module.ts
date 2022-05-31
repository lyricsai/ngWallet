import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { ScrollingModule } from "@angular/cdk/scrolling";

import { CardRoutingModule } from "./card-routing.module";
import { CardComponent } from "./card.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CardEditComponent } from "./card-edit.component";
import { CardDetailComponent } from "./card-detail.component";
import { CardListComponent } from "./card-list.component";
import { FilterComponent } from "../filter/filter.component";
import { FilterPipe } from "src/app/pipes/filter.pipe";
import { FilterCategoryPipe } from "src/app/pipes/filter-category.pipe";
import { FilterFavPipe } from "src/app/pipes/filter-fav.pipe";
import { AuthService } from "src/app/services/auth.service";
import { AuthGuard } from "src/app/guards/auth.guard";

@NgModule({
    declarations: [
        CardComponent,
        CardEditComponent,
        CardDetailComponent,
        CardListComponent,
        FilterComponent,
        FilterPipe,
        FilterCategoryPipe,
        FilterFavPipe,
    ],
    imports: [
        CommonModule,
        CardRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        ScrollingModule,
        MatCardModule,
    ],
    exports: [],
    providers: [AuthService, AuthGuard],
})
export class CardModule {}
