import { ExtraOptions, PreloadAllModules, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DesignacaoTecnicoComponent } from './designacao_tecnico/designacao-tecnico.component';
import { ConfirmaDesignacaoComponent } from './confirma_designacao/confirma-designacao.component';
import { HistoricoSoliciatacoesComponent } from './historico-soliciatacoes/historico-soliciatacoes.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'designacao-tecnico',
    component: DesignacaoTecnicoComponent,
  },
  {
    path: 'confirma-designacao',
    component: ConfirmaDesignacaoComponent,
  },
  {
    path: 'historico-soliciatacoes',
    component: HistoricoSoliciatacoesComponent
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

export const APP_EXTRA_OPTIONS: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
};
