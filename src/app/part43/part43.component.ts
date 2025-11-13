import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part43",
  imports: [],
  templateUrl: "./part43.component.html",
  styleUrl: "./part43.component.css",
})
export class Part43Component implements OnInit {
  title = "Part43";
  ref = "";

  constructor() {}

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
  }
}
