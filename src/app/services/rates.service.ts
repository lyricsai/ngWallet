import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
// import {CurrencyData} from 'src/app/components/tables.component'

@Injectable({
    providedIn: "root",
})
export class RatesService {
    bynRatesAPI = "https://www.nbrb.by/api/exrates/rates?periodicity=0";
    euroRatesAPI =
        "https://public.opendatasoft.com/api/records/1.0/search/?dataset=euro-exchange-rates&q=&facet=date&facet=currency&refine.date=2022%2F05%2F26";
    constructor(private http: HttpClient) {}

    getRates(): Observable<any> {
        return this.http.get<any[]>(this.bynRatesAPI);
    }

    getEuroRates(): Observable<any> {
        return this.http.get<any[]>(this.euroRatesAPI);
    }
}
