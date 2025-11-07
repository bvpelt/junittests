import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-student",
  imports: [],
  templateUrl: "./student.component.html",
  styleUrl: "./student.component.css",
})
export class StudentComponent implements OnInit {
  title: string = "Student";
  @Input() studentInputMsg: string = "";
  @Output() myOutput: EventEmitter<string> = new EventEmitter();
  outputMessage: string = "Output from Student";

  ngOnInit(): void {
    this.title = this.studentInputMsg;
  }

  sendValues() {
    this.myOutput.emit('Send child data ' + this.outputMessage);
  }

  getMyOutput(): string {
    return this.myOutput.toString();
  }
}
