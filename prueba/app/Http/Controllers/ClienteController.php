<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Cliente;
use App\Gender;
use App\TypeDocument;

class ClienteController extends Controller
{
    /** 
     * Metodo para listar los Clientes desde el Api
     * @author jefferson starling barrera cardona <jbarrera@uc.edu.co>
     * @return json
     * 
    **/
    public function indexApi()
    {
        $clientes = Cliente::select("clientes.*")
                ->where('clientes.status',1)
                ->orderBy('id','asc')
                ->get()
                ->toArray();

        return response()->json([
            'error'    => false,
            'clientes' => $clientes
        ],200);
    }



   /** 
     * Metodo para almacenar en base de datos el usuario enviado desde el Api
     * @author jefferson starling barrera cardona <jbarrera@uc.edu.co>
     * @param createUserRequest $request --> validando estructura
     * @return json
     * 
    **/
    public function createApi(Request $request)
    {
        $data     = $request->all();
        $messages = [
            'names.required'            => 'El campo nombres es obligatorio.',
            'names.max'                 => 'El campo nombres tiene una capacidad de maximo 125 caracteres.',
            'surnames.required'         => 'El campo apellidos es obligatorio.',
            'surnames.max'              => 'El campo apellidos tiene una capacidad de maximo 125 caracteres.',          
            'email.required'            => 'El campo email es obligatorio.',
            'type_document_id.required' => 'El campo tipo de documento es obligatorio.',
            'document_number.required'  => 'El campo numero de documento es obligatorio.',
        ];

        $rules  = [
            'status'           => ['required'],  
            'names'            => ['required', 'string', 'max:125'],
            'surnames'         => ['required', 'string', 'max:125'],
            'type_document_id' => ['required'],
            'email'            => ['required'],
            'document_number'  => ['required']
        ];

        $validator = Validator::make($request->all(),$rules,$messages);
        $errors    =  $validator->errors();

        if (!empty($errors->all())) {

            return response()->json([
                'error'   => true,
                'message' => $errors
            ], 422);
        }

        try{
            $cliente = Cliente::create([
                'names'            => $data['names'],
                'surnames'         => $data['surnames'],
                'email'            => $data['email'],
                'document_number'  => $data['document_number'],
                'status'           => (isset($data['status']))?$data['status']:1,
                'gender_id'        => $data['gender_id'],
                'type_document_id' => $data['type_document_id']
            ]);
            
            if($cliente->id){
                return response()->json([
                    'error'   => false,
                    'cliente' => $cliente
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
     * Metodo para cargar la información basica de clientes desde el api
     * @author jefferson starling barrera cardona <jbarrera@uc.edu.co>
     * @return json
     * 
    **/
    public function setupApi(){
        
        $genders        = Gender::all()->where('status',1)->toArray();
        $type_documents = TypeDocument::all()->where('status',1)->toArray();

        return response()->json([
            'error'          => false,
            'genders'        => $genders,
            'type_documents' => $type_documents,
        ],200);

    }



    /** 
     * Metodo para abir el formulario para editar cliente
     * @author jefferson starling barrera cardona 
    **/
    public function editApi($id){
        $cliente        = Cliente::findOrFail($id);
        $genders        = Gender::all()->where('status',1);
        $type_documents = TypeDocument::all();

        return response()->json([
            'error'          => false,
            'genders'        => $genders,
            'type_documents' => $type_documents,
            'cliente'        => $cliente
        ],200);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $gender_id    = $request->input('gender_id');
        $names        = $request->input('names');
        $surnames     = $request->input('surnames');
        $status       = $request->input('status');

        $messages = [
            'names.required'     => 'El campo nombres es obligatorio.',
            'names.max'          => 'El campo nombres tiene una capacidad de maximo 125 caracteres.',
            'surnames.required'  => 'El campo apellidos es obligatorio.',
            'surnames.max'       => 'El campo apellidos tiene una capacidad de maximo 125 caracteres.',          
        ];

        $rules  = [
            'status'      => ['required'],  
            'names'       => ['required', 'string', 'max:125'],
            'surnames'    => ['required', 'string', 'max:125']
        ];

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
                'gender_id'    => $gender_id
            ];
            $cliente = Cliente::where('id',$id)->update($set);

            return response()->json([
                'error'   => false,
                'cliente' => $cliente,
                'id'      => $id 
            ], 200);

        }catch(ModelNotFoundException $e){

            return response()->json([
                'error'   => true,
                'message' => 'Algo salio mal!'
            ], 500); 
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function inactivate(Request $request ,$id)
    {
        $cliente = Cliente::where('id',$id)->update(['status'=>0]);
        return response()->json([
            'error'   => false,
            'cliente' => $cliente
        ], 200); 
    }
}
