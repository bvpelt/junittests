import { Component } from "@angular/core";

@Component({
  selector: "app-part15",
  imports: [],
  templateUrl: "./part15.component.html",
  styleUrl: "./part15.component.css",
})
export class Part15Component {
  title = "Part15";
  Count: number = 10;

  IncreaseCount(num: number): void {
    this.Count += num;
  }

  DecreaseCount(num: number): void {
    this.Count -= num;
  }
}
