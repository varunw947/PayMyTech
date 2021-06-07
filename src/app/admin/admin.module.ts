import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule, NgForm } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AccordionModule} from 'node_modules/primeng/accordion';
import {MenuItem} from 'primeng/api';

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {TableModule} from 'primeng/table';

import { from } from 'rxjs';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';


import { AdminhomeComponent } from './adminhome/adminhome.component';
import { DistributerdetailComponent } from './distributerdetail/distributerdetail.component';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { EditDistributerComponent } from './edit-distributer/edit-distributer.component';
import { ViewDistributorComponent } from './view-distributor/view-distributor.component';
import { ViewRetailerComponent } from './view-retailer/view-retailer.component';
import { RetailerReportComponent } from './retailer-report/retailer-report.component';
import { DistributorReportComponent } from './distributor-report/distributor-report.component';


import { GridComponent } from '../GridComponent/gridcomponent.component';
import { ManageKYCComponent } from './manage-kyc/manage-kyc.component';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import { MomentModule } from 'angular2-moment';

import { DialogModule } from 'primeng/dialog';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { SchemeComponent } from './scheme/scheme.component';

import { CircleDetailComponent } from './circle-detail/circle-detail.component';
import { OperatorDetailComponent } from './operator-detail/operator-detail.component';
import { OperaorUpdateComponent } from './operaor-update/operaor-update.component';
import { CircleOpCodeComponent } from './circle-op-code/circle-op-code.component';
import { BankDetailComponent } from './bank-detail/bank-detail.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { SmsDetailComponent } from './sms-detail/sms-detail.component';
import { CapDetailComponent } from './cap-detail/cap-detail.component';
import { BannerDetailComponent } from './banner-detail/banner-detail.component';
import { CiplDetailComponent } from './cipl-detail/cipl-detail.component';
import { LowBalanceComponent } from './low-balance/low-balance.component';
import { MobileRechargeCommissionComponent } from './mobile-recharge-commission/mobile-recharge-commission.component';
import { DthRechargeCommissionComponent } from './dth-recharge-commission/dth-recharge-commission.component';
import { TransactionReportComponent } from './transaction-report/transaction-report.component';
import { MobileTransactionReportComponent } from './mobile-transaction-report/mobile-transaction-report.component';
import { DthTransactionReportComponent } from './dth-transaction-report/dth-transaction-report.component';
import { ApiForwardComponent } from './api-forward/api-forward.component';
import { ApiForwardSchemeComponent } from './api-forward-scheme/api-forward-scheme.component';
import { SendSMSComponent } from './send-sms/send-sms.component';
import { CreditsComponent } from './credits/credits.component';
import { DebitsComponent } from './debits/debits.component';
import { UserTokensComponent } from './user-tokens/user-tokens.component';
import { LiveTransactionComponent } from './live-transaction/live-transaction.component';


@NgModule({
  declarations: [GridComponent, AdminhomeComponent, DistributerdetailComponent, 
    AdminlayoutComponent, EditDistributerComponent, ViewDistributorComponent, 
    ViewRetailerComponent, RetailerReportComponent, DistributorReportComponent, 
    ManageKYCComponent, AdminDashboardComponent, ManageUsersComponent, EditUserComponent, SchemeComponent, CircleDetailComponent, OperatorDetailComponent, OperaorUpdateComponent, CircleOpCodeComponent, BankDetailComponent, TransactionDetailComponent, NewsDetailComponent, SmsDetailComponent, CapDetailComponent, BannerDetailComponent, CiplDetailComponent, LowBalanceComponent, MobileRechargeCommissionComponent, DthRechargeCommissionComponent, TransactionReportComponent, MobileTransactionReportComponent, DthTransactionReportComponent, ApiForwardComponent, ApiForwardSchemeComponent, SendSMSComponent, CreditsComponent, DebitsComponent, UserTokensComponent, LiveTransactionComponent],
    
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
        FormsModule,
        AdminRoutingModule,
        NgbModule,
    NgbAlertModule,
    
    TableModule,
    MomentModule,
    DialogModule,
    Ng2GoogleChartsModule,
   //GoogleChartsModule,
        
    NgxDaterangepickerMd.forRoot()
  ]
})
export class AdminModule { }
