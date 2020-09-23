import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lesson';
  numberLesson = 1;
  tasks = ['intro', 'start project', 'build', 'homework'];
  state = false;
  
  dropdown() {
    this.state = !this.state;
  }  
}