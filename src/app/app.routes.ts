
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ComprobanteComponent } from './components/comprobante/comprobante.component';
import { ExampleComponent } from './components/example/example.component';


const APP_ROUTES: Routes=[
    {path:'home',component:HomeComponent},
    {path:'comprobante',component:ComprobanteComponent},
    {path:'example',component:ExampleComponent},
    {path:'**',pathMatch:'full',redirectTo:'home'}

];

export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);
