import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  number = '10';
  result: number | string;

  skills: string[] = ['html', 'css', 'js', 'angular'];

  posts: Post[];

  ngOnInit() {
    this.result = this.number +10;
    
    this.posts = [{
      id: 0,
      title: 'Post 1',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga culpa omnis in autem magni totam perspiciatis earum, asperiores hic corporis nam tempore quasi, reiciendis quia. Delectus deserunt vel repellendus ex?',
      author: 'Author 1',
      status: 2
    }, {
      id: 1,
      title: 'Post 2',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga culpa omnis in autem magni totam perspiciatis earum, asperiores hic corporis nam tempore quasi, reiciendis quia. Delectus deserunt vel repellendus ex?',
      author: 'Author 2',
      status: 2
  }, {
    id: 2,
      title: 'Post 3',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga culpa omnis in autem magni totam perspiciatis earum, asperiores hic corporis nam tempore quasi, reiciendis quia. Delectus deserunt vel repellendus ex?',
      author: 'Author 3',
      status: 2
  }];
}