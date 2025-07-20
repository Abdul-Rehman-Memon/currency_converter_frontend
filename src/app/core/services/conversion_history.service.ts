// src/app/core/services/conversion-history.service.ts
import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment.development";

export interface ConversionRecord {
  id: number;
  base_currency: string;
  currencies: string;
  amount: number;
  result: number;
  timestamp: string;
}

const url = environment.apiUrl;

@Injectable({ providedIn: "root" })
export class ConversionHistoryService {
  constructor(private http: HttpService) {}

  getHistory(): Observable<any> {
    return this.http.get(`${url}/history`);
  }
}
