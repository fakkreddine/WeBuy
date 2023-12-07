<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\orders;

class order extends Controller
{
   function order(Request $request){
    
    $order= new orders;
    
    $order->date=$request->date;
    $order->user_id=$request->user;
    $order->status=$request->status;
    $order->products=$request->products;
    $order->cost=$request->cost;
    
    $res=$order->save();
    return $order->id;
}

}