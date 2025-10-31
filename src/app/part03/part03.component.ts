import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part03",
  imports: [],
  templateUrl: "./part03.component.html",
  styleUrl: "./part03.component.css",
})
export class Part03Component implements OnInit {
  title = "Part03";
  ref = "";

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
  }
}
