import { Component } from "@angular/core";

@Component({
  selector: "app-part23",
  imports: [],
  templateUrl: "./part23.component.html",
  styleUrl: "./part23.component.css",
})
export class Part23Component {
  title = "Part23";
  name: string = "Dot Net Office";
  type = "number";
  placeholder = "give number";
  userreadonly: boolean = false;
}
