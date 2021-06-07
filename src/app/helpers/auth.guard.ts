 import { Injectable } from '@angular/core';
 import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

 import { AccountService } from '../services';

 @Injectable({ providedIn: 'root' })
 export class AuthGuard implements CanActivate {
     constructor(
         private router: Router,
         private accountService: AccountService
     ) {}

     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
         debugger;
         const user = this.accountService.userValue;
         if (user) {
             // authorised so return true
             return true;
         }

         // not logged in so redirect to login page with the return url
         this.router.navigate(['./login'], { queryParams: { returnUrl: state.url }});
         return false;
     }
 }


// import { Router, ActivatedRoute } from '@angular/router';
//     import { routes } from '../app.routing';

//     @Injectable()
//     export class AuthGuard  {
//        constructor(private router: Router,private activatedRoute: ActivatedRoute) { 

//        }

//       canActivate(routeerstate?: any) {
//        let url = routeerstate._routerState.url; // this url is unactivated route which the user is trying to enter;
//       let validRoutes = routes;
//       url = url.replace(/\//g,"");
//       const isRouteValid = validRoutes.findIndex((item) => item.path === url) > -1 ? true : false; 
//       if(isRouteValid){
//          if(this.isLoggedIn()) {
//           if(url === 'login'){
//             this.router.navigate(['dashboard']);
//           } else {
//             return true;
//           }
//          } else {
//             this.router.navigate(['login']);
//          }
//        } else { 
//         if(this.isLoggedIn()) { // not valid route and logged In
//             this.router.navigate(['dashboard']);
//         }
//        }

//       }

//       isLoggedIn() {

       
//         //write your authentication and authorization code and return true or false
//       }
//     }
