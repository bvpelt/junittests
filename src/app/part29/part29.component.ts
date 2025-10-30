import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms"; // needed for two way data binding

@Component({
  selector: "app-part29",
  imports: [FormsModule],
  templateUrl: "./part29.component.html",
  styleUrl: "./part29.component.css",
})
export class Part29Component implements OnInit {
  title = "Part29";
  studentName: string = "";

  ngOnInit(): void {}

  setName() {
    this.studentName = "Dotnet Office";
  }
}
