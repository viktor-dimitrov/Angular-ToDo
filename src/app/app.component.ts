import { Component } from '@angular/core';


 interface Todo {
  title:string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todos = [{title:'Shoppingasasas', completed: false}, {title:'werqwerqwer', completed: true}];

  

  addItem(newItem: string) {

   let newTodo: Todo = {title: newItem, completed:false}
    this.todos.push(newTodo);
  }


}
