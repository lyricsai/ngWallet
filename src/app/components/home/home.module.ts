import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonModule } from "@angular/material/button";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { ErrorComponent } from "../error/error.component";

@NgModule({
    declarations: [HomeComponent, ErrorComponent],
    imports: [CommonModule, HomeRoutingModule, MatTabsModule, MatButtonModule],
    exports: [],
})
export class HomeModule {}
