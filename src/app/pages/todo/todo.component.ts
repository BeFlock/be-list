import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../core/services/todo.service';
import { ITodo } from '../../core/models/todo.model';
import { TodoCardComponent } from '../../shared/components/todo-card/todo-card.component';
import { SlidePanelComponent } from '../../shared/ui/slide-panel/slide-panel.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { apiEndpoint } from '../../core/constants/constants';
import { IAlert, AlertComponent } from '../../shared/ui/alert/alert.component';

@Component({
    selector: 'app-todo',
    standalone: true,
    templateUrl: './todo.component.html',
    styleUrl: './todo.component.css',
    imports: [TodoCardComponent, SlidePanelComponent, ReactiveFormsModule, AlertComponent]
})
export class TodoComponent implements OnInit {
  todos: ITodo[] = [];
  todoId: number | null = null;
  todoForm!: FormGroup;
  isSlidePanelOpen: boolean = false;
  todoStatus: {key: string, value: string}[] = [
    { key: 'OPEN', value: 'ABERTO' },
    { key: 'PROGRESS', value: 'EM ANDAMENTO' },
    { key: 'TESTING', value: 'TESTANDO' },
    { key: 'DONE', value: 'CONCLUÍDO' },
  ];
  filterByStatus: string = '';
  alert: IAlert = { show: false };

  constructor(private todoService: TodoService, private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      status: new FormControl('OPEN', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getAllTodos();
  }

  getAllTodos() {
    this.todoService.getAllTodo(this.filterByStatus).subscribe({
      next: (response) => {
        this.todos = response.data;
      },
    });
  }

  onFilterByStatus(status: string) {
    this.filterByStatus = status;
    this.getAllTodos();
  }


  onOpenSlidePanel(old: boolean = false) {
    if (old === false) this.todoId = null;
    this.isSlidePanelOpen = true;
  }

  onCloseSlidePanel() {
    this.isSlidePanelOpen = false;
    this.todoForm.reset({
      title: '',
      description: '',
      status: 'OPEN',
    });
  }

  onSubmitFormTodo() {
    if (this.todoForm.valid) {
      if (this.todoId) {
        this.todoService
          .updateTodo(this.todoId, this.todoForm.value)
          .subscribe({
            next: () => {
              this.getAllTodos();
              this.onCloseSlidePanel();
            },
            error: error => {
              this.alert = {
                show: true,
                message: error
              }
            }
          });
      } else {
        this.todoService.addTodo(this.todoForm.value).subscribe({
          next: () => {
            this.getAllTodos();
            this.onCloseSlidePanel();
          },
          error: error => {
            this.alert = {
              show: true,
              message: error
            }
          }
        });
      }
    } else {
      this.todoForm.markAllAsTouched();
    }
  }

  onLoadTodoForm(item: ITodo) {
    this.todoId = item.id!!;
    this.todoForm.patchValue({
      title: item.title,
      description: item.description,
      status: item.status,
    });
    this.onOpenSlidePanel(true);
  }
}
