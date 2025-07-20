import { Component, inject, OnDestroy, OnInit } from "@angular/core";
import {
  ConversionHistoryService,
  ConversionRecord,
} from "../../core/services/conversion_history.service";
import { COMMON_IMPORTS } from "../../shared/common.imports";
import { SharedService } from "../../core/services/shared.service";
import { Subscription } from "rxjs";

const commonImports = [...COMMON_IMPORTS];

@Component({
  selector: "app-history",
  imports: commonImports,
  templateUrl: "./history.component.html",
  styleUrl: "./history.component.css",
})
export class HistoryComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  private api = inject(ConversionHistoryService);
  private sharedService = inject(SharedService);

  history: ConversionRecord[] = [];
  displayedColumns = [
    "base_currency",
    "currencies",
    "rate",
    "amount",
    "result",
    "timestamp",
  ];

  ngOnInit() {
    this.subscription = this.sharedService.actionTriggered$.subscribe(() => {
      this.get();
    });
    this.get();
  }

  triggerRefresh() {}

  get() {
    this.api.getHistory().subscribe({
      next: (data) => (this.history = data),
      error: (err) => console.error("Failed to fetch history", err),
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
