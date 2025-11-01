import { Component, OnInit } from "@angular/core";
import { NgFor } from "@angular/common";
@Component({
  selector: "app-part32",
  imports: [NgFor],
  templateUrl: "./part32.component.html",
  styleUrl: "./part32.component.css",
})
export class Part32Component implements OnInit {
  title = "Part32";
  ref = "";
  colorNames = ["Black", "White", "Blue", "Green"];
  colorList = [
    { name: "Black", id: 1 },
    { name: "White", id: 2 },
    { name: "Blue", id: 3 },
    { name: "Green", id: 4 },
  ];

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
  }
}
