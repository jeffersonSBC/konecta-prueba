
@extends('layouts.app')

@section('content')
<div class="container p-4">
    @if (count($errors) > 0)
        <div class="alert alert-danger">
            <strong>Error! </strong> Revise las validaciones de los campos.<br><br>
        </div>
    @endif

    <div class="card shadow mb-4">
        <!-- Card Header - Dropdown -->
        <div class="card-header">
            <h3>{{$title}}</h3>
        </div>
        <!-- Card Body -->
        <div class="card-body ">
            <ul>
                <li>
                    Los permisos de usuario están agrupados por módulos para su fácil acceso, pero su función es individual.
                    Por lo cual se deben marcar según la función que se desee asignar ya que no existe un permiso global sobre los módulos.
                </li>
            </ul>
            <hr class="mb-5">
            <form method="POST" action="{{ route('role.create') }}">
                    @csrf
                    <div class="mx-5">

                        <div class="form-group mt-4 d-flex">

                            <div class="col px-0 mr-4">
                                <label class="font-weight-bold" for="name">Nombre Rol<b>*</b></label>
                                <input type="text" class="form-control  @error('name') is-invalid @enderror" id="name" name="name">
                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror                        
                            </div>

                        </div>
                        <hr class="divider my-4">
                        <h4>Asignar Permisos por Módulo </h4>
                        <hr class="divider my-4">
                        @foreach($groups as $group => $valGroup)
                            <h5>{{$group}}</h5>
                            @foreach($valGroup as $permission )
                                @if(($loop->iteration % 2) !=0 )
                                    <div class="row">
                                        <div class="col-4">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="permission-{{$permission->id}}" name="permission[{{$permission->id}}]">
                                                <label class="form-check-label" for="permission-{{$permission->id}}">{{$permission->name}}</label>
                                            </div>
                                        </div>
                                    @if($loop->last)
                                    </div>
                                    @endif    
                                @else
                                        <div class="col-4">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="permission-{{$permission->id}}" name="permission[{{$permission->id}}]">
                                                <label class="form-check-label" for="permission-{{$permission->id}}">{{$permission->name}}</label>
                                            </div>
                                        </div>
                                    </div>
                                @endif
                            @endforeach
                                <hr class="divider my-4">
                        @endforeach
                        
                        <button class="btn btn-large btn-primary boton" type="submit">Guardar</button>
            
                    </div>
            </form>
        </div>
    </div>
</div>




@endsection
