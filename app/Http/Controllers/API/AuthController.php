<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $user = User::where('email', '=', $request['email'])->first();
        if($user){
            if (Hash::check($request['password'], $user->password)) {
                return ['message' => $user];
            }
            else{
                return ['message' => 'E'];
            }
        }
        else{
            return ['message' => 'E'];
        }
    }

    public function register(Request $request){

        $valid = $this->validate($request,[
            'email' => 'required|string|max:191|unique:users',
            'password' => 'required|min:6',
            'name' => 'required|string|min:6'
        ]);

        $pass = Hash::make($request['password']);
        return User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => $pass
        ]);
    }
}
