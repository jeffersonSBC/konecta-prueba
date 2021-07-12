import { Injectable }              from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url  : string;
  private token: string;

  constructor(private _http:HttpClient) {
    this.url    = 'http://localhost:8082/api/v1/';
    this.token  = 'Bearer '+localStorage.getItem("token");
  }

  public getClientes(){   
    let headers = new HttpHeaders({'Authorization':this.token});
    return this._http.get(this.url+'clientes/listar',{headers:headers});
  }

  public getCliente(id:number){   
    let headers = new HttpHeaders({'Authorization':this.token});
    return this._http.get(this.url+'clientes/editar-cliente/'+id,{headers:headers});
  }

  public getDatosFormulario(){   
    let headers = new HttpHeaders({'Authorization':this.token});
    return this._http.get(this.url+'clientes/datos-formulario',{headers:headers});
  }

  public postCliente(data:object){
    let headers = new HttpHeaders({'Authorization':this.token});
    return this._http.post(this.url+'clientes/crear-cliente',data,{headers:headers});
  }

  public putCliente(id:number,data:object){
    let headers = new HttpHeaders({'Authorization':this.token});
    return this._http.put(this.url+'clientes/editar-cliente/'+id,data,{headers:headers});
  }

  public inactivar(id:number){
    let headers = new HttpHeaders({'Authorization':this.token});
    return this._http.put(this.url+'clientes/inactivar-cliente/'+id,id,{headers:headers});
  }
}







