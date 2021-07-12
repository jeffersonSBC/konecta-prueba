<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\User;

class TokensController extends Controller
{

    public $messages    = [
        'email.email'        => 'El campo debe ser un imail valido',
        'password.min'       => 'El campo  contraseña debe contener mas de 8 caracteres.',           
        'email.required'     => 'El campo email es obligatorio',
        'password.required'  => 'El campo  contraseña es obligatorio.',   
    ];
    public $rules       = [
        'email'     => ['required','email'],
        'password'  => ['required','min:8']
    ];

    /** 
     * Metodo para generar login por token JWT
     * @author jefferson starling barrera cardona <jbarrera@uc.edu.co>
     * @return json
     * 
    **/
    public function login(Request $request){
        $credentials = $request->only(['email','password']);
        $validator   =  Validator::make($credentials,$this->rules,$this->messages);
        $errors      =  $validator->errors();

        if (!empty($errors->all())){
            return response()->json([
                'error'        => true,
                'menssage'     => $errors
            ],422);
        }else{
            $token = JWTAuth::attempt($credentials);
            if ($token) {
                $user = User::select(
                    "users.id",
                    "users.email",
                    "users.role_id",
                    "roles.name as rol")
                ->join("roles","roles.id", "=","users.role_id")
                ->where('users.email', $credentials['email'])
                ->get()
                ->first();

                $permissions = User::select("permissions.name as permission")
                ->join("roles","roles.id", "=","users.role_id")
                ->join("role_has_permissions","role_has_permissions.role_id","=","roles.id")
                ->join("permissions","permissions.id","=","role_has_permissions.permission_id")
                ->where('users.email', $credentials['email'])
                ->get()
                ->toArray();

                return response()->json([
                    'error'       => false,
                    'user'        => $user,
                    'permissions' => $permissions,
                    'token'       => $token
                ],200);

            }else{
                return response()->json([
                    'error'        => true,
                    'menssage'     => 'Credenciales Incorrectas',
                ],401);
            }
        } 
    }


    public function refreshToken()
    {
        $token = JWTAuth::getToken();
        try {
            $token = JWTAuth::refresh($token);
            return response()->json(['success' => true, 'token' => $token], 200);
        } catch (TokenExpiredException $ex) {
            // We were unable to refresh the token, our user needs to login again
            return response()->json([
                'code' => 3, 'success' => false, 'message' => 'Need to login again, please (expired)!'
            ]);
        } catch (TokenBlacklistedException $ex) {
            // Blacklisted token
            return response()->json([
                'code' => 4, 'success' => false, 'message' => 'Need to login again, please (blacklisted)!'
            ], 422);
        }
    }

}
