<?php

namespace App\Http\Controllers;
use App\Models\User;

use Illuminate\Http\Request;

class users extends Controller
{
    //
    function add(Request $request){
    
        $users= new user;
        
        $users->name=$request->name;
        $users->last_name=$request->last_name;
        $users->mail=$request->mail;
        $users->password=$request->password;
        $users->avatar=$request->avatar;
        $users->adress=$request->adress;
        $users->method=$request->method;
        $users->type=$request->type;
        $users->device=$request->device;
        $res=$users->save();
        return true;
    }
}
