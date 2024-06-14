import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cronograma } from '@core/models/cronograma';
import { CronogramaService } from '@core/services/cronograma.service';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from "jwt-decode";
import { tap } from 'rxjs';

@Component({
  selector: 'app-cronograma-page',
  templateUrl: './cronograma-page.component.html',
  styleUrls: ['./cronograma-page.component.scss']
})
export class CronogramaPageComponent implements OnInit{

  idMembresia:number = 0;
  userId:number = 0;
  dataCronograma:Cronograma[] = [];

  constructor(private cronogramaService:CronogramaService, private activatedRoute:ActivatedRoute, private cookieService:CookieService){}

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
          console.log(data);
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
}
