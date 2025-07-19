// src/app/core/services/loader.service.ts
import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: "root" })
export class LoaderService {
  isLoading = signal(false);
  private requests = 0;

  show() {
    this.requests++;
    this.isLoading.set(true);
  }

  hide() {
    this.requests = Math.max(this.requests - 1, 0);
    if (this.requests === 0) {
      this.isLoading.set(false);
    }
  }
}
