import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErrorComponent } from "../error/error.component";
import { HomeComponent } from "./home.component";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        children: [
            {
                path: "cards",
                loadChildren: () =>
                    import("../card/card.module").then((m) => m.CardModule),
            },
            {
                path: "messages",
                loadChildren: () =>
                    import("../messages/messages.module").then(
                        (m) => m.MessagesModule
                    ),
            },
            {
                path: "account",
                loadChildren: () =>
                    import("../auth/auth.module").then((m) => m.AuthModule),
            },
            {
                path: "articles",
                loadChildren: () =>
                    import("../articles/articles.module").then(
                        (m) => m.ArticlesModule
                    ),
            },
            {
                path: "rates",
                loadChildren: () =>
                    import("../tables/tables.module").then(
                        (m) => m.TablesModule
                    ),
            },
        ],
    },
    { path: "**", component: ErrorComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {}
