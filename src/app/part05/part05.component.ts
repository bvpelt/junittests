import { Component } from "@angular/core";

@Component({
  selector: "app-part05",
  imports: [],
  templateUrl: "./part05.component.html",
  styleUrl: "./part05.component.css",
})
export class Part05Component {
  test = "Part05";
  num1 = 10;
  num2 = 20;

  ShowMessage(msg: string): string {
    return msg;
  }
}
