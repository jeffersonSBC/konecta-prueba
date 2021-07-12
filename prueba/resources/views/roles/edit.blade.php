
@extends('layouts.app')

@section('content')
<div class="container caja1">
    <div class="row">
        <div class="col">
            <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div class="card-header">
                    {{$title}}
                </div>
                <!-- Card Body -->
                <div class="card-body">
                    <ul>
                        <li>
                            Los permisos de usuario están agrupados por módulos para su fácil acceso, pero su función es individual.
                            Por lo cual se deben marcar según la función que se desee asignar ya que no existe un permiso global sobre los módulos.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<hr class="divider my-4">
<div class="container p-4">
        <div class="row justify-content-center">
            <div class="col-11">
                @if (count($errors) > 0)
                    <div class="alert alert-danger">
                        <strong>Error! </strong> Revise las validaciones de los campos.<br><br>
                    </div>
                @endif
            </div>
        </div>
        <form method="POST" action="{{ route('roles.update') }}">
            @csrf
            <div class="bg-light p-3">
                <h4 class="m-0 text-secondary">{{$title}}</h4>
            </div>
            
            <div class="mx-5">

                <div class="form-group mt-4 d-flex">

                    <div class="col px-0 mr-4">
                        <label class="font-weight-bold" for="name">Nombre Rol</label>
                        <input type="text" class="form-control @error('name') is-invalid @enderror" id="name" name="name" value="{{$role->name}}">
                        @error('name')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror                        
                    </div>
                    <div>
                        <input type="hidden" name="id" value="{{$role->id}}">
                    </div>

                </div>
                <hr class="divider my-4">
                <h3>Asignar Permisos por Módulo </h3>
                <hr class="divider my-4">

                @foreach($groups as $group => $valGroup)
                    <h4>{{$group}}</h4>
                    @foreach($valGroup as $permission )
                        @if(($loop->iteration % 2) !=0 )
                            <div class="row">
                                <div class="col-4">
                                    <div class="form-check form-check-inline">
                                        <input  class="form-check-input" type="checkbox" id="permission-{{$permission->id}}" name="permission[{{$permission->id}}]" {{ in_array($permission->id, $permissionPackage) ? "checked" : "" }}>
                                        <label  class="form-check-label" for="permission-{{$permission->id}}">{{$permission->name}}</label>
                                    </div>
                                </div>
                            @if($loop->last)
                            </div>
                            @endif    
                        @else
                                <div class="col-4">
                                    <div class="form-check form-check-inline">
                                        <input  class="form-check-input" type="checkbox" id="permission-{{$permission->id}}" name="permission[{{$permission->id}}]" {{ in_array($permission->id, $permissionPackage) ? "checked" : "" }}>
                                        <label  class="form-check-label" for="permission-{{$permission->id}}">{{$permission->name}}</label>
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
@endsection
