import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/guards/auth.guard";
import { CardDetailComponent } from "./card-detail.component";
import { CardEditComponent } from "./card-edit.component";
import { CardListComponent } from "./card-list.component";
import { CardComponent } from "./card.component";

const routes: Routes = [
    {
        path: "",
        canActivate: [AuthGuard],
        component: CardComponent,
        children: [
            {
                path: "",
                component: CardListComponent,
                data: {
                    title: "Cards",
                },
            },
            {
                path: "add",
                component: CardEditComponent,
                data: {
                    title: "Add",
                },
            },
            {
                path: ":id/edit",
                component: CardEditComponent,
                data: {
                    title: "Edit",
                },
                pathMatch: "full",
            },
            {
                path: ":id",
                component: CardDetailComponent,
                data: {
                    title: "Detail",
                },
                pathMatch: "full",
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CardRoutingModule {}
