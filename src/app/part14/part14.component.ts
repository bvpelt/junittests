import { Component } from "@angular/core";

@Component({
  selector: "app-part14",
  imports: [],
  templateUrl: "./part14.component.html",
  styleUrl: "./part14.component.css",
})
export class Part14Component {
  title = "Part14";
  Count: number = 10;

  IncreaseCount(num: number): void {
    this.Count += num;
  }

  DecreaseCount(num: number): void {
    this.Count -= num;
  }
}
