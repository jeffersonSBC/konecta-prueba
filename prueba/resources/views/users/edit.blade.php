@extends('layouts.app')
@section('content')
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
    <form method="POST" action="{{route('users.update')}}">
        @csrf
        <div class="bg-light p-3">
            <h4 class="m-0 text-secondary">{{$title}}</h4>
        </div>
        <div class="mx-5">
            <div class="form-row">
                <div class="col-6">
                    <div>
                        <input type="hidden" name="id"  id="id" value="{{$user->id}}">
                    </div>
                    <div class="form-group">
                        <label for="type_document_id">Tipo de Documento</label>
                        <select class="form-control @error('type_document_id') is-invalid @enderror" id="type_document_id" name="type_document_id" disabled>
                            <option value='-'>--</option>
                            @foreach($type_documents as $type_document)
                                <option value="{{$type_document->id}}" {{$type_document->id == $user->type_document_id ? 'selected':'' }}>({{$type_document->code}}) - {{$type_document->description}}</option>
                            @endforeach
                        </select>
                        @error('type_document_id')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">    
                        <label for="document_number">Numero de documento</label>
                        <input type="text" class="form-control @error('document_number') is-invalid @enderror" id="document_number" name="document_number" value="{{$user->document_number}}" disabled>
                        @error('document_number')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="col-6">
                    <div class="form-group">
                        <label  for="user">Usuario</label>
                        <input  id="user" type="text" class="form-control @error('user') is-invalid @enderror" name="user" value="{{$user->user}}" disabled>
                        @error('user')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">    
                        <label  for="email">Correo</label>
                        <input type="email" class="form-control @error('email') is-invalid @enderror" id="email" id="email" name="email" value="{{$user->email}}"  disabled >
                        @error('email')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="col-6">
                    <div class="form-group">
                        <label  for="gender_id">Genero</label>
                        <select class="form-control" id="gender_id" name="gender_id">
                            <option>--</option>
                            @foreach($genders as $gender)                            
                            <option value="{{$gender->id}}" {{$gender->id == $user->gender_id ? 'selected':'' }}>({{$gender->code}}) - {{$gender->description}}</option>
                            @endforeach
                        </select>
                    </div>
                </div>
            </div>            
            <div class="form-row">
                <div class="col-6">
                    <div class="form-group">
                        <label for="names">Nombres</label>
                        <input input id="names" type="text" class="form-control @error('names') is-invalid @enderror" name="names" value="{{$user->names}}" >
                        @error('names')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">    
                        <label  for="surnames">Apellidos</label>
                        <input type="text" class="form-control @error('surnames') is-invalid @enderror" id="surnames" name="surnames" value="{{$user->surnames}}" >
                        @error('surnames')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                </div>
            </div> 
            <div class="form-row">
                <div class="col-6">
                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input type="password" class="form-control @error('password') is-invalid @enderror" id="password" name="password">
                        @error('password')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror   
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">    
                        <label for="confirm_password">Confirmar Contraseña</label>
                        <input type="password" class="form-control @error('confirm_password') is-invalid @enderror" id="confirm_password" name="confirm_password">
                        @error('confirm_password')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror    
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="col-6">
                    <div class="form-group">
                        <label for="role_id">Rol</label>
                        <select class="form-control @error('role_id') is-invalid @enderror" id="role_id" name="role_id">
                            <option value='-'>--</option>
                            @foreach($roles as $role)                            
                            <option value="{{$role->id}}" {{$role->id == $user->role_id ? 'selected':'' }}> {{$role->name}}</option>
                            @endforeach
                        </select>
                        @error('role_id')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror  
                    </div>
                </div>
            </div>
      
            <hr class="divider my-4">                                                             
            <button type="submit" class="btn btn-large btn-primary boton">Guardar</button>
        </div>
    </form>
</div>

@endsection
