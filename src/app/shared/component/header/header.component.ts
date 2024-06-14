import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  @Input() userId:number = 0;
  @Input() userName:string = "";

  activeMenuUser:boolean = false;
  constructor(private cookieService:CookieService, private router:Router){}

  ngOnInit(): void {
    
  }
  //Abrir cerrar menu de user
  openClosedMenu(){
    this.activeMenuUser = this.activeMenuUser ? false : true;
  }
  //Cerrar sesion
  logOut(){
    this.cookieService.delete('token', '/');
    this.router.navigate(['/login']);
  }
}
