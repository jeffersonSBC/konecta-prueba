<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class createUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /** 
     * reglas de validación, para crear usuario
     * @author jefferson starling barrera cardona <jbarrera@uc.edu.co>
     * 
    **/
    public function rules()
    {
        return [
            'user'             => ['required', 'string', 'max:50','unique:users'],
            'names'            => ['required', 'string', 'max:125'],
            'surnames'         => ['required', 'string', 'max:125'],
            'document_number'  => ['required', 'string', 'max:30'],
            'email'            => ['required', 'string', 'email', 'max:125'],
            'password'         => ['min:8','required_with:confirm_password','same:confirm_password'],
            'status'           => ['numeric'],
            'gender_id'        => ['numeric'],
            'type_document_id' => ['numeric'],
            'role_id'          => ['numeric']
        ];
    }

    /** 
     * menmsajes de reglas de validación, para crear usuario
     * @author jefferson starling barrera cardona <jbarrera@uc.edu.co>
     * 
    **/
    public function messages(){
        return [
            'user.required'            => 'El campo nombre de usuario es obligatorio.',
            'user.max'                 => 'El campo nombre de usuario tiene una capacidad de maximo 50 caracteres.',
            'user.unique'              => 'El nombre de usuario ya esta registrado .',
            'names.required'           => 'El campo nombres es obligatorio.',
            'names.max'                => 'El campo nombres tiene una capacidad de maximo 125 caracteres.',
            'surnames.required'        => 'El campo apellidos es obligatorio.',
            'surnames.max'             => 'El campo apellidos tiene una capacidad de maximo 125 caracteres.',   
            'document_number.required' => 'El campo numero de documento es obligatorio.',
            'document_number.max'      => 'El campo numero de documento tiene una capacidad de maximo 30 caracteres.',
            'password.required'        => 'El campo contraseña es obligatorio.',           
            'password.min'             => 'El campo  contraseña debe contener mas de 8 caracteres.',           
            'password.same'            => 'El campo  contraseña debe ser igual al campo comfirmar contraseña.',
            'email.required'           => 'El campo correo es obligatorio.',
            'email.max'                => 'El campo correo tiene una capacidad de maximo 125 caracteres.',   
            'email.email'              => 'El campo correo no tiene una estructura valida.',   
            'status.numeric'           => 'El campo que define si el usuario esta activo es obligatorio',
            'gender_id.numeric'        => 'El campo genero es obligatorio',
            'type_document_id.numeric' => 'El campo tipo de documento es obligatorio',
            'role_id.numeric'          => 'El campo rol es obligatorio'
        ];
    }
}
