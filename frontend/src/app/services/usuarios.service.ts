import { Injectable }              from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url  : string;
  private token: string;

  constructor(private _http:HttpClient) {
    this.url    = 'http://localhost:8082/api/v1/';
    this.token  = 'Bearer '+localStorage.getItem("token");
  }

  public getUsuarios(){   
    let headers = new HttpHeaders({'Authorization':this.token});
    return this._http.get(this.url+'usuarios/listar',{headers:headers});
  }

  public getUsuario(id:number){   
    let headers = new HttpHeaders({'Authorization':this.token});
    return this._http.get(this.url+'usuarios/editar-usuarios/'+id,{headers:headers});
  }

  public getDatosFormulario(){   
    let headers = new HttpHeaders({'Authorization':this.token});
    return this._http.get(this.url+'usuarios/datos-formulario',{headers:headers});
  }

  public postUsuario(data:object){
    let headers = new HttpHeaders({'Authorization':this.token});
    return this._http.post(this.url+'usuarios/crear',data,{headers:headers});
  }

  public putUsuario(id:number,data:object){
    let headers = new HttpHeaders({'Authorization':this.token});
    return this._http.put(this.url+'usuarios/editar-usuarios/'+id,data,{headers:headers});
  }

  public inactivar(id:number){
    let headers = new HttpHeaders({'Authorization':this.token});
    return this._http.put(this.url+'usuarios/inactivar-usuarios/'+id,id,{headers:headers});
  }
}
