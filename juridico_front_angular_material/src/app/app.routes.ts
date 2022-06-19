import { ExtraOptions, PreloadAllModules, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DesignacaoTecnicoComponent } from './components/designacao_tecnico/designacao-tecnico.component';
import { ConfirmaDesignacaoComponent } from './components/confirma_designacao/confirma-designacao.component';

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
    path: '**',
    redirectTo: 'home',
  },
];

export const APP_EXTRA_OPTIONS: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
};
