import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part13",
  imports: [],
  templateUrl: "./part13.component.html",
  styleUrl: "./part13.component.css",
})
export class Part13Component implements OnInit {
  title = "Part13";
  ref = "";

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
  }
}
