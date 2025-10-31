import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part11",
  imports: [],
  templateUrl: "./part11.component.html",
  styleUrl: "./part11.component.css",
})
export class Part11Component implements OnInit {
  title = "Part11";
  ref = "";

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
  }
}
