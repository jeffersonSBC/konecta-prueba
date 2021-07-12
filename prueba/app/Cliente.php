<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    protected $fillable = [
        'names',
        'surnames',
        'status',
        'gender_id',
        'email',
        'document_number',
        'type_document_id'
    ];
}
