import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CronogramaService {
  url = environment.urlApi + 'payment/schedule/vouchers/';
  constructor(private httpClient: HttpClient) {}
  
  public getCronograma(idSuscription:number, flaguser:number = 1): Observable<any>{
    return this.httpClient
    .get<any>(`${this.url}${idSuscription}/${flaguser}`);
  }
}
