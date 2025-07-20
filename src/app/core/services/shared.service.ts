// shared.service.ts
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class SharedService {
  private actionTriggeredSource = new Subject<void>();
  actionTriggered$ = this.actionTriggeredSource.asObservable();

  triggerAction() {
    this.actionTriggeredSource.next();
  }
}
