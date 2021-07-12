import { Injectable } from '@angular/core';
import Swal           from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  alertaSimple(mensaje:string){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: mensaje,
    })
  }

  alertaSimpleSuccess(mensaje:string){
    Swal.fire({
      icon: 'success',
      title: 'Genial!',
      text: mensaje,
    })
  }

  alertaIf(){
    Swal.fire({
      title: '¿Desea continuar?',
      text: "Una vez inactivo el registro, no podra volver a editarlo",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Inactivar',
          'Registro Inactivado Correctamente',
          'success'
        )
      }
    })
  }

}
