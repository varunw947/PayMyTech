import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
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
import { RetailerloginComponent } from './retailerlogin/retailerlogin.component';
import { RetailerregisterComponent } from './retailerregister/retailerregister.component';
import { DistributorregisterComponent } from './distributorregister/distributorregister.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        AccountRoutingModule
    ],
    declarations: [
        LayoutComponent,
        LoginComponent,
        RegisterComponent,
        ForgetpasswordComponent,
        NewpasswordComponent,
        AboutComponent,
        ContactComponent,
        RechargecontentComponent,
        BankingcontentComponent,
        TravelcontentComponent,
        TermsComponent,
        FaqComponent,
        RetailerloginComponent,
        RetailerregisterComponent,
        DistributorregisterComponent,
        AdminloginComponent
        
    ]
})
export class AccountModule { }