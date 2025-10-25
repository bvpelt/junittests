import { Component, OnInit } from "@angular/core";
import { StudentService } from "../services/student.service";

@Component({
  selector: "app-student",
  imports: [],
  templateUrl: "./student.component.html",
  styleUrl: "./student.component.css",
})
export class StudentComponent implements OnInit {
  sum: number = 0;
  result: any;

  constructor(public service: StudentService) {}

  ngOnInit(): void {}

  calculate(num1: number, num2: number): number {
    this.sum = num1 + num2;
    return this.sum;
  }

  saveData() {
    let info = {
      sumVal: this.calculate(5, 5),
      name: "Dot Net Office",
    };

    this.SaveDataIntoConsole(info);
    this.service.SaveDetails(info).subscribe((response) => {
      this.result = response;
    });
  }

  StudentResult() {
    if (this.calculate(10, 20) >= 40) {
      return "Pass";
    } else {
      return "Fail";
    }
  }

  SaveDataIntoConsole(data: any) {
    console.log("Data to be saved:", data);
  }
}
