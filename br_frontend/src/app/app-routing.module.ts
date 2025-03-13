import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/app-layout/header/about/about.component';
import { DealsComponent } from './components/deals/deals.component';
import { ProductDetailsComponent } from './components/deals/products/product-details/product-details.component';
import { LogInComponent } from './components/auth/log-in/log-in.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthGuard } from './components/auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomepageComponent , canActivate: [AuthGuard] },
  { path: 'home', component: HomepageComponent , canActivate: [AuthGuard]},
  { path: 'deals', component: DealsComponent , canActivate: [AuthGuard]},
  { path: 'about', component: AboutComponent , canActivate: [AuthGuard]},
  { path: 'products', component: ProductDetailsComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
