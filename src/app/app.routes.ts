
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ComprobanteComponent } from './components/comprobante/comprobante.component';
import { ExampleComponent } from './components/example/example.component';
import {DinamicComponent} from './components/dinamic/dinamic.component';
import {Dinamic2Component} from './components/dinamic2/dinamic2.component';

const APP_ROUTES: Routes=[
    {path:'home',component:HomeComponent},
    {path:'comprobante',component:ComprobanteComponent},
    {path:'example',component:ExampleComponent},
    {path:'dinamic',component:DinamicComponent},
    {path:'dinamic2',component:Dinamic2Component},
    {path:'**',pathMatch:'full',redirectTo:'home'},
];

export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);
