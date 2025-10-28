import { NgClass, NgStyle } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part24",
  imports: [NgClass, NgStyle],
  templateUrl: "./part24.component.html",
  styleUrl: "./part24.component.css",
})
export class Part24Component implements OnInit {
  num = 20;
  redColor = "font-red";
  blueColor = "font-blue";

  constructor() {}

  ngOnInit(): void {}
}
