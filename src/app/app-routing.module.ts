import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './sidebar/home.component';
import { AuthGuard } from './helpers';
import { AppComponent } from './app.component';
import { from } from 'rxjs';

//import {LoginComponent} from '/all_project/safePayProject 3/safePay/src/app/account/login.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
//const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

//const productsModule = () => import('./products/products.module').then(x => x.ProductsModule);

const routes: Routes = [
   // { path: '', component: LoginComponent, canActivate: [AuthGuard] },
  //  { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
   // { path: 'account', loadChildren: accountModule },
   { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
    { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
    { path: 'sidebar', loadChildren: () => import('./sidebar/sidebar.module').then(n => n.SidebarModule) },

    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(n => n.AdminModule) },
    
 // { path: 'sidebar', component: HomeComponent },
  // otherwise redirect to home
    { path: '**', redirectTo: 'account/login' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],

    exports: [RouterModule]
})
export class AppRoutingModule { }