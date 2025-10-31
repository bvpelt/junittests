import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part10",
  imports: [],
  templateUrl: "./part10.component.html",
  styleUrl: "./part10.component.css",
})
export class Part10Component implements OnInit {
  title = "Part10";
  ref = "";

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
  }
}
