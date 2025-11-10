import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part40",
  imports: [],
  templateUrl: "./part40.component.html",
  styleUrl: "./part40.component.css",
})
export class Part40Component implements OnInit {
  title = "Part40";
  ref = "";

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
  }
}
