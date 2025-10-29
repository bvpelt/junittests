import { Component } from "@angular/core";

@Component({
  selector: "app-part07",
  imports: [],
  templateUrl: "./part07.component.html",
  styleUrl: "./part07.component.css",
})
export class Part07Component {
  title = "Part07";
  num1 = 10;
  num2 = 20;

  ShowMessage(msg: string): string {
    return msg;
  }
}
