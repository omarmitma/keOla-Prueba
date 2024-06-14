import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = environment.urlApi + 'token';
  constructor(private httpClient: HttpClient) {}
  
  public loginUsuario( user:Login): Observable<any>{
    return this.httpClient
    .post<any>(this.url, user);
  }
}
