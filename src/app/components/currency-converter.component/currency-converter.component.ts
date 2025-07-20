import { Component, inject, OnInit, signal } from "@angular/core";
import { COMMON_IMPORTS } from "../../shared/common.imports";
import { FormBuilder, Validators } from "@angular/forms";
import { CurrencyConversionService } from "../../core/services/currency_conversion.service";
import { SharedService } from "../../core/services/shared.service";

const commonImports = [...COMMON_IMPORTS];

@Component({
  selector: "app-currency-converter",
  imports: commonImports,
  providers: [CurrencyConversionService],
  templateUrl: "./currency-converter.component.html",
  styleUrl: "./currency-converter.component.css",
})
export class CurrencyConverterComponent implements OnInit {
  private fb = inject(FormBuilder);
  private currencyService = inject(CurrencyConversionService);
  private sharedService = inject(SharedService);

  ngOnInit(): void {
    this.getCurrencies();
  }

  convertedAmount = signal<number | null>(null);

  form = this.fb.group({
    amount: [1, [Validators.required, Validators.min(0.01)]],
    currencies: ["USD", Validators.required],
    base_currency: ["EUR", Validators.required],
  });

  getCurrencyCodes(data: any): string[] {
    return Object.keys(data);
  }

  currencyCodes: any = [];

  getCurrencies = async () => {
    await this.currencyService.getCurrencies().subscribe({
      next: (result) =>
        (this.currencyCodes = this.getCurrencyCodes(result.data)),
      error: (err) => console.error("Currencies error:", err),
    });
  };

  convert() {
    const { amount, base_currency, currencies } = this.form.value;
    if (!amount || !base_currency || !currencies) return;
    const payload: any = {
      base_currency,
      currencies,
      amount,
    };
    this.currencyService.convert(payload).subscribe({
      next: (result) => (
        this.convertedAmount.set(result), this.sharedService.triggerAction()
      ),
      error: (err) => console.error("Conversion error:", err),
    });
  }
}
