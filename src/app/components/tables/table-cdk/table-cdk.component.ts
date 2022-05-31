// import { CdkTableDataSourceInput } from "@angular/cdk/table";
import { Component, OnInit } from "@angular/core";
import { RatesService } from "src/app/services/rates.service";

export interface EuroCurrency {
    rate: number;
    currency: string;
}

@Component({
    selector: "app-table-cdk",
    styleUrls: ["table-cdk.component.scss"],
    templateUrl: "table-cdk.component.html",
})
export class TableCdkComponent implements OnInit {
    displayedColumns: string[] = ["currency", "rate"];
    eurorates: EuroCurrency[] = [];

    constructor(private ratesService: RatesService) {}

    ngOnInit() {
        this.getEuroRates();
    }

    getEuroRates() {
        const unique: string[] = [];
        return this.ratesService.getEuroRates().subscribe((response) => {
            this.eurorates = response.records.map((e: any) => {
                if (!unique.includes(e.fields.currency)) {
                    unique.push(e.fields.currency);
                    return {
                        currency: e.fields.currency,
                        rate: e.fields.rate,
                    };
                } else {
                    return {} as EuroCurrency;
                }
            });
        });
    }
}
