import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComprobanteComponent } from './components/comprobante/comprobante.component';
import { ComprobanteService } from './services/comprobante.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DinamicComponent} from './components/dinamic/dinamic.component';

/*RUTAS */
import {APP_ROUTING} from './app.routes'


/*Componentes*/ 
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ExampleComponent } from './components/example/example.component';
import { Dinamic2Component } from './components/dinamic2/dinamic2.component';

@NgModule({
  declarations: [
    AppComponent,
    ComprobanteComponent,
    NavbarComponent,
    HomeComponent,
    ExampleComponent,DinamicComponent, Dinamic2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING,
    ReactiveFormsModule


  ],
  providers: [ComprobanteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
