import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part39",
  imports: [],
  templateUrl: "./part39.component.html",
  styleUrl: "./part39.component.css",
})
export class Part39Component implements OnInit {
  title = "Part39";
  ref = "";

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
  }
}
