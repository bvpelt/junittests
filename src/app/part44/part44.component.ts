import { Component, OnInit } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player'; // Required import

@Component({
  selector: 'app-part44',
  imports: [YouTubePlayerModule],
  templateUrl: './part44.component.html',
  styleUrl: './part44.component.css'
})
export class Part44Component implements OnInit {
  title = "Part44";
  ref = "";

  constructor() {}

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;

    const scriptTag = document.createElement('script');
    scriptTag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(scriptTag);
  }
}

