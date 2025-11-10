import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-part37',
  imports: [RouterLink, RouterOutlet, /* HomeComponent, AboutComponent, */ ],
  templateUrl: './part37.component.html',
  styleUrl: './part37.component.css'
})
export class Part37Component implements OnInit {
  title = "Part37";
  ref = "";

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
  }
}
