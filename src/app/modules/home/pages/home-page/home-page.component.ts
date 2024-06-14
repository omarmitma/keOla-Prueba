import { Component, OnInit } from '@angular/core';
import { jwtDecode } from "jwt-decode";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

  userId:number = 0;
  userName:string = "";

  constructor(private cookieService: CookieService){}

  ngOnInit(): void {
    this.decodificarToken();
  }

  decodificarToken(){
    //Token
    const token = this.cookieService.get('token');
    // Decodificar el token JWT
    const decodedToken: any = jwtDecode(token);

    // Obtener datos del token decodificado
    this.userId = decodedToken.primarysid;    
    this.userName = decodedToken.unique_name;
  }
}
