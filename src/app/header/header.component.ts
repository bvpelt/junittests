import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  imports: [],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  Count: number = 10;

  IncreaseCount(num: number): void {
    this.Count += num;
  }

  DecreaseCount(num: number): void {
    this.Count -= num;
  }
}
