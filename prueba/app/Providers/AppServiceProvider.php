<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Blade;
use App\RoleHasPermission;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Blade::if('permission', function($permission) {
            return $this->checkPermission($permission);
        });        
    }


    /** 
    * Metodo para evaluar si un usuario tiene un permiso asignado
    * @return boolean
    * @author jefferson starling barrera cardona
    *
    */
    public function checkPermission($permission){
        if(Auth::user()->role_id == config('app.role_id_super_user')){
            return true;
        }else{
            $permissions = RoleHasPermission::select('permissions.name as permission')
            ->join('permissions','permissions.id','=','role_has_permissions.permission_id')
            ->where('role_has_permissions.role_id',Auth::user()->role_id)
            ->where('permissions.name',$permission)
            ->first();

            if(empty($permissions)){
                return false;
            }
            return true;
        }
    }


    

}
