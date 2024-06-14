import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ValidatePayment } from '@core/models/validatePayment';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ValidatePaymentService {
  url = environment.urlApi + 'payment/validate';
  constructor(private httpClient: HttpClient) {}
  
  public validatePayment(data:ValidatePayment): Observable<any>{
    console.log(data);
    return this.httpClient
    .post<any>(this.url, data);
  }
}
