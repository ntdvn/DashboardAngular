import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './skeleton/side-bar/side-bar.component';
import { NavBarComponent } from './skeleton/nav-bar/nav-bar.component';
import { FooterComponent } from './skeleton/footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardPageComponent } from './skeleton/dashboard-page/dashboard-page.component';
import { UsersPageComponent } from './users-page/users-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavBarComponent,
    FooterComponent,
    LoginPageComponent,
    HomePageComponent,
    DashboardPageComponent,
    UsersPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
