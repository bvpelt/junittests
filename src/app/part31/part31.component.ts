import { Component, OnInit } from "@angular/core";
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from "@angular/common";

@Component({
  selector: "app-part31",
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: "./part31.component.html",
  styleUrl: "./part31.component.css",
})
export class Part31Component implements OnInit {
  title = "Part31";
  ref = "";
  selectedNum: string = "One";

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
  }
}
