import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HelloComponent} from './hello/hello.component';
import {TodosComponent} from './todos/todos.component';
import {CounterComponent} from './counter/counter.component';
import {TodoComponent} from './todos/todo/todo.component';
import {TimerComponent} from './timer/timer.component';
import {UsersComponent} from './users/users.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TodosComponent,
    CounterComponent,
    TodoComponent,
    TimerComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
