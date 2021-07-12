<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' =>[], 'prefix' => 'v1'],function(){
    Route::post('auth/login','TokensController@login');
});


Route::group(['middleware' =>['jwt.auth'],'prefix' => 'v1'],function(){
      /** Usuarios **/
    Route::get('usuarios/listar','UserController@indexApi');

    Route::get('usuarios/editar-usuarios/{id}','UserController@editApi');
        
    Route::put('usuarios/editar-usuarios/{id}','UserController@updateApi');             

    Route::post('usuarios/crear','UserController@createApi');

    Route::get('usuarios/datos-formulario','UserController@setupApi');

    Route::put('usuarios/inactivar-usuarios/{id}','UserController@inactivateApi');
         



    /** Clientes**/   
    Route::get('clientes/listar','ClienteController@indexApi');

    Route::get('clientes/datos-formulario','ClienteController@setupApi');

    Route::get('clientes/editar-cliente/{id}','ClienteController@editApi');
        
    Route::put('clientes/editar-cliente/{id}','ClienteController@update');

    Route::get('/clientes/crear-cliente','ClienteController@showFormCreate');            

    Route::post('/clientes/crear-cliente','ClienteController@createApi');

    Route::put('/clientes/inactivar-cliente/{id}','ClienteController@inactivate');   
});
