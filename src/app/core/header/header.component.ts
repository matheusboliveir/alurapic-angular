import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  user$!: Subscription;
  user!: User;

  constructor(private userService: UserService) {
    this.user$ = this.userService.getUser()
    .subscribe(user => this.user = user);
    console.log(this.user);
  }
}
