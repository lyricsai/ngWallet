import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { RatesService } from "src/app/services/rates.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

export interface CurrencyData {
    Cur_ID: string;
    Date: string;
    Cur_Abbreviation: string;
    Cur_OfficialRate: number;
    Cur_Name: string;
    Cur_Scale: number;
}

@Component({
    selector: "app-table-rates",
    templateUrl: "./table-rates.component.html",
    styleUrls: ["./table-rates.component.scss"],
})
export class TableRatesComponent implements AfterViewInit, OnInit {
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    results: any[] = [];
    name: string = "";
    currencies: CurrencyData[] = [];

    initColumns = [
        { name: "Cur_ID", show: "Code" },
        { name: "Cur_Abbreviation", show: "Abbreviation" },
        { name: "Cur_Scale", show: "Per quantity" },
        { name: "Cur_Name", show: "Name" },
        { name: "Cur_OfficialRate", show: "Rate" },
    ];

    displayedColumns: string[] = this.initColumns.map((col) => col.name);

    dataSource: MatTableDataSource<CurrencyData> = new MatTableDataSource(
        this.currencies
    );

    constructor(private ratesService: RatesService) {}

    ngOnInit(): void {
        this.getRates();
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(tableHeader: Event) {
        const filterValue = (tableHeader.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    getRates() {
        return this.ratesService.getRates().subscribe((response) => {
            this.dataSource.data = response;
        });
    }
}
