<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $fillable = [
        'name','status','guard_name'
    ];

    public static function message(){
        $messages = [
            'name.required' => 'El campo Nombre Rol es obligatorio.',
            'name.max'      => 'El campo Nombre Rol tiene una capacidad de maximo 50 caracteres.',
            'name.min'      => 'El campo Nombre Rol no puede estar vacio o debe estar representado por minimo 2 caracteres.',
        ];

        return $messages;
    }

    public static function rule(){
        $rules = [
            'name' => ['required','String','min:2','max:50']
        ]; 
        return $rules;
    } 

}
