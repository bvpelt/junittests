import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part23",
  imports: [],
  templateUrl: "./part23.component.html",
  styleUrl: "./part23.component.css",
})
export class Part23Component implements OnInit {
  title = "Part23";
  ref = "";
  name: string = "Dot Net Office";
  type = "number";
  placeholder = "give number";
  userreadonly: boolean = false;

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
  }
}
