import { Component, computed, inject } from "@angular/core";
import { LoaderService } from "../../core/services/loader.service";
import { CommonModule } from "@angular/common";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
  selector: "app-loader",
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: "./loader.component.html",
  styleUrl: "./loader.component.css",
})
export class LoaderComponent {
  private loader = inject(LoaderService);
  isLoading = computed(() => this.loader.isLoading());
}
