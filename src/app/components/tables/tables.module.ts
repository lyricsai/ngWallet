import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TablesRoutingModule } from "./tables-routing.module";
import { TablesComponent } from "./tables.component";
import { FormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { CdkTableModule } from "@angular/cdk/table";
import { TableCdkComponent } from "./table-cdk/table-cdk.component";
import { TableRatesComponent } from "./table-rates/table-rates.component";

@NgModule({
    declarations: [TablesComponent, TableCdkComponent, TableRatesComponent],
    imports: [
        CommonModule,
        TablesRoutingModule,
        FormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        CdkTableModule,
    ],
})
export class TablesModule {}
