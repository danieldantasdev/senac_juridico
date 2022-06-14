import { ExtraOptions, PreloadAllModules, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DesignacaoTecnicoComponent } from './designacao_tecnico/designacao-tecnico.component';
import { ConfirmaDesignacaoComponent } from './confirma_designacao/confirma-designacao.component';
import { HistoricoSolicitacaoComponent } from './historico-solicitacao/historico-solicitacao.component';

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
    path: 'historico-solicitacao',
    component: HistoricoSolicitacaoComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

export const APP_EXTRA_OPTIONS: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
};
