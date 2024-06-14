import { Component, OnInit } from '@angular/core';
import { Suscription } from '@core/models/suscription';
import { MembresiaService } from '@core/services/membresia.service';
import { jwtDecode } from "jwt-decode";
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-list-membresia-page',
  templateUrl: './list-membresia-page.component.html',
  styleUrls: ['./list-membresia-page.component.scss']
})
export class ListMembresiaPageComponent implements OnInit{

  userId:number = 0;
  dataSuscripcion:Suscription = new Suscription();

  constructor(private membresiaService:MembresiaService, private cookieService:CookieService){}

  ngOnInit(): void {
    this.getMembresia();
  }

  //Obtener membresia del usuario
  getMembresia(){
    //Decodificamos el token 
    this.decodificarToken();
    //Obtenemos la membresia por usuario
    this.membresiaService.getMembresia(this.userId)
    .pipe(
      tap({
        next: (data) => {
          console.log(data);
          this.dataSuscripcion = data.objModel;
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
