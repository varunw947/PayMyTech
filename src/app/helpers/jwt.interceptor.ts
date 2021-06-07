import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { AccountService } from '../services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private accountService: AccountService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url
        debugger;
        const user = this.accountService.userValue;
        const isLoggedIn = (user && user.token);
        const isApiUrl = request.url.startsWith(environment.apiUrl);

        
       
         if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                   Authorization: `Bearer ${user.token}`
                //   Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyMDgiLCJqdGkiOiIwZDVkNjBhNzAwYWQyYzA0YzgxOTYwNzFhNjdmMDRiMzVhMjY1NDJlMzFkMTQ5M2EwOTMwYjIyOTRkNTdiNGI0MGIxNzc5YjdjMTUyZjRkOSIsImlhdCI6MTYyMDAyNTQwNS4yODM3NDY5NTc3Nzg5MzA2NjQwNjI1LCJuYmYiOjE2MjAwMjU0MDUuMjgzNzUwMDU3MjIwNDU4OTg0Mzc1LCJleHAiOjE2MzU5MjMwMDUuMjM1MTM3OTM5NDUzMTI1LCJzdWIiOiIyODQzOSIsInNjb3BlcyI6W119.g1lKf6-uygOgwTm0FX8McodrXDITPGZ9ApztYR8h0tjqKEUSdHoRS52AdFU98NDYfRsGt8i1P2vx59Q9W4hDpk7yv5wHAmnj9qhFD-yttgJbZCJiD46dOa_ETRPiCge0-ibdKa4aH_OrDomQOwjZ0A63SbR9mcR6FI7_y-qZANI_SNBvtgYReTmIHOPfx8WYxBvlsEN_2fuIq7YfbMjUKEyuP2D1FRJyCsWs6e5wMmN3Q4vOtXzbDZ4VLezTCflne_J_6JlzTxqmB3BB_6qdjRTUyn7m0lxA7PfkRe0NXyp_FPUAvrP-REhoyaF2Un77yBUOeQrFcpdPXqtaiwXYrVU21f0-7HIp0ymuPblHJ3ZpsleoYmYEwzf_iXyOorrYFqWkYtA7g2KLFiFKrBfrq0BQKVRkaghgxxvUtM6jQTSCQZHSarGkf00Z9GxpTY1-yKtR_S2IVyZTQ-600ZwUEStulWVv6DRdH7NDaL59A-wmHHsWOqJmrGTkPWRTuSeneQO1cj9X1VuF7-oCf6c2ZohnxRp47dnEjGwgYotsCgLBW45OuP75E4ETJQoBWjVYb3RuMiWXksI8SzcCvVWerOfbhuqq2I95iTHq7zIphFOR7J0PKa5g8xd9l8l0qL8pprqJPutbh3A43wT-5f4iobFSZjakM2XhrF7BoDxGB0U' ,
                   
                 //  Accept:'application/json',
                  // Access-Control-Allow-Origin:	*
                }
            });
        }

        return next.handle(request);
    }
}

                