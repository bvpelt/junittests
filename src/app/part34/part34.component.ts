import { Component } from "@angular/core";
import { UpperCasePipe, LowerCasePipe } from "@angular/common";
import { FileSizePipe } from "../file-size.pipe";

@Component({
  selector: "app-part34",
  imports: [UpperCasePipe, LowerCasePipe, FileSizePipe],
  templateUrl: "./part34.component.html",
  styleUrl: "./part34.component.css",
})
export class Part34Component {
  title = "Part34";
  ref = "";
  size = 2000000;

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
  }
}
