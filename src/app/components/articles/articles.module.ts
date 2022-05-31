import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ArticlesRoutingModule } from "./articles-routing.module";
import { ArticlesComponent } from "./articles.component";

import { CdkAccordionModule } from "@angular/cdk/accordion";
import { ClipboardModule } from "@angular/cdk/clipboard";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [ArticlesComponent],
    imports: [
        CommonModule,
        ArticlesRoutingModule,
        CdkAccordionModule,
        ClipboardModule,
        FormsModule,
    ],
})
export class ArticlesModule {}
