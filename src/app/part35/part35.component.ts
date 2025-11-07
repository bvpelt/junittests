import { Component, OnInit } from "@angular/core";
import { StudentComponent } from "./student/student.component";

@Component({
  selector: "app-part35",
  imports: [StudentComponent],
  templateUrl: "./part35.component.html",
  styleUrl: "./part35.component.css",
})
export class Part35Component implements OnInit {
  title = "Part35";
  ref = "";
  myInputMsg: string = "Input from Part35";
  outputDecorator = "";

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
  }

  getChildData(data: any) {
    this.outputDecorator = 'getChildData ' + data;
  }
}
