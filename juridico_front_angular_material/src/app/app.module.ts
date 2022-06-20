import { FlightModule } from './flight/flight.module';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_EXTRA_OPTIONS, APP_ROUTES } from './app.routes';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ConfirmaDesignacaoComponent } from './confirma_designacao/confirma-designacao.component';
import { DesignacaoTecnicoComponent } from './designacao_tecnico/designacao-tecnico.component';
import { HistoricoNavegacaoComponent } from './historico_navegacao/historico-navegacao.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';

import { HistoricoSoliciatacoesComponent } from './historico-soliciatacoes/historico-soliciatacoes.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FlightModule,
    RouterModule.forRoot([...APP_ROUTES], { ...APP_EXTRA_OPTIONS }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTableModule,
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    DesignacaoTecnicoComponent,
    ConfirmaDesignacaoComponent,
    HistoricoNavegacaoComponent,
    HistoricoSoliciatacoesComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
