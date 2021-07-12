import { Component, OnInit }    from '@angular/core';
import { ClienteService }       from '../../services/cliente.service';
import { AlertService }         from '../../services/alert.service';
import { ActivatedRoute,Router} from '@angular/router';
import Swal                     from 'sweetalert2'
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  public clientes :[];
  public token;
  public rol;
  public verClientes;
  public inactivarClientes;

  constructor(
    private _clientes: ClienteService,
    private _alert   : AlertService,
    private router   : Router
    ) {
    this.clientes = [];
    this.token              = localStorage.getItem('token');
    this.rol                = localStorage.getItem('rol');
    this.verClientes        = localStorage.getItem('Ver Clientes');
    this.inactivarClientes  = localStorage.getItem('Inactivar Clientes');
    this.getClientes();
   }

  ngOnInit() {
    /** validación de login **/
    if(this.token == null){
      this.router.navigateByUrl('/login');
    }
    
    /** Validación de permisos**/
    if(this.verClientes != 'true' && this.rol != 'SuperAdmin' ){
      this._alert.alertaSimple('No tiene permisos para esta acción');
      this.router.navigateByUrl('/home');
    }
  }

  getClientes(){
    this._clientes.getClientes().subscribe(
      response =>{
        if(response['error'] == false){
          this.clientes = response['clientes'];
        }
      },
      error => {
        this._alert.alertaSimple('Problemas al cargar el listado de clientes');
      }
    )
  }

  inactivar(id:number){
    if(this.inactivarClientes != 'true' && this.rol != 'SuperAdmin'){
      this._alert.alertaSimple('No tiene permisos para realizar esta acción');
      this.ngOnInit();
    }else{
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
          this._clientes.inactivar(id).subscribe(
            response => {
              if(response['error'] == false){
                this._alert.alertaSimpleSuccess('Registro Inactivado con exito');
                this.ngOnInit();
              }
            },
            error =>{
              this._alert.alertaSimple('No se pudo inactivar el registro');
            }
          )
        }
      })
    }

  }

}



