import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(router: Router) {}

  ngOnInit(): void {}

  title = 'slidebarUi';

  _opened: boolean = false;

  _toggleOpened(): void {
    this._opened = !this._opened;
  }
}
