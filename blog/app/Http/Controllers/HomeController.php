<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
   

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function home(){
        return view('welcome');
    }
    public function welcome($age){
        return "welcome ".$age;
    }
    public function patch(){
        return "patch";
    }
    public function blade(){
        return view('example', ['first_name' => 'Dusan']);

    }
    public function index()
    {
        return view('home');
    }
}
