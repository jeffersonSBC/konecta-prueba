
import { Component, OnInit, Inject }  from '@angular/core';
import { ActivatedRoute,Router}       from '@angular/router'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public token;
  public verClientes;
  public verUsuarios;
  public rol;

  constructor(
    private route    : ActivatedRoute,
    private router   : Router
  ) { 
    this.token       = localStorage.getItem('token');
    this.rol         = localStorage.getItem('rol');
    this.verClientes = localStorage.getItem('Ver Clientes');
    this.verUsuarios = localStorage.getItem('Ver Usuarios');
  }

  ngOnInit(){
  }

  logout() {
    localStorage.clear();
    setTimeout(()=>{
        this.router.navigateByUrl('login');
    },500);
    
  }
}
