import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cronograma } from '@core/models/cronograma';
import { CronogramaService } from '@core/services/cronograma.service';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from "jwt-decode";
import { tap } from 'rxjs';
import { ValidatePaymentService } from '@core/services/validate-payment.service';
import { Alert } from '@shared/alert/alert';
import { ValidatePayment } from '@core/models/validatePayment';

@Component({
  selector: 'app-cronograma-page',
  templateUrl: './cronograma-page.component.html',
  styleUrls: ['./cronograma-page.component.scss']
})
export class CronogramaPageComponent implements OnInit{

  idMembresia:number = 0;
  userId:number = 0;
  dataCronograma:Cronograma[] = [];

  constructor(private cronogramaService:CronogramaService, private validatePaymentService:ValidatePaymentService, 
    private activatedRoute:ActivatedRoute, private cookieService:CookieService, private alert:Alert){}

  ngOnInit(): void {
    this.idMembresia = this.activatedRoute.snapshot.params['idMembresia'];

    this.getMembresia();
  }

  //Obtener membresia del usuario
  getMembresia(){
    //Decodificamos el token 
    this.decodificarToken();
    //Obtenemos la membresia por usuario
    this.cronogramaService.getCronograma(this.idMembresia)
    .pipe(
      tap({
        next: (data) => {
          this.dataCronograma = data.objModel;
        },
        error: (error) => {
          console.error('HTTP Error ' + error.status, error);
        }
      })
    )
    .subscribe();
  }

  decodificarToken(){
    //Token
    const token = this.cookieService.get('token');
    // Decodificar el token JWT
    const decodedToken: any = jwtDecode(token);

    // Obtener datos del token decodificado
    this.userId = decodedToken.primarysid;
  }

  validatePayment(deta:Cronograma){
    console.log(deta);
    // if(deta.verif === 2) return;
    //
    let dataValidate:ValidatePayment = new ValidatePayment();
    dataValidate.idSuscription = deta.idSuscription;
    dataValidate.listIdPaymentsValidate = [];
    dataValidate.listIdPaymentsValidate.push(deta.idPayment);

    //Preguntamos si desea validar
    this.alert.alertYesNo("Validar Pago", "").then(resolve => {
      //Si aceptar
      if(resolve.isConfirmed){
        //Completamos si acepta
        dataValidate.isAcceptedPayment = 1;
        dataValidate.reasonRejection.id = deta.idPayment;
        dataValidate.reasonRejection.detalle = "";
        //Pasamos los datos al servicio
        this.validatePaymentService.validatePayment(dataValidate)
        .pipe(
          tap({
            next: (data) => {
              console.log(data);
              this.alert.alertSucces("Validacion Aceptada");
            },
            error: (error) => {
              console.error('HTTP Error ' + error.status, error.error);
              this.alert.alertError("Error",error.error.description);
            }
          })
        )
        .subscribe();
      }
      //Si rechaza
      else if(resolve.isDenied){
        this.alert.alertData("Ingrese Motivo").then(resolve => {
          if(resolve.isConfirmed){
            //Completamos si acepta
            dataValidate.isAcceptedPayment = 0;
            dataValidate.reasonRejection.id = 1;
            dataValidate.reasonRejection.detalle = resolve.value;
            //Pasamos los datos al servicio
            this.validatePaymentService.validatePayment(dataValidate)
            .pipe(
              tap({
                next: (data) => {
                  console.log(data);
                  this.alert.alertSucces("Validacion Rechazada");
                },
                error: (error) => {
                  console.error('HTTP Error ' + error.status, error);
                  this.alert.alertError("Error",error.error.description);
                }
              })
            )
            .subscribe();
          }
        });
      }
    });
  }
}
