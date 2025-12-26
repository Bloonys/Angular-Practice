import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Home} from './home/home'
import { Header } from './component/header/header';
import { Todos } from './todos/todos';

const routes: Routes = [
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'todos',
    component: Todos,
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' }, // 默认跳转到 home
  { path: 'home', component: Home },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
