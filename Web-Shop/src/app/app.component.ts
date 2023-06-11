import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <home></home>
  <router-outlet></router-outlet>
  
  `
  ,
  styleUrls: []
})
export class AppComponent {
  title = 'Web-Shop';
}
