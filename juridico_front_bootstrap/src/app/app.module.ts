import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarEmpresasComponent } from './components/Empresa/listar-empresas/listar-empresas.component';
import { AdicionarEmpresaComponent } from './components/Empresa/adicionar-empresa/adicionar-empresa.component';
import { AtualizarEmpresaComponent } from './components/Empresa/atualizar-empresa/atualizar-empresa.component';
import { ApagarEmpresaComponent } from './components/Empresa/apagar-empresa/apagar-empresa.component';
import { DesignaTecnicoComponent } from './components/Tecnico/designa-tecnico/designa-tecnico.component';
import { ConfirmaDesignacaoTecnicoComponent } from './components/Tecnico/confirma-designacao-tecnico/confirma-designacao-tecnico.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HistoricoNavegacaoComponent } from './components/Tecnico/historico-navegacao/historico-navegacao.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarEmpresasComponent,
    AdicionarEmpresaComponent,
    AtualizarEmpresaComponent,
    ApagarEmpresaComponent,
    DesignaTecnicoComponent,
    NavBarComponent,
    ConfirmaDesignacaoTecnicoComponent,
    FooterComponent,
    HistoricoNavegacaoComponent,
    HeaderComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
