import { Component, signal } from "@angular/core";
import { COMMON_IMPORTS } from "./shared/common.imports";
import { LoaderService } from "./core/services/loader.service";
import { HistoryComponent } from "./components/history.component/history.component";
import { CurrencyConverterComponent } from "./components/currency-converter.component/currency-converter.component";

const commonImports = [
  ...COMMON_IMPORTS,
  HistoryComponent,
  CurrencyConverterComponent,
];

@Component({
  selector: "app-root",
  imports: commonImports,
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  constructor(public loader: LoaderService) {}
}
