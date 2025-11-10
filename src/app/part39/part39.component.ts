import { Component, OnInit } from "@angular/core";
import { StudentService } from "./student.service";
import { Subscription } from "rxjs";
import { PostModel } from "./post.model";
import { NgFor } from "@angular/common";

@Component({
  selector: "app-part39",
  imports: [NgFor],
  templateUrl: "./part39.component.html",
  styleUrl: "./part39.component.css",
})
export class Part39Component implements OnInit {
  title = "Part39";
  ref = "";
  private sub: Subscription | null = null;
  postData: PostModel[] = [];

  constructor(public service: StudentService) {}

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
    this.getData();
  }

  getData() {
    debugger;
    this.sub = this.service.getListOfData().subscribe((post) => {
      this.postData = post;
    });
  }
}
