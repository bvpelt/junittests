import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part06",
  imports: [],
  templateUrl: "./part06.component.html",
  styleUrl: "./part06.component.css",
})
export class Part06Component implements OnInit {
  title = "Part06";
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
