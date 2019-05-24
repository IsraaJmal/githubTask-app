import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/user/users-list/users.component';

const routes: Routes = [

  
  {path :" ", component : HomeComponent },
  {path :"home", redirectTo: ' ' , pathMatch : 'prefix'},
  {path: "about" , component : AboutComponent},
  {path: "about/" , redirectTo: 'about' , pathMatch : 'prefix'},
  { path : "users" , component :UsersComponent},
  { path : "users/:user-id" , component : UsersComponent},
  { path : "users/**" , redirectTo: 'users' , pathMatch : 'prefix'},
  {path : '**', component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
