import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  isCollapse: boolean = false;
  title = 'GitHub';
  constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }


  toggleNavBar() {
    this.isCollapse = !this.isCollapse;
  }

  ngOnInit() {
  }

}
