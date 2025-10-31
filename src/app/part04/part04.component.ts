import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part04",
  imports: [],
  templateUrl: "./part04.component.html",
  styleUrl: "./part04.component.css",
})
export class Part04Component implements OnInit {
  title = "Part04";
  ref = "";

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
  }
}
