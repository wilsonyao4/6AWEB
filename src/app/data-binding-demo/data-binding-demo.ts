import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-demo',
  imports: [],
  templateUrl: './data-binding-demo.html',
  styleUrl: './data-binding-demo.css',
})
export class DataBindingDemo {
  message = 'Data Binding Demonstration';
  title = 'My First App!';
  description = 'This is my new Angular Application';
  imageUrl = '../assets/logo-angular.png';
  w = 50;
  h = 50;
  altText = 'Angular Logo';
  textColor = 'blue';
  isHighlighted = true;
  yourName = '';
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
