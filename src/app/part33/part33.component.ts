import { HttpClient } from "@angular/common/http";
import { Component, inject, OnInit } from "@angular/core";

@Component({
  selector: "app-part33",
  imports: [],
  templateUrl: "./part33.component.html",
  styleUrl: "./part33.component.css",
})
export class Part33Component implements OnInit {
  public http = inject(HttpClient);
  title = "Part33";
  ref = "";

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
  }

  SaveDetails(info: any) {
    return this.http.post("/", info);
  }
}
