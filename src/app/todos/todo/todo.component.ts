import {
  Component,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {Todo} from '../model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent
  implements OnInit
{
  @Input() public todoInput: Todo; // <-- Todo jest deklaracją typu jaki przyjmujemy czyli jak model Todo -->

  @Output() public delete =
    new EventEmitter<Todo>();

  public onClickDelete() {
    this.delete.emit(this.todoInput);
  }

  constructor() {}

  ngOnInit(): void {}
}
