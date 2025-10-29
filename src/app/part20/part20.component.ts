import { Component } from "@angular/core";

@Component({
  selector: "app-part20",
  imports: [],
  templateUrl: "./part20.component.html",
  styleUrl: "./part20.component.css",
})
export class Part20Component {
  title = "Part20";
  CountNumber: number = 0;

  decreaseNumber(): void {
    this.CountNumber--;
  }

  increaseNumber(): void {
    this.CountNumber++;
  }
}
