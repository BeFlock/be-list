import { Routes } from '@angular/router';
import { DefaultComponent } from './shared/layouts/default/default.component';
import { LoginComponent } from './pages/login/login.component';
import { MasterComponent } from './shared/layouts/master/master.component';
import { TodoComponent } from './pages/todo/todo.component';
import { guestGuard } from './core/guards/guest.guard';
import { authGuard } from './core/guards/auth.guard';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {
    path: '',
    canActivate: [guestGuard],
    component: DefaultComponent,
    children: [{ path: '', component: LoginComponent }],
  },
  {
    path: '',
    canActivate: [guestGuard],
    component: DefaultComponent,
    children: [{ path: 'register', component: RegisterComponent }],
  },
  {
    path: '',
    canActivate: [authGuard],
    component: MasterComponent,
    children: [{ path: 'todo', component: TodoComponent }],
  },
];
