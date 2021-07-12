import { Component, OnInit }                  from '@angular/core';
import { ClienteService }                     from '../../services/cliente.service';
import { AlertService }                       from '../../services/alert.service';
import { FormGroup, FormBuilder, Validators}  from '@angular/forms';
import { ActivatedRoute,Router}               from '@angular/router'
import { Cliente }                            from '../../models/cliente';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public cliente     : Cliente;
  public id          : any;
  public formCliente : FormGroup;
  public genders     : [];
  public typeDocument: [];
  public token;  
  public rol; 
  public editarCliente;    

  constructor(
    private _cliente : ClienteService,
    private _alert   : AlertService,
    private route    : ActivatedRoute,
    private router   : Router,
    private fb       : FormBuilder,

  ) {
    this.genders       = [];
    this.typeDocument  = [];
    this.token         = localStorage.getItem('token');
    this.rol           = localStorage.getItem('rol');
    this.editarCliente = localStorage.getItem('Actualizar Clientes');
    this.crearFormularioCliente();
   }

  ngOnInit(){
    /** Validacion de login**/
    if(this.token == null){
      this.router.navigateByUrl('/login');
    }

    /** Validación de permiso **/
    if(this.editarCliente != 'true' && this.rol != 'SuperAdmin'){
      this._alert.alertaSimple('No tiene permisos para esta acción');
      this.router.navigateByUrl('/home');
    }
    
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this.getCliente(this.id);
    }
    this.getDataFormulario();
  }

  getDataFormulario(){
    this._cliente.getDatosFormulario().subscribe(
      response => {
        if(response['error'] == false){
          this.genders      = response['genders'];
          this.typeDocument = response['type_documents'];
        }
      },
      error => {
        this._alert.alertaSimple('Problemas al cargar datos del formulario');
      }
    )
  }

  getCliente(id:number){
    this._cliente.getCliente(id).subscribe(
      (response)=>{
        this.cliente = response['cliente'];
      },
      error=>{
        this._alert.alertaSimple('No se pudo cargar la información del cliente');
        this.router.navigateByUrl('clientes');
      }
    );
  }

  crearFormularioCliente(){
    this.formCliente = this.fb.group({
      names            : ['',Validators.required],
      surnames         : ['',Validators.required],
      email            : ['',Validators.required],
      document_number  : ['',Validators.required],
      status           : ['1'],
      gender_id        : ['',Validators.required],
      type_document_id : ['',Validators.required],
    });
  }


  putCliente(){
    let data = this.formCliente.value;
    let id   = this.id;
    this._cliente.putCliente(id,data).subscribe(
      response =>{
        if(response['error']== false){
          this._alert.alertaSimpleSuccess('Registro almacenado correctamente');
          this.router.navigateByUrl('clientes');
        }
      },
      error => {
        this._alert.alertaSimple('No se pudo almacenar el registro');
        this.ngOnInit();
      }
    )
  }
}
