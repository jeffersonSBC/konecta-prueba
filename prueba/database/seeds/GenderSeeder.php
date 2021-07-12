<?php

use Illuminate\Database\Seeder;
use App\Gender;
class GenderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Gender::create([
            'code'        =>'M',
            'description' =>'Masculino',
            'status'      =>1,
            ]);

        Gender::create([
            'code'        =>'F',
            'description' =>'Femenino',
            'status'      =>1,
            ]);            
    }
}
