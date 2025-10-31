import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part12",
  imports: [],
  templateUrl: "./part12.component.html",
  styleUrl: "./part12.component.css",
})
export class Part12Component implements OnInit {
  title = "Part12";
  ref = "";

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
  }
}
