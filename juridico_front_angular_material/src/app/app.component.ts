import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'juridico-app',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  menudropdown!: MatSidenav;

  constructor(private observer: BreakpointObserver) {}

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.position = 'start';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          // this.sidenav.position = 'end';
          this.sidenav.open();
        }
      });

    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.menudropdown.mode = 'side';
          this.menudropdown.position = 'end';
          this.menudropdown.close();
        } else {
          this.menudropdown.mode = 'over';
          // this.menudropdown.position = 'start';
          this.menudropdown.open();
        }
      });
  }
}
