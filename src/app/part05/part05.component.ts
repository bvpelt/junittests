import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part05",
  imports: [],
  templateUrl: "./part05.component.html",
  styleUrl: "./part05.component.css",
})
export class Part05Component implements OnInit {
  title = "Part05";
  ref = "";
  num1 = 10;
  num2 = 20;

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
  }

  ShowMessage(msg: string): string {
    return msg;
  }
}
