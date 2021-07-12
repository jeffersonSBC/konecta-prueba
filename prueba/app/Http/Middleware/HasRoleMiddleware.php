<?php

namespace App\Http\Middleware;

use Closure;
use App\RoleHasPermission;
use Illuminate\Support\Facades\Auth;

class HasRoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next,$permission)
    {
        if (Auth::user()->role_id == config('app.role_id_super_user')) {
            return $next($request);
        }else{
            $permissions = RoleHasPermission::select('permissions.name as permission')
            ->join("permissions","permissions.id","=","role_has_permissions.permission_id")
            ->where('role_has_permissions.role_id',Auth::user()->role_id)
            ->where('permissions.name',$permission)
            ->first();
    
            if(empty($permissions)){
                abort(403, 'Unauthorized action.');
            }else{
                return $next($request);
            }
        }
    }
}
