<?php

use Illuminate\Database\Seeder;
use App\TypeDocument;
class TypeDocumentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        TypeDocument::create([
            'code'         => 'CC',
            'description'  => 'Cédula de Ciudadanía',
            'status'       => 1,
        ]);

        TypeDocument::create([
            'code'         => 'TI',
            'description'  => 'Tarjeta de identidad',
            'status'       => 1,
        ]);

        TypeDocument::create([
            'code'         => 'RC',
            'description'  => 'Registro Civil',
            'status'       => 1,
        ]);    
        
        TypeDocument::create([
            'code'         => 'CE',
            'description'  => 'Cédula de extranjería',
            'status'       => 1,
        ]);

        TypeDocument::create([
            'code'         => 'PA',
            'description'  => 'Pasaporte',
            'status'       => 1,
        ]);             
    }
}
