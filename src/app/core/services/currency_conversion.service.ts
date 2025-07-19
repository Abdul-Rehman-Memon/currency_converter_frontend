// src/app/core/services/currency-api.service.ts
import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class CurrencyConversionService {
  constructor(private http: HttpService) {}

  convert(from: string, to: string, amount: number): Observable<any> {
    const url = `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`;
    return this.http.get<any>(url); // ✅ goes through interceptor & triggers loader
  }
}
