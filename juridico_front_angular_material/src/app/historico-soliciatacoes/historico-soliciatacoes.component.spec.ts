import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoSoliciatacoesComponent } from './historico-soliciatacoes.component';

describe('HistoricoSoliciatacoesComponent', () => {
  let component: HistoricoSoliciatacoesComponent;
  let fixture: ComponentFixture<HistoricoSoliciatacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoSoliciatacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoSoliciatacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
