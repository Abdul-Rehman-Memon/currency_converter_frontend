// src/app/core/services/conversion-history.service.ts
import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { Observable } from "rxjs";

export interface ConversionRecord {
  id: number;
  from: string;
  to: string;
  amount: number;
  result: number;
  timestamp: string;
}

@Injectable({ providedIn: "root" })
export class ConversionHistoryService {
  constructor(private http: HttpService) {}

  getHistory(): Observable<any> {
    return this.http.get("/conversions/history");
  }
}
