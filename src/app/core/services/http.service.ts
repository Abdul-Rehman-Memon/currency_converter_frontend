// src/app/core/services/http.service.ts
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class HttpService {
  constructor(private http: HttpClient) {}

  get<T>(url: string, options?: any) {
    return this.http.get<T>(url, options);
  }

  post<T>(url: string, body: any, options?: any) {
    return this.http.post<T>(url, body, options);
  }

  put<T>(url: string, body: any, options?: any) {
    return this.http.put<T>(url, body, options);
  }

  delete<T>(url: string, options?: any) {
    return this.http.delete<T>(url, options);
  }
}
