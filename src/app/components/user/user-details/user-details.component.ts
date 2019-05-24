import { ActivatedRoute, Router } from '@angular/router';
import { UserDetails } from '../../../Interfaces/userDetails';
import { UsersService } from '../../../services/user/users.service';
import { Component, OnInit, Input } from '@angular/core';
import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.sass']
})
export class UserDetailsComponent implements OnInit {


  userId:number;
  user: UserDetails;
  // defaultAvatar: string = 'assets/avatar.png'

  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(params => {
      let userId = this.userId = + params.get('user-id')

      if (this.userId) {
        this.usersService.getUserbyId(userId).subscribe(response => {

          this.user = response as UserDetails;
        });

      }
      else {
        this.router.navigate(['users', 1]);
      }

    });
  }


}
