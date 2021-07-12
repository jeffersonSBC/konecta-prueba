@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col">
            <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div class="card-header">
                    <h3>{{$title}}</h3>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                    Listado de usuarios a los cuales se les define un rol  para poder operar en el sistema.
                    <div class="card shadow mb-2 mt-5">   
                        <div class="card-header">
                            <a href="{{ route('users.showform') }}" class="btn btn-large bg-dark text-white">Agregar</a>
                        </div>                 
                        <div class="card-body cuerpo">

                            <table class="table">
                                <thead class="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Usuario</th>
                                    <th scope="col">Rol</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach ($users as $user)
                                    <tr>
                                        <th scope="row">{{ $user->id }}</th>
                                        <td>{{ $user->user }}</td>
                                        <td>{{ $user->role }}</td>
                                        <td>
                                            @if ($user->status)
                                                <i class="fas fa-check-circle iconoEstado1"></i> 

                                            @else
                                                <i class="fas fa-check-circle iconoEstado2"></i> 
                                            @endif  
                                        </td>
                                        <td>
                                            @if ($user->status)
                                                    <a class="btn  btn-link-especial" href="{{ url('usuarios/editar-usuarios')}}/{{$user->id}}"><i class="far fa-edit"></i></a>                                                                                            
                                                @permission('Inactivar Usuarios')
                                                    <i class="far fa-trash-alt modal_inactivate"   data-action="{{ route('users.inactivate') }}" data-identifier="{{$user->id}}"></i>
                                                @endpermission
                                            @endif 
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row justify-content-center">
    <div class="col-10">
        {{ $users->links() }}
    </div>
</div>            

<div class="hidden"  > 
    <!-- modal para inactivar -->
    @include('modal_inactivate')
</div>
@endsection

@section('jsEspecial')
<script>
    window.onload = function(){

    /**
     * Se reinician los datos del modal para inactivar 
    **/    
    $("#form-inactivate").removeAttr("action");
    $("#id-inactivate").removeAttr("value");


    /**
     * Se crea el modal para inactivar un registro 
    **/
    $(".modal_inactivate").on('click',function(){
        action_form   = $(this).attr('data-action');
        id_inactivate = $(this).attr('data-identifier');

        if(typeof action_form != 'undefined' && typeof id_inactivate != 'undefined'){
            $("#form-inactivate").attr("action",action_form);
            $("#id-inactivate").attr("value",id_inactivate);
            $(".modal-inactivate").modal();
        }else{
            alert('No se puede Inactivar el registro, contacte al administrador del sistema');
        }
    });
    }
</script>
@endsection


