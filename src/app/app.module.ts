import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComprobanteComponent } from './components/comprobante/comprobante.component';
import { ComprobanteService } from './services/comprobante.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

/*RUTAS */
import {APP_ROUTING} from './app.routes'


/*Componentes*/ 
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ExampleComponent } from './components/example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    ComprobanteComponent,
    NavbarComponent,
    HomeComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING

  ],
  providers: [ComprobanteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
