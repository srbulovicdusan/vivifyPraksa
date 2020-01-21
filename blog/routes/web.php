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

use Webpatser\Countries\Countries;

Route::group(['middleware' => ['logging']], function () {
    Route::get('/', 'HomeController@home')->name('default');
    Route::get('/welcome/{age}', 'HomeController@welcome')->middleware('ageRestriction')->middleware('auth');
    Route::get('/user/{id}', 'HomeController@getUser')->name('getUser')->where('id', '[0-9]+')->middleware('auth');
    Route::post('/user', 'HomeController@addUser')->name('addNewUser')->middleware('auth');
    Route::delete('/user/{id}', 'HomeController@deleteUser')->name('deleteUser'); 
    Route::put('/user', 'HomeController@changeUser')->name('changeUser');   
    Route::patch('/user', 'HomeController@patch')->name('patchExample');
    Route::get('blade', 'HomeController@blade')->name('blade');
    Route::resource('photos', 'PhotoController');
    Route::get('/home', 'HomeController@index')->name('home');
});

Auth::routes();