import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part24",

  templateUrl: "./part24.component.html",
  styleUrl: "./part24.component.css",
})
export class Part24Component implements OnInit {
  title = "Part24";
  ref = "";
  name: string = "Dot Net Office";
  type = "number";
  placeholder = "give number";
  userreadonly: boolean = false;

  constructor() {}

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
  }
}
