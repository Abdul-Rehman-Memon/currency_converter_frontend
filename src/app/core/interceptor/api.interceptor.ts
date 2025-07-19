// src/app/core/interceptors/app.interceptor.ts
import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
  HttpErrorResponse,
} from "@angular/common/http";
import { inject } from "@angular/core";
import { LoaderService } from "../services/loader.service";
import { catchError, finalize } from "rxjs/operators";
import { throwError } from "rxjs";

export const appInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  const loader = inject(LoaderService);
  const BASE_URL = "https://api.example.com"; // or empty if using only full URLs
  const token = "token";

  loader.show();

  const isExternal = req.url.startsWith("http") || req.url.startsWith("https");

  const modifiedReq = req.clone({
    url: isExternal ? req.url : `${BASE_URL}${req.url}`,
    setHeaders: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  });

  return next(modifiedReq).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error("HTTP Error:", error);
      return throwError(() => error);
    }),
    finalize(() => loader.hide())
  );
};
