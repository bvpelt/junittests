import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part20",
  imports: [],
  templateUrl: "./part20.component.html",
  styleUrl: "./part20.component.css",
})
export class Part20Component implements OnInit {
  title = "Part20";
  ref = "";
  CountNumber: number = 0;

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
  }
  
  decreaseNumber(): void {
    this.CountNumber--;
  }

  increaseNumber(): void {
    this.CountNumber++;
  }
}
