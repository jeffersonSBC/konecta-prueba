import { RouterModule,Routes }   from '@angular/router';
import { LoginComponent }        from './pages/login/login.component';
import { UsuariosComponent }     from './pages/usuarios/usuarios.component';
import { UsuarioComponent }      from './pages/usuario/usuario.component';
import { ClientesComponent }     from './pages/clientes/clientes.component';
import { ClienteComponent }      from './pages/cliente/cliente.component';
import { CrearClienteComponent}  from './pages/crear-cliente/crear-cliente.component';
import { CrearUsuarioComponent } from './pages/crear-usuario/crear-usuario.component';
import { HomeComponent }         from './pages/home/home.component';


const appRoutes = [
  { path: 'home',              component: HomeComponent},
  { path: 'login',             component: LoginComponent},
  { path: 'usuarios',          component: UsuariosComponent },
  { path: 'clientes',          component: ClientesComponent },
  { path: 'crear-usuario',     component: CrearUsuarioComponent },
  { path: 'crear-cliente',     component: CrearClienteComponent },
  { path: 'editar-cliente/:id',component: ClienteComponent },
  { path: 'editar-usuario/:id',component: UsuarioComponent },
  { path: "**", pathMatch : "full", redirectTo:"home"}
];
export const routing = RouterModule.forRoot(appRoutes);