import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular9-app';
  isLoader: boolean = false;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
}
