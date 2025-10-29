import { Component } from "@angular/core";

@Component({
  selector: "app-part06",
  imports: [],
  templateUrl: "./part06.component.html",
  styleUrl: "./part06.component.css",
})
export class Part06Component {
  title = "Part06";
  num1 = 10;
  num2 = 20;

  ShowMessage(msg: string): string {
    return msg;
  }
}
