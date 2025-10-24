import { Component } from "@angular/core";

@Component({
  selector: "app-arrange",
  imports: [],
  templateUrl: "./arrange.component.html",
  styleUrl: "./arrange.component.css",
})
export class ArrangeComponent {
  showMessage(msg: string): string {
    return msg;
  }
}
