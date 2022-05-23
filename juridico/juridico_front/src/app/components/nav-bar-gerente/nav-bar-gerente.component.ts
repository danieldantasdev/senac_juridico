import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-gerente',
  templateUrl: './nav-bar-gerente.component.html',
  styleUrls: ['./nav-bar-gerente.component.css'],
})
export class NavBarGerenteComponent implements OnInit {
  constructor(router: Router) {}

  ngOnInit(): void {}

  title = 'slidebarUi';

  _opened: boolean = false;

  _toggleOpened(): void {
    this._opened = !this._opened;
  }
}
