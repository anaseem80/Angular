import { Component, OnInit, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './injectors/child/child.component';
import { NgClass, 
  NgStyle, 
  NgIf, 
  NgFor, 
  NgSwitch, 
  NgSwitchDefault, 
  NgSwitchCase, 
  DatePipe, 
  LowerCasePipe, 
  UpperCasePipe, 
  PercentPipe,
  CurrencyPipe,
  AsyncPipe,
  JsonPipe
} from '@angular/common';
import { AppendPipe } from './pipes/append.pipe';
import { DataService } from './services/data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { Data } from './interfaces/data';
import { UserService } from './services/user.service';
import { signal, Signal } from '@angular/core';
import { Todo } from './interfaces/todo/todo';
import { MessagesService } from './services/messages/messages.service';
import { Post } from './interfaces/messages/post';
import { ParentComponent } from './injectors/parent/parent.component';
import { TestingService } from './services/testing/testing.service';
@Component({
  selector: 'app-root',
  standalone: true, // Smoothly run the component
  imports: [
    AsyncPipe,
    JsonPipe,
    RouterOutlet, 
    FormsModule, 
    NgClass, 
    NgStyle, 
    NgIf, 
    NgFor, 
    NgSwitch,
    ParentComponent,
    NgSwitchDefault, 
    NgSwitchCase, 
    DatePipe, 
    LowerCasePipe, 
    UpperCasePipe, 
    PercentPipe,
    CurrencyPipe,
    AppendPipe,
    NavbarComponent,
    ChildComponent
  ],
  providers: [DataService, UserService, MessagesService, TestingService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {





  constructor(public testingService: TestingService) {
    setTimeout(() => {
      this.testingService.value = 'asdasd'
    }, 2000);
  }











  // posts: Post[] = [];
  // constructor(private messagesService: MessagesService){}

  // // signals

  // count = signal<number>(0);
  // todos = signal<Todo[]>([]);
  // newTodoText = signal<string>('');
  
  // total: Signal<number> = computed(() => this.todos().length);


  // // total = computed(() =>{
  // //   return this.todos().length
  // // })

  // ngOnInit() {
  //   this.messagesService.getPosts().subscribe(({
  //     next: (response: Post[]) => {
  //       this.posts = response;

  //       console.log(this.posts)
  //     },
  //     error: (error: Error) => {
  //       console.log(error)
  //     }
  //   }))
  // }

  // onInputTextChanged(event: Event){
  //   const text = event.target as HTMLInputElement;
  //   this.newTodoText.set(text.value);
  // }

  // onInsertTodo() {
  //   if(this.newTodoText().trim().length > 0){
  //     const newTodo: Todo = {
  //       id: this.todos().length + 1,
  //       description: this.newTodoText(),
  //       isChecked: false
  //     };
  //     this.todos.set([...this.todos() ,newTodo]);
  //     this.newTodoText.set('');

  //     console.log(this.todos());
  //   }
  // }

  // onDeleteTodo(id: number) {
  //   const filteredTodos = this.todos().filter(todo => todo.id !== id);
  //   this.todos.set(filteredTodos);
  // }
  // // Service start
  // data: string[] = []
  // todos: Data[] = []
  // isLoading: boolean = false;
  // user = this.userService.getUser();
  // constructor(private dataService: DataService, private userService: UserService){
  //   this.data = this.dataService.getData()
  // }

  // ngOnInit(){
  //   const subscription = this.dataService.getTodos()
  //   .subscribe({
  //     next: (response: any) => {
  //       this.todos = response
  //       this.isLoading = true
  //     },
  //     error: (error: Error) => {
  //       console.log(error)
  //       this.isLoading = true
  //     }
  //   })
  // }
  // // Service end

  // today: number = Date.now()

  // title: string = 'ANGULAR';
  // counter: number = 0;
  // isLoggedin: boolean = false;
  // users: string[] = ['Ahmed', 'Mohamed', 'John']
  // currency: any = 1.156156156

  // // atr binding
  // isDisabled: boolean = false;
  // theImage: string = '/assets/1.jpg'

  // // style binding
  // bgColor: string = 'green';
  // titleColor: string = 'white'
  // description: string = 'font-size: 50px; color: #e50'

  // onCounter(sign: string) {
  //   if(sign == '+')
  //     this.counter++
  //   else
  //     this.counter--
  // }
  // // class binding
  // redText: string = 'abcd'
  // inputText: string = ''

  // // ngClass
  // message: string = "This is a dangrous message";
  // classes: string = "text-base text-red-500";

  // grade: string = 'C';

  // a: number = 8;
  // b: number = 15

  // usersObj = [
  //   {id: 1, name: 'Ahmed', age: 20},
  //   {id: 2, name: 'John', age: 50},
  //   {id: 3, name: 'Yasser', age: 24},
  // ]


  // Classes

  
}
