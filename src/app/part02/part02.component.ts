import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part02",
  imports: [],
  templateUrl: "./part02.component.html",
  styleUrl: "./part02.component.css",
})
export class Part02Component implements OnInit {
  title = "Part02";
  ref = "";
  content = "This is part 02 component content.";

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
  }
}
