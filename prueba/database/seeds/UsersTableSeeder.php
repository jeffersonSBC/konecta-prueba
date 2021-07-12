<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::create(['name'=>'SuperAdmin','status'=>1,'special'=>'1']);
        Role::create(['name'=>'Ventas','status'=>1,'special'=>'0']);
        Role::create(['name'=>'Adminitrador','status'=>1,'special'=>'0']);
        factory(App\User::class,1)->create();

    }
}
