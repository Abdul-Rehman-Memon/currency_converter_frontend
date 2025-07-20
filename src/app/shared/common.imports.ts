// src/app/common/common-imports.ts

import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

// Angular Material
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";

// ng-bootstrap
import { NgbAlertModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LoaderComponent } from "../components/loader.component/loader.component";

export const COMMON_IMPORTS = [
  CommonModule,
  ReactiveFormsModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  NgbModule,
  NgbAlertModule,
  MatProgressBarModule,
  MatTableModule,
  MatCardModule,
  // component
  LoaderComponent,
];
