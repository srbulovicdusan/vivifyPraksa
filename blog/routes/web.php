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
})->middleware('logging', 'ageRestriction');

Route::get('/user/{id}', 'HomeController@getUser')->name('getUser')->where('id', '[0-9]+')->middleware('logging');

Route::post('/user', 'HomeController@addUser')->name('addNewUser')->middleware('logging');

Route::delete('/user/{id}', 'HomeController@deleteUser')->name('deleteUser')->middleware('logging');

Route::put('/user', 'HomeController@changeUser')->name('changeUser')->middleware('logging');

Route::patch('/user', function(){
    return "patch";
})->middleware('logging');

Route::get('blade', function(){
    return view('example', ['first_name' => 'Dusan']);
});

Route::resource('photos', 'PhotoController');
