import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AccordionModule} from 'node_modules/primeng/accordion';
import {MenuItem} from 'primeng/api';

//import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
//import {MenuItem} from 'primeng/api';                  //api

import {AuthGuard} from '../helpers/auth.guard';

import { SchemeComponent } from './scheme/scheme.component';


import { AdminhomeComponent } from './adminhome/adminhome.component';
import { DistributerdetailComponent } from './distributerdetail/distributerdetail.component';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';

import { EditDistributerComponent } from './edit-distributer/edit-distributer.component';

import { ViewDistributorComponent } from './view-distributor/view-distributor.component';
import { ViewRetailerComponent } from './view-retailer/view-retailer.component';
import { RetailerReportComponent } from './retailer-report/retailer-report.component';
import { DistributorReportComponent } from './distributor-report/distributor-report.component';

import { ManageKYCComponent } from './manage-kyc/manage-kyc.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { ManageUsersComponent } from './manage-users/manage-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';

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


const routes: Routes = [
    {
        path: 'ad', component: AdminlayoutComponent,
        children: [
           
            { path: 'home', component: AdminhomeComponent },
            { path: 'dist', component: DistributerdetailComponent },
           // { path: 'dist/:id', component: DistributerdetailComponent },
          //  { path: 'editDist', component: EditDistributerComponent },

            { path: 'editDist/:id', component: EditDistributerComponent },

            { path: 'viewDist/:id', component: ViewDistributorComponent },

            { path: 'viewRetailer', component: ViewRetailerComponent },

            { path: 'reportDist', component: DistributorReportComponent },

            { path: 'reportRetailer', component: RetailerReportComponent },

            { path: 'manageKYC', component: ManageKYCComponent },

            { path: 'dashboard', component: AdminDashboardComponent },

            { path: 'manageUser', component: ManageUsersComponent },

            { path: 'editUser', component: EditUserComponent },

            { path: 'schemeDetail', component: SchemeComponent } ,

            
            
            { path: 'circleDetail', component: CircleDetailComponent } ,

            { path: 'operatorDetail', component: OperatorDetailComponent } ,

            { path: 'opUpdate', component: OperaorUpdateComponent } ,

            { path: 'circleOpcode', component: CircleOpCodeComponent } ,

            { path: 'bankDetail', component: BankDetailComponent } ,

            { path: 'transactionDetail', component: TransactionDetailComponent } ,

            { path: 'newsDetail', component: NewsDetailComponent } ,

            { path: 'smsDetail', component: SmsDetailComponent } ,

            { path: 'capDetail', component: CapDetailComponent } ,

            { path: 'bannerDetail', component: BannerDetailComponent } ,

            { path: 'ciplDetail', component: CiplDetailComponent } ,

            { path: 'lowBalance', component: LowBalanceComponent } ,

            { path: 'mobComm', component: MobileRechargeCommissionComponent } ,

            { path: 'DthComm', component: DthRechargeCommissionComponent } ,

            { path: 'TranxReport', component: TransactionReportComponent } ,

            { path: 'MobTranx', component: MobileTransactionReportComponent } ,

            { path: 'DthTranx', component: DthTransactionReportComponent } ,







            { path: 'apiForward', component: ApiForwardComponent } ,

            { path: 'apiForwardScheme', component: ApiForwardSchemeComponent } ,

            { path: 'sendSMS', component: SendSMSComponent } ,

            { path: 'credits', component: CreditsComponent } ,

            { path: 'debits', component: DebitsComponent } ,

            { path: 'userTokens', component: UserTokensComponent } ,

            { path: 'liveTranx', component: LiveTransactionComponent } 











          //  { path: 'reportRetailer/:id', component: RetailerReportComponent }

          
          //  { path: 'change/:mob', component: NewpasswordComponent },

            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }