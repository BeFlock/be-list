import { Component, Input } from '@angular/core';
import { ITodo, ITodoType } from '../../../core/models/todo.model';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.css'
})
export class TodoCardComponent {
  @Input() type: ITodoType = 'OPEN';
  @Input() todo!: ITodo;
}
