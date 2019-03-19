import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';

const routes: Routes=[
  { path: '' ,component: LoginComponent},
{ path: 'login' ,component: LoginComponent},
{ path: 'welcome/:name', component: WelcomeComponent},
{path: 'logout',component:LogoutComponent,canActivate:[RouteGuardService]},
]

@NgModule({
  declarations: [LoginComponent,WelcomeComponent],
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
