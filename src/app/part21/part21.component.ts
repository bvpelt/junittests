import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part21",
  imports: [],
  templateUrl: "./part21.component.html",
  styleUrl: "./part21.component.css",
})
export class Part21Component implements OnInit {
  title = "Part21";
  ref = "";
  name: string = "Dot Net Office";
  private pname: string = "";
  sum: number = 0;

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
  }

  private pcalculate(num1: number, num2: number): number {
    console.log("Calculate method called with:", num1, num2);
    this.sum = num1 + num2;
    return this.sum;
  }

  private ShowName(): string {
    this.name = "Dot Net Office";
    this.pname = this.name;
    return this.name;
  }
}
