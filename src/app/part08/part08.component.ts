import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part08",
  imports: [],
  templateUrl: "./part08.component.html",
  styleUrl: "./part08.component.css",
})
export class Part08Component implements OnInit {
  title = "Part08";
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
