// src/app/core/services/currency-api.service.ts
import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment.development";

const url = environment.apiUrl;

@Injectable({ providedIn: "root" })
export class CurrencyConversionService {
  constructor(private http: HttpService) {}

  getCurrencies(): Observable<any> {
    return this.http.get(`${url}/currency/currencies`);
  }

  convert(payload: {
    base_currency: string;
    currencies: string;
    amount: number;
  }): Observable<any> {
    return this.http.post<any>(`${url}/currency/convert`, payload); // ✅ goes through interceptor & triggers loader
  }
}
