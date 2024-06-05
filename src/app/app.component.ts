import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Smoothly run the component
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Angular';

  // atr binding
  isDisabled: boolean = false;
  theImage: string = '/assets/1.jpg'

  // style binding
  bgColor: string = 'green';
  titleColor: string = 'white'
  description: string = 'font-size: 50px; color: #e50'

  onButtonClick() {
    this.isDisabled = !this.isDisabled
  }

  // class binding
  redText: string = 'abcd'
}
