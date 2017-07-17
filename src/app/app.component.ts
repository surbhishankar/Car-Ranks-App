import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  template: `
     <div class="image" [ngStyle]="{'background-image':'url(' + object.link + ')'}">
     <h1>{{title}}</h1>
     <nav>
     	<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
     	<a routerLink="/cars" routerLinkActive="active">Cars</a>
      <a routerLink="/aboutme" routerLinkActive="active">About Me</a>
     </nav>
     <router-outlet></router-outlet>
     </div>
   `
})
export class AppComponent {
  title = 'Which is the best car???';

  object = {
    link: "http://www.cs.odu.edu/~sshankar/image.jpg"
  }

  constructor(){
  }
}