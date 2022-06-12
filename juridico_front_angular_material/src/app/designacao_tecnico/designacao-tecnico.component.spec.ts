import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignacaoTecnicoComponent } from './designacao-tecnico.component';

describe('DesignaTecnicoComponent', () => {
  let component: DesignacaoTecnicoComponent;
  let fixture: ComponentFixture<DesignacaoTecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesignacaoTecnicoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignacaoTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
