import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmaDesignacaoComponent } from './confirma-designacao.component';

describe('ConfirmaDesignacaoTecnicoComponent', () => {
  let component: ConfirmaDesignacaoComponent;
  let fixture: ComponentFixture<ConfirmaDesignacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmaDesignacaoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmaDesignacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
