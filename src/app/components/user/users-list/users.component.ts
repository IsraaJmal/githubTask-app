import { Component, OnInit, DoCheck, AfterViewChecked } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UsersService } from '../../../services/user/users.service';
import { User } from '../../../Interfaces/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  userObservable: Subscription;
  users: User[] = [];
  userId: number;
  startPage: Number = 0;
  paginationLimit: Number = 10;


  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.userObservable = this.usersService.getUsers()
      .subscribe((users: User[]) => {
        this.users = users;

      });
    this.activatedRoute.paramMap.subscribe(params => {
      let userId = this.userId = + params.get('user-id')
    })
  }

  showMoreItems() {
    this.paginationLimit = Number(this.paginationLimit) + 10;
  }

  showLessItems() {
    this.paginationLimit = Number(this.paginationLimit) - 10;
  }

  ngOnDestroy(): void {
    this.userObservable.unsubscribe();
  }



}









