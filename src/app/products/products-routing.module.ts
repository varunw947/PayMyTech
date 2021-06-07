import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';



const routes: Routes = [
  //{ path: '', component: ViewAllProductsComponent },
    
    

   
  
      ];

      @NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
      })
      export class ProductsRoutingModule { }

      