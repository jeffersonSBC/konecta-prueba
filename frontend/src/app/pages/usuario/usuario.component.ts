import { Component, OnInit }                  from '@angular/core';
import { FormGroup, FormBuilder, Validators}  from '@angular/forms';
import { UsuariosService }                    from '../../services/usuarios.service';
import { AlertService }                       from '../../services/alert.service';
import { ActivatedRoute,Router}               from '@angular/router'


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  public formUsuario : FormGroup;
  public genders     : [];
  public typeDocument: [];
  public roles       : [];
  public id          : any;
  public usuario     : object;
  public token;
  public rol;
  public actualizarUsuarios;

  constructor(
      private fb       : FormBuilder,
      private _usuarios: UsuariosService,
      private _alert   : AlertService,
      private route    : ActivatedRoute,
      private router   : Router,
      ) { 
    this.genders            = [];
    this.typeDocument       = [];
    this.roles              = [];
    this.token              = localStorage.getItem('token');
    this.rol                = localStorage.getItem('rol');
    this.actualizarUsuarios = localStorage.getItem('Actualizar Usuarios');
    this.dataFormulario();
    this.crearFormularioUsuario();
  }

  ngOnInit() {
    /** Validacion de login**/
    if(this.token == null){
      this.router.navigateByUrl('/login');
    }

    /** Validacion de permisos **/
    if(this.actualizarUsuarios != 'true' && this.rol != 'SuperAdmin'){
      this._alert.alertaSimple('No tiene permisos para esta acción');
      this.router.navigateByUrl('/home');
    }

    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this.getUsuario(this.id);
    }
  }

  crearFormularioUsuario(){
    this.formUsuario = this.fb.group({
      user             : ['',Validators.required],
      names            : ['',Validators.required],
      surnames         : ['',Validators.required],
      email            : ['',Validators.required],
      password         : ['',Validators.required],
      confirm_password : ['',Validators.required],
      role_id          : ['',Validators.required],
      document_number  : ['',Validators.required],
      status           : ['1'],
      gender_id        : ['',Validators.required],
      type_document_id : ['',Validators.required],

    });
  }

  dataFormulario(){
    this._usuarios.getDatosFormulario().subscribe(
      response => {
        console.log(response);
        this.genders      = response['genders'];
        this.typeDocument = response['type_documents'];
        this.roles        = response['roles'];
      },
      error => {
        this._alert.alertaSimple('Problemas al cargar datos del formulario');
        console.error(error);
      }
    )
  }

  getUsuario(id:number){
    this._usuarios.getUsuario(id).subscribe(
      response=>{      
        console.log(response);  
        if(response['error']==false){
          this.usuario = response['usuario'];
        }
      },
      error =>{
        this._alert.alertaSimple('No se pudo obtener la información del usuario');
        this.router.navigateByUrl('/usuarios');
      }
    )
  }

  putUsuario(){
    let data = this.formUsuario.value;
    let id   = this.id;
    this._usuarios.putUsuario(id,data).subscribe(
      response => {
        if(response['error'] == false){
          this._alert.alertaSimpleSuccess('Registro almacenado correctamente');
          this.router.navigateByUrl('usuarios');
        }
      },
      error  => {
        this._alert.alertaSimple('Usuario No actualizado con exito');
        this.ngOnInit();
      }
    )
  }

}
