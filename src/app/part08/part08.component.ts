import { Component } from '@angular/core';

@Component({
  selector: 'app-part08',
  imports: [],
  templateUrl: './part08.component.html',
  styleUrl: './part08.component.css'
})
export class Part08Component {
  title = "Part08";
  num1 = 10;
  num2 = 20;

  ShowMessage(msg: string): string {
    return msg;
  }
}
