import { NgClass, NgStyle } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part25",
  imports: [NgClass, NgStyle],
  templateUrl: "./part25.component.html",
  styleUrl: "./part25.component.css",
})
export class Part25Component implements OnInit {
  title = "Part25";
  num = 20;
  redColor = "font-red";
  blueColor = "font-blue";

  constructor() {}

  ngOnInit(): void {}
}
