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
            <form method="POST" action="{{route('users.create')}}">
                @csrf
                <div class="mx-5">
                    <div class="form-row">
                        <div class="col-6">
                            <div class="form-group">
                                <label for="type_document_id">Tipo de Documento<b>*</b></label>
                                <select class="form-control @error('type_document_id') is-invalid @enderror" id="type_document_id" name="type_document_id">
                                    <option value='-'>--</option>
                                    @foreach($type_documents as $type_document)
                                    <option value="{{$type_document->id}}" {{ (old('type_document_id') == $type_document->id )? "selected" : "" }}> ({{$type_document->code}}) - {{$type_document->description}}</option>
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
                                <label for="document_number">Numero de documento<b>*</b></label>
                                <input type="text" class="form-control @error('document_number') is-invalid @enderror" id="document_number" name="document_number" value="{{ old('document_number') }}">
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
                                <label  for="user">Usuario<b>*</b></label>
                                <input  id="user" type="text" class="form-control @error('user') is-invalid @enderror" name="user" value="{{ old('user') }}" >
                                @error('user')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">    
                                <label  for="email">Correo<b>*</b></label>
                                <input type="email" class="form-control @error('email') is-invalid @enderror" id="document_number" id="email" name="email" value="{{ old('email') }}">
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
                                <select class="form-control" id="gender_id" name="gender_id" >
                                    <option>--</option>
                                    @foreach($genders as $gender)  
                                    <option value="{{$gender->id}}" {{ (old('gender_id') == $gender->id )? "selected" : "" }}> ({{$gender->code}}) - {{$gender->description}}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                    </div>            
                    <div class="form-row">
                        <div class="col-6">
                            <div class="form-group">
                                <label for="names">Nombres<b>*</b></label>
                                <input input id="names" type="text" class="form-control @error('names') is-invalid @enderror" name="names" value="{{ old('names') }}" >
                                @error('names')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">    
                                <label  for="surnames">Apellidos<b>*</b></label>
                                <input type="text" class="form-control @error('surnames') is-invalid @enderror" id="surnames" name="surnames" value="{{ old('surnames') }}">
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
                                <label for="password">Contraseña<b>*</b></label>
                                <input type="password" class="form-control @error('password') is-invalid @enderror" id="password" name="password" >
                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror   
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">    
                                <label for="confirm_password">Confirmar Contraseña<b>*</b></label>
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
                                <label for="role_id">Rol<b>*</b></label>
                                <select class="form-control @error('role_id') is-invalid @enderror" id="role_id" name="role_id">
                                    <option value='-'>--</option>
                                    @foreach($roles as $role)                            
                                    <option value="{{$role->id}}" {{ (old('role_id') == $role->id )? "selected" : "" }}> {{$role->name}}</option>
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

    </div>
</div>

@endsection
