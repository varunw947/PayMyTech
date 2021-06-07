import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RechargecontentComponent } from './rechargecontent/rechargecontent.component';
import { BankingcontentComponent } from './bankingcontent/bankingcontent.component';
import { TravelcontentComponent } from './travelcontent/travelcontent.component';

import { TermsComponent } from './terms/terms.component';
import { FaqComponent } from './faq/faq.component';
import {AuthGuard} from '../helpers/auth.guard';

import { RetailerloginComponent } from './retailerlogin/retailerlogin.component';
import { RetailerregisterComponent } from './retailerregister/retailerregister.component';
import { DistributorregisterComponent } from './distributorregister/distributorregister.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';


const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'login',  component: LoginComponent },

           // { path: 'distLogin',  component: LoginComponent },

            { path: 'alogin',  component: AdminloginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'forget', component: ForgetpasswordComponent },
          //  { path: 'change/:mob', component: NewpasswordComponent },

            { path: 'about', component: AboutComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'rechargecontent', component: RechargecontentComponent },
            { path: 'bankcontent', component: BankingcontentComponent },
            { path: 'travelcontent', component: TravelcontentComponent },
            { path: 'terms', component: TermsComponent },
            { path: 'faq', component: FaqComponent },
            { path: 'retailerlogin', component: RetailerloginComponent },
            { path: 'retailerregister', component: RetailerregisterComponent },
            { path: 'distregister', component: DistributorregisterComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }