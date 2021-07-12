<?php

use Illuminate\Database\Seeder;
use App\Cliente;
class clienteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Cliente::create([
            'type_document_id' => 1,
            'document_number'  => 1020304050,
            'gender_id'        => 1,
            'user_id'          => 1,
            'names'            => 'Cliente',
            'surnames'         => 'De Prueba',
            'email'            => 'cliente@prueba.com',
            'status'           => 1
            ]);
    }
}
