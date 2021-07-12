<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use App\Http\Requests\createUserRequest;
use Illuminate\Http\Request;
use \Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use App\User;
use App\Role;
use App\Gender;
use App\TypeDocument;
use DB;

class UserController extends Controller
{


    /** 
     * Metodo para listar los usuarios
     * @author jefferson starling barrera cardona <jbarrera@uc.edu.co>
     * @return view
     * 
    **/
    public function index()
    {
       $users = User::select("users.*","roles.name as role")
                ->join("roles","roles.id","=","users.role_id")
                ->where('users.special',0)
                ->orderBy('id','asc')
                ->paginate(5);
       $title = "Listado de Usuarios";
       return view("users.index",compact("users","title"));

    }


    /** 
     * Metodo para listar los usuarios desde el Api
     * @author jefferson starling barrera cardona <jbarrera@uc.edu.co>
     * @return json
     * 
    **/
    public function indexApi()
    {
       $users = User::select("users.*","roles.name as role")
                ->join("roles","roles.id","=","users.role_id")
                ->where('users.special',0)
                ->orderBy('id','asc')
                //->paginate(5);
                ->get()->toArray();
       $title = "Listado de Usuarios";

       //return view("users.index",compact("users","title"));

        return response()->json([
            'error'   => false,
            'users'   => $users
        ],200);
    }


    /** 
     * Metodo para almacenar en base de datos el usuario 
     * @author jefferson starling barrera cardona <jbarrera@uc.edu.co>
     * @param createUserRequest $request --> validando estructura
     * @return view
     * 
    **/
    public function create(createUserRequest $request)
    {
        $data  = $request->all();
            User::create([
                'user'             => $data['user'],
                'names'            => $data['names'],
                'surnames'         => $data['surnames'],
                'email'            => $data['email'],
                'password'         => Hash::make($data['password']),
                'role_id'          => $data['role_id'],
                'document_number'  => $data['document_number'],
                'status'           => (isset($data['status']))?$data['status']:1,
                'gender_id'        => $data['gender_id'],
                'type_document_id' => $data['type_document_id']
            ]);
            
        return redirect()->route('users.list');        
    }


   /** 
     * Metodo para almacenar en base de datos el usuario enviado desde el Api
     * @author jefferson starling barrera cardona <jbarrera@uc.edu.co>
     * @param createUserRequest $request --> validando estructura
     * @return json
     * 
    **/
    public function createApi(createUserRequest $request)
    {
        $data  = $request->all();
        try{
            $user = User::create([
                'user'             => $data['user'],
                'names'            => $data['names'],
                'surnames'         => $data['surnames'],
                'email'            => $data['email'],
                'password'         => Hash::make($data['password']),
                'role_id'          => $data['role_id'],
                'document_number'  => $data['document_number'],
                'status'           => (isset($data['status']))?$data['status']:1,
                'gender_id'        => $data['gender_id'],
                'type_document_id' => $data['type_document_id']
            ]);
            
            if($user->id){
                return response()->json([
                    'error'   => false,
                    'users'   => $user
                ],200);
            }else{
                return response()->json([
                    'error'   => true,
                    'message' => 'No se pudo completar el proceso'
                ],503);
            }

        }catch(ModelNotFoundException $e){
            return response()->json([
                'error'   => false,
                'mensage' => "Ocuarrio un problema"
            ],500);
        }
    }


    /** 
     * Metodo para iniciar el formulario de registro de usuarios
     * @author jefferson starling barrera cardona <jbarrera@uc.edu.co>
     * @return view
     * 
    **/
    public function showRegistrationForm(){
        $title          = "Crear Usuario";
        $genders        = Gender::all()->where('status',1);
        $roles          = Role::all()->where('special',0)->where('status',1);
        $type_documents = TypeDocument::all()->where('status',1);

        return view('users.register',compact(
            'title',
            'genders',
            'roles',
            'type_documents'
        ));
    }




    /** 
     * Metodo para cargar la información basica de usuarios desde el api
     * @author jefferson starling barrera cardona <jbarrera@uc.edu.co>
     * @return json
     * 
    **/
    public function setupApi(){
        
        $genders        = Gender::all()->where('status',1)->toArray();
        $roles          = Role::select()->where('special',0)->where('status',1)->get()->toArray();
        $type_documents = TypeDocument::all()->where('status',1)->toArray();

        return response()->json([
            'error'          => false,
            'genders'        => $genders,
            'roles'          => $roles,
            'type_documents' => $type_documents,
        ],200);

    }


    /** 
     * Metodo para inactivar  usuarios
     * @author jefferson starling barrera cardona <jbarrera@uc.edu.co>
     * @param  $request->array
     * @return view
     * 
    **/
    public function inactivate(Request $request){

        $id = $request->input('id');
        DB::beginTransaction();

        try{
            User::where('id',$id)->update(['status'=> 0]);
            DB::commit();
            return redirect()->route('roles.list');

        }catch(ModelNotFoundException $e){
            DB::rollBack();
            return redirect()->route('roles.list');
        }
    }     


    /** 
     * Metodo para inactivar  usuarios
     * @author jefferson starling barrera cardona <jbarrera@uc.edu.co>
     * @param  $request->array
     * @return view
     * 
    **/
    public function inactivateApi(Request $request,$id){

        $user = User::where('id',$id)->update(['status'=>0]);
        return response()->json([
            'error'   => false,
            'cliente' => $user
        ], 200); 
    }
    


    /** 
     * Metodo para abir el formulario para editar usuarios
     * @author jefferson starling barrera cardona 
    **/
    public function edit($id){
        $title          = "Editar Usuario";
        $user           = User::findOrFail($id);
        $genders        = Gender::all()->where('status',1);
        $roles          = Role::all()->where('special',0)->where('status',1);
        $type_documents = TypeDocument::all();

        return view('users.edit',compact(
            'user',
            'genders',
            'roles',
            'type_documents',
            'title'
        ));
    }



        /** 
     * Metodo para abir el formulario para editar usuarios
     * @author jefferson starling barrera cardona 
    **/
    public function editApi($id){
        $user           = User::findOrFail($id);
        return response()->json([
            'error'          => false,
            'usuario'        => $user
        ],200);
    }
    
    
    /** 
     * Metodo para editar usuarios
     * @author jefferson starling barrera cardona <jbarrera@uc.edu.co>
     * @param  $request->array
     * @return view
     * 
    **/    
    public function update(Request $request){

        $id           = $request->input('id');
        $gender_id    = $request->input('gender_id');
        $names        = $request->input('names');
        $surnames     = $request->input('surnames');
        $password     = $request->input('password');
        $role_id      = $request->input('role_id');
        $status       = empty($request->input('status'))?'1':$request->input('status');


        $messages = [
            'names.required'     => 'El campo nombres es obligatorio.',
            'names.max'          => 'El campo nombres tiene una capacidad de maximo 125 caracteres.',
            'surnames.required'  => 'El campo apellidos es obligatorio.',
            'surnames.max'       => 'El campo apellidos tiene una capacidad de maximo 125 caracteres.',
            'password.required'  => 'El campo contraseña es obligatorio.',           
            'password.min'       => 'El campo  contraseña debe contener mas de 8 caracteres.',           
            'password.same'      => 'El campo  contraseña debe ser igual al campo comfirmar contraseña.',
            'role_id.numeric'    => 'El campo rol es obligatorio.'
        ];

        $rules =[
            'id'          => ['required'],
            'role_id'     => ['required'],  
            'names'       => ['required', 'string', 'max:125'],
            'surnames'    => ['required', 'string', 'max:125']
        ];
        $rulePassword = ['password' => ['min:8','required_with:confirm_password','same:confirm_password']];

        (!empty($password)) ? $rules = array_merge($rules,$rulePassword): false;
        $validator = Validator::make($request->all(),$rules,$messages);
        $errors    =  $validator->errors();

        if (!empty($errors->all())) {
           return redirect()->route('users.showformedit',$id)
           ->withErrors($errors)
           ->withInput(); 
        } 

        try{
            $set = [ 
                'role_id'      => $role_id,
                'status'       => $status,
                'names'        => $names,
                'surnames'     => $surnames
            ];
            $setPassword = ['password' => Hash::make($password)];

            (!empty($password)) ? $set = array_merge($set,$setPassword): false;
            User::where('id',$id)->update($set);
            return redirect()->route('users.list'); 

        }catch(ModelNotFoundException $e){
            return redirect()->route('users.showformedit',$id)
            ->withErrors(['message'=>'No se pudo actualizar usuario, contacte al administrador del sistema'])
            ->withInput(); 
        }
    }
    
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateApi(Request $request, $id)
    {
        $gender_id    = $request->input('gender_id');
        $names        = $request->input('names');
        $surnames     = $request->input('surnames');
        $password     = trim($request->input('password'));
        $role_id      = $request->input('role_id');
        $status       = $request->input('status');
        $messages = [
            'names.required'     => 'El campo nombres es obligatorio.',
            'names.max'          => 'El campo nombres tiene una capacidad de maximo 125 caracteres.',
            'surnames.required'  => 'El campo apellidos es obligatorio.',
            'surnames.max'       => 'El campo apellidos tiene una capacidad de maximo 125 caracteres.',
            'password.required'  => 'El campo contraseña es obligatorio.',                     
            'password.same'      => 'El campo  contraseña debe ser igual al campo comfirmar contraseña.',
            'role_id.numeric'    => 'El campo rol es obligatorio.'
        ];

        $rules =[
            'role_id'     => ['required'],  
            'status'      => ['required'],  
            'names'       => ['required', 'string', 'max:125'],
            'surnames'    => ['required', 'string', 'max:125']
        ];

        $rulePassword = ['password' => ['required_with:confirm_password','same:confirm_password']];

        (!empty($password)) ? $rules = array_merge($rules,$rulePassword): false;
        $validator = Validator::make($request->all(),$rules,$messages);
        $errors    =  $validator->errors();

        if (!empty($errors->all())) {

            return response()->json([
                'error'   => true,
                'message' => $errors
            ], 422);
        } 

        try{
            $set = [ 
                'status'       => $status,
                'names'        => $names,
                'surnames'     => $surnames,
                'gender_id'    => $gender_id,
                'role_id'      => $role_id
            ];

            $setPassword = ['password' => Hash::make($password)];
            (!empty($password)) ? $set = array_merge($set,$setPassword): false;
            $user = User::where('id',$id)->update($set);

            return response()->json([
                'error'   => false,
                'user'    => $user,
                'id'      => $id 
            ], 200);

        }catch(ModelNotFoundException $e){

            return response()->json([
                'error'   => true,
                'message' => 'Algo salio mal!'
            ], 500); 
        }
    }

}
