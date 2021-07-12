<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();
Route::get('logout', '\App\Http\Controllers\Auth\LoginController@logout');

Route::middleware(['auth'])->group(function(){

    /** Usuarios **/
    Route::get('usuarios/listar','UserController@index')->name('users.list')
            ->middleware('roleHasPermission:Ver Usuarios');

    Route::get('usuarios/editar-usuarios/{id}','UserController@edit')->name('users.showformedit')
           ->middleware('roleHasPermission:Actualizar Usuarios');
            
    Route::post('usuarios/editar-usuarios','UserController@update')->name('users.update')
           ->middleware('roleHasPermission:Actualizar Usuarios');             

    Route::post('usuarios/crear','UserController@create')->name('users.create')
            ->middleware('roleHasPermission:Crear Usuarios');

    Route::get('usuarios/crear','UserController@showRegistrationForm')->name('users.showform')
            ->middleware('roleHasPermission:Crear Usuarios');

    Route::post('usuarios/inactivar-usuarios','UserController@inactivate')->name('users.inactivate')
            ->middleware('roleHasPermission:Inactivar Usuarios');   


    /** roles**/   
    Route::get('roles/listar','RoleController@index')->name('roles.list')
            ->middleware('roleHasPermission:Ver Roles');

    Route::get('roles/editar-rol/{id}','RoleController@edit')->name('roles.showformedit')
            ->middleware('roleHasPermission:Actualizar Roles');
            
    Route::post('roles/editar-rol','RoleController@update')->name('roles.update')
            ->middleware('roleHasPermission:Actualizar Roles');            
    
    Route::get('/roles/crear-rol','RoleController@showFormCreate')->name('role.showform')
            ->middleware('roleHasPermission:Crear Roles');

    Route::post('roles/crear-rol','RoleController@create')->name('role.create')
            ->middleware('roleHasPermission:Crear Roles');

     Route::post('roles/inactivar-roles','RoleController@inactivate')->name('role.inactivate')
            ->middleware('roleHasPermission:Inactivar Roles');               
       

    
});


