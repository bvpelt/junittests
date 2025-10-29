import { Component } from "@angular/core";

@Component({
  selector: "app-part22",
  imports: [],
  templateUrl: "./part22.component.html",
  styleUrl: "./part22.component.css",
})
export class Part22Component {
  title = "Part22";
  name: string = "Dot Net Office";
  private pname: string = "";
  sum: number = 0;

  private pcalculate(num1: number, num2: number): number {
    console.log("Calculate method called with:", num1, num2);
    this.sum = num1 + num2;
    return this.sum;
  }

  private ShowName(): string {
    this.name = "Dot Net Office";
    this.pname = this.name;
    return this.name;
  }
}
