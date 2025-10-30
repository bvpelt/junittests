import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part26",
  imports: [],
  templateUrl: "./part26.component.html",
  styleUrl: "./part26.component.css",
})
export class Part26Component implements OnInit {
  title = "Part26";

  ariaLabel = "NewAriaLabel";
  columnSpan = "2";
  pageHeader = "Student Information";
  FirstName = "John";
  LastName = "Doe";
  Branch = "Engineering";
  Mobile = "123-456-7890";
  Gender = "Male";
  Age = 30;

  constructor() {}

  ngOnInit(): void {}
}
