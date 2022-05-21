import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarEmpresasComponent } from './components/Empresa/listar-empresas/listar-empresas.component';
import { AdicionarEmpresaComponent } from './components/Empresa/adicionar-empresa/adicionar-empresa.component';
import { AtualizarEmpresaComponent } from './components/Empresa/atualizar-empresa/atualizar-empresa.component';
import { ApagarEmpresaComponent } from './components/Empresa/apagar-empresa/apagar-empresa.component';
import { DesignaTecnicoComponent } from './components/Tecnico/designa-tecnico/designa-tecnico.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarEmpresasComponent,
    AdicionarEmpresaComponent,
    AtualizarEmpresaComponent,
    ApagarEmpresaComponent,
    DesignaTecnicoComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
