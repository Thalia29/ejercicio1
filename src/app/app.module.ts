import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './static/header/header.component';
import { FooterComponent } from './static/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SidebarComponent } from './static/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './static/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    NotFoundComponent,
    SidebarComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
