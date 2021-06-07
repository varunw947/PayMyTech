import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';




// used to create fake backend
import { fakeBackendProvider } from './helpers';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './components';

import {  HashLocationStrategy, LocationStrategy } from '@angular/common';

import {AdminModule} from './admin/admin.module';
import {ProductsModule} from './products/products.module';

import {SidebarModule} from './sidebar/sidebar.module';

import { CommonModule } from '@angular/common';

import { FormsModule, NgForm } from '@angular/forms';

import { from } from 'rxjs';
import { CommanComponent } from './Shared/comman.component';

import {AppConfig} from './app.config';

import {AccordionModule} from 'node_modules/primeng/accordion';
import {MenuItem} from 'primeng/api';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';




import {NgbDropdownModule, NgbModule,NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

//import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

//import { MomentModule } from 'angular-moment';



//import { BsDatepickerModule, DatepickerConfig, BsDatepickerConfig,TimepickerModule } from '@ng-bootstrap/ng-bootstrap';

import {EqualValidator } from './directive/EqualValidator.directive';
import {InputRestrictionDirective} from './directive/InputRestriction.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        ProductsModule,
        CommonModule,
        FormsModule,
        SidebarModule,
        NgbModule,
        NgbAlertModule,
        NgbDropdownModule,
        AdminModule,
        BrowserAnimationsModule,
        ServiceWorkerModule,
        
        InputTextModule,
        ButtonModule,
       
        TableModule,
        NgbDatepickerModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: environment.production,
          // Register the ServiceWorker as soon as the app is stable
          // or after 30 seconds (whichever comes first).
         // registrationStrategy: 'registerWhenStable:30000'
         registrationStrategy: 'registerImmediately'
        })

        
       
        

    ],
    declarations: [
        
        AppComponent,
        AlertComponent,
        EqualValidator,
        InputRestrictionDirective
        
        
        
    ],
    
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        {provide: LocationStrategy, useClass: HashLocationStrategy},

        CommanComponent,

        AppConfig,

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };