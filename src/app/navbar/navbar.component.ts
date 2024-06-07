import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  // Attribute values
  speed: number | null = null;
  color: string | null = null;
  model: string | null = null;

  // Actions or methods
  turnOn(){
    console.log('Turning on');
  }
  brake(){
    console.log('brake');
  }
  trueOff(){
    console.log('Turning off');
  }
}
