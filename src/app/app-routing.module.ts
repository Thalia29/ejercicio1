import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PagesComponent } from './pages/pages.component';
import { ProductComponent } from './pages/product/product.component';
//import { CommonModule } from '@angular/common';

const routes:Routes = [
  //rutas protegidas 
  {path : '' ,
   component:PagesComponent,
  children:[
    {path : 'dashboard' , component:DashboardComponent},
    {path : 'catalogue' , component:CatalogueComponent},
    {path : 'product' , component:ProductComponent},
    {path : '' , redirectTo : '/dashboard', pathMatch : 'full'},
  ]},

  {path : 'login' , component:LoginComponent},
  {path : 'register' , component:RegisterComponent},


  {path : '**' , component:NotFoundComponent},


]
@NgModule({
  declarations: [],
  imports: [
      RouterModule.forRoot(routes) , //especifica las rutas principales
  ],
  exports:[RouterModule]

})
export class AppRoutingModule { }