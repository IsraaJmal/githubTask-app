import { BrowserModule , Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { UsersComponent } from './components/user/users-list/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UsersComponent,
    NavbarComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgxPaginationModule,
    
   
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
