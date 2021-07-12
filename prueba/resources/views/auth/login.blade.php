@extends('layouts.base')

@section('content')

<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-12">
            <div class="card">
                <div class="card-header">Inicio de Sesión</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf
                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">Email Usuario</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>


                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    Ingresar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div> 

<div class="container">
    <div class="card mt-5">
        <div class="card-header">
            Bienvenido
        </div>
        <div class="card-body">
            <blockquote class="blockquote mb-0">
                    <div class="list-group">
                        <div class="list-group-item list-group-item-action ">
                            <p class="mb-1">Sistema de prueba, Backend -- Panel de administración</p>
                            <small>
                                Se suguiere iniciar el proyecto mediante docker-compose up -d
                                para conservar las rutas y los puertos con los que fue configurado el frontend
                            </small>
                        </div>
                        <div  class="list-group-item list-group-item-action ">
                                <p class="mb-1">Las migraciones</p>
                                <small>
                                    Para continuar debera primero configurar los parametros de base de datos en el .env
                                    y en config/database.php.
                                    <br>
                                    Este proyecto requiere correr las migraciones mediante los comandos 
                                    <b>php artisan migrate</b> y <b>php artisan migrate:refresh --seed</b>
                                    Para que los seeder con información base de la base de datos se ejecuten correctamente.
                                </small>
                        </div>
                        <div  class="list-group-item list-group-item-action ">
                                <p class="mb-1">Usuario y Contraseña</p>
                                <small>
                                    Si todo ha salido bien, podra iniciar Sesión con el Email
                                    <b>admin@prueba.com</b> y la clave <b>$pruebas</b>
                                </small>
                        </div>
                        <div  class="list-group-item list-group-item-action ">
                            <p class="mb-1">Configurar Roles</p>
                            <small>
                                Luego de iniciar Sesión, podra click en configurar roles,
                                el sistema, le mostrara tres opciones, pero ninguna tiene aun los permisos
                                configurados.
                                <br>
                                puede editar los roles de ventas o administrador, incluso inactivarlos y crear 
                                nuevos roles.
                            </small>
                        </div>                                             
                    </div>
            </blockquote>
        </div>
    </div>
</div>


@endsection
