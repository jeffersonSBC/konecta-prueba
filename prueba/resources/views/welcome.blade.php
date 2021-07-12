<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/logout') }}">Logout</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>
                    @endauth
                </div>
            @endif

            <div class="content">
                <div class="title m-b-md">
                     Panel de Administración
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
            </div>
        </div>
    </body>
</html>
