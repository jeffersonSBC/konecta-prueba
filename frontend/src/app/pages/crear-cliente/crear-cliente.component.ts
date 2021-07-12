import { Component, OnInit }                  from '@angular/core';
import { ClienteService }                     from '../../services/cliente.service';
import { AlertService }                       from '../../services/alert.service';
import { FormGroup, FormBuilder, Validators}  from '@angular/forms';
import { ActivatedRoute,Router}               from '@angular/router';
@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {
  public formCliente : FormGroup;
  public genders     : [];
  public typeDocument: [];
  public token;
  public rol;
  public crearCliente;

  constructor(
    private _cliente : ClienteService,
    private _alert   : AlertService,
    private route    : ActivatedRoute,
    private router   : Router,
    private fb       : FormBuilder,

  ) {
    this.genders      = [];
    this.typeDocument = [];
    this.token        = localStorage.getItem('token');
    this.rol          = localStorage.getItem('rol');
    this.crearCliente = localStorage.getItem('Crear Clientes');
    this.crearFormularioCliente();
   }

  ngOnInit() {
    if(this.token == null){
      this.router.navigateByUrl('/login');
    }

    if(this.crearCliente != 'true' && this.rol !='SuperAdmin'){
      this._alert.alertaSimple('No tiene permisos para esta acción');
      this.router.navigateByUrl('/home');
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
        console.error(error);
      }
    )
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

  postCliente(){
    let data = this.formCliente.value;
    this._cliente.postCliente(data).subscribe(
      response =>{
        if(response['error']==false){
          this._alert.alertaSimpleSuccess('Registro almacenado correctamente');
          this.router.navigateByUrl('clientes');
        }
      },
      error =>{
        this._alert.alertaSimple('El cliente no se almaceno con exito');
        this.ngOnInit();
      }
    )
  }

}
