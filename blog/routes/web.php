<?php

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
})->name('default');

Route::get('/user/{id}', function($id){
    return "welcome".$id;
})->name('getUser')->where('id', '[0-9]+');

Route::post('/user', function(){
    return "welcome";
})->name('addNewUser');

Route::delete('/user/{id}', function($id = 'd'){
    return "user with id=".$id." deleted";
})->name('deleteUser');

Route::put('/user', function($user){
    return "user with id=".$user->id." changed";
})->name('changeUser');

Route::patch('/user', function(){
    return "patch";
});

