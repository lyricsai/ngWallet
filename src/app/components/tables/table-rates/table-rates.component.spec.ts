import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TableRatesComponent } from "./table-rates.component";

describe("TableMatComponent", () => {
    let component: TableRatesComponent;
    let fixture: ComponentFixture<TableRatesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TableRatesComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TableRatesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
