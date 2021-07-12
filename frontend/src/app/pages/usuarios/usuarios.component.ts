import { Component, OnInit }    from '@angular/core';
import { UsuariosService}       from '../../services/usuarios.service';
import { AlertService }         from '../../services/alert.service';
import { ActivatedRoute,Router} from '@angular/router'
import Swal                     from 'sweetalert2'



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  public usuarios :[];
  public token;
  public rol;
  public verUsuarios;
  public inactivarUsuarios;
  constructor(
    private _usuarios: UsuariosService,
    private _alert   : AlertService,
    private router   : Router
    ) {
    this.usuarios          = [];
    this.token             = localStorage.getItem('token');
    this.rol               = localStorage.getItem('rol');
    this.verUsuarios       = localStorage.getItem('Ver Usuarios');
    this.inactivarUsuarios = localStorage.getItem('Inactivar Usuarios');
   }

  ngOnInit(){
    /** validaciones login**/
    if(this.token == null){
      this.router.navigateByUrl('/login');
    }

    /** validaciones permisos**/
    if(this.verUsuarios != 'true' && this.rol != 'SuperAdmin'){
      this._alert.alertaSimple('No tiene permisos para esta acción');
      this.router.navigateByUrl('/home');      
    }
    this.getUsuarios();
  }

  getUsuarios(){
    this._usuarios.getUsuarios().subscribe(
      response =>{
        if(response['error'] == false){
          this.usuarios = response['users'];
        }
        console.log(response);
      },
      error => {
        this._alert.alertaSimple('Problemas al cargar la lista de usuarios');
        console.error(error);
      }
    )
  }


  inactivar(id:number){
    if(this.inactivarUsuarios != 'true' && this.rol != 'SuperAdmin'){
      this._alert.alertaSimple('No tiene permisos para esta acción');
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
          this._usuarios.inactivar(id).subscribe(
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
