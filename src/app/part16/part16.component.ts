import { Component } from "@angular/core";

@Component({
  selector: "app-part16",
  imports: [],
  templateUrl: "./part16.component.html",
  styleUrl: "./part16.component.css",
})
export class Part16Component {
  title = "Part16";

  ShowMessage(msg: string): string {
    return msg;
  }
}
