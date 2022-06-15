import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historico-solicitacao',
  templateUrl: './historico-solicitacao.component.html',
  styleUrls: ['./historico-solicitacao.component.css']
})
export class HistoricoSolicitacaoComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
