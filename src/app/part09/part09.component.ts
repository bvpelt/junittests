import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part09",
  imports: [],
  templateUrl: "./part09.component.html",
  styleUrl: "./part09.component.css",
})
export class Part09Component implements OnInit {
  title = "Part09";
  ref = "";

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
  }
}
