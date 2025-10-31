import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part07",
  imports: [],
  templateUrl: "./part07.component.html",
  styleUrl: "./part07.component.css",
})
export class Part07Component implements OnInit {
  title = "Part07";
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
