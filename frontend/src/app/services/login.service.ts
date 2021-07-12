import { Injectable }              from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable }        from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url  : string;
  private token: string;

  constructor(private _http:HttpClient) {
    this.url = 'http://localhost:8082/api/v1/';
  }

  public authenticLogin(data:object){   
    return this._http.post(this.url+'auth/login',data);
  }

}


