import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part36",
  imports: [],
  templateUrl: "./part36.component.html",
  styleUrl: "./part36.component.css",
})
export class Part36Component implements OnInit {
  title = "Part36";
  ref = "";

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
  }
}
