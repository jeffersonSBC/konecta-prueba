<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class PermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app()[PermissionRegistrar::class]->forgetCachedPermissions();
        //permisos
        Permission::create(['name' => 'Ver Usuarios',        'module'=>'Usuarios']);
        Permission::create(['name' => 'Crear Usuarios',      'module'=>'Usuarios']);
        Permission::create(['name' => 'Actualizar Usuarios', 'module'=>'Usuarios']);
        Permission::create(['name' => 'Inactivar Usuarios',  'module'=>'Usuarios']);

        Permission::create(['name' => 'Ver Roles',           'module'=>'Roles']);
        Permission::create(['name' => 'Crear Roles',         'module'=>'Roles']);
        Permission::create(['name' => 'Actualizar Roles',    'module'=>'Roles']);
        Permission::create(['name' => 'Inactivar Roles',     'module'=>'Roles']);

        Permission::create(['name' => 'Ver Clientes',       'module'=>'Clientes']);
        Permission::create(['name' => 'Crear Clientes',     'module'=>'Clientes']);
        Permission::create(['name' => 'Actualizar Clientes','module'=>'Clientes']);
        Permission::create(['name' => 'Inactivar Clientes', 'module'=>'Clientes']);
    }
}
