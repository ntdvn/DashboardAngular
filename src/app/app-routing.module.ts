import { UsersPageComponent } from './users-page/users-page.component';
import { DashboardPageComponent } from './skeleton/dashboard-page/dashboard-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    // pathMatch: 'full',
    children: [
      { path: '', component: HomePageComponent },
      { path: 'users', component: UsersPageComponent },
    ],
  },
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
