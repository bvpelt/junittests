import { Component } from "@angular/core";
import { StudentService } from "../services/student.service";

@Component({
  selector: "app-part19",
  imports: [],
  templateUrl: "./part19.component.html",
  styleUrl: "./part19.component.css",
})
export class Part19Component {
  title = "Part19";
  sum = 0;
  result: any;
  studentResult: string = "";

  constructor(public service: StudentService) {}

  ngOnInit(): void {}

  calculate(num1: number, num2: number): number {
    console.log("Calculate method called with:", num1, num2);
    this.sum = num1 + num2;
    return this.sum;
  }

  saveData() {
    let info = {
      sumVal: this.calculate(5, 5),
      name: "Dot Net Office",
    };

    console.log("StudentComponent SaveData called with:", JSON.stringify(info));
    this.SaveDataIntoConsole(info);
    try {
      console.log("Attempting to save details via service...");

      this.service.SaveDetails(info).subscribe({
        next: (response) => {
          this.result = response;
        },
        error: (error) => {
          //console.log("Error occurred while saving details:", error);
          this.result = { error: "Failed to save details" };
        },
      });
    } catch (error) {
      console.log("Exception caught while calling service:", error);
    }
    console.log("SaveData method completed.");
  }

  StudentResult() {
    if (this.calculate(10, 20) >= 40) {
      return "Pass";
    } else {
      return "Fail";
    }
  }

  StudentSchoolResult() {
    if (this.calculate(10, 20) >= 40) {
      this.studentResult = "Pass";
      return this.studentResult;
    } else {
      this.studentResult = "Fail";
      return this.studentResult;
    }
  }

  SaveDataIntoConsole(data: any) {
    console.log("Data to be saved:", JSON.stringify(data));
  }
}
