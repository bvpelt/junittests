import { Component, OnInit } from "@angular/core";
import { NgIf } from "@angular/common";

@Component({
  selector: "app-part30",
  imports: [NgIf],
  templateUrl: "./part30.component.html",
  styleUrl: "./part30.component.css",
})
export class Part30Component implements OnInit {
  title = "Part30";
  ref = "";
  num: number = 25;

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
  }
}
