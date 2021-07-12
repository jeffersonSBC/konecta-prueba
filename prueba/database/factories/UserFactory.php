<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
        'user'              => 'ADMIN',
        'names'             => 'Super Administrador',
        'surnames'          => 'Del Sistema',
        'email'             => 'admin@prueba.com',
        'email_verified_at' => now(),
        'password'          => '$2y$10$mBgdxGAtKGgoIQfOjhDgH.NKOUDgYofeoXQtxmy.byPtnNOjHbFqq', // password
        'remember_token'    => Str::random(10),
        'role_id'           => 1,
        'gender_id'         => 1,
        'type_document_id'  => 1,
        'document_number'   => '1088313351',
        'special'           => 1
    ];
});
