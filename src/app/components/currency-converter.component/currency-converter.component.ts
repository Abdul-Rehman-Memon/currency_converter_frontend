import { Component, inject, signal } from "@angular/core";
import { COMMON_IMPORTS } from "../../shared/common.imports";
import { FormBuilder, Validators } from "@angular/forms";
import { CurrencyConversionService } from "../../core/services/currency_conversion.service";

const commonImports = [...COMMON_IMPORTS];

@Component({
  selector: "app-currency-converter",
  imports: commonImports,
  providers: [CurrencyConversionService],
  templateUrl: "./currency-converter.component.html",
  styleUrl: "./currency-converter.component.css",
})
export class CurrencyConverterComponent {
  private fb = inject(FormBuilder);
  private currencyService = inject(CurrencyConversionService);

  convertedAmount = signal<number | null>(null);

  form = this.fb.group({
    amount: [1, [Validators.required, Validators.min(0.01)]],
    from: ["USD", Validators.required],
    to: ["EUR", Validators.required],
  });

  currencyCodes = () => ["USD", "EUR", "GBP", "INR", "JPY", "AUD", "CAD"];

  convert() {
    const { amount, from, to } = this.form.value;
    if (!amount || !from || !to) return;

    this.currencyService.convert(from, to, amount).subscribe({
      next: (result) => this.convertedAmount.set(result),
      error: (err) => console.error("Conversion error:", err),
    });
  }
}
