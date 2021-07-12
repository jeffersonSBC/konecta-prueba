<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Role;
use App\Permission;
use App\RoleHasPermission;
use DB;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $roles       = Role::where('status',1)->where('special',0)->orderBy('id','asc')->paginate(5);
        $title       = 'Listado de Roles de Usuario';
        return view('roles.index',compact('title','roles'));

    }


    /** 
     * Metodo para mostrar el formulario de creación 
     * de roles
    **/
    public function showFormCreate(){
        $title       = "Agregar Rol de usuario";
        $permissions = Permission::all();
        $groups      = $this->groupPermission($permissions);

        return view('roles.create',compact('title','permissions','groups'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $data        = $request->all();
        $messages    = Role::message();
        $rules       = Role::rule();
        $validator   = Validator::make($request->all(),$rules,$messages);
        $errors      = $validator->errors();

        if (!empty($errors->all())) {
           return redirect()->route('role.showform')
           ->withErrors($errors)
           ->withInput(); 
        } 

        DB::beginTransaction();

        try{
            $role = Role::create([
                'name'       => $data['name'],
                'status'     => 1,
                'guard_name' => 'web'
            ]);

            if (!empty($data['permission'])) {
                $this->deletePermissionRole($role->id);
                foreach($data['permission'] as $permissionsKey => $permissionsValue){
                RoleHasPermission::create([
                    'role_id'       => $role->id,
                    'permission_id' => $permissionsKey
                ]);
                }
            }

            DB::commit();
        }catch(ModelNotFoundException $e){
            DB::rollBack();
            return redirect()->route('roles.showform')
           ->withErrors(['message'=>'Revise los Campos Obligatorios'])
           ->withErrors(['message'=>'No se pudo guardar el rol, contacte al administrador del sistema'])
           ->withInput(); 
        }
        return redirect()->route('roles.list');
        
    }

    
    /** 
     * Metodo para eliminar los permisos de un rol, con el fin
     * de actualizarlos y no generen conflictos
    **/
    public function deletePermissionRole($role_id){
        DB::table('role_has_permissions')
        ->where('role_id','=',$role_id)
        ->delete();
    }


    /**
     * Metodo para agrupar los permisos por modulo 
     * @param array
     * @return array
    **/
    public function groupPermission($permissions){
        $group = array();
        if (!empty($permissions)) {
            foreach($permissions as $permission){
                $group[$permission->module][] = $permission;
            }
        }

        return $group;
    }

    /**
     * Metodo para agrupar los permisos del rol 
     * @param array
     * @return array
    **/
    public function permissionPackage($roleHasPermission){
        $permissionPackage = array();
        foreach( $roleHasPermission as $roleHasPermissionKey => $roleHasPermissionValue){
            $permissionPackage[] = $roleHasPermissionValue['permission_id'];
        }
        return $permissionPackage;
    }   


    /** 
     * Metodo para inactivar  roles
     * @author jefferson starling barrera cardona <jbarrera@sisfo.com>
     * @param  $request->array
     * @return view
     * 
    **/
    public function inactivate(Request $request){

        $id = $request->input('id');
        DB::beginTransaction();

        try{
            Role::where('id',$id)->update(['status'=> 0]);
            DB::commit();
            return redirect()->route('roles.list');

        }catch(ModelNotFoundException $e){
            DB::rollBack();
            return redirect()->route('roles.list');
        }
    }
    
    
    /** 
     * Metodo para abir el formulario para editar los roles y permisos asignados
     * @author jefferson starling barrera cardona 
    **/
    public function edit($id){

        $title             = "Editar Roles";
        $role              = Role::findOrFail($id);
        $permissions       = Permission::all();
        $groups            = $this->groupPermission($permissions); 
        $roleHasPermission = RoleHasPermission::select('permission_id')
                             ->where('role_id',$id)
                             ->get()
                             ->toArray();
        $permissionPackage = $this->permissionPackage($roleHasPermission);                           

        return view('roles.edit',compact('role','groups','permissionPackage','title'));
    }
    
    
    /** 
     * Metodo para editar los roles y permisos asignados
     * @author jefferson starling barrera cardona <jbarrera@sisfo.com>
     * @param  $request->array
     * @return view
     * 
    **/    
    public function update(Request $request){

        $data        = $request->all();
        $messages    = Role::message();
        $rules       = Role::rule();
        $validator   = Validator::make($request->all(),$rules,$messages);
        $errors      = $validator->errors();

        if (!empty($errors->all())) {
           return redirect()->route('roles.showformedit',$data['id'])
           ->withErrors($errors)
           ->withInput(); 
        } 

        try{
            Role::where('id','=',$data['id'])->update(array('name' => $data['name']));
            if (!empty($data['permission'])) {
                $this->deletePermissionRole($data['id']);
                foreach($data['permission'] as $permissionsKey => $permissionsValue){
                    RoleHasPermission::create([
                        'role_id'       => $data['id'],
                        'permission_id' => $permissionsKey
                    ]);
                }
            }
            DB::commit();
        }catch(ModelNotFoundException $e){
            DB::rollBack();
            return redirect()->route('roles.showformedit',$data['id'])
            ->withErrors(['message'=>'No se pudo actualizar el rol, contacte al administrador del sistema'])
            ->withInput(); 
        }
        return redirect()->route('roles.list');
    }        
}
