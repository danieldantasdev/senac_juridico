import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarGerenteComponent } from './nav-bar-gerente.component';

describe('NavBarGerenteComponent', () => {
  let component: NavBarGerenteComponent;
  let fixture: ComponentFixture<NavBarGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarGerenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
