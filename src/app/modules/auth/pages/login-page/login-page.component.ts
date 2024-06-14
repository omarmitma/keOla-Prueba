import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs';
import { Login } from 'src/app/core/models/login';
import { LoginService } from 'src/app/core/services/login.service';
import { Alert } from 'src/app/shared/alert/alert';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  dataLogin:Login = new Login();

  constructor(private loginService:LoginService, private cookie: CookieService, private router: Router, private alert:Alert){}

  ngOnInit(): void {
    
  }

  //Logeo
  ingreso(){
    //Validamos
    if(!this.validateLogin()){
      this.alert.alertError("Falta Campos","Debe llenar todos los campos");
      return;
    };
    
    //Llamamos al servcios para logearnos
    this.loginService.loginUsuario(this.dataLogin)
    .pipe(
      tap({
        next: (data) => {
          // Respuesta exitosa
          console.log('HTTP 200: Success', data);
          this.alert.alertSucces("Logeado");
          // Convertir minutos a días
          let minutes = data.expires_in; // Lo q retorna la api en minutos para que expire
          let days = minutes / 1440; // Convertir minutos a días
          //Guardamos los datos y ponemos la fecha de expiracion
          this.cookie.set('token', data.access_Token, days, '/');
          //Dirigimos a home
          this.router.navigate(['/', 'home']);
        },
        error: (error) => {
          
          console.error('HTTP Error ' + error.status, error);
          this.alert.alertError(`Usuario o clave Incorrecta`,"");
        }
      })
    )
    .subscribe();
  }

  //Validar datos para el login
  validateLogin():boolean{
    if(this.dataLogin &&
      this.dataLogin.username && this.dataLogin.username.trim() !== '' &&
      this.dataLogin.password && this.dataLogin.password.trim() !== ''){
        return true;
      }
    return false;
  }
}
