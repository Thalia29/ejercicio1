import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';


const routes: Routes = [
  
  {path: '', redirectTo:'/dashboard', pathMatch:'full'},//ruta por defecto
 


];
//routermodule.forRoot :especifica las rutas principales
@NgModule({
  declarations: [],
  imports:[
RouterModule.forRoot(routes),
AuthRoutingModule,
],
  
  exports: [RouterModule],
})
export class AppRoutingModule { }
