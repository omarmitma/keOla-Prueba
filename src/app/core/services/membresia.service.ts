import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MembresiaService {
  url = environment.urlApi + 'suscription/payment/';
  constructor(private httpClient: HttpClient) {}
  
  public getMembresia(idUser:number): Observable<any>{
    return this.httpClient
    .get<any>(`${this.url}${idUser}`);
  }
}
