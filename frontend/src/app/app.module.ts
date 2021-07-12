import { BrowserModule }                    from '@angular/platform-browser';
import { NgModule }                         from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent }                     from './app.component';
import { LoginComponent }                   from './pages/login/login.component';
import { HttpClientModule, HttpClient }     from '@angular/common/http';
import { routing }                          from './app.routes';
import { UsuariosComponent }                from './pages/usuarios/usuarios.component';
import { UsuarioComponent }                 from './pages/usuario/usuario.component';
import { ClientesComponent }                from './pages/clientes/clientes.component';
import { ClienteComponent }                 from './pages/cliente/cliente.component';
import { CrearClienteComponent }            from './pages/crear-cliente/crear-cliente.component';
import { CrearUsuarioComponent }            from './pages/crear-usuario/crear-usuario.component';
import { NavbarComponent }                  from './pages/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuariosComponent,
    UsuarioComponent,
    ClientesComponent,
    ClienteComponent,
    CrearClienteComponent,
    CrearUsuarioComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
