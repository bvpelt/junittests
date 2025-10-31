import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part16",
  imports: [],
  templateUrl: "./part16.component.html",
  styleUrl: "./part16.component.css",
})
export class Part16Component implements OnInit {
  title = "Part16";
  ref = "";

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
  }

  ShowMessage(msg: string): string {
    return msg;
  }
}
