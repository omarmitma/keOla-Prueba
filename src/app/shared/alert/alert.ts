import { Injectable } from "@angular/core";

import Swal from 'sweetalert2';

@Injectable()
export class Alert {
    constructor(){}

    alertError(title:string,text:string){
        Swal.fire({
            title: title,
            text: text,
            icon: 'error',
            confirmButtonText: "OK"
        })
    }

    alertDefault(title:string,text:string){
        Swal.fire(
            title,
            text,
            'info'
        )
    }

    alertSucces(title:string){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: title,
            showConfirmButton: false,
            timer: 1400
        })
    }

    alertConfirm(title:string,text:string){
        return Swal.fire({
            title: title,
            text: text,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar'
        });
    }

    alertYesNo(title:string,text:string){
        return Swal.fire({
            title: title,
            text: text,
            icon: 'question',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'SI',
            cancelButtonText: 'NO',
            showCancelButton: true,
            showCloseButton: true
            
        });
    }

    alertQuestion(title:string,text:string){
        return Swal.fire({
            title: title,
            text: text,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar'
        });
    }

}