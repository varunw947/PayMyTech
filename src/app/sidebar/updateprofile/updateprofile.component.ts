import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { User } from '../../models';
import {AppConfig} from '../../app.config';
import { AccountService, AlertService, ExternalAPIService } from '../../services';
import { UserService } from '../../services/user.service';

import {AdminDistributorService} from '../../services/adminDistributor.service';



@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;

  FirstName:any;
  LastName:any;
  Mobile:any;
  Location:any;
  State:any;
  Address:any;
  PinCode:any;
  City:any;
  EmailAddress:any;
  OutletName:any;
  Id:any;


  AadharFrontImage:any;
  AadharBackImage:any;
  PanImage:any;
  UserImage:any;

  message:any;
  docURL:any;

  user: User ;

  userID:any;

  userDetails:any;


  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private userService: UserService,
    private exAPIService: ExternalAPIService,
    private alertService: AlertService, private config:AppConfig, private adminDistributorService: AdminDistributorService) {

      this.user = this.accountService.userValue;
      this.accountService.user.subscribe(x => this.user = x);
      debugger;
     // this.distid = this.user.mobile;
      this.userID = this.user.mobile;
      this.getUserByUniqueID();
      this.docURL=  this.config.apiUrl+"/DocFolder/";

    
     }

     getUserByUniqueID()
     {
      this.userService.getUserByUniqueID()
      .pipe(first()).subscribe((e:any) =>
      {
      
      this.userDetails = e;

      debugger;
      this.Id = this.userDetails.Id;
      this.FirstName = this.userDetails.firstName;
      this.Location = this.userDetails.location;
      this.Mobile = this.userDetails.mobile;

      this.State = this.userDetails.state;
      this.Address = this.userDetails.address;
      this.PinCode = this.userDetails.pinCode;

      this.City = this.userDetails.city;
      this.EmailAddress = this.userDetails.emailAddress;
      this.OutletName = this.userDetails.outletName;


      });

     
      
     }


  ngOnInit(): void {
  }

  get f() { return this.form.controls; }

  onSubmit()
  {
    this.submitted = true;
    this.alertService.clear();

    this.userService.updateUserDetails(
       this.FirstName, this.Location,
      this.State, this.Address, this.PinCode,
      this.City,this.Mobile,this.EmailAddress,
      this.OutletName).subscribe((f:any) =>
    {
      
          console.log(f);
          alert("Data is updated Successfuly");
        
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
