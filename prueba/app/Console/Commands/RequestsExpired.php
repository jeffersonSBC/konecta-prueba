<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Request;
use App\Mail\SendMailable;
use Illuminate\Support\Facades\Mail;

class RequestsExpired extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'requests:expired';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Envia Email cuando las solicitudes estan vencidas';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $requests  = Request::select("requests.*","number_of_days_request.day",
            "type_requests.day_limit","type_requests.email_notification","request_status.id AS request_status_id")
        ->join("requests_status_change","requests_status_change.request_id","=","requests.id")
        ->join("request_status","request_status.id","=","requests_status_change.request_status_id")
        ->join("type_requests","type_requests.id","=","requests.type_request_id")
        ->join("number_of_days_request","number_of_days_request.id","=","requests.id")
        ->where("requests_status_change.status",true)
        ->where("requests.status",true)
        ->get()
        ->toArray();

        foreach($requests as $keyRq => $valueRq){
                          
            if(config('app.request_status_close') != $valueRq['request_status_id'] && !empty($valueRq['email_notification'])){
                $title ='';
                if ($valueRq['day'] > $valueRq['day_limit']) {
                    $title = 'La solicitud #'.$valueRq['id'].' esta vencida';
                    Mail::to($valueRq['email_notification'])->send(new SendMailable($title));

                }else if((
                    ($valueRq['day_limit']-$valueRq['day'])>=1 && ($valueRq['day_limit']-$valueRq['day'])<=2) || $valueRq['day'] == $valueRq['day_limit']){
                        $title = 'La solicitud #'.$valueRq['id'].' esta a punto de vencerse';
                        Mail::to($valueRq['email_notification'])->send(new SendMailable($title));
                }

            }   
        }
    }
}
