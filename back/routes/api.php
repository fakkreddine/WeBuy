<?php
use App\Models\products;
use App\Models\User;
use App\Models\orders;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\order;
use App\Http\Controllers\users;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/products',function(){
    $res=  products::all();
    if ($res->count()>0) {
        return response()->json($res,200);
    }else{
        return response()->json("we have a problem  ",404);
}});
Route::get('/products/images/{id}',function($id){
    $res=products::where('id','=',$id)->get();
    $res=$res[0]->img;
    $res=json_decode($res,true);
    return response()->json($res,200);
      
    if ($res->count()>0) {
        return response()->json($res,200);
    }else{
        return response()->json("we have a problem  ",404);
}});

Route::get("/products/category/{cat}",function($cat){
 $res= products::where('category','=',$cat)->Paginate(9);
 if ($res->count()>0) {
    return response()->json($res,200);
}else{
    return response()->json($cat,404);
}
}); 
Route::get("/products/item/{id}",function($id){
    $res= products::where('id','=',$id)->get();
    if ($res->count()==1) {
       return response()->json($res,200);
   }else{
       return response()->json($id,404);
   }
   });
   Route::get("/products/deal",function(){
    $max=request('dealmax');
    $min=request('dealmin');
$res= products::whereRaw('price BETWEEN ' . $min . ' AND ' . $max )->Paginate(9);
    if ($res->count()==0) {
        return response()->json("false   ",404);    
   }else{
       
       return response()->json($res,200);
   }

       
   
   });
 

   Route::get("category/count",function(){
    $res= products::select(DB::raw('category,count(*) as count'))
    ->groupBy('category')->get();
    
       return response()->json($res,200);
   
   });

   Route::get("products/count",function(){
    $res= products::select(DB::raw('count(*) as count'))
    ->get();
    
       return response()->json($res,200);
   
   });
   Route::get("products/page",function(){
    $req=request('$page');
    $res= products::Paginate(9);
    
       return response()->json($res,200);
   
   });

   Route::get("/products/pro/{id}",function($id){
    $res= products::where('deal','>=',$id)->Paginate(9);
    if ($res->count()>0) {
       return response()->json($res,200);
   }else{
       return response()->json($id,404);
   }
   });
   Route::get("/products/rate/{id}",function($id){
    $res= products::where('rate','>=',$id)->Paginate(9);
    if ($res->count()>0) {
       return response()->json($res,200);
   }else{
       return response()->json($id,404);
   }
   });
   Route::get("/auth/login",function(){
    $username=request('username');
    $password=request('password');
    $res= user::where('mail','=',$username)
    ->where('password','=',$password)->get();
    if ($res->count()>0) {
       return response()->json($res,200);
   }else{
       return response()->json(false,404);
   }
   });
   Route::post("/products/order",[order::class,'order']);
   Route::post("/addUser",[users::class,'add']);
   
   Route::post("/add/product",function(Request $request){
    
    $prod= new products;
    
    $prod->title=$request->title;
    $prod->price=$request->price;
    $prod->description=$request->description;
    $prod->category=$request->category;
    $prod->image=$request->image;
    $prod->deal=$request->deal;
    $prod->rate=$request->rate;
    $prod->img=$request->img;
    $prod->qt=$request->qt;
    
    $$prod->save();



   });


   Route::get("/topuser",function(){
    $res= orders::join('users', 'orders.user_id', '=', 'users.id')->take(7)->select("name","last_name","mail","avatar","cost")->orderByRaw('cost desc')->get();
    if ($res->count()>0) {
       return response()->json($res,200);
   }else{
       return response()->json(false,404);
   }
   });  
   Route::get("/totaluser",function(){
    $res= User::select(DB::raw('count(*) as QT,MONTHNAME(created_at) AS month ')) ->groupBy('month')->get();
    $count= User::select(DB::raw('count(*) as count'))->get();
    
 

    
    if ($res->count()>0) {
       return response()->json([
    'all' => $count,
    'data'=> $res ,
],200);
   }else{
       return response()->json(false,200);
   }
   });  
   Route::get("/device",function(){
    $device= User::select(DB::raw('count(*) as qt,device as name')) ->groupBy('device')->get();
    

    
    if ($device->count()>0) {
       return response()->json($device,200);
   }else{
       return response()->json(false,200);
   }
   });  

   Route::get("/stock",function(){
   
$res= products::select(DB::raw('sum(qt) as qt'))->get();;
    if ($res->count()==0) {
        return response()->json("false",404);    
   }else{
       
       return response()->json($res,200);
   }

       
   
   });
   Route::get("/order",function(){
   
    $res= orders::select(DB::raw('count(*) as qt'))->get();;
        if ($res->count()==0) {
            return response()->json("false",404);    
       }else{
           
           return response()->json($res,200);
       }
    
           
       
       });
       
 
       Route::get("/product",function(){
   
        $res= products::select(DB::raw('count(*) as qt'))->get();;
            if ($res->count()==0) {
                return response()->json("false",404);    
           }else{
               
               return response()->json($res,200);
           }
        
               
           
           });
           
           Route::get("/alluser",function(){
   
            $res= User::all();
                if ($res->count()==0) {
                    return response()->json("false",404);    
               }else{
                   
                   return response()->json($res,200);
               }
            
                   
               
               });
   
  Route::delete('users/{user}', function($user){
   
    $res = User::find($user);
$res->delete();
        if ($res->count()==0) {
            return response()->json("false",404);    
       }else{
           
           return response()->json($res,200);
       }
    
           
       
       });
       Route::get("/orders",function(){
   
        $res= orders::Join('users', 'users.id', '=', 'orders.user_id') ->select('orders.id', 'date', 'status', 'cost', 'avatar', 'name', 'last_name')->get();
            if ($res->count()==0) {
                return response()->json("false",404);    
           }else{
               
               return response()->json($res,200);
           }
        
               
           
           });


           Route::patch('orders/update',function(Request $request){
            $res = orders::find($request->id);
           
            $res->status = $request->status;
            $res->save();
            




           });
           Route::delete('orders/delet/{user}', function($user){
   
            $res = orders::find($user);
        $res->delete();
                if ($res->count()==0) {
                    return response()->json("false",404);    
               }else{
                   
                   return response()->json($res,200);
               }
            
                   
               
               });
               Route::delete('product/delet/{user}', function($user){
   
                $res = products::find($user);
            $res->delete();
                    if ($res->count()==0) {
                        return response()->json("false",404);    
                   }else{
                       
                       return response()->json($res,200);
                   }
                
                       
                   
                   });
 Route::patch('products/update',function(Request $request){
$res = products::find($request->id);
   $res->title = $request->title;
   $res->category = $request->category;
   $res->deal = $request->deal;
   $res->qt = $request->qt;
  $res->save();
                    
        
        
        
        
                   });