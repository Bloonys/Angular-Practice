import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Header } from './component/header/header';
import { Greeting } from './component/greeting/greeting';
import { Counter } from './component/counter/counter';
import { Todos } from './todos/todos';
import { TodoItem } from './component/todo-item/todo-item';
import { provideHttpClient } from '@angular/common/http';
import { HighlightCompletedTodo } from './directives/highlight-completed-todo';

@NgModule({
  declarations: [
    App,
    Home,
    Header,
    Greeting,
    Counter,
    Todos,
    TodoItem,
    HighlightCompletedTodo,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
  ],
  bootstrap: [App]
})
export class AppModule { }
