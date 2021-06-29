import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isShow = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isShow = !this.isShow;
  }

}
