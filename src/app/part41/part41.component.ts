import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part41",
  imports: [],
  templateUrl: "./part41.component.html",
  styleUrl: "./part41.component.css",
})
export class Part41Component implements OnInit {
  title = "Part41";
  ref = "";

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
  }
}
