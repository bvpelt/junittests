import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms"; // needed for two way data binding

@Component({
  selector: "app-part28",
  imports: [FormsModule],
  templateUrl: "./part28.component.html",
  styleUrl: "./part28.component.css",
})
export class Part28Component implements OnInit {
  title = "Part28";
  ref = "";
  studentName: string = "";

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
  }

  setName() {
    this.studentName = "Dotnet Office";
  }
}
