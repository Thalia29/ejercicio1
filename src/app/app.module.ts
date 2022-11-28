import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PagesModule } from './pages/pages.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';
import { StaticModule } from './static/static.module';
import { StaticComponent } from './static/static.component';
import { NotFoundComponent } from './not-found/not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    AuthComponent,
    StaticComponent,
    NotFoundComponent,
  



  ],
  //imports siempre van los modulos
  imports: [
    BrowserModule,
    PagesModule,
    AuthModule,
   
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }