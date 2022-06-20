import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico-soliciatacoes',
  templateUrl: './historico-soliciatacoes.component.html',
  styleUrls: ['./historico-soliciatacoes.component.css']
})
export class HistoricoSoliciatacoesComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['position', 'name', 'responsavel', 'setor', 'dataProcesso', 'status'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  
  ngOnInit(): void {
  }

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'ProcessoAWC', responsavel:'A B C' , setor: 'jurídico', dataProcesso:'12/10/22', status:'Em processo'},
  {position: 2, name: 'ProcessoEEF', responsavel: 'C D S', setor: 'R.H.', dataProcesso:'11/05/2022', status: 'Em processo'},
  {position: 3, name: 'ProcessoGGI', responsavel: 'Q W S', setor: 'R.H.', dataProcesso:'04/01/2022', status: 'Em processo'},
  {position: 4, name: 'ProcessoQWS', responsavel: 'F E D', setor: 'R.H.', dataProcesso:'12/07/2022', status: 'Em processo'},
  {position: 5, name: 'ProcessoHGG', responsavel: 'V D C', setor: 'jurídico', dataProcesso:'03/05/2021', status: 'Em processo'},
  {position: 6, name: 'ProcessoERE', responsavel: 'G F', setor: 'jurídico', dataProcesso:'15/01/2022', status: 'Em processo'},
  {position: 7, name: 'ProcessoTEW', responsavel: 'S S C', setor: 'Administrativo', dataProcesso:'12/12/2022', status: 'Em processo'},
  {position: 8, name: 'ProcessoYTU', responsavel: 'Q Z S', setor: 'Administrativo', dataProcesso:'06/07/2021', status: 'Em processo'},
  {position: 9, name: 'ProcessoMNV', responsavel: 'V C S', setor: 'R.H.', dataProcesso:'05/09/2022', status: 'Em processo'},
  {position: 10, name: 'ProcessoSKW', responsavel: 'C V S', setor: 'R.H.', dataProcesso:'10/10/2022', status: 'Em processo'},
];


export interface PeriodicElement {
  name: string;
  position: number;
  responsavel: string;
  setor: string;
  dataProcesso:string;
  status: string;
}