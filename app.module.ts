import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';
import { HttpIntercepterBasicAuthService } from './service/http/http-intercepter-basic-auth.service';

@NgModule({
  declarations: [
    AppComponent,

    WelcomeComponent,
    LoginComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    FormsModule, 
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
       RouterModule.forRoot([
      {path: '',component:LoginComponent},
      {path: 'login',component:LoginComponent},
      {path: 'welcome/:name',component:WelcomeComponent,canActivate:[RouteGuardService]},
      {path: 'todos',component:ListTodosComponent,canActivate:[RouteGuardService]},
      {path: 'logout',component:LogoutComponent,canActivate:[RouteGuardService]},
      {path: 'todos/:id',component:TodoComponent,canActivate:[RouteGuardService]},


      
    ])
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:HttpIntercepterBasicAuthService,multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
