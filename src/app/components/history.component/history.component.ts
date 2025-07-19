import { Component, inject, OnInit } from "@angular/core";
import {
  ConversionHistoryService,
  ConversionRecord,
} from "../../core/services/conversion_history.service";
import { COMMON_IMPORTS } from "../../shared/common.imports";

const commonImports = [...COMMON_IMPORTS];

@Component({
  selector: "app-history",
  imports: commonImports,
  templateUrl: "./history.component.html",
  styleUrl: "./history.component.css",
})
export class HistoryComponent implements OnInit {
  private api = inject(ConversionHistoryService);

  history: ConversionRecord[] = [];
  displayedColumns = ["from", "to", "amount", "result", "timestamp"];

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.api.getHistory().subscribe({
      next: (data) => (this.history = data),
      error: (err) => console.error("Failed to fetch history", err),
    });
  }
}
