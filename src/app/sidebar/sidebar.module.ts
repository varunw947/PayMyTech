import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import {HomeComponent} from './home.component';
import { SidebarRoutingModule } from './sidebar-routing.module';

import {ViewAllProductsByCategoryComponent} from './view-all-products-by-category/view-all-products-by-category.component';

import {ShowproductComponent} from './showproduct/showproduct.component';
  import { from } from 'rxjs';
import { ViewcategoryComponent } from './viewcategory/viewcategory.component';
import { MobilerechargeComponent } from './mobilerecharge/mobilerecharge.component';
import { DthrechargeComponent } from './dthrecharge/dthrecharge.component';
import { MoneytransferComponent } from './moneytransfer/moneytransfer.component';
import { TravelComponent } from './travel/travel.component';
import { ReportComponent } from './report/report.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { GasComponent } from './gas/gas.component';
import { InsuranceComponent } from './insurance/insurance.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { CreatecustomerComponent } from './createcustomer/createcustomer.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ConfirmaccountnumberComponent } from './confirmaccountnumber/confirmaccountnumber.component';
import { AddbeneficiaryComponent } from './addbeneficiary/addbeneficiary.component';
import { UtilityrechargeComponent } from './utilityrecharge/utilityrecharge.component';
import { RetailerlistComponent } from './retailerlist/retailerlist.component';

import {TableModule} from 'primeng/table';

import { DialogModule } from 'primeng/dialog';

import { GridComponent } from '../GridComponent/gridcomponent.component';
import { UpdateKYCComponent } from './update-kyc/update-kyc.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

@NgModule({
  declarations: [ HomeComponent,ViewAllProductsByCategoryComponent,ShowproductComponent, ViewcategoryComponent, MobilerechargeComponent, DthrechargeComponent, MoneytransferComponent, TravelComponent, ReportComponent, ElectricityComponent, GasComponent, InsuranceComponent, CreatecustomerComponent, AddcustomerComponent, ConfirmaccountnumberComponent, AddbeneficiaryComponent, UtilityrechargeComponent, RetailerlistComponent, UpdateKYCComponent, UpdateprofileComponent, ChangepasswordComponent ],
  imports: [
    CommonModule,
    RouterModule,
    SidebarRoutingModule,
    ReactiveFormsModule,
    
    FormsModule,
    NgbModule,
    NgbAlertModule,
    TableModule,
    DialogModule
    
    
  ]
  , exports: [CreatecustomerComponent, AddcustomerComponent, ConfirmaccountnumberComponent, AddbeneficiaryComponent]
  
})
export class SidebarModule { }
