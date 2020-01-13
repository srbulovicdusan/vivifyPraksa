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
})->name('default')->middleware('logging');

Route::get('/welcome/{age}', function($age){
    return "welcome ".$age;
})->middleware('logging')->middleware('ageRestriction');

Route::get('/user/{id}', function($id){
    return "welcome".$id;
})->name('getUser')->where('id', '[0-9]+')->middleware('logging');

Route::post('/user', function(){
    return "welcome";
})->name('addNewUser')->middleware('logging');

Route::delete('/user/{id}', function($id = 'd'){
    return "user with id=".$id." deleted";
})->name('deleteUser')->middleware('logging');

Route::put('/user', function($user){
    return "user with id=".$user->id." changed";
})->name('changeUser')->middleware('logging');

Route::patch('/user', function(){
    return "patch";
})->middleware('logging');

