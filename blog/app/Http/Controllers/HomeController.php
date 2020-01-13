<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function getUser($id)
    {
        return "user with id = ".$id;
    }

    public function addUser($user){
        return "user with id = ".$user->id." added.";
    }
    public function deleteUser($id){
        return "user with id = ".$id." deleted.";
    }
    public function changeUser($user){
        return "user with id = ".$user->id." changed.";
    }
}
