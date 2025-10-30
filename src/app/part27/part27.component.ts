import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part27",
  imports: [],
  templateUrl: "./part27.component.html",
  styleUrl: "./part27.component.css",
})
export class Part27Component implements OnInit {
  title = "Part27";
  label: string = "Dotnet";

  constructor() {}

  ngOnInit(): void {}

  button1Click(): void {
    this.label = "Dotnet Office";
  }

  button2Click(): void {
    this.label = "label value change on button2";
  }

  onChangeInput(): void {
    this.label = "onChangeInput label value changed";
  }

  onChangeLabelInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.label = inputElement.value;
  }
}
