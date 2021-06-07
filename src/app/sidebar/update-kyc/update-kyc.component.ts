import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { User } from '../../models';
import {AppConfig} from '../../app.config';
import { AccountService, AlertService, ExternalAPIService } from '../../services';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-update-kyc',
  templateUrl: './update-kyc.component.html',
  styleUrls: ['./update-kyc.component.css']
})
export class UpdateKYCComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;

  FirstName:any;
  LastName:any;
  Mobile:any;
  AadharFrontImage:any;
  AadharBackImage:any;
  PanImage:any;
  UserImage:any;

  message:any;
  docURL:any;




  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private exAPIService: ExternalAPIService, private userService:UserService,
    private alertService: AlertService, private config:AppConfig) {

      this.docURL=  this.config.apiUrl+"/DocFolder/";

    
     }


  ngOnInit(): void 
  {
  }

  get f() { return this.form.controls; }

  onSubmit()
  {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    this.exAPIService.KYCDetails(this.UserImage, this.AadharFrontImage, this.AadharBackImage,this.PanImage).subscribe((f:any) =>
    {
          console.log(f);
         
        //  alert(f.message);

          alert("Documents Submitted Successfully ");
         
    })
     
  }

  
  uploadPanImage(files)
  {
      //debugger;
      this.message=""; 
      if (files.length === 0){
        //  this.AadharFrontImage='';
       //   this.AadharBackImage='';
          this.PanImage='';
        //  this.UserImage='';
         
        return;
      }
   
      var formData = new FormData();
  
      for (let file of files){
        formData.append('', file,file.name);
      }
      this.loading=true;
      this.userService.UploadFile(formData).subscribe((result:any )=> { 
      this.loading=false;   
      this.PanImage =  result.Key;
      //this.docURL=  this.sanitizer.bypassSecurityTrustResourceUrl(this.config.apiUrl +"/" +result.Value);
      //this.docURL=  this.config.apiUrl +"/" +result.Value; 
     // alert(this.docURL);
          formData=null;
        },  error => {
              //debugger; 
              this.loading=false;
              if (error.status == 406)
              {
              this.message=error._body;
              this.alertService.error(this.message);  
              }
        });
  }

  
  uploadAadharBack(files)
  {
      //debugger;
      this.message=""; 
      if (files.length === 0){
        //  this.AadharFrontImage='';
          this.AadharBackImage='';
         // this.PanImage='';
        //  this.UserImage='';
         
        return;
      }
   
      var formData = new FormData();
  
      for (let file of files){
        formData.append('', file,file.name);
      }
      this.loading=true;
      this.userService.UploadFile(formData).subscribe((result:any ) => { 
      this.loading=false;   
      this.AadharBackImage =  result.Key;
     // this.docURL=  this.sanitizer.bypassSecurityTrustResourceUrl(this.config.apiUrl +"/" +result.Value);
         
          formData=null;
        },  error => {
              //debugger; 
              this.loading=false;
              if (error.status == 406)
              {
              this.message=error._body;
              this.alertService.error(this.message);  
              }
        });
  }

  uploadAadharFront(files)
  {
      //debugger;
      this.message=""; 
      if (files.length === 0){
          this.AadharFrontImage='';
         // this.AadharBackImage='';
         // this.PanImage='';
        //  this.UserImage='';
         
        return;
      }
   
      var formData = new FormData();
  
      for (let file of files){
        formData.append('', file,file.name);
      }
      this.loading=true;
      this.userService.UploadFile(formData).subscribe((result:any ) => { 
      this.loading=false;   
      this.AadharFrontImage =  result.Key;
     // this.docURL=  this.sanitizer.bypassSecurityTrustResourceUrl(this.config.apiUrl +"/" +result.Value);
       //   this.docURL=  this.config.apiUrl +"/" +result.Value;
          formData=null;
        },  error => {
              //debugger; 
              this.loading=false;
              if (error.status == 406)
              {
              this.message=error._body;
              this.alertService.error(this.message);  
              }
        });
  }



  upload(files)
{
    //debugger;
    this.message=""; 
    if (files.length === 0){
       // this.AadharFrontImage='';
       // this.AadharBackImage='';
       // this.PanImage='';
        this.UserImage='';
       
      return;
    }
 
    var formData = new FormData();

    for (let file of files){
      formData.append('', file,file.name);
    }
    this.loading=true;
    this.userService.UploadFile(formData).subscribe((result:any ) => { 
    this.loading=false;   
    this.UserImage =  result.Key;
   // this.docURL=  this.sanitizer.bypassSecurityTrustResourceUrl(this.config.apiUrl +"/" +result.Value);
      //  this.docURL=  this.config.apiUrl +"/" +result.Value;
        formData=null;
      },  error => {
            //debugger; 
            this.loading=false;
            if (error.status == 406)
            {
            this.message=error._body;
            this.alertService.error(this.message);  
            }
      });
}




}
