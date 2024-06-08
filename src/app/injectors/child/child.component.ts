import { Component } from '@angular/core';
import { TestingService } from '../../services/testing/testing.service';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  // providers: [TestingService],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})


export class ChildComponent {
  // constructor (public testingService: TestingService){}
  user: User = {
    name: '',
    email: ''
  }
  onSubmitForm(form: NgForm){
    if(form.valid && this.checkEmailValidity()){
      console.log(this.user)
    }
  }

  checkEmailValidity(): boolean {
    const regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regx.test(this.user.email)
  }
}
