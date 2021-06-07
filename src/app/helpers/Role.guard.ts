// import { Injectable } from '@angular/core';
// import { Router, CanActivate, ActivatedRouteSnapshot,NavigationExtras } from '@angular/router';
// import { AuthGuard } from './auth.guard';
// //import {  AuthenticationService } from '../Services/';
// import { CommanComponent } from '../Shared/comman.component'; 
 
// @Injectable()
// export class RoleGuardService implements CanActivate {
//   constructor(public auth: AuthGuard, public router: Router
    
//     , private CC: CommanComponent) {}
//   canActivate(route: ActivatedRouteSnapshot): boolean {
//    // debugger;
//     let expectedRoleArray = route.data;
    
//     expectedRoleArray = expectedRoleArray.expectedRole;
   
//     const token = localStorage.getItem('user');
 
//     // decode the token to get its payload
//    // const tokenPayload = decode(token);
//  const tokenPayload =JSON.parse(token);
//  let tokenPayloadRole="NoRole"
//  if(tokenPayload){
//   tokenPayloadRole= tokenPayload.Role;
//  }
 
//     let  expectedRole = '';
 

//     for(let i=0; i<expectedRoleArray.length; i++){
//       if(expectedRoleArray[i]==tokenPayloadRole){
   
//         expectedRole = tokenPayloadRole;
//       }
//     }
  
//     if (expectedRole == 'User') {
     
//       return true;
//     } 
//       else  if(expectedRole=='NoRole'){  
//         if (this.auth.isAuthenticated())
//         {
//           this.authenticationService.logoutDetail().subscribe(result=>{
//             this.authenticationService.logout();
//            // this.router.navigate(['/home']); 
//            });
//         }
//         return true;
//       }
//       else{ 
//         if (this.auth.isAuthenticated())
//         {
//           this.authenticationService.logoutDetail().subscribe(result=>{
//             this.authenticationService.logout();
//             this.router.navigate(['/home']); 
//            });
//         }
//         return false;
//       }
    
//   }
// }
