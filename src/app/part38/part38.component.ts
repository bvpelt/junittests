import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { PostModel } from "./post.model";
import { StudentService } from "./student.service";
import { NgFor } from "@angular/common";

@Component({
  selector: "app-part38",
  imports: [NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./part38.component.html",
  styleUrl: "./part38.component.css",
})
export class Part38Component implements OnInit {
  title = "Part38";
  ref = "";
  posts: PostModel[] = [];

  constructor(private service: StudentService) {}

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
    console.log("Before getListOfData");
    this.getListOfData();
  }

  getListOfData(): void{
    console.log("Start getListOfData");

    this.service.getListOfData().subscribe({
      next: (data: PostModel[]) => {
        this.posts = data;
      },
      error: (error) => {
        console.log("Error: " + error);
        this.posts = [];
      },
    });
    console.log("After getListOfData");
  }
}
