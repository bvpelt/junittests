import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part24",

  templateUrl: "./part24.component.html",
  styleUrl: "./part24.component.css",
})
export class Part24Component implements OnInit {
  title = "Part24";
  name: string = "Dot Net Office";
  type = "number";
  placeholder = "give number";
  userreadonly: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
