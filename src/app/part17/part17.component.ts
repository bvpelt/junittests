import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part17",
  imports: [],
  templateUrl: "./part17.component.html",
  styleUrl: "./part17.component.css",
})
export class Part17Component implements OnInit {
  title = "Part17";
  ref = "";

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
  }
}
