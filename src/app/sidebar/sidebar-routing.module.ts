import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

import {SidebarModule} from './sidebar.module';


import {HomeComponent} from './home.component';

import {ViewAllProductsByCategoryComponent} from './view-all-products-by-category/view-all-products-by-category.component';

import {ShowproductComponent} from './showproduct/showproduct.component';

import {ViewcategoryComponent} from './viewcategory/viewcategory.component';

import { MobilerechargeComponent } from './mobilerecharge/mobilerecharge.component';
import { DthrechargeComponent } from './dthrecharge/dthrecharge.component';
import { MoneytransferComponent } from './moneytransfer/moneytransfer.component';
import { TravelComponent } from './travel/travel.component';
import { ReportComponent } from './report/report.component';

import { ElectricityComponent } from './electricity/electricity.component';
import { GasComponent } from './gas/gas.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { CreatecustomerComponent } from './createcustomer/createcustomer.component';

import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ConfirmaccountnumberComponent } from './confirmaccountnumber/confirmaccountnumber.component';
import { AddbeneficiaryComponent } from './addbeneficiary/addbeneficiary.component';

import { UtilityrechargeComponent } from './utilityrecharge/utilityrecharge.component';

import {AuthGuard} from '../helpers/auth.guard';

import { RetailerlistComponent } from './retailerlist/retailerlist.component';

import { UpdateKYCComponent } from './update-kyc/update-kyc.component';

import { UpdateprofileComponent } from './updateprofile/updateprofile.component';

import { ChangepasswordComponent } from './changepassword/changepassword.component';
//import {RoleGuardService} from '../helpers/Role.guard';

const routes: Routes = [
    
    {
     //    path: '', pathMatch: 'full', redirectTo: 'home' ,
   // {path: 'recharge/:id', component: ShowproductComponent },
     path: 'home', component: HomeComponent ,

    children:[
      {path: 'mobrecharge', canActivate: [AuthGuard],  component: MobilerechargeComponent },
   // {path: 'category/:id', canActivate: [AuthGuard], component: ViewAllProductsByCategoryComponent },
    
    {path: 'categoryall', canActivate: [AuthGuard], component: ViewAllProductsByCategoryComponent },
    {path: 'category',canActivate: [AuthGuard], component: ViewcategoryComponent },
    {path: 'dthrecharge',canActivate: [AuthGuard], component: DthrechargeComponent },
    {path: 'money',canActivate: [AuthGuard], component: MoneytransferComponent },
    {path: 'travel',canActivate: [AuthGuard], component: TravelComponent },
    {path: 'report',canActivate: [AuthGuard], component: ReportComponent },

    {path: 'electric',canActivate: [AuthGuard], component: ElectricityComponent },
    {path: 'gas',canActivate: [AuthGuard], component: GasComponent },
    {path: 'insurance',canActivate: [AuthGuard], component: InsuranceComponent },

    {path: 'create_customer',canActivate: [AuthGuard], component: CreatecustomerComponent  },

    
    {path: 'add_customer',canActivate: [AuthGuard], component: AddcustomerComponent  },
    {path: 'confirm_account',canActivate: [AuthGuard], component: ConfirmaccountnumberComponent  },
    {path: 'add_beneficiary',canActivate: [AuthGuard], component: AddbeneficiaryComponent  },
    {path: 'utility',canActivate: [AuthGuard], component: UtilityrechargeComponent  },
    {path: 'retailer',canActivate: [AuthGuard], component: RetailerlistComponent  },

    {path: 'kyc',canActivate: [AuthGuard], component: UpdateKYCComponent  },

    {path: 'updProfile', component: UpdateprofileComponent  },

    {path: 'changePassword', component: ChangepasswordComponent  },

    
    
   
    ]
}

    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class SidebarRoutingModule { }

