import { Injectable } from '@angular/core';  
import { Http, Response } from '@angular/http';  
import { Observable } from 'rxjs/Rx';  
  
import 'rxjs/add/operator/map';  
@Injectable()  
export class AppService{  
    constructor(private http: Http)  
    {  
  
    }  
    getItems(){  
        let apiUrl = 'api/Items';  
        return this.http.get(apiUrl)  
                   .map((res: Response) => {return res.json()  
        });  
    }  
}  
