import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { TestingService } from '../../services/testing/testing.service';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, FormsModule],
  providers: [TestingService],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  // constructor (public testingService: TestingService){}


}
