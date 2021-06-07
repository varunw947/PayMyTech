import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders, JsonpClientBackend  } from '@angular/common/http'; 
import { User } from '../models/user';
import { AppConfig } from '../app.config'; 
import { Observable, throwError } from 'rxjs';
import { retry, catchError,map } from 'rxjs/operators';


@Injectable()
export class CommanComponent {


    constructor(private http: HttpClient, private config: AppConfig) { }

    AVgetWithoutParam(controllername: string, apifunction: string) {
        return this.http.get(this.config.apiUrl + '/' + controllername + '/' + apifunction, this.jwt()).pipe(map(((response: any) => response)));
    }

    AVgetWithoutParam2(controllername: string, apifunction: string) {
        return this.http.get<any>(this.config.apiUrl + '/' + controllername + '/' + apifunction)
        .pipe(
          retry(1),
          catchError(this.handleError)
        )
       // return this.http.get(this.config.apiUrl + '/' + controllername + '/' + apifunction, this.jwt()).pipe(map(((response: any) => response)));
    }


    AVgetWithoutParam3(controllername: string, apifunction: string) {
        return this.http.get<any>(this.config.apiUrl + '/' + controllername + '/' + apifunction)
        .pipe(
          retry(1),
          catchError(this.handleError)
        )
       // return this.http.get(this.config.apiUrl + '/' + controllername + '/' + apifunction, this.jwt()).pipe(map(((response: any) => response)));
    }


    AVgetWithoutParam4(controllername: string, apifunction: string) {
       // return this.http.get(this.config.apiUrl + '/' + controllername + '/' + apifunction, { headers: new HttpHeaders({ 'Content-Type': 'application/json', }), responseType: 'text' as 'json' }).pipe(map(((response: any) => response)));
        // .pipe(
        //   retry(1),
        //   catchError(this.handleError)
        //)
       // return this.http.get(this.config.apiUrl + '/' + controllername + '/' + apifunction, this.jwt()).pipe(map(((response: any) => response)));
        return this.http.get(this.config.apiUrl + '/' + controllername + '/' + apifunction).pipe(map(((response: any) => response)));
    }
  // Error handling 
  handleError(error:HttpErrorResponse) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    //  errorMessage = `Error Code: "Status"\nMessage: "Recharge in Process"`;
    }
    console.log(errorMessage);
    window.alert(errorMessage);
    return throwError(errorMessage);
 }  

  
    AVgetWithParam(controllername: string, apifunction: string, param: any) {
        return this.http.get(this.config.apiUrl + '/' + controllername + '/' + apifunction + '/' + param, this.jwt()).pipe(map(((response: any) => response)));
    }

    AVPostWithParam(controllername: string, apifunction: string, param: any) {
        return this.http.post(this.config.apiUrl + '/' + controllername + '/' + apifunction, param, this.jwt());
    }

    
    AVPostWithParamandreturn(controllername: string, apifunction: string, param: any) {
debugger;
        return this.http.post(this.config.apiUrl + '/' + controllername + '/' + apifunction, param, this.jwt()).pipe(map(((response: any) => response)));
    }


    AVPostWithParamandreturn4(controllername: string, apifunction: string, param: any){
        return this.http.post(this.config.apiUrl + '/' + controllername + '/' + apifunction, param, { responseType: "text" })
        .pipe(map(((response: any) => response )));
        
       // var obj = JSON.parse(response);

        //console.log(response) 
       
       // return this.http.post(this.config.apiUrl + '/' + controllername + '/' + apifunction, param, { responseType: "text" }).pipe(map(((response: any) => response)));
        
     //   return this.http.post(this.config.apiUrl + '/' + controllername + '/' + apifunction, param).pipe(map(((response: any) => response.json())));

    //   return this.http.post(this.config.apiUrl + '/' + controllername + '/' + apifunction, param, { responseType: "text" })
      // .pipe(
        // retry(1),
        // catchError(this.handleError)
    // )
      
      //.pipe(map(((response: any) => response.json())));
    
     
    
    }

    AVPostWithParamandreturn2(controllername: string, apifunction: string, param: any) {
        
        debugger;
        return this.http.post(this.config.apiUrl + '/' + controllername + '/' + apifunction,param,this.jwt())
        .pipe(
          retry(1),
          catchError(this.handleError)
        )
        
       // return this.http.post(this.config.apiUrl + '/' + controllername + '/' + apifunction, param, this.jwt()).pipe(map(((response: any) => response)));
    }

    AVPostWithParamandreturn3(controllername: string, apifunction: string, param: any) {
        
        
        return this.http.post(this.config.apiUrl + '/' + controllername + '/' + apifunction,param,this.jwt())
        .pipe(
          retry(1),
          catchError(this.handleError)
        )
        
       
    }

   


    AVPostWithoutParam(controllername: string, apifunction: string) {

        // return this.http.get<any>(this.config.apiUrl + '/' + controllername + '/' + apifunction)
        // .pipe(
        //   retry(1),
        //   catchError(this.handleError)
        // )

        return this.http.post(this.config.apiUrl + '/' + controllername + '/' + apifunction, this.jwt());
    }

    AVPostWithoutParam2(controllername: string, apifunction: string) {
        return this.http.post(this.config.apiUrl + '/' + controllername + '/' + apifunction, this.jwt());
    }

    AVPostWithoutParamandreturn(controllername: string, apifunction: string) {
        return this.http.post(this.config.apiUrl + '/' + controllername + '/' + apifunction, { value: null }, this.jwt()).pipe(map(((response: any) => response)));
    }
    AVPut(controllername: string, apifunction: string, param: any, _id: any) {
        return this.http.put(this.config.apiUrl + '/' + controllername + '/' + apifunction + _id, param, this.jwt());
    }
    AVDelete(controllername: string, apifunction: string, _id: any) {
        return this.http.delete(this.config.apiUrl + '/' + controllername + '/' + apifunction + _id, this.jwt());
    }

    headerDict = {
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    }

    requestOptions:any = {
        headers: new Headers(this.headerDict),
        withCredentials: true
    };

    // AVgetWithoutParamExternalAPI(apiURL: string) {
    //     return this.http.get(apiURL, this.requestOptions).pipe(map(((response: any) => response.json())));
    // }

    GetCurrentUser() {
        //debugger;
        const userJson = localStorage.getItem('user');
        return userJson !== null ? JSON.parse(userJson) : new User();
    }

    downloadFiles(documentUrl: string, fileName: string) {

        return this.http.get(documentUrl, { responseType: 'blob' }).pipe(map(res => {
            return {
                filename: fileName,
                data: res 
            };
        }))
            .subscribe(res => {
                //console.log('start download:',res);
                //debugger;
                if (navigator.appVersion.toString().indexOf('.NET') > 0) {
                    let theFile = new Blob([res.data], { type: 'application/pdf' });
                    window.navigator.msSaveBlob(theFile, fileName);
                    //console.log('ie download:');
                } else {
                    var url = window.URL.createObjectURL(res.data);
                    var a = document.createElement('a');
                    document.body.appendChild(a);
                    a.setAttribute('style', 'display: none');
                    a.href = url;
                    a.download = res.filename;
                    a.click();
                    window.URL.revokeObjectURL(url);
                    a.remove(); // remove the element
                }
            }, error => {
                //console.log('download error:', JSON.stringify(error));
            }, () => {
                //console.log('Completed file download.')
            });;
    }

    

    // dateFormat(date: Date, isString = false) {
    //     var d = date;
    //     if (d) {


    //         var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    //         console.log(d.toLocaleDateString('en-US', options));
    //         console.log(d.toLocaleDateString('en-gb', options));
    //         var curr_date = d.getDate();
    //         var curr_month = d.getMonth() + 1; //Months are zero based
    //         var curr_year = d.getFullYear();
    //         if (isString) {
    //             return curr_month + '-' + curr_date + '-' + curr_year;
    //         }
    //         return d.toLocaleDateString('en-US', options);

          
    //     } else {
    //         return d;
    //     }
        
    // }

    private jwt2() {
        // create authorization header with jwt token
      //  debugger;
        
      const userJson =  localStorage.getItem('user');
      let currentUser = userJson !== null ? JSON.parse(userJson) : new User();
        
            const options = ({
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                'Cache-control': 'no-cache'&&'no-store','Expires': '0','Pragma': 'no-cache','X-Frame-Options': 'DENY'}
            });
            return options;
        
       // return {};
    }

    private jwt() {
        // create authorization header with jwt token
      //  debugger;
        
        const userJson =  localStorage.getItem('user');
        let currentUser = userJson !== null ? JSON.parse(userJson) : new User();
        debugger;
       if (currentUser && currentUser.token) {
                      
           
            const options = ({
                headers: {'Authorization':'Bearer ' + currentUser.token,
                'Cache-control': 'no-cache'&&'no-store','Expires': '0','Pragma': 'no-cache','X-Frame-Options': 'DENY'}
            });
            return options;
        }
        else
        {
            const options = ({
                headers: {
                'Cache-control': 'no-cache'&&'no-store','Expires': '0','Pragma': 'no-cache','X-Frame-Options': 'DENY'}
            });
            return options;
        }
       // return {};
    }


    
    // public encrypt(data) {
    //     //debugger;
    //     if (data == null)
    //     return null;

    //     data = CryptoJS.AES.encrypt(data, this.config.secretKey);
    //     data = data.toString();
    //     return data;
    // }

    //  public decrypt(data) {
    //      debugger;
    //      if (data == null)
    //      return null;

    //      data = CryptoJS.AES.decrypt(data, this.config.secretKey);
    //      data = data.toString(CryptoJS.enc.Utf8);
    //      return data;
    //  }
}

