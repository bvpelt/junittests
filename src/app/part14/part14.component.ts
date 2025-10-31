import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part14",
  imports: [],
  templateUrl: "./part14.component.html",
  styleUrl: "./part14.component.css",
})
export class Part14Component implements OnInit {
  title = "Part14";
  ref = "";
  Count: number = 10;

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
  }

  IncreaseCount(num: number): void {
    this.Count += num;
  }

  DecreaseCount(num: number): void {
    this.Count -= num;
  }
}
