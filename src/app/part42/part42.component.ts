import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm, NgModel } from "@angular/forms";
import { LoginModel } from "./login.model";

@Component({
  selector: "app-part42",
  imports: [],
  templateUrl: "./part42.component.html",
  styleUrl: "./part42.component.css",
})
export class Part42Component implements OnInit {
  @ViewChild("loginForm", { static: true }) loginForm: NgForm;

  title = "Part41";
  ref = "";
  submitMsg = "";
  model: LoginModel = {
    email: "",
    password: "",
    aggrement: true,
  };

  constructor() {}

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
  }

  onFormSubmit() {
    this.submitMsg = "Login Details" + JSON.stringify(this.model, null, 4);
    alert(this.submitMsg);
  }
}
